export function caesarCipher(sentence, key) {
    // Javascript mod alırken -li aldığı için kendi mod fonksiyonumuzu yazıyoruz
    function mod(n, m) {
        return ((n % m) + m) % m;
    }

    // kodlama için alfabe tanımlıyoruz
    const lowerA = "abcçdefgğhiıjklmnoöprsştuüvyz"
    // alfabenin büyük harflerini tanımlıyoruz
    const upperA = lowerA.toUpperCase()
    // Verilern cümleyi charlara(harflere) bölüyoruz ve her harfi tekrar map(atama)liyoruz
    const res = sentence.split( "" ).map( c => {
        // Eğer küçük karakterse burda
        if ( lowerA.includes( c ) ) {
            // harfi anahtarla toplayıp alfabemizin uzunluğuna modunu alıyoruz
            return lowerA.at( mod( (lowerA.indexOf( c ) + key), 29 ) )
        }
        // Eğer büyük karakterse burda
        else if ( upperA.includes( c ) ) {
            // harfi anahtarla toplayıp alfabemizin uzunluğuna modunu alıyoruz
            return upperA.at( mod( (upperA.indexOf( c ) + key), 29 ) )
        }
        // muhtemel sayı girdisi yada ekstra alfabe dışı girdiler için bırakıldı (Ayrıca boşluk karakteride buraya girmiş oluyor)
        else {
            return c
        }
    } )
    // Charlara böldüğümüz ve liste haline gelen değişkeni arada boşluk olmadan tekrar birleştirme işlemi yapıyoruz
    return res.join( "" )
}

export function caesarDecrypt(sentence, key) {
    // Javascript mod alırken -li aldığı için kendi mod fonksiyonumuzu yazıyoruz
    function mod(n, m) {
        return ((n % m) + m) % m;
    }

    // kodlama için alfabe tanımlıyoruz
    const lowerA = "abcçdefgğhiıjklmnoöprsştuüvyz"
    // alfabenin büyük harflerini tanımlıyoruz
    const upperA = lowerA.toUpperCase()
    // Verilern cümleyi charlara(harflere) bölüyoruz ve herharfi tekrar map(atama)liyoruz
    const res = sentence.split( "" ).map( c => {
        // Eğer küçük karakterse burda
        if ( lowerA.includes( c ) ) {
            return lowerA.at( mod( (lowerA.indexOf( c ) - key), 29 ) )
        }
        // Eğer büyük karakterse burda
        else if ( upperA.includes( c ) ) {
            return upperA.at( mod( (upperA.indexOf( c ) - key) , 29 ) )
        }
        // muhtemel sayı girdisi yada ekstra alfabe dışı girdiler için bırakıldı (Ayrıca boşluk karakteride buraya girmiş oluyor)
        else {
            return c
        }
    } )
    // Charlara böldüğümüz ve liste haline gelen değişkeni arada boşluk olmadan tekrar birleştirme işlemi yapıyoruz
    return res.join( "" )
}
