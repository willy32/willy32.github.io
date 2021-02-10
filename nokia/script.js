const text = document.getElementById("txtMessage");
const code = document.getElementById("txtCode");

const btnEncryprt = document.getElementById("btnEncrypt");
const btnClear = document.getElementById("btnClear");
const btnDecryprt = document.getElementById("btnDecrypt");

btnEncryprt.addEventListener("click", () => {
    code.value = Encrypt(text.value);
});
btnClear.addEventListener("click", () => {
    text.value = "";
    code.value = "";
});
btnDecryprt.addEventListener("click", () => {
    text.value = Decrypt(code.value);
});

function Decrypt(data){
    let decryptedData = "";

    data = data.split(' ');
    data.forEach(element => {
        switch(element){
            case "100":
                decryptedData += "1";
            break;
            case "101":
                decryptedData += ".";
            break;
            case "102":
                decryptedData += ",";
            break;
            case "103":
                decryptedData += "?";
            break;
            case "104":
                decryptedData += "!";
            break;
            case "105":
                decryptedData += "1";
            break;
            case "106":
                decryptedData += "@";
            break;
            case "107":
                decryptedData += "\'";
            break;
            case "108":
                decryptedData += "\"";
            break;
            case "109":
                decryptedData += "-";
            break;
            case "110":
                decryptedData += "(";
            break;
            case "111":
                decryptedData += ")";
            break;
            case "112":
                decryptedData += "/";
            break;
            case "113":
                decryptedData += ":";
            break;
            case "114":
                decryptedData += "_";
            break;
            case "115":
                decryptedData += ";";
            break;
            //////////////////////////////////////////////////// 
            //  
            ///////////////////////////////////////////////////
            case "200":
                decryptedData += "2";
            break;
            case "201":
                decryptedData += "a";
            break;
            case "202":
                decryptedData += "b";
            break;
            case "203":
                decryptedData += "c";
            break;
            case "204":
                decryptedData += "ä";
            break;
            case "205":
                decryptedData += "å";
            break;
            case "206":
                decryptedData += "2";
            break;
            //////////////////////////////////////////////////// 
            //  
            ///////////////////////////////////////////////////
            case "300":
                decryptedData += "3";
            break;
            case "301":
                decryptedData += "d";
            break;
            case "302":
                decryptedData += "e";
            break;
            case "303":
                decryptedData += "f";
            break;
            case "304":
                decryptedData += "é";
            break;
            case "305":
                decryptedData += "3";
            break;
            //////////////////////////////////////////////////// 
            //  
            ///////////////////////////////////////////////////
            case "400":
                decryptedData += "4";
            break;
            case "401":
                decryptedData += "g";
            break;
            case "402":
                decryptedData += "h";
            break;
            case "403":
                decryptedData += "i";
            break;
            case "404":
                decryptedData += "4";
            break;
            //////////////////////////////////////////////////// 
            //  
            ///////////////////////////////////////////////////
            case "500":
                decryptedData += "5";
            break;
            case "501":
                decryptedData += "j";
            break;
            case "502":
                decryptedData += "k";
            break;
            case "503":
                decryptedData += "l";
            break;
            case "504":
                decryptedData += "5";
            break;
            //////////////////////////////////////////////////// 
            //  
            ///////////////////////////////////////////////////
            case "600":
                decryptedData += "6";
            break;
            case "601":
                decryptedData += "m";
            break;
            case "602":
                decryptedData += "n";
            break;
            case "603":
                decryptedData += "o";
            break;
            case "604":
                decryptedData += "ö";
            break;
            case "605":
                decryptedData += "6";
            break;
            //////////////////////////////////////////////////// 
            //  
            ///////////////////////////////////////////////////
            case "700":
                decryptedData += "7";
            break;
            case "701":
                decryptedData += "p";
            break;
            case "702":
                decryptedData += "q";
            break;
            case "703":
                decryptedData += "r";
            break;
            case "704":
                decryptedData += "s";
            break;
            case "705":
                decryptedData += "ß";
            break;
            case "706":
                decryptedData += "7";
            break;
            //////////////////////////////////////////////////// 
            //  
            ///////////////////////////////////////////////////
            case "800":
                decryptedData += "8";
            break;
            case "801":
                decryptedData += "t";
            break;
            case "802":
                decryptedData += "u";
            break;
            case "803":
                decryptedData += "v";
            break;
            case "804":
                decryptedData += "ü";
            break;
            case "805":
                decryptedData += "8";
            break;
            //////////////////////////////////////////////////// 
            //  
            ///////////////////////////////////////////////////
            case "900":
                decryptedData += "9";
            break;
            case "901":
                decryptedData += "w";
            break;
            case "902":
                decryptedData += "x";
            break;
            case "903":
                decryptedData += "y";
            break;
            case "904":
                decryptedData += "z";
            break;
            case "905":
                decryptedData += "9";
            break;
            //////////////////////////////////////////////////// 
            //  
            ///////////////////////////////////////////////////
            case "000":
                decryptedData += "0";
            break;
            case "001":
                decryptedData += " ";
            break;
            case "002":
                decryptedData += "0";
            break;
            case "003":
                decryptedData += "\n";
            break;
            //////////////////////////////////////////////////// 
            //  
            ///////////////////////////////////////////////////
            case "011":
                decryptedData += ".";
            break;
            case "021":
                decryptedData += ",";
            break;
            case "031":
                decryptedData += "-";
            break;
            case "041":
                decryptedData += "!";
            break;
            case "051":
                decryptedData += "?";
            break;
            case "061":
                decryptedData += "@";
            break;
            case "071":
                decryptedData += "~";
            break;
            case "081":
                decryptedData += "_";
            break;
            case "091":
                decryptedData += "\n";
            break;
            //
            case "012":
                decryptedData += "\\";
            break;
            case "022":
                decryptedData += "/";
            break;
            case "032":
                decryptedData += "&";
            break;
            case "042":
                decryptedData += "\"";
            break;
            case "052":
                decryptedData += "\'";
            break;
            case "062":
                decryptedData += ";";
            break;
            case "072":
                decryptedData += "^";
            break;
            case "082":
                decryptedData += "|";
            break;
            case "092":
                decryptedData += ":";
            break;
            //
            case "013":
                decryptedData += "(";
            break;
            case "023":
                decryptedData += ")";
            break;
            case "033":
                decryptedData += "<";
            break;
            case "043":
                decryptedData += "{";
            break;
            case "053":
                decryptedData += "}";
            break;
            case "063":
                decryptedData += ">";
            break;
            case "073":
                decryptedData += "[";
            break;
            case "083":
                decryptedData += "]";
            break;
            case "093":
                decryptedData += "=";
            break;
            //
            case "014":
                decryptedData += "€";
            break;
            case "024":
                decryptedData += "$";
            break;
            case "034":
                decryptedData += "£";
            break;
            case "044":
                decryptedData += "§";
            break;
            case "054":
                decryptedData += "%";
            break;
            case "064":
                decryptedData += "¥";
            break;
            case "074":
                decryptedData += "*";
            break;
            case "084":
                decryptedData += "+";
            break;
            case "094":
                decryptedData += "#";
            break;
            //
            case "015":
                decryptedData += "¿";
            break;
            case "025":
                decryptedData += "¡";
            break;
            case "035":
                decryptedData += "¤";
            break;
            case "045":
                decryptedData += "¢";
            break;
            case "055":
                decryptedData += "«";
            break;
            case "065":
                decryptedData += "»";
            break;
            case "075":
                decryptedData += "®";
            break;
            case "085":
                decryptedData += "©";
            break;
            case "095":
                decryptedData += "°";
            break;
            //////////////////////////////////////////////////// 
            //  
            ///////////////////////////////////////////////////
            default:
                
            break;
        }
    });
    return decryptedData;
}

function Encrypt(data) {
    let encryptedData = "";

    data = data.split('');
    data.forEach(element => {
        switch(element){
            case '1':
                encryptedData += "100";
            break;
            //////////////////////////////////////////////////// 
            //  
            ///////////////////////////////////////////////////
            case '2':
                encryptedData += "200";
            break;
            case 'a':
                encryptedData += "201";
            break;
            case 'b':
                encryptedData += "202";
            break;
            case 'c':
                encryptedData += "203";
            break;
            case 'ä':
                encryptedData += "204";
            break;
            case 'å':
                encryptedData += "205";
            break;
            //////////////////////////////////////////////////// 
            //  
            ///////////////////////////////////////////////////
            case '3':
                encryptedData += "300";
            break;
            case 'd':
                encryptedData += "301";
            break;
            case 'e':
                encryptedData += "302";
            break;
            case 'f':
                encryptedData += "303";
            break;
            case 'é':
                encryptedData += "304";
            break;
            //////////////////////////////////////////////////// 
            //  
            ///////////////////////////////////////////////////
            case '4':
                encryptedData += "400";
            break;
            case 'g':
                encryptedData += "401";
            break;
            case 'h':
                encryptedData += "402";
            break;
            case 'i':
                encryptedData += "403";
            break;
            //////////////////////////////////////////////////// 
            //  
            ///////////////////////////////////////////////////
            case '5':
                encryptedData += "500";
            break;
            case 'j':
                encryptedData += "501";
            break;
            case 'k':
                encryptedData += "502";
            break;
            case 'l':
                encryptedData += "503";
            break;
            //////////////////////////////////////////////////// 
            //  
            ///////////////////////////////////////////////////
            case '6':
                encryptedData += "600";
            break;
            case 'm':
                encryptedData += "601";
            break;
            case 'n':
                encryptedData += "602";
            break;
            case 'o':
                encryptedData += "603";
            break;
            case 'ö':
                encryptedData += "604";
            break;
            //////////////////////////////////////////////////// 
            //  
            ///////////////////////////////////////////////////
            case '7':
                encryptedData += "700";
            break;
            case 'p':
                encryptedData += "701";
            break;
            case 'q':
                encryptedData += "702";
            break;
            case 'r':
                encryptedData += "703";
            break;
            case 's':
                encryptedData += "704";
            break;
            case 'ß':
                encryptedData += "705";
            break;
            //////////////////////////////////////////////////// 
            //  
            ///////////////////////////////////////////////////
            case '8':
                encryptedData += "800";
            break;
            case 't':
                encryptedData += "801";
            break;
            case 'u':
                encryptedData += "802";
            break;
            case 'v':
                encryptedData += "803";
            break;
            case 'ü':
                encryptedData += "804";
            break;
            //////////////////////////////////////////////////// 
            //  
            ///////////////////////////////////////////////////
            case '9':
                encryptedData += "900";
            break;
            case 'w':
                encryptedData += "901";
            break;
            case 'x':
                encryptedData += "902";
            break;
            case 'y':
                encryptedData += "903";
            break;
            case 'z':
                encryptedData += "904";
            break;
            //////////////////////////////////////////////////// 
            //  
            ///////////////////////////////////////////////////
            case '0':
                encryptedData += "000";
            break;
            case ' ':
                encryptedData += "001";
            break;
            case '\n':
                encryptedData += "003";
            break;
            //////////////////////////////////////////////////// 
            //  
            ///////////////////////////////////////////////////
            case '.':
                encryptedData += "011";
            break;
            case ',':
                encryptedData += "021";
            break;
            case '-':
                encryptedData += "031";
            break;
            case '!':
                encryptedData += "041";
            break;
            case '?':
                encryptedData += "051";
            break;
            case '@':
                encryptedData += "061";
            break;
            case '~':
                encryptedData += "071";
            break;
            case '_':
                encryptedData += "081";
            break;
            case '\n':
                encryptedData += "091";
            break;
            //
            case '\\':
                encryptedData += "012";
            break;
            case '/':
                encryptedData += "022";
            break;
            case '&':
                encryptedData += "032";
            break;
            case '"':
                encryptedData += "042";
            break;
            case '\'':
                encryptedData += "052";
            break;
            case ';':
                encryptedData += "062";
            break;
            case '^':
                encryptedData += "072";
            break;
            case '|':
                encryptedData += "082";
            break;
            case ':':
                encryptedData += "092";
            break;
            //
            case '(':
                encryptedData += "013";
            break;
            case ')':
                encryptedData += "023";
            break;
            case '<':
                encryptedData += "033";
            break;
            case '{':
                encryptedData += "043";
            break;
            case '}':
                encryptedData += "053";
            break;
            case '>':
                encryptedData += "063";
            break;
            case '[':
                encryptedData += "073";
            break;
            case ']':
                encryptedData += "083";
            break;
            case '=':
                encryptedData += "093";
            break;
            //
            case '€':
                encryptedData += "014";
            break;
            case '$':
                encryptedData += "024";
            break;
            case '£':
                encryptedData += "034";
            break;
            case '§':
                encryptedData += "044";
            break;
            case '%':
                encryptedData += "054";
            break;
            case '¥':
                encryptedData += "064";
            break;
            case '*':
                encryptedData += "074";
            break;
            case '+':
                encryptedData += "084";
            break;
            case '#':
                encryptedData += "094";
            break;
            //
            case '¿':
                encryptedData += "015";
            break;
            case '¡':
                encryptedData += "025";
            break;
            case '¤':
                encryptedData += "035";
            break;
            case '¢':
                encryptedData += "045";
            break;
            case '«':
                encryptedData += "055";
            break;
            case '»':
                encryptedData += "065";
            break;
            case '®':
                encryptedData += "075";
            break;
            case '©':
                encryptedData += "085";
            break;
            case '°':
                encryptedData += "095";
            break;
            //////////////////////////////////////////////////// 
            //  
            ///////////////////////////////////////////////////
            default:

            break;
        }
        encryptedData += " ";
    });
    return encryptedData.trim();
}

