### Getting started

First things first, you'll need to fork or clone this repository, and run the install command of your choosing :

```
yarn install

// or

npm install
```
You'll need to start it with the familiar command:

```
yarn start

// or

npm start
```

### Accessing the server and returning data

The server should be running by now, and you can visit `http://localhost:8000` to see it in action. 

By default, it doesn't return a great deal, but if you visit `http://localhost:8000/get_meta_data` -- which will automatically issue a GET request to our running API server -- you'll see a simple JSON object populated with some dummy data.

## Expanding the server

This starter kit is really designed as a kick off point for your own API adventures. If you would like to extend the functionality for your own purposes then you need to do these three things:

1. Add a new JSON file with your relevant data to the main data entry point for the project, `./data`
2. Add a route file that will access this data into `./routes/[your route file].js` -- hint: use the `./routes/finance.js` and `./routes/tradelicense.js` as a starting point
3. Add your new route file into the main routes file located at `./routes/routes.js`
4. `localhost:8000/get_meta_data?module_name=finance&screen_name=collect` and `localhost:8000/get_meta_data?module_name=tradelicense&screen_name=apply` url should pass in query parameter






