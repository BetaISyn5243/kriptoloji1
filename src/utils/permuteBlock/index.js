
export function permuteBlockEncrypt(sentence,key){
    let finalSentence = ""
    let temp = sentence.split("")

    let originalKey = Array.from({ length: key }, (value, index) => index);
    console.log("Orginal Key: ",originalKey)
    let shuffleKey = Array.from({ length: key }, (value, index) => index).sort(() => Math.random() - 0.5);
    console.log("Shuffled Key: ",shuffleKey)
    alert(shuffleKey)
    while ( temp.length % key !== 0 ) temp.push("a")

    for ( let i = 0; i < (sentence.length/key); i++ ) {
        for ( let j = 0; j < key; j++ ) {
            finalSentence += temp.slice(i*key)[shuffleKey[j]]
        }
    }
    return finalSentence
}
export function permuteBlockDecrypt(sentence,originalKeyList,shuffleKeyList){
    let finalSentence = ""
    let temp = sentence.split("")
    originalKeyList = originalKeyList.split("").map(x=>parseInt(x))
    shuffleKeyList = shuffleKeyList.split("").map(x=>parseInt(x))
    if ( originalKeyList.length !== shuffleKeyList.length ) return "Error"
    for ( let i = 0; i < (sentence.length/originalKeyList.length); i++ ) {
        for ( let j = 0; j < originalKeyList.length; j++ ) {
            finalSentence += temp.slice(i*originalKeyList.length)[shuffleKeyList.indexOf(j)]
        }
    }
    return finalSentence
}