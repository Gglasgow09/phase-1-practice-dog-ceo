
// Add JavaScript that:

// on page load, fetches the images using the url above ⬆️
// parses the response as JSON
// adds image elements to the DOM for each 🤔 image in the array
const dogImgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all"

function fetchImg () {
    fetch (dogImgUrl)
    .then (response => response.json())
    .then (dogData => dogData.message.forEach (dog => renderDogImage(dog)))
}

function renderDogImage(dogPic) {
    const dogImgContainer = document.getElementById( "dog-image-container" )
    const dogImg = document.createElement('img')
    //dogImg stores our dog pic
    //working with an array of strings that we have to iterate over 
    dogImg.src = dogPic
    dogImgContainer.appendChild(dogImg)
}
function fetchAllBreeds () {
    fetch (breedUrl)
    .then (response => response.json())
    //Object.keys allows you to grab the data using its key value since the breed list was an object
    .then(breedData => {
        Object.keys(breedData.message).forEach(breed => renderBreed(breed));
        
        // Once we are able to load all of the dog breeds onto the page, 
        // add JavaScript so that the user can filter breeds that start 
        // with a particular letter using a dropdown.

        const dogBreedFilter = document.getElementById('breed-dropdown')

        //adds an event listener to change its value
        dogBreedFilter.addEventListener('change', () => {

            //made a const of selectedLetter to be the dogBreedFilter value
            const letter = dogBreedFilter.value;

            //made a const for breedUl by getting the id of the ul in the HTML file
            const breedUl = document.getElementById('dog-breeds');

          //clears the content of the UL by setting its text content to an empty string 
            breedUl.textContent = '';

          //filters the list of dog breeds based on currently selected letter using the filter method
            Object.keys(breedData.message).filter(breed => {
            return breed.toLowerCase().startsWith(letter);

        //calls the renderBreed Function on each of the filtered breeds and adds them to the ul 
        }).forEach(breed => renderBreed(breed));
        });
    });

}    
// After the first challenge is completed, add JavaScript that:
// on page load, fetches all the dog breeds using the url 
// adds the breeds to the page in the <ul> provided in index.html

function renderBreed (breedInfo) {
    const breedUl =  document.getElementById('dog-breeds')
    const li = document.createElement('li')
    li.textContent = breedInfo
    breedUl.appendChild(li)
    // Once all of the breeds are rendered in the <ul>, add JavaScript so that, 
    // when the user clicks on any one of the <li>s, 
    // the font color of that <li> changes. This can be a color of your choosing.
    li.addEventListener('click', changeColor) 
}

function changeColor(e) {
    e.target.style.color = 'green'  
}


//create an array in global scope to get objects  and do an array iterator method look up startWith method

document.addEventListener('DOMContentLoaded', () => {
    fetchImg()
    fetchAllBreeds()
})

document.addEventListener('DOMContentLoaded', () => {
    fetchImg()
    fetchAllBreeds()
})
