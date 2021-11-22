const Handlebars = require('handlebars');

module.exports = {
    sum: (a, b) => a + b,
    sortable: (fieldName, _sort) => {
        const sortType = fieldName === _sort.column ? _sort.type : 'default';

        const icons = {
            default: 'oi oi-elevator',
            desc: 'oi oi-sort-descending',
            asc: 'oi oi-sort-ascending',
        };
        const types = {
            default: 'desc',
            desc: 'asc',
            asc: 'desc',
        };

        const icon = icons[sortType];
        const type = types[sortType];

        // Bảo mật dữ liệu truyền qua query parameters
        const output = `
            <a href="${Handlebars.escapeExpression(
                `?_sort&column=${fieldName}&type=${type}`
            )}">
                <span class="${icon}"></span>
            </a>
        `;
        return new Handlebars.SafeString(output);
    },
};
