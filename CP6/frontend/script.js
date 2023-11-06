function getPartidas(){
  const cardContainer = document.querySelector("#partidas")
  cardContainer.innerHTML = ""

  fetch("http://localhost:8080/partidas").then((response) => {
      response.json().then((partidas) =>{
          partidas.map((p) => {
              const partida = document.createElement('div')
              partida.classList.add("card")
              const id = p.id
              const equipeCasa = p.equipeCasa
              const equipeFora = p.equipeFora
              const setsCasa = p.setsCasa
              const setsFora = p.setsFora
              const pontosCasa = p.pontosCasa
              const pontosFora = p.pontosFora
              const arbitro = p.arbitro
              
              const partidaInnerHTML = `
                <h3>Partida ${id}</h3>
                <p><span>Equipe Casa:</span> ${equipeCasa}</p>
                <p><span>Equipe Fora:</span> ${equipeFora}</p>
                <p><span>Sets Casa:</span> ${setsCasa}</p>
                <p><span>Sets Fora:</span> ${setsFora}</p>
                <p><span>Pontos Atuais Casa:</span> ${pontosCasa}</p>
                <p><span>Pontos Atuais Fora:</span> ${pontosFora}</p>
                <p><span>Arbitro:</span> ${arbitro}</p>
              `
              partida.innerHTML = partidaInnerHTML
              cardContainer.appendChild(partida)
          })
      })
  })
}

getPartidas()
