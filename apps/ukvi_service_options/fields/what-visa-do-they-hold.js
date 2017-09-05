module.exports = {
    'what-visa-do-they-hold': {
        validate: 'required',
        mixin: 'radio-group',
        legend: {
          className: 'visuallyhidden'
        },
        'options': {
          'british': {
            'label': 'a British Citizrn',
            'value': 'british'
          },
          'eea': {
            'label': 'from a country within the European Economic Area',
            'value': 'eea'
          },
          'permanent': {
            'label': 'on a permanent residence visa in the UK',
            'value': 'permanent'
          },
          'other': {
            'label': 'in the UK on another visa',
            'value': 'other'
          }
        }
    }
}