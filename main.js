import { senators } from './senators.js'
import { representatives } from './representatives.js'

// console.log(senators)
//filter examples


const democrats = senators.filter(senator => {
  return senator.party === 'D' 
})
const republicans = senators.filter(senator => senator.party === 'R'
  )

// console.log(democrats, republicans)

const simpleReps = representatives.map(rep => {
  return {
    name: `${rep.first_name} ${rep.last_name}`,
    facebook: rep.facebook_account

  }
})
console.log(simpleReps)

//template literals or string templates are the ${string} it can let you insert a variable within a string when you are trying to return a string value.

//reduce executes a reducer function results in a single output value. You can pass the whole reducer function then set the initial value