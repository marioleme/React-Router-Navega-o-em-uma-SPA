import axios from 'axios'


export const api = axios.create({
  baseURL: 'http://localhost:3000'
})

export const busca = async(url, setDado) => { 
  const reposta = await api.get(url)
  setDado(reposta.data)
}