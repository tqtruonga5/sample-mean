var config = require('./config');
// connect to our database (hosted on modulus.io)
mongoose.connect(config.database);

// super secret for creating tokens
var superSecret = 'ilovescotchscotchyscotchscotch';

// START THE SERVER
// ====================================
app.listen(config.port);
console.log('Magic happens on port ' + config.port);