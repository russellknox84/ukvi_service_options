'use strict';
const visaTypes = require('./visas')
const listOfVisas = visaTypes.map(visa => visa.name)
const listOfIntentions = visaTypes.reduce((state, visa) => {
    visa.intention.map(intent => {
        if (state[intent]) {
            state[intent] = [...state[intent], visa.alias]
        }
    })
    return state
}, {
    business: [],
    study: [],
    work: [],
    charity: [],
    retire: [],
    family: []
})
const mappedVisaList = visaTypes.reduce((state, visa) => {
    return Object.assign(state, { [visa.alias]: visa })
}, {})

// console.log(listOfVisas)
// console.log(listOfIntentions)
// console.log(mappedVisaList)

module.exports = {
    listOfVisas,
    listOfIntentions,
    mappedVisaList
}