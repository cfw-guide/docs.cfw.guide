const fs = require('fs');

function merge(dst, src) {
  Object.getOwnPropertyNames(src).forEach(function forEachOwnPropertyName (name) {
    Object.defineProperty(dst, name, Object.getOwnPropertyDescriptor(src, name))
  })
  return dst
}

const siteConfigs = fs.readdirSync('docs').filter(file => !file.includes('.vuepress'));

var locales = {};
var searchLocales = {};
var themeConfigLocales = {};

for (const site of siteConfigs) {
  const conf = require('../' + site + '/conf');
  
  const siteName = '/' + site;
  const confLocals = {[siteName]: conf.locales};
  const confSearchLocals = {[siteName]: {placeholder: conf.search}};
  const confThemeConfigLocals = {[siteName]: conf.themeConfigLocales};
  
  merge(locales, confLocals);
  merge(searchLocales, confSearchLocals);
  merge(themeConfigLocales, confThemeConfigLocals);
}

module.exports = {
  locales: locales,
  searchLocales: searchLocales,
  themeConfigLocales: themeConfigLocales,
}