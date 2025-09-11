import { generateAdminNotificationEmail, generateUserConfirmationEmail } from './email-templates'
import { StrategyFormData } from './validations'

// Email service configuration
interface EmailConfig {
  apiKey?: string
  endpoint?: string
  fromEmail: string
  adminEmail: string
}

// Get email configuration from environment variables
function getEmailConfig(): EmailConfig {
  return {
    apiKey: process.env.RESEND_API_KEY,
    endpoint: process.env.FORMSPREE_ENDPOINT,
    fromEmail: process.env.FROM_EMAIL || 'noreply@talepgetir.com',
    adminEmail: process.env.ADMIN_EMAIL || 'info@talepgetir.com',
  }
}

// Resend email service (preferred)
export async function sendEmailWithResend(
  to: string,
  subject: string,
  html: string,
  text: string
): Promise<boolean> {
  const config = getEmailConfig()
  
  if (!config.apiKey) {
    throw new Error('Resend API key not configured')
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${config.apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: config.fromEmail,
        to: [to],
        subject,
        html,
        text,
      }),
    })

    if (!response.ok) {
      const error = await response.text()
      console.error('Resend API error:', error)
      return false
    }

    const result = await response.json()
    console.log('Email sent successfully via Resend:', result.id)
    return true
  } catch (error) {
    console.error('Error sending email via Resend:', error)
    return false
  }
}

// Formspree email service (fallback)
export async function sendEmailWithFormspree(
  formData: StrategyFormData,
  emailType: 'admin' | 'user'
): Promise<boolean> {
  const config = getEmailConfig()
  
  if (!config.endpoint) {
    throw new Error('Formspree endpoint not configured')
  }

  try {
    const emailData = emailType === 'admin' 
      ? generateAdminNotificationEmail(formData)
      : generateUserConfirmationEmail(formData)

    const response = await fetch(config.endpoint, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        _subject: emailData.subject,
        _email: {
          from: config.fromEmail,
          to: emailType === 'admin' ? config.adminEmail : formData.email,
        },
        message: emailData.text,
        html: emailData.html,
        ...formData, // Include form data for reference
      }),
    })

    if (!response.ok) {
      const error = await response.text()
      console.error('Formspree API error:', error)
      return false
    }

    const result = await response.json()
    console.log('Email sent successfully via Formspree:', result)
    return true
  } catch (error) {
    console.error('Error sending email via Formspree:', error)
    return false
  }
}

// Main function to send both admin and user emails
export async function sendStrategyFormEmails(formData: StrategyFormData): Promise<{
  adminEmailSent: boolean
  userEmailSent: boolean
  errors: string[]
}> {
  const config = getEmailConfig()
  const errors: string[] = []
  let adminEmailSent = false
  let userEmailSent = false

  // Generate email templates
  const adminEmail = generateAdminNotificationEmail(formData)
  const userEmail = generateUserConfirmationEmail(formData)

  // Try sending with Resend first (if configured)
  if (config.apiKey) {
    try {
      // Send admin notification
      adminEmailSent = await sendEmailWithResend(
        config.adminEmail,
        adminEmail.subject,
        adminEmail.html,
        adminEmail.text
      )

      if (!adminEmailSent) {
        errors.push('Failed to send admin notification via Resend')
      }

      // Send user confirmation
      userEmailSent = await sendEmailWithResend(
        formData.email,
        userEmail.subject,
        userEmail.html,
        userEmail.text
      )

      if (!userEmailSent) {
        errors.push('Failed to send user confirmation via Resend')
      }
    } catch (error) {
      errors.push(`Resend service error: ${error}`)
      console.error('Resend service failed, trying Formspree fallback')
    }
  }

  // Fallback to Formspree if Resend failed or not configured
  if ((!adminEmailSent || !userEmailSent) && config.endpoint) {
    try {
      if (!adminEmailSent) {
        adminEmailSent = await sendEmailWithFormspree(formData, 'admin')
        if (!adminEmailSent) {
          errors.push('Failed to send admin notification via Formspree')
        }
      }

      if (!userEmailSent) {
        userEmailSent = await sendEmailWithFormspree(formData, 'user')
        if (!userEmailSent) {
          errors.push('Failed to send user confirmation via Formspree')
        }
      }
    } catch (error) {
      errors.push(`Formspree service error: ${error}`)
    }
  }

  // Log results
  console.log('Email sending results:', {
    adminEmailSent,
    userEmailSent,
    errors,
    timestamp: new Date().toISOString(),
    formData: {
      name: formData.name,
      company: formData.company,
      email: formData.email,
    },
  })

  return {
    adminEmailSent,
    userEmailSent,
    errors,
  }
}

// Utility function to validate email configuration
export function validateEmailConfig(): {
  isValid: boolean
  missingConfig: string[]
  recommendations: string[]
} {
  const config = getEmailConfig()
  const missingConfig: string[] = []
  const recommendations: string[] = []

  if (!config.apiKey && !config.endpoint) {
    missingConfig.push('RESEND_API_KEY or FORMSPREE_ENDPOINT')
    recommendations.push('Configure at least one email service (Resend recommended)')
  }

  if (!config.adminEmail) {
    missingConfig.push('ADMIN_EMAIL')
    recommendations.push('Set admin email address to receive form submissions')
  }

  if (!config.apiKey) {
    recommendations.push('Configure RESEND_API_KEY for better email delivery')
  }

  return {
    isValid: missingConfig.length === 0,
    missingConfig,
    recommendations,
  }
}