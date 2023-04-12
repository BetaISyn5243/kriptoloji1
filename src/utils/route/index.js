export function rotaEncrypt(sentence, x, y, mod) {

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

export function rotaDecrypt(sentence, x, y, mod) {
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
    }
    else if ( mod === 1 ) {
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
