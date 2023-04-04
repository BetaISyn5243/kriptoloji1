export function yerDegistirmeCreateAlphabet() {
    // kodlama için alfabe tanımlıyoruz
    const lowerA = "abcçdefgğhiıjklmnoöprsştuüvyz".split( "" )
    return lowerA.sort( (a, b) => 0.5 - Math.random() ).join( "" );
}
export function yerDegistirmeEncrypt(sentence, key) {
    // kodlama için alfabe tanımlıyoruz
    const lowerA = "abcçdefgğhiıjklmnoöprsştuüvyz"

    // Verilern cümleyi charlara(harflere) bölüyoruz ve herharfi tekrar map(atama)liyoruz
    const res = sentence.split( "" ).map( c => {
        // Eğer küçük karakterse burda
        if ( lowerA.includes( c ) ) {
            return key.at( (lowerA.indexOf( c )) )
        }
        // muhtemel sayı girdisi yada ekstra alfabe dışı girdiler için bırakıldı (Ayrıca boşluk karakteride buraya girmiş oluyor)
        else {
            return c
        }
    } )
    // Charlara böldüğümüz ve liste haline gelen değişkeni arada boşluk olmadan tekrar birleştirme işlemi yapıyoruz
    return res.join( "" )
}

export function yerDegistirmeDecrypt(sentence, key) {
    // kodlama için alfabe tanımlıyoruz
    const lowerA = "abcçdefgğhiıjklmnoöprsştuüvyz"

    // Verilern cümleyi charlara(harflere) bölüyoruz ve herharfi tekrar map(atama)liyoruz
    const res = sentence.split( "" ).map( c => {
        // Eğer küçük karakterse burda
        if ( lowerA.includes( c ) ) {
            return lowerA.at( (key.indexOf( c )) )
        }
        // muhtemel sayı girdisi yada ekstra alfabe dışı girdiler için bırakıldı (Ayrıca boşluk karakteride buraya girmiş oluyor)
        else {
            return c
        }
    } )
    // Charlara böldüğümüz ve liste haline gelen değişkeni arada boşluk olmadan tekrar birleştirme işlemi yapıyoruz
    return res.join( "" )
}