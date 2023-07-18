const sortByNameBtn = document.getElementById('sortByName');
sortByNameBtn.addEventListener('click', sortByName);

const filterInput = document.getElementById('filterInput');
filterInput.addEventListener('input', filterByName);


// Function to sort the meal items by name
function sortByName() {
    const mealContainer = document.getElementById('meal');
    const mealItems = mealContainer.querySelectorAll('.meal-item');

    const sortedItems = Array.from(mealItems).sort((a, b) => {
        const mealA = a.querySelector('.meal-name h3').textContent.toLowerCase();
        const mealB = b.querySelector('.meal-name h3').textContent.toLowerCase();
        return mealA.localeCompare(mealB);
    });

    mealContainer.innerHTML = '';
    sortedItems.forEach(item => mealContainer.appendChild(item));
}

// Function to filter the meal items by name
function filterByName() {
    const filterInput = document.getElementById('filterInput');
    const filterValue = filterInput.value.toLowerCase();

    const mealContainer = document.getElementById('meal');
    const mealItems = mealContainer.querySelectorAll('.meal-item');

    mealItems.forEach(item => {
        const mealName = item.querySelector('.meal-name h3').textContent.toLowerCase();
        if (mealName.includes(filterValue)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}