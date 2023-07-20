const countrySeletBox = document.querySelector(".countrySelect");
const citiesSelect = document.querySelector('.citiesSelect');

const countriesDeyta = {
    Iran:[ 'Tabrize', 'tehran' , 'shiraz' , 'Esfahan' , 'Mashhad'],
    Turkey:[ 'Estanbul','Ezmir','Ankara','Antalya' ],
    USA:['Los Angles', 'San Diego' , 'Chicago']
}

countrySeletBox.addEventListener('change' , function () {

    if (countrySeletBox.value === "please select..."){

        citiesSelect.innerHTML = '';        
        citiesSelect.innerHTML += '<option>Select City...</option>' ;

    } else {
         const mainCountryName = countrySeletBox.value;
         const mainCountriesCities = countriesDeyta[mainCountryName];
    
         citiesSelect.innerHTML = '';
         mainCountriesCities.forEach( function (city) {

        citiesSelect.innerHTML += '<option>'+ city +'</option>' ;

      });
    }
   
})