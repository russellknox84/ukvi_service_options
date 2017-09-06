'use strict';

module.exports = superclass => class extends superclass {
    getNextStep(req, res, next) {
        const annualTurnover = req.form.values['what-do-you-want-to-do-in-the-UK'];
        if (Array.isArray(annualTurnover)) {
            if (annualTurnover.includes('working')) {
                return `${req.baseUrl}/what-industry-are-you-going-to-work-in`;
            }
        } else if (annualTurnover === 'working') {
            return `${req.baseUrl}/what-industry-are-you-going-to-work-in`;
        }
        return super.getNextStep(req, res, next);
      }
  };