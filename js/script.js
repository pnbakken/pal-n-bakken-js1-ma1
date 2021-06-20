const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

// Question 1

let cat = {
    complain: function() {
        console.log("meow");
    }
}
cat.complain();

// Question 2

let heading = document.querySelector("h3");
heading.innerHTML = "Updated " + heading.innerHTML;

// Question 3

heading.style.fontSize = "2em";

// Question 4

heading.classList.add("subheading");

// Question 5

let paragraphs = document.querySelectorAll("p");
for (var paragraph of paragraphs) {
    paragraph.style.color = "red";
}

// Question 6

let resultsContainer = document.querySelector(".results");
resultsContainer.style.background = "yellow";
resultsContainer.innerHTML = "<p>New paragraph</p>";

// Question 7

function logList(list) {
    for (var item of list) {
        console.log(item.name);
    }
}
logList(cats);

// Question 8

function createCats(catList) {
    var html = "";
    for (var specimen of catList) {
        var specimenName = "Unknown";
        if (specimen.name) {
            specimenName = specimen.name;
        }
        var specimenAge = "Unknown";
        if (specimen.age) {
            specimenAge = specimen.age;
        }
        html += `<div class="cat">
                <h5>Cat name: ${specimenName}</h5>
                <p>Age: ${specimenAge}</p>
                </div>`;
    }
    return html;
}

document.querySelector(".cat-container").innerHTML = createCats(cats);