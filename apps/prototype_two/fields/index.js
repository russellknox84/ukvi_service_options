const { listOfVisas } = require('../../common/behaviours/visa-types')
const { allCountries } = require('../../common/countries');

module.exports = {
    visa: {
        mixin: 'select',
        label: "Current visa",
        legend: {
          className: 'legend-padding'
        },
        className: "form-control",
        'options': listOfVisas.map(visa => ({ value: visa, label: visa })),
    },
    nationality: {
        mixin: 'select',
        label: "Nationality",
        legend: {
          className: 'legend-padding'
        },
        className: "form-control",
        options: allCountries.map(country => ({ value: country, label: country })),
    },
    age: {
        mixin: 'select',
        label: "Age",
        legend: {
          className: 'legend-padding'
        },
        className: "form-control",
        'options': {
            'under-16': {
              'label': 'under 16',
              'value': '16'
            },
            '16-to-17': {
              'label': '16 to 17',
              'value': '17'
            },
            '18-to-30': {
              'label': '18 to 30',
              'value': '30'
            },
            '31-to-65': {
              'label': '31 to 65',
              'value': '65'
            },
            'over-65': {
              'label': 'over 65',
              'value': '65'
            }
          }
    },
    residency: {
        mixin: 'select',
        label: "Length of time in the UK",
        legend: {
          className: 'legend-padding'
        },
        className: "form-control",
        'options': {
            'less-than-5': {
              'label': 'Less than 5 years',
              'value': '5'
            },
            '5-10': {
              'label': '5-10 years',
              'value': '10'
            },
            'more-than-5': {
              'label': 'More than 10 years',
              'value': '11'
            }
          }
    },
    familyVisa: {
        type: 'radio',
        label: "Parent, partner or child in the UK",
        mixin: 'radio-group',
        legend: {
          className: 'legend-padding'
        },
        'options': {
            'yes': {
              'label': 'yes',
              'value': 'true'
            },
            'no': {
              'label': 'no',
              'value': 'false'
            }
          }
    },
    industry: {
        validate: 'required',
        type: 'checkbox',
        legend: "What do you want to do",
        legend: {
          className: 'legend-padding'
        },
        'options': {
            'family': {
                'label': 'Live with my family',
                'value': 'family'
            },
            'retire': {
                'label': 'Retire',
                'value': 'retire'
            },
            'business': {
                'label': 'Start a business',
                'value': 'business'
            },
            'study': {
                'label': 'Study',
                'value': 'study'
            },
            'volunteer for a charity': {
                'label': 'Volunteer for a charity',
                'value': 'charity'
            },
            'work': {
                'label': 'Work',
                'value': 'work'
            }
        }
    }
}
