import { getLocalStorage, setLocalStorage } from "./localStorage";

let savedRecipes = document.querySelector(".recipe-cont");

export async function buildSavedRecipes(){
    let recipes = getLocalStorage("saved-recipes");
    let html = "";
    recipes.forEach(meal => {
        html += `
            <div class="meal-item-saved" data-id="${meal.idMeal}">
                <div class="meal-img-saved">
                    <img src="${meal.strMealThumb}" alt="food image placeholder">
                </div>
                <div class="meal-name-saved">
                    <h3>"${meal.strMeal}"</h3>
                    <a href="${meal.strYoutube}" class="recipe-btn-saved">Watch Video</a>
                </div>
                <div class="meal-instruct-saved">
                    <a href="#" class="recipe-btn">Get Recipe</a>
                </div>
                <div class="del-btn">
                    <i class="fa-solid fa-trash"></i>
                </div>
            </div>
        `;
    });
    savedRecipes.innerHTML = html;
    deleteRecipe();
}

function deleteRecipe(){
    
    let deleteBtn = document.querySelectorAll(".del-btn i");
    deleteBtn.forEach((item) => {
        item.addEventListener("click", remove);
    });

    function remove(event) {

        let mealItem = event.currentTarget.closest(".meal-item-saved");
        if (!mealItem) return;
    
        let savedRecipes = getLocalStorage("saved-recipes");
        let index = [...savedRecipes].findIndex(meal => meal.idMeal === mealItem.dataset.id);
    
        if (index !== -1) {
            savedRecipes.splice(index, 1);
            setLocalStorage("saved-recipes", savedRecipes);
            mealItem.remove();
        }
    }
}

buildSavedRecipes();
