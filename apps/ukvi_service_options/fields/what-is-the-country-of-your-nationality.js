'use strict';

const { allCountries } = require('../countries');

module.exports = {
    'what-is-the-country-of-your-nationality': {
        mixin: 'select',
        legend: {
            className: 'visuallyhidden'
          },
        options: allCountries.map(country => ({ value: country, label: country })),
    }
};