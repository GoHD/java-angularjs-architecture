'use strict';

var gulp = require('gulp');

/**
 *  Carrega recursivamente todos os arquivos js do diretório [gulp]
 *  com o intuito de carregar todas as tasks definidas.
 */
require('require-dir')('./gulp', {
  recurse: true
});

/**
 *  Task padrão que limpa os diretórios temporários e
 *  realiza build do projeto.
 */
gulp.task('default', ['clean'], function() {
  gulp.start('build');
});
