//initialise ids from document
const petName = document.getElementById('name');
const submitButton = document.getElementById("submit_button");
const intro = document.getElementById("intro");

//adds on click listener event to do something when button is clicked
submitButton.addEventListener("click", function(){
    const name = petName.value;

    if(name != null){
        displayName = document.createElement('p');
        displayName.textContent = "You  got a new puppy called " + name + "!";
        //display it on the dom
        intro.appendChild(displayName);

        //make the input box and submit button disappear 
        petName.style.display = "none";
        submitButton.style.display = "none";
    }

});

//initialise variables for health, hunger and happiness
let happiness = 50;
let health = 50;
let hunger = 80; //higher is worse??

//iniitialise action buttons
const feed = document.getElementById("feed_button");
const pet = document.getElementById("pet_button");
const treat = document.getElementById("treat_button");
const sleep = document.getElementById("sleep_button");

//initialise array with images of dog
let dogMoods = ["/virtual_pet_character/dog_happy.png", "/virtual_pet_character/dog_mad.png", "/virtual_pet_character/dog_normal.png",
                "/virtual_pet_character/dog_sad.png", "/virtual_pet_character/dog_sleeping.png", "/virtual_pet_character/dog_surprised.png"]

//adds on click listener event to do something when button is clicked
feed.addEventListener("click", function(){
    hunger -= 20;
    happiness += 5;
    health += 20;

    //check values of variables after clicking feed button
    console.log("happiness", happiness);
    console.log("health", health);
    console.log("hunger", hunger);
});

//check initial values of the variables
console.log("happiness", happiness);
console.log("health", health);
console.log("hunger", hunger);