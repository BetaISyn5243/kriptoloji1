// Javascript code to implement Hill Cipher
const lowerA = "abcçdefgğhiıjklmnoöprsştuüvyz"
// Following function generates the
// key matrix for the key string
function getKeyMatrix(key, keyMatrix) {
  let k = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      keyMatrix[i][j] = lowerA.indexOf(key[k]);
      k++;
    }
  }
}

// Following function encrypts the message
function encrypt(cipherMatrix, keyMatrix, messageVector) {
  let x, i, j;
  for (i = 0; i < 3; i++) {
    for (j = 0; j < 1; j++) {
      cipherMatrix[i][j] = 0;

      for (x = 0; x < 3; x++) {
        cipherMatrix[i][j] += keyMatrix[i][x] * messageVector[x][j];
      }

      cipherMatrix[i][j] = cipherMatrix[i][j] % 29;
    }
  }
}

// Function to implement Hill Cipher
export function HillCipher(message, key) {
  // Get key matrix from the key string
  let keyMatrix = new Array(3);
  for (let i = 0; i < 3; i++) {
    keyMatrix[i] = new Array(3);
    for (let j = 0; j < 3; j++) keyMatrix[i][j] = 0;
  }
  getKeyMatrix(key, keyMatrix);

  let messageVector = new Array(3);
  for (let i = 0; i < 3; i++) {
    messageVector[i] = new Array(1);
    messageVector[i][0] = 0;
  }

  // Generate vector for the message
  for (let i = 0; i < 3; i++) messageVector[i][0] = lowerA.indexOf(message[i]);

  let cipherMatrix = new Array(3);
  for (let i = 0; i < 3; i++) {
    cipherMatrix[i] = new Array(1);
    cipherMatrix[i][0] = 0;
  }

  // Following function generates
  // the encrypted vector
  encrypt(cipherMatrix, keyMatrix, messageVector);

  let CipherText = "";

  // Generate the encrypted text from
  // the encrypted vector
  for (let i = 0; i < 3; i++) CipherText += lowerA.at(cipherMatrix[i][0]);

  // Finally print the ciphertext
  return CipherText
}

