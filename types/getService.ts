export interface ServiceResponse {
  success: boolean
  message: string
  data: Service[]
  count: number
}

export interface Service {
  id: number
  name: string
  min_usage: number
  max_usage: number
  price: number
  owner_token: string
  createdAt: string
  updatedAt: string
}