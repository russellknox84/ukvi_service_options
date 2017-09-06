const { Tier5, countriesOtherEU } = require('../countries')
const csvFilePath='../csv.csv'
const csv=require('csvtojson')

const a = csv()
.fromFile(csvFilePath)
.on('csv',(jsonObj)=>{
    console.log('sdf')
})
.on('done',(error)=>{
    console.log('end')
})



module.exports = superclass => class extends superclass {
    
    getNextStep(req, res, next) {
        const country = req.form.values['what-is-the-country-of-your-nationality']; 
       
        const isATier5Country = Tier5.includes(country) ? 'true' : 'false'
        const isEUCountry = countriesOtherEU.includes(country) ? 'true' : 'false'
        
        req.sessionModel.set('tier-5-country', isATier5Country)

        if (isEUCountry === 'true') {
            return `${req.baseUrl}/must-apply-from-outside-the-eu`
        }
           
        if (isATier5Country === 'true') {
            return `${req.baseUrl}/do-you-have-grandparents-in-the-uk`
        }
        
        if (isATier5Country === 'true') {
            return `${req.baseUrl}/do-you-have-grandparents-in-the-uk`
        }

        return super.getNextStep(req, res, next)
    }
};