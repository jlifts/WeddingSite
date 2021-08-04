/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
require('babel-register')({
  presets: ['es2015', 'react'],
});

const router = require('../router').default;
const Sitemap = require('react-router-sitemap').default;

new Sitemap(router)
  .build('https://oliviaandjosh.com')
  .save('./public/sitemap.xml');
