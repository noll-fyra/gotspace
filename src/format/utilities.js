import constants from '../constants/constants'

// compares two obj.text strings and sorts them alphabetically
function sortStringAlphabetically (a, b) {
  if (a.text < b.text) return -1
  else if (a.text > b.text) return 1
  else return 0
}

// turn article title into web slug
const allowed = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789- '.split('')

function turnTitleIntoSlug (title, trim) {
  let filtered = title.split('').filter(char => { return allowed.includes(char) }).join('')
  if (trim) {
    return filtered.trim().toLowerCase().replace(/ +/g, ' ').replace(/-+/g, '-').split(' ').join('-')
  } else {
    return filtered.toLowerCase().replace(/ +/g, ' ').replace(/-+/g, '-').split(' ').join('-')
  }
}

// capitalize all letters/the first letter of a string
function capitalizeString (string, all = true) {
  if (!string || !string.length) { return '' }
  let final = string.trim().replace(/\s+/g, ' ')
  return all
    ? final.toLowerCase()
      .split(' ')
      .map(str => { return str[0].toUpperCase().concat(str.slice(1)) })
      .join(' ')
      .split('(')
      .map(str => { return str[0].toUpperCase().concat(str.slice(1)) })
      .join('(')
      .split('-')
      .map(str => { return str[0].toUpperCase().concat(str.slice(1)) })
      .join('-')
    : string[0].toUpperCase().concat(string.toLowerCase().slice(1))
}

// get opening hours from Google Places opening_hours
function getHoursFromPeriods (periods) {
  let result = Array(7).fill([])
  for (var i = 0; i < periods.length; i++) {
    const {close, open} = periods[i]
    const index = open.day
    result[index] = result[index] ? result[index].concat([open.time, close && close.time ? close.time : open.time]) : [open.time, close && close.time ? close.time : open.time]
  }
  return result.map(day => { return day.length > 0 ? day : [0, 0] })
}

// get individual components from Google Places address_components
function getComponentsFromAddress (obj, address) {
  address.forEach(component => {
    obj[component.types[0]] = component.long_name
  })
}

// shorten long strings with ...
function shortenString (string, start, end) {
  return string && string.length > 0 ? string.slice(start, end).concat(string.length > end ? '...' : '') : ''
}

// turn opening hours array into text
function hoursArrayIntoText (hours) {
  if (!hours) { return }

  // turn a time like 100 into 1 am
  function formatHours (time) {
    let int = parseInt(time, 10)
    // if (!int) return ''
    if (int === 0) {
      return '12 midnight'
    } else if (int <= 1159) {
      return int % 100 === 0 ? Math.floor((int / 100)).toString() + ' am' : int.toString() + ' am'
    } else if (int === 1200) {
      return '12 noon'
    } else {
      return int % 100 === 0 ? Math.floor(((int - 1200) / 100)).toString() + ' pm' : (int - 1200).toString() + ' pm'
    }
  }

  function singleDayIntoText (array) {
    if (!array) { return '' }
    if (array[0] === null) { return 'closed'}
    let temp = ''
    let currentIndex = 0
    while (array.length - currentIndex > 0) {
      temp += formatHours(array.slice(currentIndex, currentIndex + 1))
      currentIndex += 1
      temp += ' - '
      temp += formatHours(array.slice(currentIndex, currentIndex + 1))
      currentIndex += 1
      if (array.length - currentIndex > 0) {
        temp += ','
      }
    }
    return temp.length > 0 ? temp : 'closed'
  }

  let sunToMon = constants.days.map((day, index) => {
    return [day, singleDayIntoText(hours[index])]
  })
  let sun = sunToMon.shift()
  sunToMon.push(sun)
  return sunToMon
}

// total price / total number for 1 starter + 1 main + 1 side + 1 dessert; add gst and service charge; round to nearest 5
// function averagePriceOfRestaurant (restaurant) {
//   if (!restaurant.numberOfStarters && !restaurant.totalPriceOfStarters && !restaurant.numberOfMains && !restaurant.totalPriceOfMains && !restaurant.numberOfSides && !restaurant.totalPriceOfSides && !restaurant.numberOfDesserts && !restaurant.totalPriceOfDesserts) {
//     return 0
//   } else {
//     let preChargesAverage = (
//       ((restaurant.totalPriceOfStarters || 0) / (restaurant.numberOfStarters || 0) || 0) +
//       ((restaurant.totalPriceOfMains || 0) / (restaurant.numberOfMains || 0) || 0) +
//       ((restaurant.totalPriceOfSides || 0) / (restaurant.numberOfSides || 0) || 0) +
//       ((restaurant.totalPriceOfDesserts || 0) / (restaurant.numberOfDesserts || 0) || 0)
//       )
//     let postChargesAverage = preChargesAverage *
//       (restaurant.gst ? 1 + constants.charges.gst : 1) *
//       (restaurant.serviceCharge ? 1 + constants.charges.serviceCharge : 1)
//     return Math.round(postChargesAverage / 5) * 5
//   }
// }

function averagePriceOfRestaurant(restaurant){
  if (restaurant.priceRange && restaurant.priceRange.filter(Boolean).length > 0) {
    let priceRangeArr = restaurant.priceRange
    let counts = priceRangeArr.filter(Boolean).reduce((map, price) => {
        map[price] = (map[price] || 0) + 1;
        return map
    }, {});
    let sorted = Object.keys(counts).sort((a, b) => counts[b] - counts[a]);
    let top = sorted[0];
    return top
  } else {
    return '0'
  }
}

// average of veg dishes / total dishes
function friendlinessOfRestaurant (restaurant) {
  if (!restaurant.numberOfStarters && !restaurant.totalPriceOfStarters && !restaurant.numberOfMains && !restaurant.totalPriceOfMains && !restaurant.numberOfSides && !restaurant.totalPriceOfSides && !restaurant.numberOfDesserts && !restaurant.totalPriceOfDesserts) {
    return '?'
  } else {
    return ((restaurant.friendliness / (restaurant.numberOfStarters + restaurant.numberOfMains + restaurant.numberOfSides + restaurant.numberOfDesserts)) * 100).toFixed(0)
  }
}

export function extractTypeNamesFromMenu (menu) {
  let types = []
  menu.forEach(item => {
    if (!item.type) {
      types.push('main')
    } else if (!types.includes(item.type.toLowerCase())) {
      types.push(item.type.toLowerCase())
    }
  })
  return types
}

// get the average rating (reviews, type is 'restaurant' or 'dish', id is dish._id)
function averageRating (model, type) {
  if (type === 'restaurant') {
    return model.reviews ? (model.totalOverall / model.reviews).toFixed(1) : (0).toFixed(1)
  } else if (type === 'dish') {
    let total = model.totalTaste + model.totalNutrition + model.totalPresentation + model.totalValue + model.totalOriginality
    return model.reviews ? (total / 5.0 / model.reviews).toFixed(1) : (0).toFixed(1)
  }
}

function handlePriceEstimate (price) {
  switch (true) {
    case price > 0 && price < 20:
      return '$'
    case price >= 20 && price < 50:
      return '$$'
    case price >= 50 && price < 100:
      return '$$$'
    case price >= 100:
      return '$$$$'
    default:
      return ''
  }
}

function calculateFriendliness (restaurant) {
  if (!restaurant.friendliness) { return -1 }

  var not = restaurant.friendliness.not
  var quite = restaurant.friendliness.quite
  var very = restaurant.friendliness.very
  var totalVotes = not + quite + very

  if (totalVotes === 0) {
    return -1
  } else {
    return ((quite * 0.5) + very) / totalVotes * 100
  }
}

function handleFriendlinessScore (score) {
  switch (true) {
    case score >= 0 && score < 33:
      return constants.lists.vegFriendliness[0]
    case score >= 33 && score < 67:
      return constants.lists.vegFriendliness[1]
    case score >= 67:
      return constants.lists.vegFriendliness[2]
    default:
      return 'No veg rating'
  }
}

function getUserScore (user) {
  return 2 * (user.reviews.reduce((a, b) => { return a + b.images.reduce((a, b) => { return b.likes }, 0) }, 0) || 0) +
  3 * (user.reviews.reduce((a, b) => { return a + (b.likes || 0) }, 0) || 0) +
  user.reviews.length +
  user.followers.length
}

// return a transformed cloudinary path
function optimisedPath (path, isAvatar = false, isArticle = false) {
  // if (process.env.NODE_ENV !== 'production') { return '' }
  // const amazon = 'https://s3-ap-southeast-1.amazonaws.com/abillionveg/'
  const cloudinary = 'https://res.cloudinary.com/abillionveg/image/upload/'
  if (path.includes(cloudinary)) { return cloudinary + (isArticle ? 'c_scale,w_700/' : isAvatar ? 'a_exif,w_150,h_150,c_fill/' : 'a_exif,w_600,h_600,c_fill/') + path.split(cloudinary)[1] }
  else { return path }
}

// return user friendly review date
function formatDate(date) {
  let now = Date.now()
  let posted = Date.parse(date)
  let difference = (now - posted) / 1000 / 60 // number of minutes since review
  switch(true) {
    case Math.floor(difference) < 60:
      return `${Math.max(0, Math.floor(difference))} ${Math.floor(difference) === 1 ? 'MINUTE' : 'MINUTES'} AGO`
    case Math.floor(difference / 60) < 24:
      return `${Math.floor(difference / 60)} ${Math.floor(difference / 60) === 1 ? 'HOUR' : 'HOURS'} AGO`
    case Math.floor(difference / 60 / 24) < 7:
      return `${Math.floor(difference / 60 / 24)} ${Math.floor(difference / 60 / 24) === 1 ? 'DAY' : 'DAYS'} AGO`
    case Math.floor(difference / 60 / 24 / 7) <= 4:
      return `${Math.floor(difference / 60 / 24 / 7)} ${Math.floor(difference / 60 / 24 / 7) === 1 ? 'WEEK' : 'WEEKS'} AGO`
    case Math.floor(difference / 60 / 24 / 30) < 12:
      return `${Math.max(1, Math.floor(difference / 60 / 24 / 31 / 12))} ${Math.max(1, Math.floor(difference / 60 / 24 / 31 / 12)) === 1 ? 'MONTH' : 'MONTHS'} AGO`
    case Math.floor(difference / 60 / 24 / 365) >= 1:
      return `${Math.max(1, Math.floor(difference / 60 / 24 / 365))} ${Math.max(1, Math.floor(difference / 60 / 24 / 365)) === 1 ? 'YEAR' : 'YEARS'} AGO`
    default:
      return ''
  }
}

// return list of poked users
function pokedList(users, user = null) {
  if (!users.length) { return }
  let names = []
  if (user) {
    if(users.map(user => { return user.username }).includes(user.username)) { names.push(user.username) }
    user.following.forEach(following => {
      if (users.map(user => { return user.username }).includes(following.username)) { names.push(following.username) }
    })
  }

  if (names.length >= 3) { return names }
  else {
    users.slice(0, 3).forEach(user => {
      if (!names.includes(user.username)) { names.push(user.username) }
    })
    return names
  }
}

function calculatePoints(user) {
  if (!user) {
    return 0
  }
  if(user.reviews.length === 0) {
    return '0'
  } else {
    let dishReviews = user.reviews.filter(review => {
      return review.type === 'dish' && review.images.length > 0 && new Date(review.createdAt) > new Date("January 01, 2018")
    }).length
    let numberOfRedemptions = user.animalsSaved + user.cardsRedeemed

    let totalPoints = (dishReviews * 100) - (numberOfRedemptions * 1000)
    return totalPoints
  }
}


export {
  sortStringAlphabetically,
  turnTitleIntoSlug,
  capitalizeString,
  getHoursFromPeriods,
  getComponentsFromAddress,
  shortenString,
  hoursArrayIntoText,
  averagePriceOfRestaurant,
  friendlinessOfRestaurant,
  averageRating,
  handlePriceEstimate,
  getUserScore,
  handleFriendlinessScore,
  calculateFriendliness,
  optimisedPath,
  formatDate,
  pokedList,
  calculatePoints
}
