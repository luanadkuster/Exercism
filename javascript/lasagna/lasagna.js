// @ts-check

export const EXPECTED_MINUTES_IN_OVEN = 40;
const PREPARATION_MINUTES_PER_LAYER = 2;

export function remainingMinutesInOven(actualMinutesInOven) {
  return (EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven);
};

export function preparationTimeInMinutes(numberOfLayers) {
  return (PREPARATION_MINUTES_PER_LAYER * numberOfLayers);
};

export function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
  return (numberOfLayers * 2 + actualMinutesInOven );
};
