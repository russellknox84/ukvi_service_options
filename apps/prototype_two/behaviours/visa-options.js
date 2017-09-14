'use strict';

module.exports = superclass => class extends superclass {

    saveValues(req, res, callback) {
    const options = {
        intentions: 'what-do-you-want-to-do-in-the-UK',
        industry: 'what-industry-are-you-going-to-work-in',
        visa: 'what-visa-do-you-currently-hold',
        residency: 'how-long-have-you-been-in-the-UK',
        nationality: 'what-is-the-country-of-your-nationality',
        age: 'what-is-your-age',
        grandparent: 'do-you-have-grandparents-in-the-uk',
        family: 'do-you-have-a-family-member-in-the-uk',
        outside: 'have-you-spent-6-months-or-more-outside-uk',
        familyVisa: 'what-visa-do-they-hold',
        tier5: 'tier-5-country',
        commonwealth: 'commonwealth-coutry'
    }
    Object.keys(req.form.values).forEach(key => {
       req.sessionModel.set(options[key], req.form.values[key])
    })
      super.saveValues(req, res, callback);
    }
  };