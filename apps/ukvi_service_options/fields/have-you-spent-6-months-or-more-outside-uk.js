module.exports = {
    'have-you-spent-6-months-or-more-outside-uk': {
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
}