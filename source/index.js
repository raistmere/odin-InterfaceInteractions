
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
