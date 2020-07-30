
const metaDataRoutes = (app, fs) => {

    // variables
    const tradelicense = './data/tradelicense.json';
    const finance = './data/finance.json';

    // READ
    app.get('/get_meta_data', (req, res) => {
        if (req.query.module_name === 'tradelicense' && req.query.screen_name === 'apply') {
            fs.readFile(tradelicense, 'utf8', (err, data) => {
                if (err) {
                    throw err;
                }
                res.send(JSON.parse(data));
            });
        }

        if (req.query.module_name === 'finance' && req.query.screen_name === 'collect') {
            fs.readFile(finance, 'utf8', (err, data) => {
                if (err) {
                    throw err;
                }
                res.send(JSON.parse(data));
            });
        }
    });
};

module.exports = metaDataRoutes;