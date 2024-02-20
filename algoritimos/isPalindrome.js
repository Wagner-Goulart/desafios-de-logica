import { stringReverter } from "./inversorDeString.js";

const isPalidrome = (string) => {
  const invertedString = stringReverter(string);

  if (string !== invertedString) {
    return `${string} não é um palimdromo` ;
  }

  return `${string} é um palidromo`
};

console.log(isPalidrome("oi"));
