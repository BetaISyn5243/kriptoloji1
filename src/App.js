import './App.css';
import {useState} from "react";
import {permuteBlockDecrypt, permuteBlockEncrypt} from "./utils/permuteBlock";
import {caesarCipher, caesarDecrypt} from "./utils/caesar";
import {rotaDecrypt, rotaEncrypt} from "./utils/route";
import {yerDegistirmeCreateAlphabet, yerDegistirmeDecrypt, yerDegistirmeEncrypt} from "./utils/yerDegistirme";
import {decryptZigZag, encryptZigZag} from "./utils/zigzag";

function App() {
  const [CaesarEncryptText, setCaesarEncryptText] = useState( '' ); // Declare a state variable...
  const [CaesarEncryptKey, setCaesarEncryptKey] = useState(  ); // Declare a state variable...
  const [caesarEncryptedText, setCaesarEncryptedText] = useState('');

  const [CaesarDecryptText, setCaesarDecryptText] = useState( '' ); // Declare a state variable...
  const [CaesarDecryptKey, setCaesarDecryptKey] = useState( ); // Declare a state variable...
  const [caesarDecryptedText, setCaesarDecryptedText] = useState('');


  const [RouteEncryptText, setRouteEncryptText] = useState( '' ); // Declare a state variable...
  const [RouteEncryptKeyX, setRouteEncryptKeyX] = useState(  ); // Declare a state variable...
  const [RouteEncryptKeyY, setRouteEncryptKeyY] = useState(  ); // Declare a state variable...
  const [routeEncryptedText, setRouteEncryptedText] = useState('');


  const [RouteDecryptText, setRouteDecryptText] = useState( '' ); // Declare a state variable...
  const [RouteDecryptKeyX, setRouteDecryptKeyX] = useState(  ); // Declare a state variable...
  const [RouteDecryptKeyY, setRouteDecryptKeyY] = useState(  ); // Declare a state variable...
  const [routeDecryptedText, setRouteDecryptedText] = useState('');

  const [yerDegistirmeAlphabet, setYerDegistirmeAlphabet] = useState(yerDegistirmeCreateAlphabet());

  const [yerDegistirmeText, setYerDegistirmeText] = useState( '' ); // Declare a state variable...
  const [yerDegistirmeKey, setYerDegistirmeKey] = useState( '' ); // Declare a state variable...
  const [yerDegistirmeEncryptedText, setYerDegistirmeEncryptedText] = useState('');


  const [yerDegistirmeReverseText, setYerDegistirmeReverseText] = useState( '' ); // Declare a state variable...
  const [yerDegistirmeReverseKey, setYerDegistirmeReverseKey] = useState( '' ); // Declare a state variable...
  const [yerDegistirmeDecryptedText, setYerDegistirmeDecryptedText] = useState('');


  const [encryptZigZagText, setEncryptZigZagText] = useState( '' ); // Declare a state variable...
  const [encryptZigZagKeyA, setEncryptZigZagKeyA] = useState(  ); // Declare a state variable...
  const [ZigZagEncryptedText, setZigZagEncryptedText] = useState('');

  const [decryptZigZagText, setDecryptZigZagText] = useState( '' ); // Declare a state variable...
  const [decryptZigZagKeyA, setDecryptZigZagKeyA] = useState(  ); // Declare a state variable...
  const [ZigZagDecryptedText, setZigZagDecryptedText] = useState('');


  const [permuteBlockEncryptText, setPermuteBlockEncryptText] = useState( '' ); // Declare a state variable...
  const [permuteBlockEncryptKey, setPermuteBlockEncryptKey] = useState(  ); // Declare a state variable...
  const [permuteBlockEncryptedText, setPermuteBlockEncryptedText] = useState('');

  const [permuteBlockDecryptText, setPermuteBlockDecryptText] = useState( '' ); // Declare a state variable...
  const [permuteBlockDecryptKeyAList, setPermuteBlockDecryptKeyAList] = useState( '' ); // Declare a state variable...
  const [permuteBlockDecryptKeyBList, setPermuteBlockDecryptKeyBList] = useState( '' ); // Declare a state variable...
  const [permuteBlockDecryptedText, setPermuteBlockDecryptedText] = useState('');

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
        <button style={{marginLeft:"10px",marginRight:"10px",marginTop:"10px"}} onClick={()=>setCaesarEncryptedText(caesarCipher( CaesarEncryptText, CaesarEncryptKey ))}>Encrypt</button>
        { (caesarEncryptedText !== '') &&
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
        <button style={{marginLeft:"10px",marginRight:"10px",marginTop:"10px"}} onClick={()=>setCaesarDecryptedText(caesarDecrypt( CaesarDecryptText, CaesarDecryptKey ))}>Decrypt</button>

        {(caesarDecryptedText !== '') &&
          <p>çıktı: {caesarDecryptedText}</p>}
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
        <button style={{marginLeft:"10px",marginRight:"10px",marginTop:"10px"}} onClick={()=>setRouteEncryptedText(rotaEncrypt( RouteEncryptText, RouteEncryptKeyX, RouteEncryptKeyY, 0 ))}>Encrypt</button>

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
        <button style={{marginLeft:"10px",marginRight:"10px",marginTop:"10px"}} onClick={()=>setRouteDecryptedText(rotaDecrypt( RouteDecryptText, RouteDecryptKeyX, RouteDecryptKeyY, 0 ))}>Decrypt</button>

        { (routeDecryptedText !== '') &&
          <p>çıktı: {rotaDecrypt( RouteDecryptText, RouteDecryptKeyX, RouteDecryptKeyY, 0 )}</p>}


      </div>
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>

        <h1>Yerdeğiştirme</h1>
        <hr width={"80%"}/>
        <strong onWheel={()=>setYerDegistirmeAlphabet(yerDegistirmeCreateAlphabet())}>{yerDegistirmeAlphabet}</strong>
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
        <button style={{marginLeft:"10px",marginRight:"10px",marginTop:"10px"}} onClick={()=>setYerDegistirmeEncryptedText(yerDegistirmeEncrypt( yerDegistirmeText, yerDegistirmeKey ))}>Encrypt</button>
        { (yerDegistirmeEncryptedText !== '') &&
          <p>çıktı: {yerDegistirmeEncryptedText}</p>}
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
        <button style={{marginLeft:"10px",marginRight:"10px",marginTop:"10px"}} onClick={()=>setYerDegistirmeDecryptedText(yerDegistirmeDecrypt( yerDegistirmeReverseText, yerDegistirmeReverseKey  ))}>Decrypt</button>

        { (yerDegistirmeDecryptedText !== '') &&
          <p>çıktı: {yerDegistirmeDecryptedText}</p>}
      </div>
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>

        <h1>ZigZag</h1>
        <hr width={"80%"}/>
        <label>
          Cümle: <input
          value={encryptZigZagText} // ...force the input's value to match the state variable...
          onChange={e => setEncryptZigZagText( e.target.value )} // ... and update the state variable on any edits!
        /></label>
        <hr width={"30%"}/>
        <label>
          Key: <input
          key={0}
          type={"number"}
          value={encryptZigZagKeyA} // ...force the input's value to match the state variable...
          onChange={e => setEncryptZigZagKeyA( parseInt( e.target.value ) )} // ... and update the state variable on any edits!
        /></label>
        <button style={{marginLeft:"10px",marginRight:"10px",marginTop:"10px"}} onClick={()=>setZigZagEncryptedText(encryptZigZag( encryptZigZagText, encryptZigZagKeyA ))}>Encrypt</button>

        { (ZigZagEncryptedText !== '') &&
          <p>çıktı: {
            ZigZagEncryptedText}</p>}
        <h1>Decode</h1>
        <hr width={"60%"}/>
        <label>
          Cümle: <input
          value={decryptZigZagText} // ...force the input's value to match the state variable...
          onChange={e => setDecryptZigZagText( e.target.value )} // ... and update the state variable on any edits!
        /></label>
        <hr width={"30%"}/>
        <label>
          Key: <input
          key={0}
          type={"number"}
          value={decryptZigZagKeyA} // ...force the input's value to match the state variable...
          onChange={e => setDecryptZigZagKeyA( parseInt( e.target.value ) )} // ... and update the state variable on any edits!
        /></label>

        <button style={{marginLeft:"10px",marginRight:"10px",marginTop:"10px"}} onClick={()=>setZigZagDecryptedText(decryptZigZag( decryptZigZagText, decryptZigZagKeyA ))}>Decrypt</button>

        {(ZigZagDecryptedText !== '') &&
          <p>çıktı: {
            ZigZagDecryptedText}</p>}
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
        <button style={{marginLeft:"10px",marginRight:"10px",marginTop:"10px"}} onClick={()=>setPermuteBlockEncryptedText(permuteBlockEncrypt( permuteBlockEncryptText, permuteBlockEncryptKey ))}>Encrypt</button>

        { (permuteBlockEncryptedText !== '') &&
          <p>çıktı: {
            permuteBlockEncryptedText}</p>}

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
        <button style={{marginLeft:"10px",marginRight:"10px",marginTop:"10px"}} onClick={()=>setPermuteBlockDecryptedText(permuteBlockDecrypt( permuteBlockDecryptText, permuteBlockDecryptKeyAList,permuteBlockDecryptKeyBList ))}>Decrypt</button>

        {(permuteBlockDecryptedText !== '') &&
          <p>çıktı: {permuteBlockDecryptedText}</p>}
      </div>
    </div>
  );
}

export default App;








