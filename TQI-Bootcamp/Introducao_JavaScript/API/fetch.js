//operações no banco 
//(POST, GET, PUT, DELETE, etc)

fetch ('https://endereco-api.com/', {
    method: 'GET',
    cache: 'no-cache',
} )
    .then(response => response.json())
    .then(json => console.log(json))

    
fetch ('https://endereco-api.com/', {
    method: 'POST',
    cache: 'no-cache',
    body: JSON.stringify(data)
} )
    .then(response => response.json())
    .then(json => console.log(json))

    //retorna uma promise