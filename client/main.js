const { format } = require("express/lib/response");

const baseURL = `http://localhost:4000/api`

const button = document.querySelectorAll('#button')

complimentButton.addEventListener('onclick', data);
fortuneButton.addEventListener('onclick', data);

const userCallback = ({ data: user}) => displayUser(user)
const errCallback = err => console.log(err)

const createUser = body => axios.post(baseURL).then(userCallback).catch(errCallback)
const deleteUser = id => axios.delete(`${baseURL}/${id}`).then(userCallback).catch(errCallback)

function submitHandler(e) {
    e.preventDefault()

    let userName = document.querySelector('#userName')
    let userCompliment = document.querySelector('#userCompliment')
    let userFortune = document.querySelector('#userFortune')

    let bodyObj = {
        userName: userName.value,
        userCompliment: userCompliment.value,
        userFortune: userFortune.value 
    }
    createUser(bodyObj)

    userName.value = ''
    userCompliment.value = ''
    userFortune.value = ''
}

function createUserCard(user) {
    const userCard = document.createElement('div')
    userCard.classList.add('user-card')

    userCard.innerHTML =
    <p class="userName">${userFortune.userName}</p>
    <div class="btns-container">
        <button onclick="updateUser(${user.id})">===</button>
        <p class="userFortune"</p>
    </div>
    <button onclick="deleteUser(${user.id})"></button>


    userContainer.appendChild(userCard)
}

function displayUser(arr) {
    houseContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createUserCard(arr[i])
    }
}

form.addEventListener('submit', submitHandler)

getAllUser()