function init(){
    const navUL = document.querySelector("nav ul")
    const user = (sessionStorage.getItem("user"))

    if(user){
        navUL.innerHTML += `
        <li>
            <h2>Usuário: ${user.name}</h2>
        </li>
        <li>
            <button>Sair</button>
        </li>
        `
        return
    }
    navUL.innerHTML += `
    <li>
        <a href="./pages/login/login.html">Login</a>
    </li>
    `
}
init()