// import other routes
const metaDataRoutes = require('./metaData');

const appRouter = (app, fs) => {

    // default route
    app.get('/', (req, res) => { res.send('welcome to the development api-server'); });

    // // other routes
    metaDataRoutes(app, fs);

};

module.exports = appRouter;