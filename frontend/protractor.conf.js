'use strict';

var paths = require('./.bowerrc.json').props.paths;

// Exemplo de arquivo de configuração.

exports.config = {
  // O endereço de um Selenium Server rodando.
  // seleniumAddress: 'http://localhost:4444/wd/hub',
  // seleniumServerJar: Depreciado, deve ser setado em node_modules/protractor/config.json

  // Capabilities a serem enviadas ao webdriver.
  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://localhost:3000',

  // Define o diretório e os patterns para os [specs] do protractor.
  specs: [paths.e2e + '/**/*.js'],

  // Opções do Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }
};
