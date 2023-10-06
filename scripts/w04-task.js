/* LESSON 3 - Programming Tasks */

/* Profile Object  */
var myProfile = 
{
    name: "Harold Barraza",
    photo: "images/Photo.jpg",

    favoriteFoods:[
        'chicken chili',
        'pizza',
        'ceviche',
        'hambuerguesa'
    ],
    hobbies: [
        'listen to music',
        'play video games ',
        'walk',
        'travel'
    ],
    placeLive: [],
};

myProfile.placeLive.push(
    {
    place:[
        'Puno, Perú',
        'Lima, Perú',
        'Tacna, Perú',
        'Arequipa, Perú'
    ],
    length:[
        '10 years',
        '2 years',
        '5 months',
        '4 months'
    ]
    }
);

document.querySelector('#name').textContent = myProfile.name;


const imgElement = document.querySelector('#photo');

imgElement.src = myProfile.photo;

const Name = {
    name : myProfile.name
};

const nameElement = document.querySelector('#name');
nameElement.alt = Name.name;

myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

myProfile.hobbies.forEach(hobbies => {
    let li2 = document.createElement('li');
    li2.textContent = hobbies;
    document.querySelector('#hobbies').appendChild(li2);
});

const dlElement = document.querySelector('#places-lived');

myProfile.placeLive.forEach(place => {
  place.place.forEach((location, index) => {
    let dt = document.createElement('dt');
    dt.textContent = location;

    let dd = document.createElement('dd');
    dd.textContent = place.length[index];

    dlElement.appendChild(dt);
    dlElement.appendChild(dd);
    
})
})

