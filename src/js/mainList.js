const mealList = document.querySelector("#meal");

const searchBtn = document.querySelector("#search-btn");

searchBtn.addEventListener("click", getMealList);

export async function getMealList() {
    let searchInputText = document.querySelector("#search-input").value.trim();
    console.log(searchInputText);
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputText}`)
    .then(response => response.json())
    .then(data => {
        let html = "";
        if(data.meals) {
            console.log(data);
            data.meals.forEach(meal => {
                html += `
                    <div class="meal-item" data-id = "${meal.idMeal}">
                        <div class="meal-img">
                            <img src="${meal.strMealThumb}" alt="food image placeholder">
                        </div>
                        <div class="meal-name">
                            <h3>${meal.strMeal}</h3>
                            <a href="#" class="recipe-btn">Get Recipe</a>
                        </div>
                    </div>
              `;
            });
            mealList.classList.remove("notFound");
        } else {
            html = `Sorry, we did not find any meal with ${searchInputText}`;
            mealList.classList.add("notFound");
        }
        mealList.innerHTML = html;
    });
}

