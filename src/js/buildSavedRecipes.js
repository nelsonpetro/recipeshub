import { getLocalStorage } from "./localStorage";

let savedRecipes = document.querySelector(".recipe-cont");

function buildSavedRecipes(){
    let recipes = getLocalStorage("saved-recipes");
    let html = "";
    recipes.forEach(meal => {
        html += `
            <div class="meal-item-saved">
                <div class="meal-img-saved">
                    <img src="${meal.strMealThumb}" alt="food image placeholder">
                </div>
                <div class="meal-name-saved">
                    <h3>"${meal.strMeal}"</h3>
                    <a href="${meal.strYoutube}" class="recipe-btn-saved">Watch Video</a>
                </div>
                <div class="meal-instruct-saved">
                    <h3>Instructions</h3>
                    <p>"${meal.strInstructions
                    }"</p>
                </div>
                <div class="del-btn">
                    <i class="fa-solid fa-trash"></i>
                </div>
            </div>
        `;
        savedRecipes.innerHTML = html;
    });
}

buildSavedRecipes();
