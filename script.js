
const main = document.querySelector("main")



const button = document.querySelector("button")
button.addEventListener("click", searchFriends)

async function searchFriends(){
    const persons = await fetch("http://localhost:3333").then(response => response.json())

    persons.map((person, index ) => {
        main.innerHTML += `
        <section>
            <h2>Nome: ${person.name}</h2>
            <p>E-mail:${person.email} </p>
            <p>Idade: ${person.age}</p>
            <p>Apelido: ${person.nickname}</p>
        </section>
        ${index + 1 === persons.length ? "" : "<hr>"}
        `
    })
}
/*
//fetch buscar/ vai pegar 
    //então (then) e converte pra json
// assincronismo (async / await) vai trabalhar de forma assincrona até q a promessa tenha uma resposta/ promises*/