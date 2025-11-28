const button = document.querySelector("button")
button.onclick = (event) => {
    event.preventDefault()
    signUpFriends()
}

async function signUpFriends(){
    const name = document.querySelector("#name").value
    const email = document.querySelector("#email").value
    const age = document.querySelector("#age").value
    const nickname = document.querySelector("#nickname").value
    const password = document.querySelector("#password").value

    if(name === ""|| email === "" || age === ""|| nickname === ""||password === ""){
        alert("PREENCHA TODAS AS INFORMAÇÕES, ANIMAL!")
        return
    }

    const user = {
        name,
        email,
        age,
        nickname,
        password
    }
    const response = await fetch("https://backend-jl-p6d4.vercel.app/", {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ user })
    }).then(response => response.json())

    const {message} = response
    alert(message)

    window.location.href = "../index.html"
}