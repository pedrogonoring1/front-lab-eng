import { api } from './api'

export const userCreate = async (params: any) => {
  console.log(params)

  try {
    await api.post('/user/create', { ...params })
  } catch (e) {
    console.log('error', e)
  }
}
