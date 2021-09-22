// @ts-check


export function needsLicense(kind) {
  if (kind === 'car' || kind === 'truck' ) return true
  else return false
}


export function chooseVehicle(option1, option2) {
  if (option1[0]< option2[0]) return option1 + ' is clearly the better choice.'
  else return option2 + ' is clearly the better choice.'
}

/**
 * Calculates an estimate for the price of a used vehicle in the dealership
 * based on the original price and the age of the vehicle.
 *
 * @param {number} originalPrice
 * @param {number} age
 * @returns expected resell price in the dealership
 */
export function calculateResellPrice(originalPrice, age) {
  if (age < 3) return originalPrice*0.8
  else if (age > 10) return originalPrice*0.5
  else return originalPrice*0.7
}
