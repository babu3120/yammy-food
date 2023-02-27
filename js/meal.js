const loadMeals = (searchFiled ) =>{
    const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchFiled}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
}
const displayMeals = meals =>{
    // console.log(meals);
    // step 1: container element 
    const mealContainer = document.getElementById('meal-container')
    mealContainer.innerHTML='';
    meals.forEach(meal =>{
        console.log(meal)
        // step 2: creat chield for each element
        const mealDiv = document.createElement('div')
        mealDiv.classList.add('col')
        // steap:3 set content of the chiled
        mealDiv.innerHTML=`
        <div class="card h-100">
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <button onclick="loadMealDetails(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#meal-modal">
        Details
       </button>
    </div>
      </div>
        
        `
        // step: 4 appendchiled
        mealContainer.appendChild(mealDiv);
    })
}

const searchMeal = () =>{
    const searchFiled = document.getElementById('search-filed').value;
    console.log(searchFiled);
    loadMeals(searchFiled);
}

const loadMealDetails = idMeal =>{
    const url =`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => displayModalDetails(data.meals[0]));
}
const displayModalDetails = meal =>{
    document.getElementById('mealModal').innerText=meal.strMeal;
    const mealDetails = document.getElementById('mealDetailsBody');
    mealDetails.innerHTML=`
    <img class = "img-fluid" src="${meal.strMealThumb}">
    
    `

}



loadMeals('fish');

