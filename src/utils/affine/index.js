/*
export function encryptAffine(plaintext, a, b) {
  // Javascript mod alırken -li aldığı için kendi mod fonksiyonumuzu yazıyoruz
  function mod(n, m) {
    return ((n % m) + m) % m;
  }

  // Alfabeyi tanımlıyoruz
  const lowerAlphabet = "abcçdefgğhıijklmnoöprsştuüvyz"
  const upperAlphabet = lowerAlphabet.toUpperCase()
  // Verilern cümleyi charlara(harflere) bölüyoruz ve herharfi tekrar map(atama)liyoruz
  const res = plaintext.split( "" ).map( elem => {
    // Eğer küçük karakterse burda
    if ( lowerAlphabet.includes( elem ) ) {
      return lowerAlphabet.at( mod( ((a * lowerAlphabet.indexOf( elem )) + b), 29 ) )
    }
    // Eğer büyük karakterse burda
    else if ( upperAlphabet.includes( elem ) ) {
      return upperAlphabet.at( mod( ((a * upperAlphabet.indexOf( elem )) + b), 29 ) )
    }
    // muhtemel sayı girdisi yada ekstra alfabe dışı girdiler için bırakıldı (Ayrıca boşluk karakteride buraya girmiş oluyor)
    else {
      return elem
    }
  } )
  // Charlara böldüğümüz ve liste haline gelen değişkeni arada boşluk olmadan tekrar birleştirme işlemi yapıyoruz

  return res.join( "" );
}

export function decryptAffine(plaintext, a, b) {
  // Javascript mod alırken -li aldığı için kendi mod fonksiyonumuzu yazıyoruz
  function mod(n, m) {
    return ((n % m) + m) % m;
  }

  // Alfabeyi tanımlıyoruz
  const lowerAlphabet = "abcçdefgğhıijklmnoöprsştuüvyz"
  const upperAlphabet = lowerAlphabet.toUpperCase()
  // Verilern cümleyi charlara(harflere) bölüyoruz ve herharfi tekrar map(atama)liyoruz
  const res = plaintext.split( "" ).map( elem => {
    // Eğer küçük karakterse burda
    if ( lowerAlphabet.includes( elem ) ) {
      return lowerAlphabet.at( mod( Math.floor( ((lowerAlphabet.indexOf( elem ) - b) * (29 - a)) ), 29 ) )
    }
    // Eğer büyük karakterse burda
    else if ( upperAlphabet.includes( elem ) ) {
      return upperAlphabet.at( mod( Math.floor( ((upperAlphabet.indexOf( elem ) - b) * (29 - a)) ), 29 ) )
    }
    // muhtemel sayı girdisi yada ekstra alfabe dışı girdiler için bırakıldı (Ayrıca boşluk karakteride buraya girmiş oluyor)
    else {
      return elem
    }
  } )
  // Charlara böldüğümüz ve liste haline gelen değişkeni arada boşluk olmadan tekrar birleştirme işlemi yapıyoruz

  return res.join( "" );
}

*/
//Javascript program to illustrate Affine Cipher


//Key values of a and b

export function encryptAffine(msg,a,b)
{
  const lowerAlphabet = "abcçdefgğhıijklmnoöprsştuüvyz"

  ///Cipher Text initially empty
  let cipher = "";
  for (let i = 0; i < msg.length; i++)
  {
    // Avoid space to be encrypted
    if(msg[i] !==' ')
      /* applying encryption formula ( a x + b ) mod m
      {here x is msg[i] and m is 26} and added 'A' to
      bring it in range of ascii alphabet[ 65-90 | A-Z ] */
      cipher = cipher + lowerAlphabet.at((((a * lowerAlphabet.indexOf(msg[i]) ) + b) % 29));
    else
      //else simply append space character
      cipher += msg[i];
  }
  return cipher;
}

export function decryptAffine(cipher,a,b)
{
  const lowerAlphabet = "abcçdefgğhıijklmnoöprsştuüvyz"

  let msg = "";
  let a_inv = 0;
  let flag = 0;

  //Find a^-1 (the multiplicative inverse of a
  //in the group of integers modulo m.)
  for (let i = 0; i < 29; i++)
  {
    flag = (a * i) % 29;

    //Check if (a*i)%26 == 1,
    //then i will be the multiplicative inverse of a
    if (flag == 1)
    {
      a_inv = i;
    }
  }
  for (let i = 0; i < cipher.length; i++)
  {
    if(cipher[i]!=' ')
      /*Applying decryption formula a^-1 ( x - b ) mod m
      {here x is cipher[i] and m is 26} and added 'A'
      to bring it in range of ASCII alphabet[ 65-90 | A-Z ] */
      msg = msg + lowerAlphabet.at(((a_inv * ((lowerAlphabet.indexOf(cipher[i])  - b)) % 29)) );
    else
      //else simply append space character
      msg += cipher[i];
  }

  return msg;
}
