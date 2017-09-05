module.exports = {
    'what-visa-do-you-currently-hold': {
        mixin: 'select',
        legend: {
            className: 'visuallyhidden'
          },
        options: [
            { value: 'Tier One', label: 'Tier One' },
            { value: 'Tier Two', label: 'Tier Two' },
            { value: 'Tier Three', label: 'Tier Three' },
            { value: 'Tier Four', label: 'Tier Four' }
        ],
        validate: 'required'
    }
}
