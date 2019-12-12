module.exports = function(req, res, next){
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, OPTIONS, DELETE')
    res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Requested-With, Accept, Authorization')
    next()
}