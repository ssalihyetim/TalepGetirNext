import { NextRequest, NextResponse } from 'next/server'
import { strategyFormSchema } from '@/lib/validations'
import { sendStrategyFormEmails, validateEmailConfig } from '@/lib/email-service'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate form data
    const validatedData = strategyFormSchema.parse(body)
    
    // Log form submission
    console.log('Strategy form submission received:', {
      name: validatedData.name,
      company: validatedData.company,
      email: validatedData.email,
      timestamp: new Date().toISOString(),
    })
    
    // Send emails (admin notification + user confirmation)
    const emailResults = await sendStrategyFormEmails(validatedData)
    
    // Log email results
    console.log('Email sending completed:', emailResults)
    
    // Prepare response data
    const responseData: {
      success: boolean
      message: string
      emailResults: {
        adminNotified: boolean
        userConfirmed: boolean
      }
      warning?: string
      emailErrors?: string[]
    } = {
      success: true,
      message: 'Strateji dosyası talebiniz alındı!',
      emailResults: {
        adminNotified: emailResults.adminEmailSent,
        userConfirmed: emailResults.userEmailSent,
      }
    }
    
    // Add warnings if some emails failed
    if (!emailResults.adminEmailSent && !emailResults.userEmailSent) {
      responseData.warning = 'E-posta gönderimi başarısız oldu, ancak talebiniz alındı. Kısa sürede size ulaşacağız.'
    } else if (!emailResults.adminEmailSent) {
      responseData.warning = 'Admin bildirim e-postası gönderilemedi.'
    } else if (!emailResults.userEmailSent) {
      responseData.warning = 'Onay e-postanız gönderilemedi, ancak talebiniz alındı.'
    }
    
    // Include error details if any (for debugging)
    if (emailResults.errors.length > 0) {
      console.error('Email sending errors:', emailResults.errors)
      responseData.emailErrors = emailResults.errors
    }
    
    return NextResponse.json(responseData, { status: 200 })
    
  } catch (error) {
    console.error('Form submission error:', error)
    
    // Determine error type and provide appropriate response
    if (error instanceof Error && error.name === 'ZodError') {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Form verilerinde hata var. Lütfen tüm alanları doğru doldurun.',
          error: 'validation_error'
        },
        { status: 400 }
      )
    }
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Bir hata oluştu. Lütfen tekrar deneyin veya bizimle iletişime geçin.',
        error: 'server_error'
      },
      { status: 500 }
    )
  }
}

// Health check endpoint to validate email configuration
export async function GET() {
  try {
    const configValidation = validateEmailConfig()
    
    return NextResponse.json({
      status: 'ok',
      emailConfig: configValidation,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    return NextResponse.json({
      status: 'error',
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString(),
    }, { status: 500 })
  }
}