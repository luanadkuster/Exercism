/// <reference path="./global.d.ts" />
// @ts-check

export function cookingStatus(time) {
    if (time == 0) return 'Lasagna is done.'
    if (time == null) return 'You forgot to set the timer.'
    else return 'Not done, please wait.'
  };


export function preparationTime(layer, timePerLayer = 2) {
    let tempoTotal = layer.length * timePerLayer  
    return tempoTotal
};  

export function quantities(ingredients) {
    let noodlesLayers = 0
    let sauceLayers = 0
    
    for (let i = 0; i < ingredients.length; i++) {
        if(ingredients[i] == 'sauce'){
            sauceLayers ++
        }  
        
        if (ingredients[i] == 'noodles'){
            noodlesLayers ++
        } 
    };
    
    const obj = {
        noodles: noodlesLayers*50,
        sauce: sauceLayers*0.2
    }
    return obj
};

export function addSecretIngredient(friendsList, myList) {
    myList.push(friendsList[friendsList.length-1])
};  

export function scaleRecipe(recipe, scale) {
    for (const key in recipe) {
        recipe[key] = recipe[key]*scale/2;      
    }
    return recipe 
};