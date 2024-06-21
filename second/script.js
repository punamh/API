fetch(`https://reqres.in/api/users?page=2`)
.then((res) => res.json())
.then((data) => {
    console.log(data)
    displaydata(data.data)
})
.catch((error) => console.log(error))

let container = document.getElementById("container")

function displaydata(arr){

    arr.forEach((ele) => {
  let box=document.createElement("div")

  let email = document.createElement("p")
  email.innerText = ele.email;

  let first_name = document.createElement("h4")
  first_name.innerText=ele.first_name;

  let last_name = document.createElement("h4")
  last_name.innerText=ele.last_name;
  
  let avatar =document.createElement("img")
  avatar.src = ele.avatar;
   
  
  
  box.append(email,first_name,last_name,avatar,)
  container.append(box)

  })


}