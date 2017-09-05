module.exports = {
    'what-visa-does-your-family-member-currently-hold': {
        mixin: 'select',
        legend: {
            className: 'visuallyhidden'
          },
        options: [
            { value: 'Visa One', label: 'One' },
            { value: 'Visa Two', label: 'Two' },
            { value: 'Visa Three', label: 'Three' },
            { value: 'Visa Four', label: 'Four' }
        ],
        validate: 'required'
    }
}
