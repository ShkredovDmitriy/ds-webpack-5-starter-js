module.exports = {
  extends: ['stylelint-config-standard'],
  plugins: ['stylelint-order', 'stylelint-scss'],
  rules: {
    'at-rule-no-unknown': null,
    'no-empty-source': null,
    'no-descending-specificity': null,
    'no-invalid-position-at-import-rule': null,
  },
};
