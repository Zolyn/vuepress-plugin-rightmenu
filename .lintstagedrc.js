module.exports = {
    '*.{js, vue}': ['eslint', 'prettier --write'],
    '*.{json, html, md}': ['prettier --write'],
    'package.json': ['sort-package-json'],
};
