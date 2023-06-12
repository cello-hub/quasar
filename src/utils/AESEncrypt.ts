import * as CryptoJS from 'crypto-js'

export const encrypt = (text: string) => {
  const mode = CryptoJS.mode.CBC
  const padding = CryptoJS.pad.Pkcs7
  const key = process.env.AES_KEY

  const encrypted = CryptoJS.AES.encrypt(text, key, {
    mode,
    padding
  })

  return encrypted.toString()
}

export const decrypt = (text: string) => {
  const mode = CryptoJS.mode.CBC
  const padding = CryptoJS.pad.Pkcs7

  const key = process.env.AES_KEY
  const decrypted = CryptoJS.AES.decrypt(text, key, {
    mode,
    padding
  })
  return decrypted.toString(CryptoJS.enc.Utf8)
}
