const { Tier5 } = require('../countries')

module.exports = superclass => class extends superclass {
    
    getNextStep(req, res, next) {
        const country = req.form.values['what-is-the-country-of-your-nationality']; 
       
        const isATier5Country = Tier5.includes(country) ? 'true' : 'false'
        req.sessionModel.set('tier-5-country', isATier5Country)
        
        if (isATier5Country) {
            return `${req.baseUrl}/do-you-have-grandparents-in-the-uk`
        }

        return super.getNextStep(req, res, next)
    }
};