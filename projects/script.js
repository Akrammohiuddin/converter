/*'chennai' : population = 468732
            literacyrate = 90.20
            language  = 'Tamil'

'Bengaluru' : population = 568732
            literacyrate = 80.20
            language  = 'kanadam'

'Delhi' : population = 788732
            literacyrate = 770.20
            language  = 'Hindi'

'Mumbai' : population = 668732
            literacyrate = 890.20
            language  = 'Mharati'
The indian city of ${city} has a population of ${population}. Language spoken is ${language} literacy rate is ${literacyrate}% */


const button = document.querySelector('button')
let resultdiv = document.createElement('div')
resultdiv.id = 'result'
document.getElementById('wrapper').appendChild(resultdiv)
button.addEventListener('click',displaystate)
function displaystate(){
    const input = document.getElementById("input")
    const city =input.options[input.selectedIndex].value
   // let population = 0, literacyrate =0, language =''
    switch(city){
        case 'Bengaluru':
            population = 568732
            literacyrate = 80.20
            language  = 'kanadam'
            break
        case 'Delhi' :
             population = 788732
             literacyrate = 770.20
             language  = 'Hindi'
            break
        case 'Mumbai' :
             population = 668732
             literacyrate = 890.20
             language  = 'Mharati'
             break
         case 'chennai':
            population = 46677
            literacyrate = 88999.0
            language  = 'Tamil'   
             break
    }
    let text =`The indian city of ${city} has a population of ${population}. Language spoken is ${language} literacy rate is ${literacyrate}%`
    console.log(text)
 
 document.getElementById('result').innerHTML = text
}