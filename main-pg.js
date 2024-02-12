const wrapper = document.getElementById('wrapper');

const fetchCars = async () => {
    const response = await fetch(
        "https://65c5d0cae5b94dfca2e056ff.mockapi.io/cars"
    );

    const cars = await response.json();

    cars.forEach((car) => {
        const card = document.createElement('div');
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
}

fetchCars()