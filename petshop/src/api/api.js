import axios from 'axios'


export const api = axios.create({
})

export const busca = async(url, setDado) => { 
  const resposta = await api.get(url)
  setDado(resposta.data)
} 