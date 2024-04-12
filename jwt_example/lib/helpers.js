const qs = require('querystring');
const fs = require('fs');
const path = require('path');

const level = require('level');
const db = level(__dirname + '/db');

const jwt = require('jsonwebtoken');
const { callbackify } = require('util');
const secret = process.env.JWT_SECRET || "change_this_to_something_random";

function loadView(view) {
    let filepath  = path.resolve(__dirname, '../views', view + '.html');
    return fs.readFileSync(filepath).toString();
};

// Content pages
const index = loadView('index')
const retricted = loadView('restricted')
const notFound = loadView('notFound')

// Show notFound page
function authFail(res, callbak) {
    res.writeHead(401, { 'Content-Type': 'text/html' });
    return res.end(notFound);
};

// Create a JWT
function generateToken(req){
    // By default, the token will expire in 7 days
    // The value of 'exp' needs to be in seconds
};