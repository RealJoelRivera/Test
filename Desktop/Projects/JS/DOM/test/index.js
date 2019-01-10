// this was my test to see how I can add an event listener to the button
// const button = document.getElementById("button");
// button.addEventListener("click", event => {
//   button.style.color = 'red'
//   console.log("Red")
// });


// we have a JSON file with data on the burgers
 const burgersArray = burgers()

// we have CSS styling for the text color
const header = document.querySelector("h1")
header.setAttribute("id", "heading")



// helper method Eric created to get HTML to show on page
function renderBurgerHTML(burger) {
  return `<h4>${burger.name}</h4> <p>Category: ${burger.category}</p> </p> <img src=${burger.imgURL}>`;
}

// this is iterating through each burger from the JSON file
burgersArray.forEach(burger => {
  createBurger(burger) // we're invoking the function createBurger on the burger function from below
})

function createBurger(burger) { // this is creating the burger, styling it, and the rendering onto the page

  // 1. create the Burgers
      // we're selecting the burger id that already exists in the HTML
  const burgerDiv = document.querySelector("#burgers");

      // createElement: a new div
  const burgermenuItem = document.createElement("div");

  // 2. Style the element
      // we're taking the saved variable and adding HTML to it
  burgermenuItem.innerHTML = renderBurgerHTML(burger);

  // 3. slap it on the DOM
      // renders the content onto the HTML. In this case, we're new 'div' element we created on line 35
  burgerDiv.append(burgermenuItem);

}


  // perform an event on the button id to show the array of objects
  // find the button
  // set it to a variable
  // perform an event listener on the button to iterate through the burgers function
  // return all of the burgers





// DELEGATION:

  // Find a stable parent (element that will always be on the DOM)
  // Bind an event listener to that stable parent
  // In the event listener, figure out if you clicked on a child of the type you're after
  // Do the thing (or not, if it's the wrong type of child)


// const button = document.getElementById('button')
// button.addEventListener('click', event => {
//   // toggle the burgerDiv to page
//
// })






// EVENT DELEGATION
// add one event listener to the list item's parent and handle the event there.
// This is possible because when an event is triggered,
// you get access to all kinds of info about that event in the event object.
// Including what the actual element was that triggered the event.
// This element is called the target.
// In this example, though the listener is attached the <ul> element,
// the target would come back as the actualy <li> that was clicked.
// Something to remeber,
// you want to use a conditional to check that the target is the element that you actually want to target

// const parent = document.getElementById('parent');
//
// parent.addEventListener('click', event => {
//
//   if (event.target.className === 'child') {
//
//     console.log(event.target.innerHTML)
//
//   }
//
// })

// Event delegation works because of eventPropagation / or event bubbling.
// When we click a <li> that click event travels up to the <ul> element
// and triggers the event handler that was placed there.
