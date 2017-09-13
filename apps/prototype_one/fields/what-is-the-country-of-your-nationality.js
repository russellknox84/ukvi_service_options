'use strict';

const { allCountries } = require('../../common/countries');

module.exports = {
    'what-is-the-country-of-your-nationality': {
        mixin: 'select',
        legend: {
            className: 'visuallyhidden'
          },
          className: "form-control",
        options: allCountries.map(country => ({ value: country, label: country })),
    }
};