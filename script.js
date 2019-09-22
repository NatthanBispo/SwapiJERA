var setado = [];
var request = new XMLHttpRequest();
var requestResponse;

request.open('GET', 'https://swapi.co/api/films', false);
request.send();
requestResponse = (JSON.parse(request.response)).results;
requestResponse.forEach(getHtml)

function getLista(item, destino){
    //console.log(setado)
    if(!setado.includes(destino)){
        item = item.split(",");
        var lista = document.createElement("div");
            lista.setAttribute('class', 'lista');
        for (var i = 0; i < item.length; i++) {
            try{
                request2 = new XMLHttpRequest();
                request2.open('GET', item[i], false);   
                request2.send();
    
                var jsonresult = JSON.parse(request2.response)
                //console.log(jsonresult.name);
                
                var node = document.createElement("h6");
                    node.appendChild(document.createTextNode(jsonresult.name));
                lista.appendChild(node);
            } catch(err) {
                var node = document.createElement("h6");
                    node.appendChild(document.createTextNode("Nao ha elementos"));
                lista.appendChild(node);
            }
        }
        document.querySelector("#"+destino).appendChild(lista)
        setado.push(destino)
    }
}

function getHtml(item, indice, array) {        
    var divCard = document.createElement("div");
        divCard.setAttribute('id', 'card'+indice+'');
        divCard.setAttribute('class', 'card');
        divCard.setAttribute('style', 'width: 18rem;');
    
    var divCardBody = document.createElement("div");
        divCardBody.setAttribute('class', 'card-body');

    var idTitulo = document.createElement("h4");
        idTitulo.setAttribute('id', 'titulo'+indice+'');
        idTitulo.setAttribute('class', 'card-title');
        idTitulo.appendChild(document.createTextNode(item.title));

    var episode_id = document.createElement("h6");
        episode_id.setAttribute('id', 'episode_id'+indice+'');
        episode_id.setAttribute('class', 'card-subtitle mb-2 text-muted');
        episode_id.appendChild(document.createTextNode("Episode: "+item.episode_id));

    var director = document.createElement("h5");
        director.setAttribute('id', 'director'+indice+'');
        director.appendChild(document.createTextNode("Director: "+item.director));

    var release_date = document.createElement("h5");
        release_date.setAttribute('id', 'release_date'+indice+'');
        release_date.appendChild(document.createTextNode("Date of release: "+item.release_date));

    // Dropdown Characters
    var divDropdownCharacters = document.createElement("div");
        divDropdownCharacters.setAttribute('class', 'dropdown show'); 

    var aBtnCharacters = document.createElement("a");
        aBtnCharacters.setAttribute('class', 'btn btn-secondary dropdown-toggle'); 
        aBtnCharacters.setAttribute('role', 'button');
        aBtnCharacters.setAttribute('id', 'dropdownMenuLink'+indice+'');
        aBtnCharacters.setAttribute('data-toggle', 'dropdown');
        aBtnCharacters.setAttribute('aria-haspopup', 'true');
        aBtnCharacters.setAttribute('aria-expanded', 'false');
        aBtnCharacters.setAttribute('onclick', 'getLista("'+item.characters+'", "characters'+indice+'")');
        aBtnCharacters.appendChild(document.createTextNode("Characters"));
        
    var divCharacters = document.createElement("div");
        divCharacters.setAttribute('id', 'characters'+indice+''); 
        divCharacters.setAttribute('class', 'dropdown-menu');   
        divCharacters.setAttribute('aria-labelledby', 'dropdownMenuLink');  

    // Dropdown Planets
    var divDropdownPlanets = document.createElement("div");
        divDropdownPlanets.setAttribute('class', 'dropdown show'); 

    var aBtnPlanets = document.createElement("a");
        aBtnPlanets.setAttribute('class', 'btn btn-secondary dropdown-toggle');
        aBtnPlanets.setAttribute('role', 'button');
        aBtnPlanets.setAttribute('id', 'dropdownMenuLink'+indice+'');
        aBtnPlanets.setAttribute('data-toggle', 'dropdown');
        aBtnPlanets.setAttribute('aria-haspopup', 'true');
        aBtnPlanets.setAttribute('aria-expanded', 'false');
        aBtnPlanets.setAttribute('onclick', 'getLista("'+item.planets+'", "planets'+indice+'")');
        aBtnPlanets.appendChild(document.createTextNode("Planets"));
        
    var divPlanets = document.createElement("div");
        divPlanets.setAttribute('id', 'planets'+indice+''); 
        divPlanets.setAttribute('class', 'dropdown-menu');   
        divPlanets.setAttribute('aria-labelledby', 'dropdownMenuLink');
    
    // Dropdown Starships
    var divDropdownStarships = document.createElement("div");
        divDropdownStarships.setAttribute('class', 'dropdown show'); 

    var aBtnStarships = document.createElement("a");
        aBtnStarships.setAttribute('class', 'btn btn-secondary dropdown-toggle');
        aBtnStarships.setAttribute('role', 'button');
        aBtnStarships.setAttribute('id', 'dropdownMenuLink'+indice+'');
        aBtnStarships.setAttribute('data-toggle', 'dropdown');
        aBtnStarships.setAttribute('aria-haspopup', 'true');
        aBtnStarships.setAttribute('aria-expanded', 'false');
        aBtnStarships.setAttribute('onclick', 'getLista("'+item.starships+'", "starships'+indice+'")');
        aBtnStarships.appendChild(document.createTextNode("Starships"));
        
    var divStarships = document.createElement("div");
        divStarships.setAttribute('id', 'starships'+indice+''); 
        divStarships.setAttribute('class', 'dropdown-menu');   
        divStarships.setAttribute('aria-labelledby', 'dropdownMenuLink');

    // Dropdown Vehicles
    var divDropdownVehicles = document.createElement("div");
        divDropdownVehicles.setAttribute('class', 'dropdown show'); 

    var aBtnVehicles = document.createElement("a");
        aBtnVehicles.setAttribute('class', 'btn btn-secondary dropdown-toggle');
        aBtnVehicles.setAttribute('role', 'button');
        aBtnVehicles.setAttribute('id', 'dropdownMenuLink'+indice+'');
        aBtnVehicles.setAttribute('data-toggle', 'dropdown');
        aBtnVehicles.setAttribute('aria-haspopup', 'true');
        aBtnVehicles.setAttribute('aria-expanded', 'false');
        aBtnVehicles.setAttribute('onclick', 'getLista("'+item.vehicles+'", "vehicles'+indice+'")');
        aBtnVehicles.appendChild(document.createTextNode("Vehicles"));
        
    var divVehicles = document.createElement("div");
        divVehicles.setAttribute('id', 'vehicles'+indice+''); 
        divVehicles.setAttribute('class', 'dropdown-menu');   
        divVehicles.setAttribute('aria-labelledby', 'dropdownMenuLink');

    // Dropdown Species
    var divDropdownSpecies = document.createElement("div");
        divDropdownSpecies.setAttribute('class', 'dropdown show'); 

    var aBtnSpecies = document.createElement("a");
        aBtnSpecies.setAttribute('class', 'btn btn-secondary dropdown-toggle');
        aBtnSpecies.setAttribute('role', 'button');
        aBtnSpecies.setAttribute('id', 'dropdownMenuLink'+indice+'');
        aBtnSpecies.setAttribute('data-toggle', 'dropdown');
        aBtnSpecies.setAttribute('aria-haspopup', 'true');
        aBtnSpecies.setAttribute('aria-expanded', 'false');
        aBtnSpecies.setAttribute('onclick', 'getLista("'+item.species+'", "species'+indice+'")');
        aBtnSpecies.appendChild(document.createTextNode("Species"));
        
    var divSpecies = document.createElement("div");
        divSpecies.setAttribute('id', 'species'+indice+''); 
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

    //document.body.appendChild(divCard);
    document.querySelector("#conteudo").appendChild(divCard)
}