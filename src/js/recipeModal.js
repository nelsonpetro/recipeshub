import { saveRecipe } from "./saveRecipes";

const mealList = document.querySelector("#meal");
const mealDetailsContent = document.querySelector(".meal-details-content");
const recipeCloseBtn = document.querySelector("#recipe-close-btn");
const saveBtn = document.querySelector("#recipe-save-btn");
let mealData;

recipeCloseBtn.addEventListener("click", () => {
    mealDetailsContent.parentElement.classList.remove("showRecipe");
});

mealList.addEventListener("click", getMealRecipe);

function getMealRecipe(e) {
    e.preventDefault();
    if(e.target.classList.contains("recipe-btn")){
        let mealItem = e.target.parentElement.parentElement;
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`)
        .then(response => response.json())
        .then(data => {
            mealData = data;
            mealRecipeModal(mealData.meals);
        });
    }
}

function mealRecipeModal(meal) {
    meal = meal[0];
    let html = `
        <h2 class="recipe-title">${meal.strMeal}</h2>
        <p class="recipe-category">${meal.strCategory}</p>
        <div class="recipe-instruct">
            <h3>Instructions</h3>
            <p>${meal.strInstructions}</p>
        </div>
        <div class="recipe-meal-img">
            <img src="${meal.strMealThumb}" alt="food placeholder image">
        </div>
        <div class="recipe-link">
            <a href="${meal.strYoutube}" target="_blank">Watch Video</a>
        </div>
    `;
    mealDetailsContent.innerHTML = html;
    mealDetailsContent.parentElement.classList.add("showRecipe");
}

saveBtn.addEventListener("click",() => saveRecipe(mealData.meals[0]));



