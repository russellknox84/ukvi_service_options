'use strict';

const { listOfVisas, listOfIntentions, mappedVisaList } = require('./visa-types');
const { computeConditons } = require('../utils/compute-conditions')

const types = listOfIntentions

const mapIntentionType = (session) => {
    const intentions = session.get('what-do-you-want-to-do-in-the-UK');
    if (Array.isArray(intentions)) {
        const a = intentions.reduce((state, intention) => {
            return [...state, ...types[intention]];
        }, []);
        return [...new Set(a)];
    }
    return types[intentions];
};

const mapIntention = (intentions, session) => {
    return intentions.reduce((state, intention) => {
        const visa = mappedVisaList[intention];
        const validateOptions = computeConditons(visa.condition, session);
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
        console.log(req.sessionModel)
        const sessionModel = req.sessionModel;
        const intentions = mapIntentionType(sessionModel);
        const mappedIntentions = mapIntention(intentions, sessionModel);
        console.log(mappedIntentions)
        return Object.assign({}, super.locals(...arguments), {
            options: mappedIntentions,
            count: mappedIntentions.length
        });
      }
};