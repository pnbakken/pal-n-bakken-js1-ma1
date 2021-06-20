// Question 1

let cat = {
    complain: function() {
        console.log("meow");
    }
}

// Question 2

let heading = document.querySelector("h3");
heading.innerHTML = "Updated " + heading.innerHTML;

// Question 3

heading.style.fontSize = "2em";

// Question 4

heading.classList.add("subheading");

// Question 5

let paragraphs = document.querySelectorAll("p");
for (let paragraph of paragraphs) {
    paragraph.style.color = "red";
}

// Question 6

