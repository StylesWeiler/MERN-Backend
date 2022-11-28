const allowedOrigins = require('./allowedOrigins')

const corsOptions = { //CORS is a package that stands for Cross-Origin Resource Sharing.
                     //  It is a system, consisting of transmitting HTTP headers, that determines whether browsers block frontend JavaScript code from accessing responses for cross-origin requests. 
                     // The same-origin security policy forbids cross-origin access to resources.
    origin: (origin, callback) => {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS')) // in case of error
        }
    },
    credentials: true,
    optionsSuccessStatus: 200
}

module.exports = corsOptions 