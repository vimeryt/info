import PropertySelector from './property-selector.js';

const Dispatcher = document.getElementById('doc');

new PropertySelector(document.getElementById('colorList'));
new PropertySelector(document.getElementById('sizeList'));

Dispatcher.addEventListener('property-selected', ev => {
    const data = ev.detail;

    if (data.type === 'color') {
        toggleClass(data.value, data.type);
        changePicture(data.value);
    }

    if (data.type === 'size') {
        toggleClass(data.value, data.type);
    }
});

function toggleClass(value, type) {
    let allItems = document.querySelectorAll(`[data-type='${type}']`);
    let target = document.querySelectorAll(`[data-value='${value}']`)[0];

    allItems.forEach(item => {
        item.classList = `${type}__item`;
    });
    target.classList = `${target.className} ${type}__item_active`;
}

function changePicture(color) {
    document.getElementById('productPicture').src = 'img/tshirts/tshirt_' + color + '.jpg';
}
