const main = document.querySelector("main")

async function searchFriends(){
    const persons = await fetch("https://backend-jl-p6d4.vercel.app/").then(response => response.json())

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