
/* =========================================== 
START JAVASCRIPT 6 PROJECT 
============================================== */
// A LOCAL DATA (YOU CAN USE AJAX)
const reviews = [
    {
        id: 1,
        name: "susan smith",
        job: "web developer",
        img:
            "https://images.unsplash.com/photo-1499323888381-7fd102a793de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=967&q=80",
        text: "I like this content Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde voluptates beatae voluptatibus exercitationem ex. Incidunt, enim voluptates? Est non omnis provident consequatur quidem mollitia explicabo, iure facere autem voluptatem cumque.",

    },
    {
        id: 2,
        name: "anna jhonson",
        job: "graphic designer",
        img:
            "https://images.unsplash.com/photo-1514960919797-5ff58c52e5ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=455&q=80",
        text: "Helvitca artisan Unde voluptates beatae voluptatibus exercitationem ex. Incidunt, enim voluptates? Est non omnis provident consequatur quidem mollitia explicabo, iure facere autem voluptatem cumque.",
    },
    {
        id: 3,
        name: "peter jones",
        job: "intern",
        img:
            "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        text: "dolor sit amet consectetur adipisicing elit. Unde voluptates beatae voluptatibus exercitationem ex. Incidunt, enim voluptates? Est non omnis provident consequatur quidem mollitia explicabo, iure facere autem voluptatem cumque.",
    },
    {
        id: 4,
        name: "bill anderson",
        job: "Manager",
        img:
            "https://images.unsplash.com/photo-1590086782792-42dd2350140d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80",
        text: "Unde voluptates beatae voluptatibus exercitationem ex. Incidunt, enim voluptates? Est non omnis provident consequatur quidem mollitia explicabo, iure facere autem voluptatem cumqueolor sit amet consectetur adipisicing elit.",
    },
    {
        id: 5,
        name: "john kevin",
        job: "ux designer",
        img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
        text: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi culpa eius atque a ipsa praesentium illo accusantium aliquam dolorem iusto repellat quasi aspernatur commodi aliquid, id porro tempore earum quia.",
    }

];

//select items
let img = document.getElementById("person-img");
let author = document.getElementById("author");
let job0 = document.getElementById("job");
let info = document.getElementById("info");

// select buttons
let prevBtn = document.querySelector(".prev-btn");
let nextBtn = document.querySelector(".next-btn");
let randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}
// show next person
nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
}
    showPerson(currentItem);
});
// show random person
randomBtn.addEventListener("click", function () {
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
});
/* =========================================== 
END JAVASCRIPT 6 PROJECT 
============================================== */
