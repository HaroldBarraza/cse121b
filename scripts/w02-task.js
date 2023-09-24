const fullName = "Harold Barraza";

const currentYear = new Date().getFullYear();

const profilePicture = 'images/Photo.jpg';

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.getElementById('profile-image');

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

let favFoods = ['Ceviche', 'Burger', 'Sushi'];

foodElement.innerHTML = favFoods.join('food');

let newFavoriteFood = 'Ice Cream';

favFoods.push(newFavoriteFood);

foodElement.innerHTML += `<br>${favFoods.join('<br>')}`;
favFoods.shift();
foodElement.innerHTML += `<br>${favFoods.join('<br>')}`;
favFoods.pop();
foodElement.innerHTML += `<br>${favFoods.join('<br>')}`;