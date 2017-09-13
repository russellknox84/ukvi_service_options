'use strict';

module.exports = {
    'how-long-have-you-been-in-the-UK': {
        validate: 'required',
        mixin: 'radio-group',
        legend: {
          className: 'visuallyhidden'
        },
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
    }
};