const express = require('express')
const app = express()

/** Template */
app.set('view engine', 'pug')
app.set('views', './src/server/views')

/** Static Files */
app.use(express.static('src/public'));

/** Routing */
const routes = require('./routes');
app.use('/', routes);

/** Start Server */
app.listen(3000, () => console.log('Example app listening on port 3000!'))
