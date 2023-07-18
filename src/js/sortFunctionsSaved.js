const sortByNameBtn = document.getElementById('sortByNameSaved');
sortByNameBtn.addEventListener('click', sortByName);

const filterInput = document.getElementById('filterInputSaved');
filterInput.addEventListener('input', filterByName);


// Function to sort the meal items by name
function sortByName() {
    const recipeContainer = document.querySelector('.recipe-cont');
    const mealItems = recipeContainer.querySelectorAll('.meal-item-saved');

    const sortedItems = Array.from(mealItems).sort((a, b) => {
        const mealA = a.querySelector('.meal-name-saved h3').textContent.toLowerCase();
        const mealB = b.querySelector('.meal-name-saved h3').textContent.toLowerCase();
        return mealA.localeCompare(mealB);
    });

    recipeContainer.innerHTML = '';
    sortedItems.forEach(item => recipeContainer.appendChild(item));
}

// Function to filter the meal items by name
function filterByName() {
    const filterInput = document.getElementById('filterInputSaved');
    const filterValue = filterInput.value.toLowerCase();

    const recipeContainer = document.querySelector('.recipe-cont');
    const mealItems = recipeContainer.querySelectorAll('.meal-item-saved');

    mealItems.forEach(item => {
        const mealName = item.querySelector('.meal-name-saved h3').textContent.toLowerCase();
        if (mealName.includes(filterValue)) {
            item.style.display = 'grid';
        } else {
            item.style.display = 'none';
        }
    });
}
