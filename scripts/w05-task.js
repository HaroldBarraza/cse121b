/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector('#temples');
let templeList = [];

const displayTemples = (temples) => {
  reset();

  temples.forEach((temple) => {
    const templeArticle = document.createElement('article');
    const templeNameElement = document.createElement('h3');
    const templeImageElement = document.createElement('img');

    templeNameElement.textContent = temple.templeName;
    templeImageElement.src = temple.imageUrl;
    templeImageElement.alt = temple.location;

    templeArticle.appendChild(templeNameElement);
    templeArticle.appendChild(templeImageElement);

    templesElement.appendChild(templeArticle);
  });
};

const getTemples = async () => {
  try {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (response.ok) {
      const data = await response.json();
      templeList = data;
      displayTemples(templeList);
    } else {
      console.error("Error fetching temple data:", response.status);
    }
  } catch (error) {
    console.error("Error fetching temple data:", error);
  }
};

getTemples();

const reset = () => {
  templesElement.innerHTML = '';
};

const sortBy = (temples) => {
  reset();

  const filter = document.getElementById('sortBy').value;

  switch (filter) {
    case 'utah':
      displayTemples(temples.filter(temple => temple.location.includes('Utah')));
      break;
    case 'nonutah':
      displayTemples(temples.filter(temple => !temple.location.includes('Utah')));
      break;
    case 'older':
      displayTemples(temples.filter(temple => new Date(temple.dedicatedDate) < new Date(1950, 0, 1)));
      break;
    case 'all':
      displayTemples(temples);
      break;
    default:
      console.warn('Unknown filter:', filter);
  }
};

document.querySelector('#sortBy').addEventListener("change", () => {
  sortBy(templeList);
});

