// @ts-check

import { arch } from "os";



export function canExecuteFastAttack(knightIsAwake) {
  return !knightIsAwake;
}

export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
  return(knightIsAwake || archerIsAwake || prisonerIsAwake);
}

export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  return(prisonerIsAwake && !archerIsAwake);
}


export function canFreePrisoner(
  knightIsAwake,
  archerIsAwake,
  prisonerIsAwake,
  petDogIsPresent
) 
{
 if (prisonerIsAwake && !knightIsAwake && !archerIsAwake) return true
 if (!archerIsAwake && petDogIsPresent) return true
 else return false 
}
