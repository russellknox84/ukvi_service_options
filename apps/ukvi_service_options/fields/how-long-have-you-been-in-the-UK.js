module.exports = {
    'how-long-have-you-been-in-the-UK': {
        validate: 'required',
        mixin: 'radio-group',
        legend: {
          className: 'visuallyhidden'
        },
        'options': {
          'more-than-5': {
            'label': 'more than 5 years',
            'value': 'false'
          },
          'less-than-5': {
            'label': 'less than 5 years',
            'value': 'true'
          }
        }
    }
}   
