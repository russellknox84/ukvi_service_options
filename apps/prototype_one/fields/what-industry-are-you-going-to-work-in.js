'use strict';

module.exports = {
    'what-industry-are-you-going-to-work-in': {
        validate: 'required',
        mixin: 'radio-group',
        legend: {
          className: ['visuallyhidden']
        },
        className: "form-control",
        'options': {
          'creative-and-entertainment': {
            'label': 'creative and entertainment',
            'value': 'creative'
          },
          'religion': {
            'label': 'religion',
            'value': 'religion'
          },
          'science': {
            'label': 'science',
            'value': 'science'
          },
          'sport': {
            'label': 'sport',
            'value': 'sport'
          },
          'technology': {
            'label': 'technology',
            'value': 'technology'
          },
          'none': {
            'label': 'none of the above',
            'value': 'none'
          }
        }
    }
};