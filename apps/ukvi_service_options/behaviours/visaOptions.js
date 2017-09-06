const visaTypes = require('./visaTypes')

const types = {
    business: ["tier1EG", 'tier1E', 'tier1I'],
    study: ["tier4", "tier4YMS"],
    working: ['tier1ET', "tier2G", "tier2ICT", "tier2MOR", "tier2SP", "tier4", "tier5CS"],
    charity: ["tier5CW"]
}

const mapIntentionType = (session) => {
    const intentions = session.get('what-do-you-want-to-do-in-the-UK')
    if (Array.isArray(intentions)) {
        const a = intentions.reduce((state, intention) => {
            return [...state, ...types[intention]]
        }, [])
        return [...new Set(a)]
    }
    return types[intentions]
}

const typeConvertor = {
    industry: 'what-industry-are-you-going-to-work-in',
    visa: 'what-visa-do-you-currently-hold',
    duration: 'how-long-have-you-been-in-the-UK',
    nationality: 'what-is-the-country-of-your-nationality',
    age: 'what-is-your-age',
    grandparents: 'do-you-have-grandparents-in-the-uk',
    family: 'do-you-have-a-family-member-in-the-uk',
    outside: 'have-you-spent-6-months-or-more-outside-uk',
    visaType: 'what-visa-do-they-hold',
    familyVisa: 'what-visa-does-your-family-member-currently-hold',
    tier5: 'tier-5-country'
}

const fn = {
    greater: (x, y) => x >= y,
    less: (x, y) => x <= y,
    contains: (x, y) => x === y,
}

const checkCondition = (condition, session) => {
    if (!condition) return true
    
    condition = condition.split(' OR ')
    const conditionToMeet = condition.map(condition => {
        const [type, cond, variable] = condition.split(" | ")
        const convertedType = session.get(typeConvertor[type])
        return fn[cond](convertedType, variable)
    })
    return conditionToMeet.includes(true) 
}

const mapIntention = (intentions, session) => {
    return intentions.reduce((state, intention) => {
        const {visa, link, conditions} =  visaTypes[intention]       
        const validateOptions = checkCondition(conditions, session)
        if (validateOptions) return [
            ...state,
            { visa, link }
        ]
        return state
    }, [])
}
module.exports = superclass => class extends superclass {  
    locals(req) {
        const sessionModel = req.sessionModel
        const intentions = mapIntentionType(sessionModel)
        const mappedIntentions = mapIntention(intentions, sessionModel)
        return Object.assign({}, super.locals(...arguments), {
            options: mappedIntentions,
            count: mappedIntentions.length
        });
      }
};