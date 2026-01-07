// linked to index5.html

// ---Class List---
// element property  in javascript used to interact with an element's list of classes(CSS classes)
// Allows you to make reusable classes for many elements accross your webpage.

// add()
// remove()
// toggle(remove if present, add if not)
// replace(oldClass, newClass)
// contains()

const mybtn = document.getElementById("myButton");

mybtn.classList.add("enabled"); // using add() method to add a class for css
// mybtn.classList.remove("enabled");// using reomve() method to remove a class

mybtn.addEventListener("mouseover", event => {
    event.target.classList.add("hover"); // we can use toggle too: event.target.clasList.toggle("hover");, in mouse event too
});
mybtn.addEventListener("mouseout", event => {
    event.target.classList.remove("hover");
});

mybtn.addEventListener("click", event => {
    if(event.target.classList.contains("disabled")){
        event.target.textContent += "❌";
    }
    else{
        event.target.classList.replace("enabled", "disabled");// using replace() method  to change between classes
    }
});