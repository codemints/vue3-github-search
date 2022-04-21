import axios from "axios"

export const getData = (userName) => {
  const request = `https://api.github.com/user/${userName}`
  axios.get(request)
}