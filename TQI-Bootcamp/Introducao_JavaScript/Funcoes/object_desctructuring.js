const user = {
    id: 10,
    displayName: 'pedrocamargos',
    fullName: {
        firstName: 'Pedro',
        lastName: 'Camargos'
    }
};

function userID({id}){
    return id;
}

console.log(userID(user));

function viewFullName({fullName: {firstName: first, lastName:last}}){
    return `${first} ${last}`;
}

console.log(viewFullName(user));