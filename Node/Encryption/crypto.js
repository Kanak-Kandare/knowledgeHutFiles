import crypto from "crypto"

const algo = "aes-256-cbc"
const key = crypto.randomBytes(32)
const iv = crypto.randomBytes(16)

function encrypt(text) {
    const cipher = crypto.createCipheriv(algo, key, iv)
    const encrypted = Buffer.concat([cipher.update(text), cipher.final()])
    return {encryptedData:encrypted.toString("hex"),iv: iv.toString("hex")}
}

function decrypt (text){
    const iv = Buffer.from(text.iv, "hex")
    const encryptedData = Buffer.from(text.encryptedData, "hex")
    const decipher = crypto.createDecipheriv(algo, key, iv)
    const decrypted = Buffer.concat([decipher.update(encryptedData), decipher.final()])
    return decrypted.toString()
}

const encryptText = encrypt("kanak")
console.log(encryptText)
console.log(decrypt(encryptText))