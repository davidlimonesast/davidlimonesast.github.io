function login(){
const username=document.getElementById('username')
const password=document.getElementById('password')
const button=document.getElementById('button')

button.addEventListener('click', (e) => {
    e.preventDefault()
    const username1 = username.value;
    const password1 = password.value;
    console.log(username);
    console.log(password);

})

}