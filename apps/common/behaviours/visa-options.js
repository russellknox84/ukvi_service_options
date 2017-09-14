'use strict';

const { listOfVisas, listOfIntentions, mappedVisaList } = require('../utils/visa-types');
const { computeConditons } = require('../utils/compute-conditions')

const mapIntentionType = (session) => {
    const intentions = session.get('what-do-you-want-to-do-in-the-UK');
    if (Array.isArray(intentions)) {
        const a = intentions.reduce((state, intention) => {
            return [...state, ...listOfIntentions[intention]];
        }, []);
        return [...new Set(a)];
    }
    return listOfIntentions[intentions];
};

const mapIntention = (intentions, session) => {
    if (!intentions) return
    return intentions.reduce((state, intention) => {
        const visa = mappedVisaList[intention];
        const validateOptions = computeConditons(visa.condition, session);
        console.log(validateOptions)
        if (validateOptions) {
            return [
                ...state,
                visa
            ];
        }
        return state;
    }, []);
};
module.exports = superclass => class extends superclass {
    locals(req) {
        if (req.url === '/visa_list') {
            return Object.assign({}, super.locals(...arguments), {
                visaOptions: Object.keys(mappedVisaList).map(key => mappedVisaList[key]),
                count: listOfVisas ? listOfVisas.length : 0
            });
        }
        const sessionModel = req.sessionModel;
        const intentions = mapIntentionType(sessionModel);
        const mappedIntentions = mapIntention(intentions, sessionModel);
        return Object.assign({}, super.locals(...arguments), {
            visaOptions: mappedIntentions,
            count: mappedIntentions ? mappedIntentions.length : 0
        });
      }
};