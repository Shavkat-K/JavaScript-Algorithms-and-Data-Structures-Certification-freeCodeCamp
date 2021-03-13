function rot13(str) {
  let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let rot = 'NOPQRSTUVWXYZABCDEFGHIJKLM';
  let encoded = str.replace(/[A-Z]/gi, letter => alphabet[rot.indexOf(letter)])
  return encoded;
}

rot13("SERR PBQR PNZC!!!");