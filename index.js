'use strict'; // eslint-disable-line

const path = require('path');
const fs = require('fs');
const glob = require('glob');
const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');

const defaultOptions = {
  webpack: require(path.join(__dirname, 'webpack.baseconfig.js')),
};

function fname(f) {
  return f.substr(0, f.length - path.extname(f).length);
}

module.exports = function (opts) {
  const options = opts || defaultOptions;
  const config = Object.assign({}, options.webpack);
  config.output = {
    path: path.join(process.cwd(), 'transpiled-specs'),
    filename: '[name].bundle.js',
  };

  const testDir = path.join(process.cwd(), 'test');
  const router = express.Router(); // eslint-disable-line
  const template = fs.readFileSync(path.join(__dirname, 'mocha.html'), 'utf8');

  const styles = [
    '/node_modules/mocha/mocha.css',
  ].map(f => `<link href="${f}" rel="stylesheet" />`)
  .join('\r\n');

  const staticScripts = [
    '/node_modules/jquery/dist/jquery.js',
    '/node_modules/mocha/mocha.js',
  ].map(f => `<script src="${f}"></script>`)
  .join('\r\n');

  // TODO watch new/renamed/deleted files
  const specFiles = glob.sync('**/*.js', { cwd: testDir });
  config.entry = specFiles.reduce((a, f) => {
    const b = {};
    b[fname(f)] = path.join(testDir, f);
    return Object.assign(a, b);
  }, {});

  const compiler = webpack(config);
  router.use(webpackMiddleware(compiler, {
    stats: {
      color: true,
    },
  }));

  const testScripts = specFiles
    .map(f => `${fname(f)}.bundle.js`)
    .map(f => `<script src="${f}"></script>`)
    .join('\r\n');

  router.get('/mocha', (req, res) => {
    const html = template
      .replace('<!--styles-->', styles)
      .replace('<!--scripts-->', staticScripts)
      .replace('<!--test-scripts-->', testScripts)
      ;
    res.send(html);
  });

  return router;
};