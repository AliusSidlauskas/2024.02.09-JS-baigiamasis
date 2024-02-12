const carId = localStorage.getItem("carId");
console.log(carId)
const mobileMenu = document.getElementById('mobile-menu');
const burgerButton = document.getElementById('burger-btn');

const image = document.getElementById("image");
const make = document.getElementById("make");
const model = document.getElementById("model");
const fuel = document.getElementById("fuel");
const description = document.getElementById("description");
const price = document.getElementById("price");
const locationEl = document.getElementById("location")

console.log('location', location)


const fetchCar = async () => {
  const response = await fetch(
    `https://65c5d0cae5b94dfca2e056ff.mockapi.io/cars/${carId}`
  );
  const car = await response.json();
  console.log(car); 

  image.src = car.ImageUrl;
  make.innerText = car.Make;
  model.innerText = car.Model;
  fuel.innerText = car.Fuel;
  description.innerText = car.Description;
  price.innerText = car.Price;
  locationEl.innerText = car.Location;
  
  burgerButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('active')
  })
};


fetchCar();