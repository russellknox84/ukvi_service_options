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
            'value': 'under-16'
          },
          '16-to-18': {
            'label': '16 to 18',
            'value': '16-to-18'
          },
          '19-to-30': {
            'label': '19 to 30',
            'value': '19-to-30'
          },
          '31-to-65': {
            'label': '31 to 65',
            'value': '31-to-65'
          },
          'over-65': {
            'label': 'over 65',
            'value': 'over-65'
          }
        }
    }
} 