var aux = document.createElement("div");
function getCharacters(item){
    console.log(item)
    //var links = item.split(',')
    item.forEach(criarObj);
    divCharacters.appendChild(aux);
}

function criarObj(item, indice, array) {
    request2 = new XMLHttpRequest();
    console.log(item)
    request2.open('GET', item, false);   
    request2.send();
    var jsonresult = JSON.parse(request2.response)
    console.log(jsonresult.name);

    
}

function getHtml(item, indice, array) {
        /* EXEMPLO CARD
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h4 id="titulo" class="card-title"></h4>
                <h6  id="episode_id" class="card-subtitle mb-2 text-muted"></h6>
                <h5 id="director"></h5>
                <h5 id="release_date"></h5>
                <div class="dropdown show">
                    <a class="btn btn-secondary dropdown-toggle dropdownMenuLink" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Characters
                    </a>
                    <div id="characters" class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <!--Itens-->
                    </div>
                </div>

                <h5 id="planets"></h5>
                <h5 id="starships"></h5>
                <h5 id="vehicles"></h5>
                <h5 id="species"></h5>
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
            </div>
        </div>*/
        
    var divCard = document.createElement("div");
        divCard.setAttribute('class', 'card');
        divCard.setAttribute('style', 'width: 18rem;');
    
    var divCardBody = document.createElement("div");
        divCardBody.setAttribute('class', 'card-body');

    var idTitulo = document.createElement("h4");
        idTitulo.setAttribute('id', 'titulo');
        idTitulo.setAttribute('class', 'card-title');
        idTitulo.appendChild(document.createTextNode(item.title));

    var episode_id = document.createElement("h6");
        episode_id.setAttribute('id', 'episode_id');
        episode_id.setAttribute('class', 'card-subtitle mb-2 text-muted');
        episode_id.appendChild(document.createTextNode(item.episode_id));

    var director = document.createElement("h5");
        director.setAttribute('id', 'director');
        director.appendChild(document.createTextNode(item.director));

    var release_date = document.createElement("h5");
        release_date.setAttribute('id', 'release_date');
        release_date.appendChild(document.createTextNode(item.release_date));
        

    // Dropdown Characters
    var divDropdownCharacters = document.createElement("div");
        divDropdownCharacters.setAttribute('class', 'dropdown show'); 

    var aBtnCharacters = document.createElement("a");
        aBtnCharacters.setAttribute('class', 'btn btn-secondary dropdown-toggle'); 
        aBtnCharacters.setAttribute('role', 'button');
        aBtnCharacters.setAttribute('id', 'dropdownMenuLink');
        aBtnCharacters.setAttribute('data-toggle', 'dropdown');
        aBtnCharacters.setAttribute('aria-haspopup', 'true');
        aBtnCharacters.setAttribute('aria-expanded', 'false');
        getCharacters(item.characters)
        //aBtnCharacters.setAttribute('onclick', "getCharacters('"+item.characters+"')");
        aBtnCharacters.appendChild(document.createTextNode("Characters"));
        
    var divCharacters = document.createElement("div");
        divCharacters.setAttribute('id', 'characters'); 
        divCharacters.setAttribute('class', 'dropdown-menu');   
        divCharacters.setAttribute('aria-labelledby', 'dropdownMenuLink'); 
        

    // Dropdown Planets
    var divDropdownPlanets = document.createElement("div");
        divDropdownPlanets.setAttribute('class', 'dropdown show'); 

    var aBtnPlanets = document.createElement("a");
        aBtnPlanets.setAttribute('class', 'btn btn-secondary dropdown-toggle');
        aBtnPlanets.setAttribute('role', 'button');
        aBtnPlanets.setAttribute('id', 'dropdownMenuLink');
        aBtnPlanets.setAttribute('data-toggle', 'dropdown');
        aBtnPlanets.setAttribute('aria-haspopup', 'true');
        aBtnPlanets.setAttribute('aria-expanded', 'false');
        aBtnPlanets.appendChild(document.createTextNode("Planets"));
        
    var divPlanets = document.createElement("div");
        divPlanets.setAttribute('id', 'characters'); 
        divPlanets.setAttribute('class', 'dropdown-menu');   
        divPlanets.setAttribute('aria-labelledby', 'dropdownMenuLink');
    
    // Dropdown Starships
    var divDropdownStarships = document.createElement("div");
        divDropdownStarships.setAttribute('class', 'dropdown show'); 

    var aBtnStarships = document.createElement("a");
        aBtnStarships.setAttribute('class', 'btn btn-secondary dropdown-toggle');
        aBtnStarships.setAttribute('role', 'button');
        aBtnStarships.setAttribute('id', 'dropdownMenuLink');
        aBtnStarships.setAttribute('data-toggle', 'dropdown');
        aBtnStarships.setAttribute('aria-haspopup', 'true');
        aBtnStarships.setAttribute('aria-expanded', 'false');
        aBtnStarships.appendChild(document.createTextNode("Starships"));
        
    var divStarships = document.createElement("div");
        divStarships.setAttribute('id', 'characters'); 
        divStarships.setAttribute('class', 'dropdown-menu');   
        divStarships.setAttribute('aria-labelledby', 'dropdownMenuLink');

    // Dropdown Vehicles
    var divDropdownVehicles = document.createElement("div");
        divDropdownVehicles.setAttribute('class', 'dropdown show'); 

    var aBtnVehicles = document.createElement("a");
        aBtnVehicles.setAttribute('class', 'btn btn-secondary dropdown-toggle');
        aBtnVehicles.setAttribute('role', 'button');
        aBtnVehicles.setAttribute('id', 'dropdownMenuLink');
        aBtnVehicles.setAttribute('data-toggle', 'dropdown');
        aBtnVehicles.setAttribute('aria-haspopup', 'true');
        aBtnVehicles.setAttribute('aria-expanded', 'false');
        aBtnVehicles.appendChild(document.createTextNode("Vehicles"));
        
    var divVehicles = document.createElement("div");
        divVehicles.setAttribute('id', 'characters'); 
        divVehicles.setAttribute('class', 'dropdown-menu');   
        divVehicles.setAttribute('aria-labelledby', 'dropdownMenuLink');

    // Dropdown Species
    var divDropdownSpecies = document.createElement("div");
        divDropdownSpecies.setAttribute('class', 'dropdown show'); 

    var aBtnSpecies = document.createElement("a");
        aBtnSpecies.setAttribute('class', 'btn btn-secondary dropdown-toggle');
        aBtnSpecies.setAttribute('role', 'button');
        aBtnSpecies.setAttribute('id', 'dropdownMenuLink');
        aBtnSpecies.setAttribute('data-toggle', 'dropdown');
        aBtnSpecies.setAttribute('aria-haspopup', 'true');
        aBtnSpecies.setAttribute('aria-expanded', 'false');
        aBtnSpecies.appendChild(document.createTextNode("Species"));
        
    var divSpecies = document.createElement("div");
        divSpecies.setAttribute('id', 'characters'); 
        divSpecies.setAttribute('class', 'dropdown-menu');   
        divSpecies.setAttribute('aria-labelledby', 'dropdownMenuLink');
    
    divDropdownCharacters.appendChild(aBtnCharacters);
    divDropdownCharacters.appendChild(divCharacters);

    divDropdownPlanets.appendChild(aBtnPlanets);
    divDropdownPlanets.appendChild(divPlanets);

    divDropdownStarships.appendChild(aBtnStarships);
    divDropdownStarships.appendChild(divStarships);
    
    divDropdownVehicles.appendChild(aBtnVehicles);
    divDropdownVehicles.appendChild(divVehicles);

    divDropdownSpecies.appendChild(aBtnSpecies);
    divDropdownSpecies.appendChild(divSpecies);

    divCardBody.appendChild(idTitulo);
    divCardBody.appendChild(episode_id);
    divCardBody.appendChild(director);
    divCardBody.appendChild(release_date);
    divCardBody.appendChild(divDropdownCharacters);
    divCardBody.appendChild(divDropdownPlanets);
    divCardBody.appendChild(divDropdownStarships);
    divCardBody.appendChild(divDropdownVehicles);
    divCardBody.appendChild(divDropdownSpecies);

    divCard.appendChild(divCardBody);

    document.body.appendChild(divCard);
}

var request = new XMLHttpRequest();
var vetor;
var arrayFilmes;

request.open('GET', 'https://swapi.co/api/films', true);
request.send();
console.log("open")
var t = false;

request.onload = function () {
    vetor = (JSON.parse(request.response)).results;
    console.log("json") 
    if(t == false)
        vetor.forEach(getHtml);
        else
            t = true;
}
/*
function criarObjs(item, indice, array){
    arrayFilmes.push(item.title, item.episode_id, item.director);
    
    item.characters.forEach(drop);
}

function imprimir(item, indice, array){
    const titulo = document.querySelector("#titulo");
        titulo.innerHTML = item.title;
    const episode_id = document.querySelector("#episode_id");
        episode_id.innerHTML = "Episodio: " + item.episode_id;
    const director = document.querySelector("#director");
        director.innerHTML = "Diretor: " + item.director;
    //item.characters.forEach(drop);
}*/
