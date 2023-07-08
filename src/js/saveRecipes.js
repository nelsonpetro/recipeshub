import { setLocalStorage, getLocalStorage } from "./localStorage";

export function saveRecipe(data) {
    const currentRecipes = getLocalStorage("saved-recipes") || [];
    const updatedRecipes = [...currentRecipes, data];
    console.log(updatedRecipes);
    setLocalStorage("saved-recipes", updatedRecipes);
}