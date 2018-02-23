let products = require('./products.json')

let updatedProducts = products.map(item => {
  let temp = {}
  temp.product_id = item.product_id
  temp.title = item.title
  temp.description = item.description
  temp.category_name = item.category_name
  temp.price = (Math.random() * 1000).toFixed(2)
  temp.weight = (Math.random() * 20).toFixed(2)
  temp.width = Math.floor((Math.random() * 100))
  temp.breadth = Math.floor((Math.random() * 100))
  temp.height = Math.floor((Math.random() * 100))
  return temp
})

require('fs').writeFile('./updatedProducts.json', JSON.stringify(updatedProducts), err => {
  if (err) throw err
  console.log('The file has been saved!')
})
