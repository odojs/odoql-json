# OdoQL

JSON querying for OdoQL

```json
[
    {
        "name": "Microsoft",
        "address": "1 Microsoft Way"
    },
    {
        "name": "Apple",
        "address": "1 Infinite Loop"
    },
    {
        "name": "Tesla",
        "address": "3500 Deer Creek Road"
    },
    {
        "name": "Google",
        "address": "1600 Amphitheatre Parkway"
    }
]
```


```javascript
var ql = require('odoql');
var jsonstore = require('odoql-json/store');
var stores = {
    organisations: jsonstore require './organisations'
};
ql.execute({
    org: ql.query('organisations', { filter: name: 'Apple' }, { address: true })
}, stores, function(err, results) {
    console.log(results);
    // { org: { address: '1 Infinite Loop' } }
});
```