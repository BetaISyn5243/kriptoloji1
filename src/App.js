import './App.css';
import {useState} from "react";
import {permuteBlockDecrypt, permuteBlockEncrypt} from "./utils/permuteBlock";
import {caesarCipher, caesarDecrypt} from "./utils/caesar";
import {rotaDecrypt, rotaEncrypt} from "./utils/route";
import {decryptYerDegistirme, encryptYerDegistirme, yerDegistirmeCreateAlphabet} from "./utils/yerDegistirme";
import {decryptZigZag, encryptZigZag} from "./utils/zigzag";
import {decryptAffine, encryptAffine} from "./utils/affine";
import {decryptVigenere, encryptVigenere, generateKey} from "./utils/vigenere";
import {HillCipher} from "./utils/hill";

function App() {
  const [CaesarEncryptText, setCaesarEncryptText] = useState( '' ); // Declare a state variable...
  const [CaesarEncryptKey, setCaesarEncryptKey] = useState(); // Declare a state variable...
  const [caesarEncryptedText, setCaesarEncryptedText] = useState( '' );

  const [CaesarDecryptText, setCaesarDecryptText] = useState( '' ); // Declare a state variable...
  const [CaesarDecryptKey, setCaesarDecryptKey] = useState(); // Declare a state variable...
  const [caesarDecryptedText, setCaesarDecryptedText] = useState( '' );


  const [RouteMethodMod, setRouteMethodMod] = useState( 0 ); // Declare a state variable...

  const [RouteEncryptText, setRouteEncryptText] = useState( '' ); // Declare a state variable...
  const [RouteEncryptKeyX, setRouteEncryptKeyX] = useState(); // Declare a state variable...
  const [RouteEncryptKeyY, setRouteEncryptKeyY] = useState(); // Declare a state variable...
  const [routeEncryptedText, setRouteEncryptedText] = useState( '' );


  const [RouteDecryptText, setRouteDecryptText] = useState( '' ); // Declare a state variable...
  const [RouteDecryptKeyX, setRouteDecryptKeyX] = useState(); // Declare a state variable...
  const [RouteDecryptKeyY, setRouteDecryptKeyY] = useState(); // Declare a state variable...
  const [routeDecryptedText, setRouteDecryptedText] = useState('');

  const [yerDegistirmeAlphabet, setYerDegistirmeAlphabet] = useState(yerDegistirmeCreateAlphabet());

  const [yerDegistirmeText, setYerDegistirmeText] = useState(''); // Declare a state variable...
  const [yerDegistirmeKey, setYerDegistirmeKey] = useState(''); // Declare a state variable...
  const [yerDegistirmeEncryptedText, setYerDegistirmeEncryptedText] = useState('');


  const [yerDegistirmeReverseText, setYerDegistirmeReverseText] = useState(''); // Declare a state variable...
  const [yerDegistirmeReverseKey, setYerDegistirmeReverseKey] = useState(''); // Declare a state variable...
  const [yerDegistirmeDecryptedText, setYerDegistirmeDecryptedText] = useState('');


  const [encryptZigZagText, setEncryptZigZagText] = useState(''); // Declare a state variable...
  const [encryptZigZagKeyA, setEncryptZigZagKeyA] = useState(); // Declare a state variable...
  const [ZigZagEncryptedText, setZigZagEncryptedText] = useState('');

  const [decryptZigZagText, setDecryptZigZagText] = useState(''); // Declare a state variable...
  const [decryptZigZagKeyA, setDecryptZigZagKeyA] = useState(); // Declare a state variable...
  const [ZigZagDecryptedText, setZigZagDecryptedText] = useState('');


  const [permuteBlockEncryptText, setPermuteBlockEncryptText] = useState(''); // Declare a state variable...
  const [permuteBlockEncryptKey, setPermuteBlockEncryptKey] = useState(); // Declare a state variable...
  const [permuteBlockEncryptedText, setPermuteBlockEncryptedText] = useState('');

  const [permuteBlockDecryptText, setPermuteBlockDecryptText] = useState(''); // Declare a state variable...
  const [permuteBlockDecryptKeyAList, setPermuteBlockDecryptKeyAList] = useState(''); // Declare a state variable...
  const [permuteBlockDecryptKeyBList, setPermuteBlockDecryptKeyBList] = useState(''); // Declare a state variable...
  const [permuteBlockDecryptedText, setPermuteBlockDecryptedText] = useState('');


  const [encryptedAffineText, setEncryptedAffineText] = useState(''); // Declare a state variable...
  const [encryptAffineText, setEncryptAffineText] = useState(''); // Declare a state variable...
  const [encryptAffineKeyA, setEncryptAffineKeyA] = useState(0); // Declare a state variable...
  const [encryptAffineKeyB, setEncryptAffineKeyB] = useState(0); // Declare a state variable...

  const [decryptedAffineText, setDecryptedAffineText] = useState(''); // Declare a state variable...
  const [decryptAffineText, setDecryptAffineText] = useState(''); // Declare a state variable...
  const [decryptAffineKeyA, setDecryptAffineKeyA] = useState(0); // Declare a state variable...
  const [decryptAffineKeyB, setDecryptAffineKeyB] = useState(0); // Declare a state variable...

  const [encryptedVigenereText,setEncryptedVigenereText] = useState("")
  const [encryptVigenereText,setEncryptVigenereText] = useState("")
  const [encryptVigenereKey,setEncryptVigenereKey] = useState("")

  const [decryptedVigenereText,setDecryptedVigenereText] = useState("")
  const [decryptVigenereText,setDecryptVigenereText] = useState("")
  const [decryptVigenereKey,setDecryptVigenereKey] = useState("")


  const [encryptedHillText,setEncryptedHillText] = useState("")
  const [encryptHillText,setEncryptHillText] = useState("")
  const [encryptHillKey,setEncryptHillKey] = useState("")
  return (<div>
      <div className="App" style={{display: "flex", flexDirection: "row", width: "100%", height: "50%"}}>
        <div style={{display: "flex", flexDirection: "column", width: "100%"}}>
          <h1>Ceaser</h1>
          <hr width={"80%"}/>
          <label>
            Cümle: <input
            value={CaesarEncryptText} // ...force the input's value to match the state variable...
            onChange={e => setCaesarEncryptText(e.target.value)} // ... and update the state variable on any edits!
          /></label>
          <hr width={"30%"}/>
          <label>
            Key: <input
            key={0}
            type={"number"}
            value={CaesarEncryptKey} // ...force the input's value to match the state variable...
            onChange={e => setCaesarEncryptKey(parseInt(e.target.value))} // ... and update the state variable on any edits!
          /></label>
          <button style={{marginLeft: "10px", marginRight: "10px", marginTop: "10px"}}
                  onClick={() => setCaesarEncryptedText(caesarCipher(CaesarEncryptText, CaesarEncryptKey))}>Encrypt
          </button>
          {(caesarEncryptedText !== '') &&
            <p>çıktı: {caesarEncryptedText}</p>}

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
        <button style={{ marginLeft: "10px", marginRight: "10px", marginTop: "10px" }}
                onClick={() => setCaesarDecryptedText( caesarDecrypt( CaesarDecryptText, CaesarDecryptKey ) )}>Decrypt
        </button>

          {(caesarDecryptedText !== '') &&
            <p>çıktı: {caesarDecryptedText}</p>}
        </div>
        <div style={{display: "flex", flexDirection: "column", width: "100%"}}>

        <h1>Rota</h1>
        <hr width={"80%"}/>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <label>
            Sola : <input
            type={"radio"}
            name={"RouteMethodMod"}
            value={1} // ...force the input's value to match the state variable...
            onChange={e => setRouteMethodMod( parseInt( e.target.value ) )} // ... and update the state variable on any edits!

          />
          </label>
          {" "}
          <label>
            Sağa :<input
            type={"radio"}
            name={"RouteMethodMod"}
            defaultChecked
            value={0} // ...force the input's value to match the state variable...
            onChange={e => setRouteMethodMod( parseInt( e.target.value ) )} // ... and update the state variable on any edits!
          />

          </label>

        </div>


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
        <button style={{ marginLeft: "10px", marginRight: "10px", marginTop: "10px" }}
                onClick={() => setRouteEncryptedText( rotaEncrypt( RouteEncryptText, RouteEncryptKeyX, RouteEncryptKeyY, RouteMethodMod ) )}>Encrypt
        </button>

        { (routeEncryptedText !== '') &&
          <p>çıktı: {routeEncryptedText}</p>}
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
        <button style={{marginLeft:"10px",marginRight:"10px",marginTop:"10px"}} onClick={()=>setRouteDecryptedText(rotaDecrypt( RouteDecryptText, RouteDecryptKeyX, RouteDecryptKeyY, RouteMethodMod))}>Decrypt</button>

        {(routeDecryptedText !== '') &&
          <p>çıktı: {routeDecryptedText}</p>}


        </div>
        <div style={{display: "flex", flexDirection: "column", width: "100%"}}>

          <h1>Yerdeğiştirme</h1>
          <hr width={"80%"}/>
          <strong
            onWheel={() => setYerDegistirmeAlphabet(yerDegistirmeCreateAlphabet())}>{yerDegistirmeAlphabet}</strong>
          <hr width={"70%"}/>
          <label>
            Cümle: <input
            value={yerDegistirmeText} // ...force the input's value to match the state variable...
            onChange={e => setYerDegistirmeText(e.target.value)} // ... and update the state variable on any edits!
          /></label>
          <hr width={"30%"}/>
          <label>
            Key: <input
            key={0}
            type={"text"}
            value={yerDegistirmeKey} // ...force the input's value to match the state variable...
            onChange={e => setYerDegistirmeKey(e.target.value)} // ... and update the state variable on any edits!
          /></label>
          <button style={{marginLeft: "10px", marginRight: "10px", marginTop: "10px"}}
                  onClick={() => setYerDegistirmeEncryptedText(encryptYerDegistirme(yerDegistirmeText, yerDegistirmeKey))}>Encrypt
          </button>
          {(yerDegistirmeEncryptedText !== '') &&
            <p>çıktı: {yerDegistirmeEncryptedText}</p>}
          <h1>Decode</h1>
          <hr width={"60%"}/>
          <label>
            Cümle: <input
            value={yerDegistirmeReverseText} // ...force the input's value to match the state variable...
            onChange={e => setYerDegistirmeReverseText(e.target.value)} // ... and update the state variable on any edits!
          /></label>
          <hr width={"30%"}/>
          <label>
            Key: <input
            key={0}
            type={"text"}
            value={yerDegistirmeReverseKey} // ...force the input's value to match the state variable...
            onChange={e => setYerDegistirmeReverseKey(e.target.value)} // ... and update the state variable on any edits!
          /></label>
          <button style={{marginLeft: "10px", marginRight: "10px", marginTop: "10px"}}
                  onClick={() => setYerDegistirmeDecryptedText(decryptYerDegistirme(yerDegistirmeReverseText, yerDegistirmeReverseKey))}>Decrypt
          </button>

          {(yerDegistirmeDecryptedText !== '') &&
            <p>çıktı: {yerDegistirmeDecryptedText}</p>}
        </div>
      </div>
      <hr/>
      <hr/>
      <div className="App" style={{display: "flex", flexDirection: "row", width: "100%", height: "50%"}}>
        <div style={{display: "flex", flexDirection: "column", width: "100%"}}>

          <h1>ZigZag</h1>
          <hr width={"80%"}/>
          <label>
            Cümle: <input
            value={encryptZigZagText} // ...force the input's value to match the state variable...
            onChange={e => setEncryptZigZagText(e.target.value)} // ... and update the state variable on any edits!
          /></label>
          <hr width={"30%"}/>
          <label>
            Key: <input
            key={0}
            type={"number"}
            value={encryptZigZagKeyA} // ...force the input's value to match the state variable...
            onChange={e => setEncryptZigZagKeyA(parseInt(e.target.value))} // ... and update the state variable on any edits!
          /></label>
          <button style={{marginLeft: "10px", marginRight: "10px", marginTop: "10px"}}
                  onClick={() => setZigZagEncryptedText(encryptZigZag(encryptZigZagText, encryptZigZagKeyA))}>Encrypt
          </button>

          {(ZigZagEncryptedText !== '') &&
            <p>çıktı: {
              ZigZagEncryptedText}</p>}
          <h1>Decode</h1>
          <hr width={"60%"}/>
          <label>
            Cümle: <input
            value={decryptZigZagText} // ...force the input's value to match the state variable...
            onChange={e => setDecryptZigZagText(e.target.value)} // ... and update the state variable on any edits!
          /></label>
          <hr width={"30%"}/>
          <label>
            Key: <input
            key={0}
            type={"number"}
            value={decryptZigZagKeyA} // ...force the input's value to match the state variable...
            onChange={e => setDecryptZigZagKeyA(parseInt(e.target.value))} // ... and update the state variable on any edits!
          /></label>

          <button style={{marginLeft: "10px", marginRight: "10px", marginTop: "10px"}}
                  onClick={() => setZigZagDecryptedText(decryptZigZag(decryptZigZagText, decryptZigZagKeyA))}>Decrypt
          </button>

          {(ZigZagDecryptedText !== '') &&
            <p>çıktı: {
              ZigZagDecryptedText}</p>}
        </div>
        <div style={{display: "flex", flexDirection: "column", width: "100%"}}>

          <h1>Permutasyon</h1>
          <hr width={"80%"}/>
          <label>
            Cümle: <input
            value={permuteBlockEncryptText} // ...force the input's value to match the state variable...
            onChange={e => setPermuteBlockEncryptText(e.target.value)} // ... and update the state variable on any edits!
          /></label>
          <hr width={"30%"}/>
          <label>
            Key: <input
            key={0}
            type={"number"}
            value={permuteBlockEncryptKey} // ...force the input's value to match the state variable...
            onChange={e => setPermuteBlockEncryptKey(parseInt(e.target.value))} // ... and update the state variable on any edits!
          /></label>
          <button style={{marginLeft: "10px", marginRight: "10px", marginTop: "10px"}}
                  onClick={() => setPermuteBlockEncryptedText(permuteBlockEncrypt(permuteBlockEncryptText, permuteBlockEncryptKey))}>Encrypt
          </button>

          {(permuteBlockEncryptedText !== '') &&
            <p>çıktı: {
              permuteBlockEncryptedText}</p>}

          <h1>Decode</h1>
          <hr width={"60%"}/>
          <label>
            Cümle: <input
            value={permuteBlockDecryptText} // ...force the input's value to match the state variable...
            onChange={e => setPermuteBlockDecryptText(e.target.value)} // ... and update the state variable on any edits!
          /></label>
          <hr width={"30%"}/>
          <label>
            List Orgin: <input
            value={permuteBlockDecryptKeyAList} // ...force the input's value to match the state variable...
            onChange={e => setPermuteBlockDecryptKeyAList(e.target.value)} // ... and update the state variable on any edits!
          /></label>
          <hr width={"30%"}/>
          <label>
            List Fake: <input
            value={permuteBlockDecryptKeyBList} // ...force the input's value to match the state variable...
            onChange={e => setPermuteBlockDecryptKeyBList(e.target.value)} // ... and update the state variable on any edits!
          /></label>
          <button style={{marginLeft: "10px", marginRight: "10px", marginTop: "10px"}}
                  onClick={() => setPermuteBlockDecryptedText(permuteBlockDecrypt(permuteBlockDecryptText, permuteBlockDecryptKeyAList, permuteBlockDecryptKeyBList))}>Decrypt
          </button>

          {(permuteBlockDecryptedText !== '') &&
            <p>çıktı: {permuteBlockDecryptedText}</p>}
        </div>
        <div style={{display: "flex", flexDirection: "column", width: "100%"}}>

          <h1>Doğrusal</h1>
          <hr width={"80%"}/>
          <label>
            Cümle: <input
            value={encryptAffineText} // ...force the input's value to match the state variable...
            onChange={e => setEncryptAffineText(e.target.value)} // ... and update the state variable on any edits!
          /></label>
          <hr width={"30%"}/>
          <label>
            Key: <input
            key={0}
            type={"number"}
            value={encryptAffineKeyA} // ...force the input's value to match the state variable...
            onChange={e => setEncryptAffineKeyA(parseInt(e.target.value))} // ... and update the state variable on any edits!
          /></label>
          <hr width={"30%"}/>
          <label>
            Key: <input
            key={0}
            type={"number"}
            value={encryptAffineKeyB} // ...force the input's value to match the state variable...
            onChange={e => setEncryptAffineKeyB(parseInt(e.target.value))} // ... and update the state variable on any edits!
          /></label>
          <button style={{marginLeft: "10px", marginRight: "10px", marginTop: "10px"}}
                  onClick={() => setEncryptedAffineText(encryptAffine(encryptAffineText, encryptAffineKeyA, encryptAffineKeyB))}>Encrypt
          </button>

          {(encryptedAffineText !== '') &&
            <p>çıktı: {encryptedAffineText}</p>}
          <h1>Decode</h1>
          <hr width={"60%"}/>
          <label>
            Cümle: <input
            value={decryptAffineText} // ...force the input's value to match the state variable...
            onChange={e => setDecryptAffineText(e.target.value)} // ... and update the state variable on any edits!
          /></label>
          <hr width={"30%"}/>
          <label>
            Key: <input
            key={0}
            type={"number"}
            value={decryptAffineKeyA} // ...force the input's value to match the state variable...
            onChange={e => setDecryptAffineKeyA(parseInt(e.target.value))} // ... and update the state variable on any edits!
          /></label>
          <hr width={"30%"}/>
          <label>
            Key: <input
            key={0}
            type={"number"}
            value={decryptAffineKeyB} // ...force the input's value to match the state variable...
            onChange={e => setDecryptAffineKeyB(parseInt(e.target.value))} // ... and update the state variable on any edits!
          /></label>
          <button style={{marginLeft: "10px", marginRight: "10px", marginTop: "10px"}}
                  onClick={() => setDecryptedAffineText(decryptAffine(decryptAffineText, decryptAffineKeyA, decryptAffineKeyB))}>Decrypt
          </button>
          {(decryptedAffineText !== '') &&
            <p>çıktı: {decryptedAffineText}</p>}
        </div>
      </div>
      <hr/>
      <hr/>
      <div className="App" style={{display: "flex", flexDirection: "row", width: "100%", height: "50%"}}>
        <div style={{display: "flex", flexDirection: "column", width: "100%"}}>

          <h1>Vignere</h1>
          <hr width={"80%"}/>
          <label>
            Cümle: <input
            value={encryptVigenereText} // ...force the input's value to match the state variable...
            onChange={e => setEncryptVigenereText(e.target.value)} // ... and update the state variable on any edits!
          /></label>
          <hr width={"30%"}/>
          <label>
            Key: <input
            value={encryptVigenereKey} // ...force the input's value to match the state variable...
            onChange={e => setEncryptVigenereKey(e.target.value)} // ... and update the state variable on any edits!
          /></label>
          <button style={{marginLeft: "10px", marginRight: "10px", marginTop: "10px"}}
                  onClick={() => setEncryptedVigenereText(encryptVigenere(encryptVigenereText, generateKey(encryptVigenereText,encryptVigenereKey)))}>Encrypt
          </button>

          {(encryptedVigenereText !== '') &&
            <p>çıktı: {
              encryptedVigenereText}</p>}
          <h1>Decode</h1>
          <hr width={"60%"}/>
          <label>
            Cümle: <input
            value={decryptVigenereText} // ...force the input's value to match the state variable...
            onChange={e => setDecryptVigenereText(e.target.value)} // ... and update the state variable on any edits!
          /></label>
          <hr width={"30%"}/>
          <label>
            Key: <input
            value={decryptVigenereKey} // ...force the input's value to match the state variable...
            onChange={e => setDecryptVigenereKey(e.target.value)} // ... and update the state variable on any edits!
          /></label>

          <button style={{marginLeft: "10px", marginRight: "10px", marginTop: "10px"}}
                  onClick={() => setDecryptedVigenereText(decryptVigenere(decryptVigenereText, generateKey(decryptVigenereText,decryptVigenereKey)))}>Decrypt
          </button>

          {(decryptedVigenereText !== '') &&
            <p>çıktı: {
              decryptedVigenereText}</p>}
        </div>
        <div style={{display: "flex", flexDirection: "column", width: "100%"}}>

          <h1>Hill</h1>
          <hr width={"80%"}/>
          <label>
            Cümle: <input
            value={encryptHillText} // ...force the input's value to match the state variable...
            onChange={e => setEncryptHillText(e.target.value)} // ... and update the state variable on any edits!
          /></label>
          <hr width={"30%"}/>
          <label>
            Key: <input
            value={encryptHillKey} // ...force the input's value to match the state variable...
            onChange={e => setEncryptHillKey((e.target.value))} // ... and update the state variable on any edits!
          /></label>
          <button style={{marginLeft: "10px", marginRight: "10px", marginTop: "10px"}}
                  onClick={() => setEncryptedHillText(HillCipher(encryptHillText, encryptHillKey))}>Encrypt
          </button>

          {(encryptedHillText !== '') &&
            <p>çıktı: {
              encryptedHillText}</p>}

          <h1>Decode</h1>
          <hr width={"60%"}/>
          <label>
            Cümle: <input
            value={permuteBlockDecryptText} // ...force the input's value to match the state variable...
            onChange={e => setPermuteBlockDecryptText(e.target.value)} // ... and update the state variable on any edits!
          /></label>
          <hr width={"30%"}/>
          <label>
            List Orgin: <input
            value={permuteBlockDecryptKeyAList} // ...force the input's value to match the state variable...
            onChange={e => setPermuteBlockDecryptKeyAList(e.target.value)} // ... and update the state variable on any edits!
          /></label>
          <hr width={"30%"}/>
          <label>
            List Fake: <input
            value={permuteBlockDecryptKeyBList} // ...force the input's value to match the state variable...
            onChange={e => setPermuteBlockDecryptKeyBList(e.target.value)} // ... and update the state variable on any edits!
          /></label>
          <button style={{marginLeft: "10px", marginRight: "10px", marginTop: "10px"}}
                  onClick={() => setPermuteBlockDecryptedText(permuteBlockDecrypt(permuteBlockDecryptText, permuteBlockDecryptKeyAList, permuteBlockDecryptKeyBList))}>Decrypt
          </button>

          {(permuteBlockDecryptedText !== '') &&
            <p>çıktı: {permuteBlockDecryptedText}</p>}
        </div>
        <div style={{display: "flex", flexDirection: "column", width: "100%"}}>

          <h1>Doğrusal</h1>
          <hr width={"80%"}/>
          <label>
            Cümle: <input
            value={encryptAffineText} // ...force the input's value to match the state variable...
            onChange={e => setEncryptAffineText(e.target.value)} // ... and update the state variable on any edits!
          /></label>
          <hr width={"30%"}/>
          <label>
            Key: <input
            key={0}
            type={"number"}
            value={encryptAffineKeyA} // ...force the input's value to match the state variable...
            onChange={e => setEncryptAffineKeyA(parseInt(e.target.value))} // ... and update the state variable on any edits!
          /></label>
          <hr width={"30%"}/>
          <label>
            Key: <input
            key={0}
            type={"number"}
            value={encryptAffineKeyB} // ...force the input's value to match the state variable...
            onChange={e => setEncryptAffineKeyB(parseInt(e.target.value))} // ... and update the state variable on any edits!
          /></label>
          <button style={{marginLeft: "10px", marginRight: "10px", marginTop: "10px"}}
                  onClick={() => setEncryptedAffineText(encryptAffine(encryptAffineText, encryptAffineKeyA, encryptAffineKeyB))}>Encrypt
          </button>

          {(encryptedAffineText !== '') &&
            <p>çıktı: {encryptedAffineText}</p>}
          <h1>Decode</h1>
          <hr width={"60%"}/>
          <label>
            Cümle: <input
            value={decryptAffineText} // ...force the input's value to match the state variable...
            onChange={e => setDecryptAffineText(e.target.value)} // ... and update the state variable on any edits!
          /></label>
          <hr width={"30%"}/>
          <label>
            Key: <input
            key={0}
            type={"number"}
            value={decryptAffineKeyA} // ...force the input's value to match the state variable...
            onChange={e => setDecryptAffineKeyA(parseInt(e.target.value))} // ... and update the state variable on any edits!
          /></label>
          <hr width={"30%"}/>
          <label>
            Key: <input
            key={0}
            type={"number"}
            value={decryptAffineKeyB} // ...force the input's value to match the state variable...
            onChange={e => setDecryptAffineKeyB(parseInt(e.target.value))} // ... and update the state variable on any edits!
          /></label>
          <button style={{marginLeft: "10px", marginRight: "10px", marginTop: "10px"}}
                  onClick={() => setDecryptedAffineText(decryptAffine(decryptAffineText, decryptAffineKeyA, decryptAffineKeyB))}>Decrypt
          </button>
          {(decryptedAffineText !== '') &&
            <p>çıktı: {decryptedAffineText}</p>}
        </div>
      </div>
    </div>
  );
}

export default App;








