export function generateKey(str, key) {
  key = key.split("");
  if (str.length == key.length) return key.join(""); else {
    let temp = key.length;
    for (let i = 0; i < (str.length - temp); i++) {
      key.push(key[i % key.length])
    }
  }
  return key.join("");
}

export function encryptVigenere(str, key) {
  let cipher_text = "";
  const lowerA = "abcçdefgğhiıjklmnoöprsştuüvyz"

  for (let i = 0; i < str.length; i++) {
    let x = ((lowerA.indexOf(str[i]) + lowerA.indexOf(key[i])) % 29 + 29) % 29;
    cipher_text += lowerA[x];
  }
  return cipher_text;
}

export function decryptVigenere(cipher_text, key) {
  let orig_text = "";
  const lowerA = "abcçdefgğhiıjklmnoöprsştuüvyz"

  for (let i = 0; i < cipher_text.length; i++) {
    let x = ((lowerA.indexOf(cipher_text[i]) - lowerA.indexOf(key[i])) % 29 + 29) % 29;
    orig_text += lowerA[x];
  }
  return orig_text;
}
