//document.write("Hello");
const userName = document.getElementById('name');
const submitButton = document.getElementById("submit_button");
const intro = document.getElementById("intro");
const content = document.getElementById("content");
content.style.display = 'none';

//adds on click listener event to do something when button is clicked
submitButton.addEventListener("click", function(){
    const name = userName.value;

    if(name != null){
        displayName = document.createElement('p');
        displayName.textContent = "Welcome " + name;
        intro.appendChild(displayName);
    }
    // console.log(name);
    // console.log(displayName);

});