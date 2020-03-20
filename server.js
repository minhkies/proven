const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const braintree = require('braintree');

let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);
//
// const stripe = require('stripe')('sk_test_96V8U4NmpLWasalO2yWJDvxr00aOqWGR0I');
// stripe.terminal.connectionTokens.create();

// let gateway = braintree.connect({
//     environment: braintree.Environment.Sandbox,
//     merchantId: "t6hv2x2734qgj62k",
//     publicKey: "sfqfx282jw2vyzbk",
//     privateKey: "bfebdb9056b509cda6dacc508f3ded4d"
// });

// gateway.clientToken.generate({
//     customerId: "1"
// }, function (err, response) {
//     let clientToken = response.clientToken
// });

// app.get("/client_token", function (req, res) {
//     gateway.clientToken.generate({}, function (err, response) {
//         res.send(response.clientToken);
//     });
//     // const name = req.query.name || 'World';
//     // res.setHeader('Content-Type', 'application/json');
//     // res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
// });

app.listen(3001, () =>
    console.log('Express server is running on localhost:3001')
);
