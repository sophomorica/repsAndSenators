import{ senators } from './senators.js'
import{ representatives } from './representatives.js'



const mainContainer = document.createElement('div')
mainContainer.className = 'container'
document.body.appendChild(mainContainer)


//function---------------------
const removeCards = () => {
  let removeDiv = document.querySelector(".container");
  while (removeDiv.firstChild) {
      removeDiv.removeChild(removeDiv.firstChild);
  }
}


const democrats = senators.filter(senator => {
  return senator.party === 'D' 
})
const republicans = senators.filter(senator => senator.party === 'R')

//making a more digestable array of information

const simpleReps = representatives.map(rep => {
  return {
    name: `${rep.first_name} ${rep.last_name}`,
    facebook: rep.facebook_account,
    hompage: rep.url

  }
})

const simpleSen = senators.map(senator =>{
  return{
    name: `${senator.first_name} ${senator.last_name}`,
    facebook: senator.facebook_account,
    homepage: senator.url
  }
})

const senWithPics = senators.map(senator =>{
  
  senator.imgURL = `https://www.congress.gov/img/member/${senator.id.toLowerCase()}.jpg`
  return senator 
})

const repWithPics = representatives.map(rep=>{
  rep.imgURL = `https://www.congress.gov/img/member/114_rp_${rept.state.toLowerCase()}_${rep.district}_${rep.last_name.toLocaleLowerCase()}_${rep.first_name.toLowerCase()}_200.jpg`
})