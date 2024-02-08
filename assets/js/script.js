// chave da api //
const key = ("5f1c78835848f373c707203529fa1532");

function colocarDados(dados) {

    console.log(dados);

    document.querySelector("#city").innerHTML = "Tempo em " + dados.name;
    document.querySelector("#temp").innerHTML = Math.floor(dados.main.temp) + "ºC";
    document.querySelector("#text-prevision").innerHTML = dados.weather[0].description;
    document.querySelector("#umidade").innerHTML = dados.main.humidity + "%";
    document.querySelector("#img-prevision").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`


}

async function buscarCidade(cidade) {

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then( resposta => resposta.json());
    
    colocarDados(dados);
}


function clicou() {

    const cidade = document.querySelector("#input-city").value

    buscarCidade(cidade);

}