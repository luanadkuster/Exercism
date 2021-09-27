/// <reference path="./global.d.ts" />
// @ts-check


export function getFirstCard(deck) {
  const cartas = [...deck];
  return cartas[0];
}


export function getSecondCard(deck) {
  const cartas = [...deck];
  return cartas[1];
}



export function swapTopTwoCards(deck) {
  const cartas = [...deck];
  cartas[0] = deck[1];
  cartas[1] = deck[0];
  return cartas
}


export function discardTopCard([card1, ...deck]) {
  return [card1, deck]
}


export function insertFaceCards([card1, ...deck]) {
  const faceCards = ['jack', 'queen', 'king']
  return [card1, ...faceCards, ...deck]
}
