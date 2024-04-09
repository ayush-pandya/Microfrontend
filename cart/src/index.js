import faker from 'faker';

const cartTest = `<div>YOu have ${faker.random.number()} items in your cart</div>`

document.querySelector('#dev-cart').innerHTML = cartTest;