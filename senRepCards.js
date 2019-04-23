import{ senators } from './senators.js'
import{ representatives } from './representatives.js'



const mainContainer = document.createElement('div')
mainContainer.className = 'container'
document.body.appendChild(mainContainer)

const button_section = document.getElementsByClassName('button-section')



//function---------------------
const removeCards = () => {
  let removeDiv = document.querySelector(".container");
  while (removeDiv.firstChild) {
      removeDiv.removeChild(removeDiv.firstChild);
  }
}
// const eraseFunction
//-----------------Filters-----------------------------------------------
const democratFilter = senators.filter(senator => {
  return senator.party === 'D' 
})
const republicanFilter = senators.filter(senator => senator.party === 'R')

//making a more digestable array of information--------------------------

const simpleReps = representatives.map(rep => {
  return {
    name: `${rep.first_name} ${rep.last_name}`,
    facebook: rep.facebook_account,
    hompage: rep.url,
    party: rep.party,
    imagePath: `https://www.congress.gov/img/member/114_rp_${rep.state.toLowerCase()}_${rep.district}_${rep.last_name.toLocaleLowerCase()}_${rep.first_name.toLowerCase()}_200.jpg`, 

  }
})
const simpleSen = senators.map(senator =>{
  return{
    name: `${senator.first_name} ${senator.last_name}`,
    facebook: senator.facebook_account,
    homepage: senator.url,
    party: senator.party,
    imagePath: `https://www.congress.gov/img/member/${senator.id.toLowerCase()}.jpg`
  }
})

//-------Functions to create the cards------------------------------------
const createCardSen = ((senatorArray)=>{
  removeCards()
  let filterButtons = document.createElement('div')
  filterButtons.className = "button_section"
let filterButtonR = document.createElement('button')
filterButtonR.id = 'republic'
filterButtonR.textContent = 'Republicans'
let filterButtonD = document.createElement('button')
filterButtonD.textContent = 'Democrats'
filterButtonD.id = ('democrat')
filterButtonD.className = ('button is-info')
filterButtonR.className = ('button is-danger')

filterButtons.appendChild(filterButtonD)
filterButtons.appendChild(filterButtonR)
mainContainer.appendChild(filterButtons)

  senatorArray.forEach((senator)=>{
    let personElement = document.createElement('div')
    let personName = document.createElement ('p')
    let imageElement = document.createElement ('img')


    if(senator.party === "R"){
      personElement.className = "box republican personBox"
    }
    if(senator.party ==="D"){
      personElement.className = "box democrat personBox"
    }
    if(senator.party ==="ID"){
      personElement.className = "box personBox"
    }

    if(senator.imgURL ===`https://www.congress.gov/img/member/j000300.jpg`){
      imageElement.src = `https://starwars-visualguide.com/assets/img/characters/21.jpg`
    }
     else if (senator.imgURL === `https://www.congress.gov/img/member/s001203.jpg`)
     {
      imageElement.src = `https://starwars-visualguide.com/assets/img/characters/21.jpg`
     } else 
    imageElement.src = senator.imgURL

 personName.textContent = senator.first_name +" " + senator.last_name
// personElement.textContent = senator.name
// imageElement.src = senator.imgURL

personElement.appendChild(personName)
personElement.appendChild(imageElement)
mainContainer.appendChild(personElement)

  })
 
})

const createCardRep = ((repArray)=>{
  removeCards()
  repArray.forEach((rep)=>{
    let personElement = document.createElement('div')
    let personName = document.createElement ('p')
    let imageElement = document.createElement ('img')
    if(rep.party === "R"){
      personElement.className = "box republican personBox"
    }
    if(rep.party ==="D"){
      personElement.className = "box democrat personBox"
    }

    imageElement.src = rep.imgURL
    personName.textContent = rep.first_name + " " + rep.last_name
    personElement.appendChild(personName)
    personElement.appendChild(imageElement)
    mainContainer.appendChild(personElement)
      })

  })
const senWithPics = senators.map(senator =>{
  
  senator.imgURL = `https://www.congress.gov/img/member/${senator.id.toLowerCase()}.jpg`
  return senator 
})

const repWithPics = representatives.map(rep=>{
  rep.imgURL = `https://www.congress.gov/img/member/114_rp_${rep.state.toLowerCase()}_${rep.district}_${rep.last_name.toLocaleLowerCase()}_${rep.first_name.toLowerCase()}_200.jpg`
})


//variables to make the buttons later
var allSenators = document.getElementById('senators')
var allReps = document.getElementById('reps')
var allDems = document.getElementById('democrat')
var allRepubs = document.getElementById('republic')

allSenators.addEventListener('click', createCardSen.bind(this, senators))
allReps.addEventListener('click', createCardRep.bind(this, representatives));

// allDems.addEventListener('click', createCards.bind(this, democratFilter))