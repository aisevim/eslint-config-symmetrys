// rule erased in eslint.config.js
// security/detect-bidi-characters
const accessLevel = 'user'
if (accessLevel !== 'user‮') {
  console.log('You are an admin.')
}

// activated in eslint.config.js
// error on security/detect-disable-mustache-escape
Object.escapeMarkup = false
