const constants = {
  colors: {
    action: '#f23c3c',
    black: '#000000',
    brand: '#2fb3bf',
    gold: '#f2d33c',
    pink: '#FF98CFFF',
    facebook: '#4767AD',
    omnivore: '#2f77bf',
    vegan: '#3bbf2f',
    darkGrey: '#767676',
    grey: '#aaaaaa',
    lightGrey: '#e6e6e6',
    veryLightGrey: '#f6f6f6',
    orange: '#f4743b',
    twitter: '#4da7de',
    pinterest: '#AF2626',
    white: '#ffffff',
    recipeTag: '#f9f77f',
    articleTag: '#FFC0DDFF',
    challenge: '#4d5e6d'
  },
  fonts: {
    baseSize: '1em',
    quarterSize: '1.25em',
    halfSize: '1.5em',
    doubleSize: '2em'
  },
  shortenString: {
    start: 0,
    end: 48
  },
  size: {
    borderRadius: {
      small: '4px',
      medium: '8px',
      large: '16px'
    },
    height: {
      tiny: '30px',
      small: '48px',
      medium: '72px',
      large: '98px'
    },
    margin: {
      tiny: '4px',
      small: '8px',
      medium: '16px',
      large: '32px',
      larger: '50px',
      extraLarge: '10%'
    },
    padding: {
      tiny: '4px',
      small: '8px',
      medium: '12px',
      large: '24px',
      larger: '2%',
      huge: '48px',
      media: '15vw'
    },
    width: {
      tiny: '30px',
      small: '48px',
      smallMedium: '76px',
      medium: '108px',
      mediumLarge: '180px',
      large: '216px',
      extraLarge: '450px'
    }
  },
  lists: {
    categories: [
      'Men\'s Fashion',
      'Textbooks',
      // 'Home & Furniture',
      // 'Kitchen & Appliances',
      // 'Car Accessories',
      'Mobiles & Tablets',
      'Electronics'
    ],
    priceRange: [
      '$',
      '$$',
      '$$$',
      '$$$$'
    ],
    sortBy: [
      'Popularity - high to low',
      'Rating - high to low',
      'Veg. Friendly - high to low',
      'Cost - high to low',
      'Cost - low to high',
      'Distance - closest to furthest'
    ]
  },
  countriesMain: [
    'The World',
    'Australia',
    'Canada',
    'China',
    'France',
    'Germany',
    'Hong Kong',
    'India',
    'Indonesia',
    'Italy',
    'Japan',
    'New Zealand',
    'Singapore',
    'Switzerland',
    'Taiwan',
    'United Kingdom',
    'United States'
  ],
  otherCountries: [
    'Afghanistan',
    'Albania',
    'Algeria',
    // 'American Samoa',
    'Andorra',
    'Angola',
    'Anguilla',
    // 'Antarctica',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Aruba',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    // 'Bermuda',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    // 'Bouvet Island',
    'Brazil',
    // 'British Indian Ocean Territory',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cabo Verde',
    'Cambodia',
    'Cameroon',
    // 'Cape Verde',
    // 'Cayman Islands',
    'Central African Republic',
    'Chad',
    'Chile',
    // 'Christmas Island',
    // 'Cocos (Keeling) Islands',
    'Colombia',
    'Comoros',
    'Congo',
    'Democratic Republic of the Congo',
    'Republic of the Congo',
    'Cook Islands',
    'Costa Rica',
    'Cote d\'Ivoire',
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    // 'Falkland Islands (Malvinas)',
    // 'Faroe Islands',
    'Fiji',
    'Finland',
    // 'French Guiana',
    // 'French Polynesia',
    // 'French Southern Territories',
    'Gabon',
    'Gambia',
    'Georgia',
    'Ghana',
    // 'Gibraltar',
    'Greece',
    // 'Greenland',
    'Grenada',
    // 'Guadeloupe',
    // 'Guam',
    'Guatemala',
    // 'Guernsey',
    'Guinea',
    'Guinea-bissau',
    'Guyana',
    'Haiti',
    // 'Heard Island And Mcdonald Islands',
    'Honduras',
    'Hungary',
    'Iceland',
    'Iran',
    'Iraq',
    'Ireland',
    // 'Isle Of Man',
    'Israel',
    'Jamaica',
    // 'Jersey',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    // 'Korea',
    // 'Democratic People\'s Republic Of', 'Korea',
    'Kosovo',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macau',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    // 'Martinique',
    'Mauritania',
    'Mauritius',
    // 'Mayotte',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Montenegro',
    // 'Montserrat',
    'Morocco',
    'Mozambique',
    'Myanmar (Burma)',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    // 'Netherlands Antilles',
    // 'New Caledonia',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Niue',
    'Norfolk Island',
    'North Korea',
    'Northern Mariana Islands',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Palestine',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    // 'Pitcairn',
    'Poland',
    'Portugal',
    // 'Puerto Rico',
    'Qatar',
    // 'Reunion',
    'Romania',
    'Russia',
    'Rwanda',
    // 'Saint Helena',
    'Saint Kitts And Nevis',
    'Saint Lucia',
    // 'Saint Pierre And Miquelon',
    'Saint Vincent and the Grenadines',
    'Samoa',
    'San Marino',
    'Sao Tome And Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia',
    'Seychelles',
    'Sierra Leone',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'South Korea',
    'South Sudan',
    // 'South Georgia And The South Sandwich Islands',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    // 'Svalbard And Jan Mayen',
    'Swaziland',
    'Sweden',
    'Syria',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Timor-Leste',
    'Togo',
    // 'Tokelau',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    // 'Turks And Caicos Islands',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    // 'United States Minor Outlying Islands',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City (Holy See)',
    'Venezuela',
    'Vietnam',
    // 'Virgin Islands', 'British',
    // 'Virgin Islands', 'U.S.',
    // 'Wallis And Futuna',
    // 'Western Sahara',
    'Yemen',
    'Zambia',
    'Zimbabwe'
  ]
}

export default constants
