'use strict';
// eslint-disable-next-line implicit-dependencies/no-implicit
require('$$theme');
const { commonWealthCountries } = require("../../apps/common/countries")

const industry = [...document.querySelectorAll("input[name=intentions]")]

industry.forEach(elem => {
    if (elem.value === 'work' && elem.checked) {
        var revealText = document.querySelector('.industry_choices')
        revealText.style['display'] = 'block';
    }
    elem.addEventListener('change', (ev) => {
        if (ev.target.value === 'work') {
            var revealText = document.querySelector('.industry_choices')
            revealText.style['display'] = 'block';
        }
        if (ev.target.value === 'work' && !ev.target.checked) {
            var revealText = document.querySelector('.industry_choices')
            revealText.style['display'] = 'none';
        }
    })
});

var grandparentsInUk = document.querySelector("#nationality")
if (commonWealthCountries.includes(grandparentsInUk.value)) {
    var revealText = document.querySelector('.grandparent_in_uk')
    revealText.style['display'] = 'block';
}
grandparentsInUk.addEventListener('change', (ev) => {
    const commonWealthCountry = commonWealthCountries.includes(ev.target.value) ? 'true' : 'false';
    if (commonWealthCountry === 'true') {
        var revealText = document.querySelector('.grandparent_in_uk')
        revealText.style['display'] = 'block';
    }
    if (commonWealthCountry === 'false') {
        var revealText = document.querySelector('.grandparent_in_uk')
        revealText.style['display'] = 'none';
    }
})

var familyMemberInUk = document.querySelector("#family-group")
console.log(familyMemberInUk.children)
familyMemberInUk.addEventListener('change', (ev) => {
    const familyMember = ev.target.value
    if (familyMember === 'true') {
        var revealText = document.querySelector('.family_member_in_uk')
        revealText.style['display'] = 'block';
    }
    if (familyMember === 'false') {
        var revealText = document.querySelector('.family_member_in_uk')
        revealText.style['display'] = 'none';
    }
})
