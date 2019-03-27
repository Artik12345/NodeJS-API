require('@babel/register')({
    extensions: ['.js', '.mjs']
})

module.exports = require('./server.mjs').default