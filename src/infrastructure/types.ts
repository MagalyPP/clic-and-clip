export type AppLanguages = 'es' | 'en'

export type ApiResponse<T> = {
  data: T
  status: number
  statusText: string
  isOk: boolean
}

export type ServiceKey =
  | 'webDevelopment'
  | 'systemsIntegration'
  | 'processAutomation'
  | 'techConsulting'
  | 'agileEmpowerment'
  | 'trainingPrograms'

export type Category = 'utiles' | 'navidad' | 'mouses-teclados' | 'audio' | 'cables' | 'almacenamiento' | 'otros'

export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  category: Category;
  images: string[];
  inBanner?: boolean;
  inStock?: boolean;
}
