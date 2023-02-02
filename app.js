let cocktailName = document.querySelector('.cocktail-title');
let cocktailImg = document.querySelector('.cocktail-img');
let cocktailIngredients = document.querySelector('.cocktail-ingredients');
let cocktailDirections = document.querySelector('.cocktail-directions');


let url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

fetch(url)
.then((res) => {
    if (res.ok) {
        res.json().then((data) => {
            // Get cocktail 
            let cocktail = data.drinks[0];

            // Log cocktail 
            console.log(cocktail);

            // Set cocktail name
            cocktailName.textContent = cocktail.strDrink;
            
            // Set cocktail img
            cocktailImg.src = cocktail.strDrinkThumb;


            // Set directions 
            cocktailDirections.textContent = cocktail.strInstructions


            // Loop through and set ingredients 
            for(let i = 1; i < 16; i++) {

                 // Create li
                let li = document.createElement('li');

                if (cocktail[`strIngredient${i}`] === null) {
                    break;
                }

                if (cocktail[`strMeasure${i}`] === 0 || cocktail[`strMeasure${i}`] === null) {
                    break;
                }

                li.innerText = cocktail[`strMeasure${i}`] + ' : ' + cocktail[`strIngredient${i}`];

                // Append li 
                cocktailIngredients.appendChild(li);

              

            }
        })
    } else {
        throw new Error(`Something went wrong: ${res.status}`)
    }
}).catch((err) => {
    console.log(err);
})
