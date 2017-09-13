'use strict';

module.exports = {
    'what-visa-do-they-hold': {
        validate: 'required',
        mixin: 'radio-group',
        legend: {
          className: 'visuallyhidden'
        },
        'options': {
          'british': {
            'label': 'A British Citizen',
            'value': 'british'
          },
          'eea': {
            'label': 'From a country within the European Economic Area',
            'value': 'eea'
          },
          'permanent': {
            'label': 'On a permanent residence visa in the UK',
            'value': 'settled'
          },
          'other': {
            'label': 'In the UK on another visa',
            'value': 'other'
          }
        }
    }
};