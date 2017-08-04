'use strict';

const express = require('express');

const app = express();

app.get( '/image/MakersArena.jpeg', (req, res, next) => {
  res.sendfile( 'image/MakersArena.jpeg' );
});

app.get( '/', (req, res, next) => {
  res.sendfile( 'index.html' );
});

app.get( '/*', (req, res, next) => {
  res.redirect( "/" );
});

if (module === require.main) {
  const server = app.listen(process.env.PORT || 8080, () => {
    const port = server.address().port;
    console.log(`App listening on port ${port}`);
  });
}

module.exports = app;
