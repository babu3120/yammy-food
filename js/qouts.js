const landQoust = () =>{
    fetch('https://api.kanye.rest/')
    .then(res=> res.json())
    .then(data => displayQoutea(data))
}
const displayQoutea = queta =>{
   const blockQoute =document.getElementById('queta');
   console.log(queta)
   blockQoute.innerHTML = queta.queta;

} 
landQoust();