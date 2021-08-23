const periodoOrbital = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1.0, // todos os demais períodos são baseados no período da Terra sendo igual a 1
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132
};
const periodoTerraEmSegundos = 31557600;
export const age = (planeta, períodoTerrestre) => {
  const idadeNoplaneta = períodoTerrestre / periodoTerraEmSegundos / periodoOrbital[planeta];
  const idadeFloatPrecisao2 = Number.parseFloat(idadeNoplaneta.toFixed(2));
  return idadeFloatPrecisao2;
};
