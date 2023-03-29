import './App.css';
import {useState} from "react";

function App() {
  const [CaesarEncryptText, setCaesarEncryptText] = useState( '' ); // Declare a state variable...
  const [CaesarEncryptKey, setCaesarEncryptKey] = useState( 0 ); // Declare a state variable...
  const [CaesarDecryptText, setCaesarDecryptText] = useState( '' ); // Declare a state variable...
  const [CaesarDecryptKey, setCaesarDecryptKey] = useState( 0 ); // Declare a state variable...


  const [RouteEncryptText, setRouteEncryptText] = useState( '' ); // Declare a state variable...
  const [RouteEncryptKeyX, setRouteEncryptKeyX] = useState( 0 ); // Declare a state variable...
  const [RouteEncryptKeyY, setRouteEncryptKeyY] = useState( 0 ); // Declare a state variable...

  const [RouteDecryptText, setRouteDecryptText] = useState( '' ); // Declare a state variable...
  const [RouteDecryptKeyX, setRouteDecryptKeyX] = useState( 0 ); // Declare a state variable...
  const [RouteDecryptKeyY, setRouteDecryptKeyY] = useState( 0 ); // Declare a state variable...

  const [yerDegistirmeText, setYerDegistirmeText] = useState( '' ); // Declare a state variable...
  const [yerDegistirmeKey, setYerDegistirmeKey] = useState( '' ); // Declare a state variable...

  const [yerDegistirmeReverseText, setYerDegistirmeReverseText] = useState( '' ); // Declare a state variable...
  const [yerDegistirmeReverseKey, setYerDegistirmeReverseKey] = useState( '' ); // Declare a state variable...


  const [encryptAffineText, setEncryptAffineText] = useState( '' ); // Declare a state variable...
  const [encryptAffineKeyA, setEncryptAffineKeyA] = useState( 0 ); // Declare a state variable...
  const [encryptAffineKeyB, setEncryptAffineKeyB] = useState( 0 ); // Declare a state variable...

  const [decryptAffineText, setDecryptAffineText] = useState( '' ); // Declare a state variable...
  const [decryptAffineKeyA, setDecryptAffineKeyA] = useState( 0 ); // Declare a state variable...
  const [decryptAffineKeyB, setDecryptAffineKeyB] = useState( 0 ); // Declare a state variable...

  const [permuteBlockEncryptText, setPermuteBlockEncryptText] = useState( '' ); // Declare a state variable...
  const [permuteBlockEncryptKey, setPermuteBlockEncryptKey] = useState( 0 ); // Declare a state variable...

  const [permuteBlockDecryptText, setPermuteBlockDecryptText] = useState( '' ); // Declare a state variable...
  const [permuteBlockDecryptKeyAList, setPermuteBlockDecryptKeyAList] = useState( '' ); // Declare a state variable...
  const [permuteBlockDecryptKeyBList, setPermuteBlockDecryptKeyBList] = useState( '' ); // Declare a state variable...

  return (
    <div className="App" style={{ display: "flex", flexDirection: "row", width: "100%", height: "100%" }}>
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <h1>Ceaser</h1>
        <hr width={"80%"}/>
        <label>
          Cümle: <input
          value={CaesarEncryptText} // ...force the input's value to match the state variable...
          onChange={e => setCaesarEncryptText( e.target.value )} // ... and update the state variable on any edits!
        /></label>
        <hr width={"30%"}/>
        <label>
          Key: <input
          key={0}
          type={"number"}
          value={CaesarEncryptKey} // ...force the input's value to match the state variable...
          onChange={e => setCaesarEncryptKey( parseInt( e.target.value ) )} // ... and update the state variable on any edits!
        /></label>
        {(CaesarEncryptKey !== 0) && (CaesarEncryptText !== '') &&
          <p>çıktı: {caesarCipher( CaesarEncryptText, CaesarEncryptKey )}</p>}

        <h1>Decode</h1>
        <hr width={"60%"}/>
        <label>
          Cümle: <input
          value={CaesarDecryptText} // ...force the input's value to match the state variable...
          onChange={e => setCaesarDecryptText( e.target.value )} // ... and update the state variable on any edits!
        /></label>
        <hr width={"30%"}/>
        <label>
          Key: <input
          key={1}
          type={"number"}
          value={CaesarDecryptKey} // ...force the input's value to match the state variable...
          onChange={e => setCaesarDecryptKey( parseInt( e.target.value ) )} // ... and update the state variable on any edits!
        /></label>
        {(CaesarDecryptKey !== 0) && (CaesarDecryptText !== '') &&
          <p>çıktı: {caesarDecrypt( CaesarDecryptText, CaesarDecryptKey )}</p>}
      </div>
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>

        <h1>Rota</h1>
        <hr width={"80%"}/>
        <label>
          Cümle: <input
          value={RouteEncryptText} // ...force the input's value to match the state variable...
          onChange={e => setRouteEncryptText( e.target.value )} // ... and update the state variable on any edits!
        /></label>
        <hr width={"30%"}/>
        <label>
          Key: <input
          key={0}
          type={"number"}
          value={RouteEncryptKeyX} // ...force the input's value to match the state variable...
          onChange={e => setRouteEncryptKeyX( parseInt( e.target.value ) )} // ... and update the state variable on any edits!
        /></label>
        <hr width={"30%"}/>
        <label>
          Key: <input
          key={0}
          type={"number"}
          value={RouteEncryptKeyY} // ...force the input's value to match the state variable...
          onChange={e => setRouteEncryptKeyY( parseInt( e.target.value ) )} // ... and update the state variable on any edits!
        /></label>
        {(RouteEncryptKeyY !== 0) && (RouteEncryptKeyX !== 0) && (RouteEncryptText !== '') &&
          <p>çıktı: {rotaEncrypt( RouteEncryptText, RouteEncryptKeyX, RouteEncryptKeyY, 0 )}</p>}
        <h1>Decode</h1>
        <hr width={"60%"}/>
        <label>
          Cümle: <input
          value={RouteDecryptText} // ...force the input's value to match the state variable...
          onChange={e => setRouteDecryptText( e.target.value )} // ... and update the state variable on any edits!
        /></label>
        <hr width={"30%"}/>
        <label>
          Key: <input
          key={0}
          type={"number"}
          value={RouteDecryptKeyX} // ...force the input's value to match the state variable...
          onChange={e => setRouteDecryptKeyX( parseInt( e.target.value ) )} // ... and update the state variable on any edits!
        /></label>
        <hr width={"30%"}/>
        <label>
          Key: <input
          key={0}
          type={"number"}
          value={RouteDecryptKeyY} // ...force the input's value to match the state variable...
          onChange={e => setRouteDecryptKeyY( parseInt( e.target.value ) )} // ... and update the state variable on any edits!
        /></label>
        {(RouteDecryptKeyY !== 0) && (RouteDecryptKeyX !== 0) && (RouteDecryptText !== '') &&
          <p>çıktı: {rotaDecrypt( RouteDecryptText, RouteDecryptKeyX, RouteDecryptKeyY, 0 )}</p>}


      </div>
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>

        <h1>Yerdeğiştirme</h1>
        <hr width={"80%"}/>
        <strong>{yerDegistirmeCreateAlphabet()}</strong>
        <hr width={"70%"}/>
        <label>
          Cümle: <input
          value={yerDegistirmeText} // ...force the input's value to match the state variable...
          onChange={e => setYerDegistirmeText( e.target.value )} // ... and update the state variable on any edits!
        /></label>
        <hr width={"30%"}/>
        <label>
          Key: <input
          key={0}
          type={"text"}
          value={yerDegistirmeKey} // ...force the input's value to match the state variable...
          onChange={e => setYerDegistirmeKey( e.target.value )} // ... and update the state variable on any edits!
        /></label>
        {(yerDegistirmeKey !== 0) && (yerDegistirmeText !== '') &&
          <p>çıktı: {yerDegistirmeEncrypt( yerDegistirmeText, yerDegistirmeKey )}</p>}
        <h1>Decode</h1>
        <hr width={"60%"}/>
        <label>
          Cümle: <input
          value={yerDegistirmeReverseText} // ...force the input's value to match the state variable...
          onChange={e => setYerDegistirmeReverseText( e.target.value )} // ... and update the state variable on any edits!
        /></label>
        <hr width={"30%"}/>
        <label>
          Key: <input
          key={0}
          type={"text"}
          value={yerDegistirmeReverseKey} // ...force the input's value to match the state variable...
          onChange={e => setYerDegistirmeReverseKey( e.target.value )} // ... and update the state variable on any edits!
        /></label>
        {(yerDegistirmeReverseKey !== 0) && (yerDegistirmeReverseText !== '') &&
          <p>çıktı: {yerDegistirmeDecrypt( yerDegistirmeReverseText, yerDegistirmeReverseKey )}</p>}
      </div>
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>

        <h1>Doğrusal</h1>
        <hr width={"80%"}/>
        <label>
          Cümle: <input
          value={encryptAffineText} // ...force the input's value to match the state variable...
          onChange={e => setEncryptAffineText( e.target.value )} // ... and update the state variable on any edits!
        /></label>
        <hr width={"30%"}/>
        <label>
          Key: <input
          key={0}
          type={"number"}
          value={encryptAffineKeyA} // ...force the input's value to match the state variable...
          onChange={e => setEncryptAffineKeyA( parseInt( e.target.value ) )} // ... and update the state variable on any edits!
        /></label>
        <hr width={"30%"}/>
        <label>
          Key: <input
          key={0}
          type={"number"}
          value={encryptAffineKeyB} // ...force the input's value to match the state variable...
          onChange={e => setEncryptAffineKeyB( parseInt( e.target.value ) )} // ... and update the state variable on any edits!
        /></label>
        {(encryptAffineKeyB !== 0) && (encryptAffineKeyA !== 0) && (encryptAffineText !== '') &&
          <p>çıktı: {encryptAffine( encryptAffineText, encryptAffineKeyA, encryptAffineKeyB )}</p>}
        <h1>Decode</h1>
        <hr width={"60%"}/>
        <label>
          Cümle: <input
          value={decryptAffineText} // ...force the input's value to match the state variable...
          onChange={e => setDecryptAffineText( e.target.value )} // ... and update the state variable on any edits!
        /></label>
        <hr width={"30%"}/>
        <label>
          Key: <input
          key={0}
          type={"number"}
          value={decryptAffineKeyA} // ...force the input's value to match the state variable...
          onChange={e => setDecryptAffineKeyA( parseInt( e.target.value ) )} // ... and update the state variable on any edits!
        /></label>
        <hr width={"30%"}/>
        <label>
          Key: <input
          key={0}
          type={"number"}
          value={decryptAffineKeyB} // ...force the input's value to match the state variable...
          onChange={e => setDecryptAffineKeyB( parseInt( e.target.value ) )} // ... and update the state variable on any edits!
        /></label>
        {(decryptAffineKeyB !== 0) && (decryptAffineKeyA !== 0) && (decryptAffineText !== '') &&
          <p>çıktı: {decryptAffine( decryptAffineText, decryptAffineKeyA, decryptAffineKeyB )}</p>}
      </div>
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>

        <h1>Permutasyon</h1>
        <hr width={"80%"}/>
        <label>
          Cümle: <input
          value={permuteBlockEncryptText} // ...force the input's value to match the state variable...
          onChange={e => setPermuteBlockEncryptText( e.target.value )} // ... and update the state variable on any edits!
        /></label>
        <hr width={"30%"}/>
        <label>
          Key: <input
          key={0}
          type={"number"}
          value={permuteBlockEncryptKey} // ...force the input's value to match the state variable...
          onChange={e => setPermuteBlockEncryptKey( parseInt( e.target.value ) )} // ... and update the state variable on any edits!
        /></label>
        {(permuteBlockEncryptKey !== 0) && (permuteBlockEncryptText !== '') &&
          <p>çıktı: {permuteBlockEncrypt( permuteBlockEncryptText, permuteBlockEncryptKey )}</p>}

        <h1>Decode</h1>
        <hr width={"60%"}/>
        <label>
          Cümle: <input
          value={permuteBlockDecryptText} // ...force the input's value to match the state variable...
          onChange={e => setPermuteBlockDecryptText( e.target.value )} // ... and update the state variable on any edits!
        /></label>
        <hr width={"30%"}/>
        <label>
          List Orgin: <input
          value={permuteBlockDecryptKeyAList} // ...force the input's value to match the state variable...
          onChange={e => setPermuteBlockDecryptKeyAList( e.target.value )} // ... and update the state variable on any edits!
        /></label>
        <hr width={"30%"}/>
        <label>
          List Fake: <input
          value={permuteBlockDecryptKeyBList} // ...force the input's value to match the state variable...
          onChange={e => setPermuteBlockDecryptKeyBList( e.target.value )} // ... and update the state variable on any edits!
        /></label>
        {(permuteBlockDecryptKeyAList !== '') && (permuteBlockDecryptKeyBList !== '') && (permuteBlockDecryptText !== '') &&
          <p>çıktı: {permuteBlockDecrypt( permuteBlockDecryptText, permuteBlockDecryptKeyAList,permuteBlockDecryptKeyBList )}</p>}
      </div>
    </div>
  );
}

export default App;

function caesarCipher(sentence, key) {
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

function caesarDecrypt(sentence, key) {
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
      return upperA.at( mod( (upperA.indexOf( c ) - key) % 29 ) )
    }
    // muhtemel sayı girdisi yada ekstra alfabe dışı girdiler için bırakıldı (Ayrıca boşluk karakteride buraya girmiş oluyor)
    else {
      return c
    }
  } )
  // Charlara böldüğümüz ve liste haline gelen değişkeni arada boşluk olmadan tekrar birleştirme işlemi yapıyoruz
  return res.join( "" )
}

function rotaEncrypt(sentence, x, y, mod) {

  let sifreliMetin = "";
  let matrix = []
  let sayac = 0
  for ( let i = 0; i < y; i++ ) {
    let temp = []
    for ( let j = 0; j < x; j++ ) {
      if ( sentence.length <= sayac ) temp.push( "abcçdefgğhiıjklmnoöprsştuüvyz".at( Math.floor( Math.random() * 28 ) ) );
      else temp.push( sentence[sayac] )
      sayac++
    }
    temp !== [] && matrix.push( temp )
  }
  if ( mod === 0 ) {
    let row = 0;
    let col = x - 1;
    let l = -1, t = -1, b = y, r = x
    let dir = "down";
    console.log( matrix )
    for ( let i = 0; i < x * y; i++ ) {
      sifreliMetin += matrix.at( row ).at( col )
      switch ( dir ) {
        case "right":
          col++;
          if ( col === x || col === r || matrix[row][col] === null ) {
            col--;
            row++;
            t += 1
            dir = "down";
          }
          break;
        case "down":
          row++;
          if ( row === y || row === b || matrix[row][col] === null ) {
            row--;
            col--;
            r -= 1
            dir = "left";
          }
          break;
        case "left":
          col--;
          if ( col < 0 || col === l || matrix[row][col] === null ) {
            col++;
            row--;
            b -= 1
            dir = "up";
          }
          break;
        case "up":
          row--;
          if ( row < 0 || row === t || matrix[row][col] === null ) {
            row++;
            col++;
            l += 1
            dir = "right";
          }
          break;
      }
    }
    return sifreliMetin
  } else if ( mod === 1 ) {
    let row = 0;
    let col = x - 1;
    let l = -1, t = -1, b = y, r = x
    let dir = "left";
    console.log( matrix )
    for ( let i = 0; i < x * y; i++ ) {

      sifreliMetin += matrix.at( row ).at( col )
      switch ( dir ) {
        case "right":
          col++;
          if ( col === x || col === r || matrix[row][col] === null ) {
            col--;
            row--;
            b -= 1
            dir = "up";
          }
          break;
        case "down":
          row++;
          if ( row === y || row === b || matrix[row][col] === null ) {
            row--;
            col++;
            l += 1
            dir = "right";
          }
          break;
        case "left":
          col--;
          if ( col < 0 || col === l || matrix[row][col] === null ) {
            col++;
            row++;
            t += 1
            dir = "down";
          }
          break;
        case "up":
          row--;
          if ( row < 0 || row === t || matrix[row][col] === null ) {
            row++;
            col--;
            r -= 1
            dir = "left";
          }
          break;
      }
    }
    return sifreliMetin
  } else {
    console.log( "Geçersiz işlem" );
    return "Geçersiz işlem"
  }
}

function rotaDecrypt(sentence, x, y, mod) {
  let decryptedMessage = ""
  const matrix = new Array( y ).fill( null ).map( () => new Array( x ).fill( null ) );

  if ( mod === 0 ) {
    let sayac = 0;
    let row = 0;
    let col = x - 1;
    let l = -1, t = -1, b = y, r = x
    let dir = "down";
    console.log( matrix )
    for ( let i = 0; i < x * y; i++ ) {
      matrix[row][col] = sentence.split( "" ).at( sayac )
      sayac++;
      switch ( dir ) {
        case "right":
          col++;
          if ( col === x || col === r || col < 0 ) {
            col--;
            row++;
            t += 1
            dir = "down";
          }
          break;
        case "down":
          row++;
          if ( row === y || row === b || row > y - 1 ) {
            row--;
            col--;
            r -= 1
            dir = "left";
          }
          break;
        case "left":
          col--;
          if ( col < 0 || col === l || col > x - 1 ) {
            col++;
            row--;
            b -= 1
            dir = "up";
          }
          break;
        case "up":
          row--;
          if ( row < 0 || row === t || row < 0 ) {
            row++;
            col++;
            l += 1
            dir = "right";
          }
          break;
      }
    }

    for ( let i = 0; i > y; i++ ) {
      console.log( matrix.at( i ).join( "" ) )
    }
  } else if ( mod === 1 ) {
    let sayac = 0;
    let row = 0;
    let col = x - 1;
    let l = -1, t = -1, b = y, r = x
    let dir = "left";
    console.log( matrix )
    for ( let i = 0; i < x * y; i++ ) {
      matrix[row][col] = sentence.split( "" ).at( sayac )
      sayac++;
      switch ( dir ) {
        case "right":
          col++;
          if ( col === x || col === r || col > x - 1 ) {
            col--;
            row--;
            b -= 1
            dir = "up";
          }
          break;
        case "down":
          row++;
          if ( row === y || row === b || row < 0 ) {
            row--;
            col++;
            l += 1
            dir = "right";
          }
          break;
        case "left":
          col--;
          if ( col < 0 || col === l || col < 0 ) {
            col++;
            row++;
            t += 1
            dir = "down";
          }
          break;
        case "up":
          row--;
          if ( row < 0 || row === t || row > y - 1 ) {
            row++;
            col--;
            r -= 1
            dir = "left";
          }
          break;
      }
    }

    for ( let i = 0; i > y; i++ ) {
      decryptedMessage += matrix.at( i ).join( "" )
    }
  } else {
    console.log( "Geçersiz işlem" );
    return "Geçersiz işlem"
  }
  return matrix.flat().join( "" )
}

function yerDegistirmeCreateAlphabet() {
  // kodlama için alfabe tanımlıyoruz
  const lowerA = "abcçdefgğhiıjklmnoöprsştuüvyz".split( "" )
  return lowerA.sort( (a, b) => 0.5 - Math.random() ).join( "" );
}

function yerDegistirmeEncrypt(sentence, key) {
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

function yerDegistirmeDecrypt(sentence, key) {
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

function encryptAffine(plaintext, a, b) {
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

function decryptAffine(plaintext, a, b) {
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

function permuteBlockEncrypt(sentence,key){
  let finalSentence = ""
  let temp = sentence.split("")

  let originalKey = Array.from({ length: key }, (value, index) => index);
  console.log("Orginal Key: ",originalKey)
  let shuffleKey = Array.from({ length: key }, (value, index) => index).sort(() => Math.random() - 0.5);
  console.log("Shuffled Key: ",shuffleKey)
  while ( temp.length % key !== 0 ) temp.push("a")

  for ( let i = 0; i < (sentence.length/key); i++ ) {
    for ( let j = 0; j < key; j++ ) {
      finalSentence += temp.slice(i*key)[shuffleKey[j]]
    }
  }
  return finalSentence
}
function permuteBlockDecrypt(sentence,originalKeyList,shuffleKeyList){
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