'use strict';

module.exports = {
    'what-is-your-age': {
        validate: 'required',
        mixin: 'radio-group',
        legend: {
          className: 'visuallyhidden'
        },
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
    }
};