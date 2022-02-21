var products = [
    {
        id:0,
        name:"Apples",
        price:"2.99",
        image:"https://banner2.kisspng.com/20180310/jyw/kisspng-plum-tomato-apple-fuji-vector-two-apples-5aa49732abbf96.2950483615207360507035.jpg",
        color:"red"
    },
    {
        id:1,
        name:"Bananas",
        price:"2.50",
        image:"https://icon2.kisspng.com/20180125/cyq/kisspng-banana-powder-fruit-cavendish-banana-banana-5a6a705e555d06.3110857015169250223497.jpg",
        color:"gold"
    },
    {
        id:2,
        name:"Oranges",
        price:"3.50",
        image: "https://icon2.kisspng.com/20180308/wlw/kisspng-south-africa-blood-orange-mandarin-orange-tangelo-south-africa-imports-of-oranges-5aa10d936cc6c7.6226563815205042114456.jpg",
        color:"orange"
    }
];

popUp = document.createElement("div");
popUp.classList.add("popUp");
popUp.innerHTML = "";


// allows user to exit popup
popUp.addEventListener("click", function () {
    popUp.style.display = "none";
    popUp.innerHTML = "";
});

document.body.appendChild(popUp);

for (let i = 0; i < this.products.length; i++) {
        this.ele = document.createElement("div");
        this.ele.classList.add("product");

        this.eleImage = document.createElement("img");
        this.eleImage.src = products[i].image;

        this.eleName = document.createElement("h3");
        this.eleName.innerHTML = "Name: " + products[i].name;

        this.elePrice = document.createElement("p");
        this.elePrice.innerHTML = "Price: $" + products[i].price;

        this.ele.addEventListener("click", function () {
            popUp.style.display = "flex";

            popUp.innerHTML = "<img src='" + products[i].image + "'>" + "Name: " + products[i].name + "<br> Price: $" + products[i].price;
        });

        console.log(products[i]);

        document.body.appendChild(this.ele);
        this.ele.appendChild(this.eleImage);
        this.ele.appendChild(this.eleName);
        this.ele.appendChild(this.elePrice);
}


// DO NOT EDIT THE ARRAY TO COMPLETE THE ASSIGNMENT

// Create a div and give it a class of "popUp". Append that div to the body

// If I click on the popUp div, it should hide it

// Create a div for each item in the array above

// inside each div, the product Name and Price should be written as "Name: value" and "Price: $#.##";

// inside each div, the product's image should be on top of the text

// when hovering over a product, its border color should change to the "color" of that product. Once you hover off, it should return to black

// When Clicking on a product, it should display the popUp Menu over all the content

// When clicking on the particular product, that products image, name, and price should be displayed inside the popUp div just like it does in its own product div. No other products' information should be shown.
