let catagory = document.getElementById("get-category-data");
let ingredient = document.getElementById("get-ingredient-data");

catagory.addEventListener("click",function(){
    categorydata();
})

async function categorydata(){

try{

let response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
let data = await response.json();
console.log(data.meals)


}

catch(error){

console.log(error)

}

}



ingredient.addEventListener("click",function(){
    ingredientdata();
})

async function ingredientdata(){

try{

let response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast')
let data = await response.json();
console.log(data.meals)


}

catch(error){

console.log(error)

}

}

