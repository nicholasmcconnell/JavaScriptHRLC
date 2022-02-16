const email = document.getElementById('email');
const password = document.getElementById('password');
const loginFormSubmit = document.getElementById('loginFormSubmit');
const formValuesDiv = document.querySelector('.formValuesDiv');

const submitForm = (e) => {
    e.preventDefault();

    let formValuesArr = [email.value, password.value];


    formValuesArr.forEach(value => {
        let p = document.createElement('p');
        p.textContent = value;
        p.classList.add("form-results")
        // p.style.color = 'green'
        formValuesDiv.append(p);
    })

};

loginFormSubmit.addEventListener("click", e => {
    console.log(e)
    submitForm(e);
});

