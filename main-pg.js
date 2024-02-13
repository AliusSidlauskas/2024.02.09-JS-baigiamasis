const wrapper = document.getElementById('wrapper');
const burgerButton = document.getElementById('burger-btn');
const mobileMenu = document.getElementById('mobile-menu');

const fetchCars = async () => {
    const response = await fetch(
        "https://65c5d0cae5b94dfca2e056ff.mockapi.io/cars"
    );
    const cars = await response.json();
    // console.log(cars)

    cars.sort((a, b) => parseFloat(a.Price) - parseFloat(b.Price));

    cars.forEach((car) => {
        const card = document.createElement('a');
        card.href = "./card-pg/card-pg.html"
        card.addEventListener('click', () => {
            // console.log(car.Make)
            localStorage.setItem('carId', car.id)
        });
        
        card.setAttribute('class', 'card');

        const img = document.createElement('img');
        const make = document.createElement('h2');
        const model = document.createElement('h2');
        const price = document.createElement('h2');

        img.src = car.ImageUrl;
        make.innerText = car.Make;
        model.innerText = car.Model;
        price.innerText = car.Price;

        card.append(img);
        card.append(make);
        card.append(model);
        card.append(price);

        wrapper.append(card);
    })
    burgerButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('active')
    })
    
};

fetchCars()