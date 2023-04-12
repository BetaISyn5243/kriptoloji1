import {decryptAffine} from "../../../utils/affine";
import React, {useState} from "react";

const AffineDecrypt = () => {
  const [decryptAffineText, setDecryptAffineText] = useState(''); // Declare a state variable...
  const [decryptAffineKeyA, setDecryptAffineKeyA] = useState(0); // Declare a state variable...
  const [decryptAffineKeyB, setDecryptAffineKeyB] = useState(0); // Declare a state variable...

  return (<>
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
    {(decryptAffineKeyB !== 0) && (decryptAffineKeyA !== 0) && (decryptAffineText !== '') &&
      <p>çıktı: {decryptAffine(decryptAffineText, decryptAffineKeyA, decryptAffineKeyB)}</p>}
  </>)
}
export default AffineDecrypt()