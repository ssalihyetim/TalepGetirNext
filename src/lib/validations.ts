import { z } from "zod"

export const strategyFormSchema = z.object({
  name: z.string().min(2, "İsim en az 2 karakter olmalı"),
  company: z.string().min(2, "Şirket adı gerekli"),
  phone: z.string().min(10, "Geçerli telefon numarası girin"),
  email: z.string().email("Geçerli email adresi girin"),
  products: z.string().min(5, "Ürün açıklaması gerekli"),
  targetCountries: z.string().min(2, "Hedef ülkeler gerekli"),
  monthlySalesTarget: z.string().min(1, "Satış hedefi seçin"),
})

export type StrategyFormData = z.infer<typeof strategyFormSchema>

export const salesTargetOptions = [
  { value: "10k-50k", label: "$10,000 - $50,000" },
  { value: "50k-100k", label: "$50,000 - $100,000" },
  { value: "100k-500k", label: "$100,000 - $500,000" },
  { value: "500k-1m", label: "$500,000 - $1,000,000" },
  { value: "1m+", label: "$1,000,000+" },
]