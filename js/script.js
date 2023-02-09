const labels = document.querySelectorAll('.form-control label')
const register = document.querySelector("#register")
const login = document.querySelector("#login")


labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('')
})




register.addEventListener('click', (e) => {
    e.preventDefault();

    singUp();

    window.setTimeout(function() {
        window.location.href = 'loding.html';
    }, 500);
    
    window.setTimeout(function() {
        // window.location.href = 'loding.html';
        window.location.href = 'index.html';
    }, 800);
    
    // setTimeout(() => {
        
    // }, "1000")

    // window.location.href = 'loding.html';
})


function singUp(){

    const userName = document.getElementById('userName');
    const userEmail = document.getElementById('userEmail');
    const userPassword = document.getElementById('userPassword');

    const userNameValue = userName.value
    const userEmailValue = userEmail.value
    const userPasswordValue = userPassword.value

    let singUpMessage = {
        name : userNameValue,
        email: userEmailValue,
        password : userPasswordValue
    }

    console.log(singUpMessage);
}
