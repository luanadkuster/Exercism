// @ts-check



export function dayRate(ratePerHour) {
  return(ratePerHour * 8);
}

export function monthRate(ratePerHour, discount) {
  return Math.ceil(ratePerHour * 8 * 22 * (1-discount));
}

export function daysInBudget(budget, ratePerHour, discount) {
    return Math.trunc((budget/(1-discount))/(ratePerHour*8));
}


