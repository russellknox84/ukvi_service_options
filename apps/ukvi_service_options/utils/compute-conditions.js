const fn = {
    '>': (x, y) => parseInt(x) > parseInt(y),
    '<': (x, y) => parseInt(x) < parseInt(y),
    '=': (x, y) => x === y,
}

const typeConvertor = {
    industry: 'what-industry-are-you-going-to-work-in',
    visa: 'what-visa-do-you-currently-hold',
    residency: 'how-long-have-you-been-in-the-UK',
    nationality: 'what-is-the-country-of-your-nationality',
    age: 'what-is-your-age',
    grandparents: 'do-you-have-grandparents-in-the-uk',
    family: 'do-you-have-a-family-member-in-the-uk',
    outside: 'have-you-spent-6-months-or-more-outside-uk',
    visaType: 'what-visa-do-they-hold',
    familyVisa: 'what-visa-does-your-family-member-currently-hold',
    tier5: 'tier-5-country',
    commonwealth: 'commonwealth-coutry'
};

const calculateCondition = (string, session) => {
    const [type, cond, variable] = string.split(" ")
    const convertedType = session.get(typeConvertor[type]);
    console.log('--->', convertedType, variable)
	return fn[cond](convertedType, variable)
}

const and = (input, session) => {
	return !input.split(' AND ')
  	.map(condition => calculateCondition(condition, session))
		.includes(false)
}
const or = (input, session) => {
	return input.split(' OR ')
  	.map(condition => calculateCondition(condition, session))
		.includes(true)
}

const testForCondition = (string, session) => {
    const OR = /OR/
    const AND = /AND/

  if (AND.test(string)) return and(string, session)
  if (OR.test(string)) return or(string, session)
  return calculateCondition(string, session) 
}

const computeConditons = (input, session) => {
    if (!input) {
        return true;
    }
    const conditions = input.split(", ")
    return conditions.map(condition => {
        return testForCondition(condition, session)
    }).includes(true);
}

module.exports = {
    computeConditons
} 