'use strict';

module.exports = {
    'do-you-have-grandparents-in-the-uk': {
        validate: 'required',
        mixin: 'radio-group',
        legend: {
          className: 'visuallyhidden'
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
    }
};