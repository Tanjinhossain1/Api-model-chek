
const loadUser = () =>{
    fetch('https://randomuser.me/api/?results=100')
    .then(res => res.json())
    .then(data => displayUser(data.results))
}
loadUser()
const displayUser = user =>{
    const container = document.getElementById('container');
    for(const addUser of user){
        console.log(addUser);
        const div = document.createElement('div');
        div.classList.add('styls')
        div.innerHTML = `
        <img src="${addUser.picture.thumbnail}">
        <h4> Name: ${addUser.name.title}${addUser.name.first}${addUser.name.last}</h4>
        <h4> City: ${addUser.location.city}</h4>
        <h4> Street: ${addUser.location.street.name}</h4>
        <h4> coordinates: ${addUser.location.coordinates.longitude}</h4>
        <h4> timezone: ${addUser.location.timezone.offset} description: ${addUser.location.timezone.description}</h4>
        <h4>description: ${addUser.location.timezone.description}</h4>
        `;
        container.appendChild(div);
    }
}