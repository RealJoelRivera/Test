// Be able to click the button and show all of the burger names and their images
// Be able to see the Burger Detail

const burgersArray = burgers()
const burgerId = document.querySelector("#button");
const header = document.querySelector("h1")
header.setAttribute("id", "heading")

burgerId.addEventListener('click', buttonEventMethod)

function buttonEventMethod() {
  goThroughTheArray(burgersArray)
}

function goThroughTheArray(theBurgersFunction) {
  const burgerDiv = document.querySelector('#burgers')
  const newBurgerDiv = document.createElement('div')

  theBurgersFunction.forEach(burger => {
  return newBurgerDiv.innerHTML += `<h1>${burger.name}</h1> <p>Category: ${burger.category}</p> <img src="${burger.imgURL}" alt="Burger Names">`
  })
  burgerDiv.append(newBurgerDiv)
}
