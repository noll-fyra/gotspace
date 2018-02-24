let products = require('./products3.json')

let updatedProducts = products.slice(0, 200).map((item, index) => {
  let temp = {}
  temp.product_id = item.product_id
  temp.title = item.title
  temp.description = item.description
  temp.category = item.category_name
  temp.price = Math.max(1, (Math.random() * 1000).toFixed(2))
  temp.actual_weight = Math.max(0.1, (Math.random() * 12).toFixed(2))
  temp.width = Math.max(1, Math.floor((Math.random() * 50)))
  temp.length = Math.max(1, Math.floor((Math.random() * 50)))
  temp.height = Math.max(1, Math.floor((Math.random() * 50)))
  temp.clusters = item.clusters
  return temp
})

require('fs').writeFile('./productsFinal.json', JSON.stringify(updatedProducts), err => {
  if (err) throw err
  console.log('The file has been saved!')
})
