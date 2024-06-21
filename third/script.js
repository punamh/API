let URL = 'https://www.omdbapi.com/?i=tt3896198&apikey=95c661d0'


let main = document.getElementById("box");
let button = document.getElementById("search");

button.addEventListener("click",function(){
   getData();
});


async function getData(){
let query = document.getElementById("input1").value;

try{

    let response = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=95c661d0&s=${query}`);
   let data = await response.json();
  console.log(data);

}

catch(error){

}

}
