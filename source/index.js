// 
// DROP DOWN MENU
// 

//Find all references of of a dropDownMenu in the DOM
const dropDownMenus = document.querySelectorAll('.dropDownMenu');

// We want to add an event listener to all drop down menus in the DOM by
// looping through the dropDownMenus reference.
dropDownMenus.forEach(dropDownMenu => {
    // This handles mouse enter state and what we want to do when that happens.
    // Allows the menu to be seen
    dropDownMenu.addEventListener("mouseenter", function(e)
    {
        console.log("Enter");
        dropDownMenu.querySelector(".subMenu").classList.toggle("hidden");
    })
    // This handles mouse lead state and what we want to do when that happens.
    // Allows the menu to be hidden
    dropDownMenu.addEventListener('mouseleave', function(e)
    {
        console.log("Exit");
        dropDownMenu.querySelector(".subMenu").classList.toggle("hidden");
    })
});


// 
// IMAGE CAROUSEL 
//

// 
// DOM references

const imageFrame = document.querySelector(".imageFrame");
const leftArrow = document.querySelector(".leftArrow");
const rightArrow = document.querySelector(".rightArrow");
const imageList = document.querySelectorAll(".image");
const navCircleList = document.querySelectorAll(".navCircle");
console.log(navCircleList);

// 
// Variables
let autoChangeInterval = null;
let position = 0; // This keeps track of our current position on the carousel

// 
// Event listeners

//This handles the left arrow on the carousel
leftArrow.addEventListener("click", function(e)
{
    console.log("Left arrow pressed");
    // Decrease our position in the carousel
    if(position === 0)
    {
        position = (imageList.length-1);
    }
    else
    {
        position--;
    }
    // Then we go ahead and change the image based on that position
    changeImage(position);

    // We want to make sure to also update the navCircle on the carousel
    changeNavCircle(position);
});

//This handles the right arrow on the carousel
rightArrow.addEventListener("click", function(e)
{
    console.log("Right arrow pressed");

    // Increase our position in the carousel
    if(position === (imageList.length-1))
    {
        position = 0;
    }
    else
    {
        position++;
    }
    // Then we go ahead and change the image based on that position
    changeImage(position);

    // We want to make sure to also update the navCircle on the carousel
    changeNavCircle(position);
});

// This handles the navCircles on the carousel and making sure to
// add an eventlistener that will change the image upon click
for (let i = 0; i < navCircleList.length; i++) 
{
    navCircleList[i].addEventListener("click", function(e)
    {
        changeImage(i);
        // We want to make sure to also update the navCircle on the carousel
        changeNavCircle(i);
        // We also wan to make sure that the position in the imageList matches
        position = i;
        // We also want to reset the autoChangeInterval so we don't have weird image flickering
        // when changing the image
        autoChangeImage();
    });
}

// 
// Functions

// This function handles changing the image
function changeImage(pos)
{
    // Make sure all images are hidden
    imageList.forEach(element => {
        element.classList.add("hidden")
    });

    // We want to make sure the correct image matches the position
    // in the carousel
    imageList[pos].classList.toggle("hidden");

    // We also want to reset the autoChangeInterval so we don't have weird image flickering
    // when changing the image
    autoChangeImage();
}

// This function handles changing the highlight on the navCircle to show
// the current position.
function changeNavCircle(pos)
{
    // Make sure all the navCircles are not highlighted (basically a restart)
    navCircleList.forEach(element => {
        element.classList.remove("highlight");
    });

    // Highlight the current position on the navCircleList
    navCircleList[pos].classList.toggle("highlight");
}

// This function handles auto changing the image on an interval
function autoChangeImage()
{
    // We want to clear any previous interval (Basically a reset)
    clearInterval(autoChangeInterval);
    // Create a new interval and set it
    autoChangeInterval = setInterval(function(e)
    {
        rightArrow.click();
    }, 5000);
}

//
// Initialization
changeNavCircle(position); //We want to make sure that the first navCircle is highlighted
// We want to set the init interval for auto changing the image
autoChangeImage();
