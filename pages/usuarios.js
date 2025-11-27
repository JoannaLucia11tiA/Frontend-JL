const main = document.querySelector("main")

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
searchFriends()