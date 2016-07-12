/**
 *  Esse arquivo contém as configurações genéricas utilizadas nos arquivos
 *  gulp que contém tasks.
 *  Mantém as tasks limpas e facilida a manutenção de código.
 */
var gutil = require('gulp-util');

/**
 *  Lib responsável por injetar as dependencias do Bower no projeto.
 *  Mais utilizada para injetar scripts no arquivo html principal da aplicação.
 */
exports.wiredep = {
  exclude: [/\/bootstrap\.js$/, /\/bootstrap-sass\/.*\.js/, /\/bootstrap\.css/],
  directory: 'bower_components'
};

/**
 *  Implementação genérica para um manipulador de erros de plugins do gulp.
 */
exports.errorHandler = function(title) {
  'use strict';

  return function(err) {
    gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
    this.emit('end');
  };
};
