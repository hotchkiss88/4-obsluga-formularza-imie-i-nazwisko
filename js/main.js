let form = document.getElementById("form");
console.log(form);


let formSubmit = (event) => {
    event.preventDefault();

    let fName = document.querySelector('[name = "fname"]');

    let lName = document.querySelector('[name = "lname"]');

    console.log(`Imię: ${fName.value}, Nazwisko: ${lName.value}`);

}


form.addEventListener("submit", formSubmit);