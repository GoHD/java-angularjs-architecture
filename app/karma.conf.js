'use strict';

var path = require('path');
var conf = require('./gulp/config');
var globals = require('./gulp/globals');

var _ = require('lodash');
var wiredep = require('wiredep');

var pathSrcHtml = [
  path.join(globals.paths.src, '/**/*.html')
];

function listFiles() {
  var wiredepOptions = _.extend({}, conf.wiredep, {
    dependencies: true,
    devDependencies: true
  });

  var patterns = wiredep(wiredepOptions).js
    .concat([
      path.join(globals.paths.src, '/app/**/*.module.js'),
      path.join(globals.paths.src, '/app/**/*.js'),
      path.join(globals.paths.src, '/**/**/**/**/*.spec.js'),
      path.join(globals.paths.src, '/**/*.mock.js'),
    ])
    .concat(pathSrcHtml);

  var files = patterns.map(function(pattern) {
    return {
      pattern: pattern
    };
  });
  files.push({
    pattern: path.join(globals.paths.src, '/assets/**/*'),
    included: false,
    served: true,
    watched: false
  });
  return files;
}

module.exports = function(config) {

  var configuration = {
    files: listFiles(),

    singleRun: true,

    autoWatch: false,

    ngHtml2JsPreprocessor: {
      stripPrefix: globals.paths.src + '/',
      moduleName: 'gohd'
    },

    logLevel: config.LOG_ERROR,

    frameworks: ['phantomjs-shim', 'jasmine', 'angular-filesort'],

    angularFilesort: {
      whitelist: [path.join(globals.paths.src, '/**/!(*.html|*.spec|*.mock).js')]
    },

    browsers : ['PhantomJS'],

    plugins : [
      'karma-phantomjs-launcher',
      'karma-angular-filesort',
      'karma-phantomjs-shim',
      'karma-coverage',
      'karma-jasmine',
      'karma-ng-html2js-preprocessor'
    ],

    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    },

    reporters: ['progress'],

    proxies: {
      '/assets/': path.join('/base/', globals.paths.src, '/assets/')
    }
  };

  /**
   * Configuração padrão do Pré-processador para utilizar com o Karma CLI.
   * O Pré-processador de cobertura está adicionado no gulp/unit-test.js apenas
   * para testes unitários.
   */
  configuration.preprocessors = {};
  pathSrcHtml.forEach(function(path) {
    configuration.preprocessors[path] = ['ng-html2js'];
  });

  /**
   * Este bloco é necessário para executar o Travis no Chrome.
   * Se você não planeja utilizar o mesmo, você pode remover esse bloco
   * de maneira segura.
   */
  if(configuration.browsers[0] === 'Chrome' && process.env.TRAVIS) {
    configuration.customLaunchers = {
      'chrome-travis-ci': {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    };
    configuration.browsers = ['chrome-travis-ci'];
  }

  config.set(configuration);
};
