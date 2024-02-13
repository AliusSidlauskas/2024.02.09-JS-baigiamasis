const mobileMenu = document.getElementById('mobile-menu');
const burgerButton = document.getElementById('burger-btn');

const image = document.getElementById("image");
const make = document.getElementById("make");
const model = document.getElementById("model");
const fuel = document.getElementById("fuel");
const description = document.getElementById("description");
const price = document.getElementById("price");
const locationEl = document.getElementById("locationEl");

const button = document.getElementById("btn");
const message = document.getElementById('message');

const imageUrlRegex = /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp))$|^([a-zA-Z]:\\(?:\w+\\)*\w+\.(?:png|jpg|jpeg|gif|bmp))$/;
const priceRegex = /^\d+(\.\d{2})?$/;

button.addEventListener('click', async () => {
    // console.log('check')
    if (!imageUrlRegex.test(image.value)) {
        message.innerText = 'Check image URL';
        return;
    }
    if (!priceRegex.test(price.value)) {
        message.innerText = 'Check price format';
        return;
    }
    if(!image.value || !make.value || !model.value || !fuel.value || !description.value || !price.value || !locationEl.value){
        message.innerText = 'Fill all empty fields'
        return
    };
    const carData = {
        ImageUrl: image.value,
        Make: make.value,
        Model: model.value,
        Fuel: fuel.value,
        Description: description.value,
        Price: price.value,
        Location: locationEl.value
    }
    console.log(carData)

    const response = await fetch('https://65c5d0cae5b94dfca2e056ff.mockapi.io/cars', {
        method: 'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(carData),
})
const addedCar = await response.json();

    message.innerText = 'Add has been added successfully'
    
    setTimeout(() => {
    window.location.assign("/index.html");
  }, 4000);
console.log(addedCar)
})

burgerButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('active')
  })