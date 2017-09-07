'use strict';

const { tier5, countriesOtherEU, commonWealthCountries } = require('../countries');

module.exports = superclass => class extends superclass {
    getNextStep(req, res, next) {
        const country = req.form.values['what-is-the-country-of-your-nationality'];
        
        const isACommonwealthCountry = commonWealthCountries.includes(country) ? 'true' : 'false';
        const isATier5Country = tier5.includes(country) ? 'true' : 'false';
        const isEUCountry = countriesOtherEU.includes(country) ? 'true' : 'false';

        req.sessionModel.set('tier-5-country', isATier5Country);
        req.sessionModel.set('commonwealth-country', isACommonwealthCountry);

        if (isEUCountry === 'true') {
            return `${req.baseUrl}/no-visa-required`;
        }

        if (isACommonwealthCountry === 'true') {
            return `${req.baseUrl}/do-you-have-grandparents-in-the-uk`;
        }

        return super.getNextStep(req, res, next);
    }
};