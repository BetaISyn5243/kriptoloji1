import React,{useState} from "react";
import { encryptAffine} from "../../../utils/affine";

const AffineCrypt = () => {

    const [encryptAffineText, setEncryptAffineText] = useState( '' ); // Declare a state variable...
    const [encryptedAffineText, setEncryptedAffineText] = useState( '' ); // Declare a state variable...
    const [encryptAffineKeyA, setEncryptAffineKeyA] = useState( 0 ); // Declare a state variable...
    const [encryptAffineKeyB, setEncryptAffineKeyB] = useState( 0 ); // Declare a state variable...

    return (<div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
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

</div>);

}
export default AffineCrypt()