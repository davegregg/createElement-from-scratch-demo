const linksList = document.querySelector('.links')

const codeCombatLink = createElement(null, 'a', 'CodeCombat', ['href', 'https://codecombat.com'])
createElement(linksList, 'li', codeCombatLink)

const pwnedLink = createElement(null, 'a', 'Have I Been PWNed?', ['href', 'https://haveibeenpwned.com/'])
createElement(linksList, 'li', pwnedLink)

const mdnLink = createElement(null, 'a', 'MDN', ['href', 'https://mdn.io/'])
createElement(linksList, 'li', mdnLink)

createElement(document.body, 'h1', 'Details', ['class', 'red'])

// a function, named "createElement"
// which takes a tag name (li, div, ul, nav)
// and a HTML body ("something inside")
// and returns a correct HTML string, properly formatted
//
// Example input: 'li', 'CodeCombat'
// Example output: '<li>CodeCombat</li>'
//
// Example input: 'nav', 'some nav bar'
// Example output: '<nav>some nav bar</nav>'
