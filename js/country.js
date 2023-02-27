const loardCountris = ()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountris(data))
}

const displayCountris = countryes =>{

    const allCountris = document.getElementById('all-countris');
    // console.log(countryes);
    countryes.forEach(country =>{
        console.log(country)
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML=`
        <h3>Name:${country.name.common}</h3>
        <p>Capital:${country.capital ? country.capital[0] : 'No Capital'}</p>
        <button onclick="displayCountryCode('${country.cca2}')">Details</button>
       
        
        `
        allCountris.appendChild(countryDiv)
    })
}
const displayCountryCode = code =>{
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    console.log(url)
    fetch(url)
    .then(res=>res.json())
    .then(data => showCountryDetails(data[0]))
}
const showCountryDetails = country =>{
 const detailContainer = document.getElementById('countris-code');
 detailContainer.innerHTML=`
 <h3>Name:${country.name.common} </h3>
 <img src="${country.flags.png}">
 
 `

}

loardCountris();