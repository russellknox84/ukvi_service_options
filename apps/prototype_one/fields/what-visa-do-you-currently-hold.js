'use strict';

const { listOfVisas } = require('../../common/behaviours/visa-types')
module.exports = {
    'what-visa-do-you-currently-hold': {
        mixin: 'select',
        legend: {
            className: 'visuallyhidden'
          },
          className: "form-control",
        options: listOfVisas.map(visa => ({ value: visa, label: visa })),
        validate: 'required'
    }
};