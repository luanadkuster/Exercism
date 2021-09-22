// @ts-check

export class ArgumentError extends Error {}

export class OverheatingError extends Error {
  constructor(temperature) {
    super(`The temperature is ${temperature} ! Overheating !`);
    this.temperature = temperature;
  }
}


export function checkHumidityLevel(humidityPercentage) {
  if (humidityPercentage>70)
  throw new Error();
}


export function reportOverheating(temperature) {
  if(temperature > 500){
  throw new OverheatingError(temperature)}
  if(temperature == null){
  throw new ArgumentError()}
  

}


export function monitorTheMachine(actions) {
  try {
    actions.check() 
} catch (e) {
    if (e instanceof OverheatingError) {
      if(e.temperature < 600) return actions.alertOverheating()
      else return actions.shutdown()
    } else if (e instanceof ArgumentError) {
        return actions.alertDeadSensor()
    } else {
      throw e
    }
}
  
};


