sub.js
======

A substitute Functor in JavaScript

## Use

```javascript
var sub = require("sub")

var template = "My favourite month is {month}"

var message = sub(template, {
  month: "December"
})

console.log(message)
// My favourite month is December
```

```javascript
var sub = require("sub")

var template = sub("{exclamation}! he said {adverb} as he jumped into his convertible {noun} and drove off with his {adjective} wife.")

var madlib = template({
  exclamation: "ouch",
  adverb     : "stupidly",
  noun       : "cat",
  adjective  : "brave"
})

console.log(madlib)
// ouch! he said stupidly as he jumped into his convertible cat and drove off with his brave wife.
```
