const loardUser = () =>{
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data => displayUser(data))
}
const displayUser = user =>{
    const getTagElement= document.getElementById('gender');
    getTagElement.innerHTML=user.results[0].gender;

    const name= user.results[0].name.first +' '+user.results[0].name.last;
    document.getElementById('name').innerHTML=name;
    const location = user.results[0].location.country;
    document.getElementById('location').innerHTML=location;

    const picture = user.results[0].picture.large;
    document.getElementById('img').innerHTML=picture;

    console.log(user);
}
loardUser();