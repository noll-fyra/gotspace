let products = require('./originalProducts.json')

let updatedProducts = products.slice(0, 200).map(item => {
  let temp = {}
  temp.product_id = item.product_id
  temp.title = item.title
  temp.description = item.description
  temp.category_name = item.category_name
  temp.price = Math.max(1, (Math.random() * 1000).toFixed(2))
  temp.weight = Math.max(0.1, (Math.random() * 20).toFixed(2))
  temp.width = Math.max(1, Math.floor((Math.random() * 100)))
  temp.breadth = Math.max(1, Math.floor((Math.random() * 100)))
  temp.height = Math.max(1, Math.floor((Math.random() * 100)))
  return temp
})

require('fs').writeFile('./products.json', JSON.stringify(updatedProducts), err => {
  if (err) throw err
  console.log('The file has been saved!')
})
