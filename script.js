//document.write("Hello");
const userName = document.getElementById('name');
const submitButton = document.getElementById("submit_button");

//adds on click listener event to do something when button is clicked
submitButton.addEventListener("click", function(){
    const name = userName.value;

    if(name != null){
        displayName = document.createElement('p');
        displayName.textContent = name;
        document.body.appendChild(displayName);
    }
    // console.log(name);
    // console.log(displayName);

});