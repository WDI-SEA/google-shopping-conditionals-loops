// Require is a node-specific thing, so run
// your file in the terminal with the node command!
// e.g., node js/google-shopping.js
let data = require('../products.json')

// YOUR CODE BELOW
// 1.) Go through the `items` and find all results that have `kind` of
// `shopping#product`. Print the count of these results. Where else is
// this count information stored in the search results?

console.log('PROBLEM 1:\n')

let count = 0
for (let i = 0; i < data.items.length; i++) {
  if (data.items[i].kind === 'shopping#product') {
    count++
  }
}
console.log('Number of items with kind shopping#product:', count)

// Alternative answer with forEach
// let count = 0
// data.items.forEach(item => {
//   if (item.kind === 'shopping#product') {
//     count++
//   }
// })
// console.log(count)

// Alternative answer with reduce
// console.log(data.items.reduce((acc, item) => acc + (item.kind === 'shopping#product' ? 1 : 0), 0))

// 2.) Print the `title` all items with a `backorder` availability
// in `inventories`.

console.log('\nPROBLEM 2:\n')

for (let i = 0; i < data.items.length; i++) {
  for (let j = 0; j < data.items[i].product.inventories.length; j++) {
    if (data.items[i].product.inventories[j].availability === 'backorder') {
      console.log(data.items[i].product.title)
      break // so it only prints once
    }
  }
}

// 3.) Print the `title` all items with more than one image link.

console.log('\nPROBLEM 3:\n')

for (let i = 0; i < data.items.length; i++) {
  if (data.items[i].product.images.length) {
    console.log(data.items[i].product.title)
  }
}

// 4.) Print all "Canon" products in the items array
// HINT: careful with case sensitivity!

console.log('\nPROBLEM 4:\n')

for (let i = 0; i < data.items.length; i++) {
  if (data.items[i].product.brand === 'Canon') {
    console.log(data.items[i].product.title)
  }
}

// 5.) Print all `items` that have an author name of "eBay" and are
// brand "Canon".
// HINT: What data type is author?

console.log('\nPROBLEM 5:\n')

for (let i = 0; i < data.items.length; i++) {
  if (data.items[i].product.brand === 'Canon' && data.items[i].product.author.name === 'eBay') {
    console.log(data.items[i].product.title)
  }
}

// 6.) Print all the products with their **brand**, **price**,
// and an **image link**

console.log('\nPROBLEM 6:\n')

for (let i = 0; i < data.items.length; i++) {
  console.log(data.items[i].product.brand, data.items[i].product.inventories[0].price, data.items[i].product.images[0])
}

