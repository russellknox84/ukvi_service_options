'use strict';

const { listOfVisas } = require('../behaviours/visa-types')
module.exports = {
    'what-visa-do-you-currently-hold': {
        mixin: 'select',
        legend: {
            className: 'visuallyhidden'
          },
        options: listOfVisas.map(visa => ({ value: visa, label: visa })),
        validate: 'required'
    }
};