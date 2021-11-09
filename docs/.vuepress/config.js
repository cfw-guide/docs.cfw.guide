const path = require("path");
const sites = require("./sites");

module.exports = {
  locales: sites.locales,

	plugins: [
		[
			"@vuepress/plugin-search", {
				locales: sites.searchLocales
			}
		],
	],
  
  themeConfig: {
    repo: 'cfw-guide/docs.cfw.guide',
    selectLanguageText: '<i class="fas fa-bars"/>',
    adTagOne: 'waldo-tag-5340',
    adTagTwo: 'waldo-tag-5340',
    locales: sites.themeConfigLocales,
  },
  
  head: [
    [ 'meta', { name: 'theme-color', content: '#2E3440' } ],
    [ 'link', { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.6.1/css/all.css' } ],
    ['script', {src: 'https://cdn.thisiswaldo.com/static/js/5303.js'}],
    ['script', {src: 'https://www.googletagmanager.com/gtag/js?id=UA-152619365-1'}],
		[ 'script', {}, 'function gtag(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],gtag("js",new Date),gtag("config","UA-152619365-1");' ],
  ],

  theme: path.resolve(__dirname, './vuepress-theme'),
  
	templateDev: path.join(__dirname, 'templates', 'index.dev.html'),
	templateSSR: path.join(__dirname, 'templates', 'index.ssr.html'),
};