const container = document.getElementById("container");
const mensClothing = document.getElementById("mens-clothing");
const womensClothing = document.getElementById("womens-clothing");
const electronics = document.getElementById("electronics");
const jewelry = document.getElementById("jewelery");

const cardInfo = (element, category) => {
    const cardInnerHTML = `
    <div id="${category}Container">
      <div class="image"><img src="${element.image}"></div>
      <div class="title">${element.title}</div>
      <div class="desc"><strong>Description:<br></strong> ${element.description}</div>
      <div class="btn-container"><button>Buy: ${element.price} $</button></div>
    </div>`;
    return cardInnerHTML;
};

const handleData = (json, category) => {
    let container;
    switch (category) {
        case "men's clothing":
            container = mensClothing;
            break;
        case "women's clothing":
            container = womensClothing;
            break;
        case "electronics":
            container = electronics;
            break;
        case "jewelery":
            container = jewelry;
            break;
    }
    json.forEach(element => {
        const card = cardInfo(element, category);
        container.innerHTML += card;
    });
};

const fetchData = (category) => {
    if (sessionStorage.getItem(`${category}Products`)) {
        handleData(JSON.parse(sessionStorage.getItem(`${category}Products`)), category);
    } else {
        fetch(`https://fakestoreapi.com/products/category/${category}`)
            .then(res => res.json())
            .then((json) => {
                handleData(json, category);
                sessionStorage.setItem(`${category}Products`, JSON.stringify(json));
            });
    }
}

fetchData("men's clothing");
fetchData("women's clothing");
fetchData("electronics");
fetchData("jewelery");

//Бонус++: Направете Login/Register опција зачувувајќи ги податоците за корисникот на localStorage, и ако корисникот е логиран, направете кошничка со производите.
//Реакција++: https://www.youtube.com/watch?v=umDr0mPuyQc



//======================== OLD CODE ==============================//

// const container = document.getElementById("container");
// const mensclothing = document.getElementById("mens-clothing");
// const womensclothing = document.getElementById("womens-clothing");
// const electronics = document.getElementById("electronics");
// const jewelery = document.getElementById("jewelery");

// function cardInfoMale(element) {
//     const maleInnerHTML = `
//     <div id="maleContainer">
//     <div class="image"><img src="${element.image}"></div>
//     <div class="title">${element.title}</div>
//     <div class="desc"><strong>Description:<br></strong> ${element.description}</div>
//     <div class="btn-container"><button>Buy: ${element.price} $</button></div>
//     </div>
//     `
//     return maleInnerHTML;
// };

// function cardInfoFemale(element) {
//     const femaleInnerHTML = `
//     <div id="femaleContainer">
//     <div class="image"><img src="${element.image}"></div>
//     <div class="title">${element.title}</div>
//     <div class="desc"><strong>Description:<br></strong> ${element.description}</div>
//     <div class="btn-container"><button>Buy: ${element.price} $</button></div>
//     </div>
//     `
//     return femaleInnerHTML;
// };

// function cardInfoElectronics(element) {
//     const electronicsInnerHTML = `
//     <div id="electronicsContainer">
//     <div class="image"><img src="${element.image}"></div>
//     <div class="title">${element.title}</div>
//     <div class="desc"><strong>Description:<br></strong> ${element.description}</div>
//     <div class="btn-container"><button>Buy: ${element.price} $</button></div>
//     </div>
//     `
//     return electronicsInnerHTML;
// };

// function cardInfoJewelery(element) {
//     const jeweleryInnerHTML = `
//     <div id="jeweleryContainer">
//     <div class="image"><img src="${element.image}"></div>
//     <div class="title">${element.title}</div>
//     <div class="desc"><strong>Description:<br></strong> ${element.description}</div>
//     <div class="btn-container"><button>Buy: ${element.price} $</button></div>
//     </div>
//     `
//     return jeweleryInnerHTML;
// };

// const handleData = (category, json) => {
//     if (category === "men's clothing") {
//         json.forEach(element => {
//             const elementsHTML = cardInfoMale(element);
//             mensclothing.innerHTML += elementsHTML;
//         });
//     } else if (category === "women's clothing") {
//         json.forEach(element => {
//             const elementsHTML = cardInfoFemale(element);
//             womensclothing.innerHTML += elementsHTML;
//         });
//     } else if (category === "electronics") {
//         json.forEach(element => {
//             const elementsHTML = cardInfoElectronics(element);
//             electronics.innerHTML += elementsHTML;
//         });
//     } else if (category === "jewelery") {
//         json.forEach(element => {
//             const elementsHTML = cardInfoJewelery(element);
//             jewelery.innerHTML += elementsHTML;
//         });
//     }
// };

// const allProducts = () => {
//     const sessionKey = 'allProducts';
//     const storedData = sessionStorage.getItem(sessionKey);

//     if (storedData) {
//         console.log(JSON.parse(storedData));
//     } else {
//         fetch(`https://fakestoreapi.com/products`)
//             .then(res => res.json())
//             .then(json => {
//                 console.log(json);
//                 sessionStorage.setItem(sessionKey, JSON.stringify(json));
//             });
//     }
// }
// allProducts();

// const fetchData = (category) => {
//     const sessionKey = `${category}Products`;
//     const storedData = sessionStorage.getItem(sessionKey);

//     if (storedData) {
//         handleData(category, JSON.parse(storedData));
//     } else {
//         fetch(`https://fakestoreapi.com/products/category/${category}`)
//             .then(res => res.json())
//             .then((json) => {
//                 handleData(category, json);
//                 sessionStorage.setItem(sessionKey, JSON.stringify(json));
//             });
//     }
// };

// fetchData("men's clothing");
// fetchData("women's clothing");
// fetchData("electronics");
// fetchData("jewelery");