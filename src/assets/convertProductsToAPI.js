let products = require('./products.json')

let updatedProducts = products.map(item => {
  let temp = {}
  temp.product_id = item.product_id
  temp.title = item.title
  temp.description = item.description
  temp.category = item.category
  temp.declared_customs_value = item.price
  temp.actual_weight = item.weight
  temp.width = item.width
  temp.length = item.length
  temp.height = item.height
  temp.declared_currency = 'SGD'
  return temp
})

let order = {
  'order': {
    'origin_country': 'SG',
    'destination_country': 'SG',
    'origin_postal_code': '277993',
    'destination_postal_code': '556113',
    'items': [
      {
        'title': '',
        'description': '',
        'actual_weight': 1.2,
        'height': 10,
        'width': 15,
        'length': 20,
        'category': 'mobiles',
        'declared_currency': 'SGD',
        'declared_customs_value': 100
      }
    ]
  },
  'catalog': updatedProducts
}

require('fs').writeFile('./api.json', JSON.stringify(order), err => {
  if (err) throw err
  console.log('The file has been saved!')
})
