(function() {
  'use strict';

  angular
    .module('gohd')
    .constant('USER_ROLES', { user: '*', admin: 'admin' })
    .constant('AUTH_EVENTS', {
      loginSuccess:     'auth-login-success',
      loginFailed:      'auth-login-failed',
      logoutSuccess:    'auth-logout-success',
      sessionTimeout:   'auth-session-timeout',
      notAuthenticated: 'auth-not-authenticated',
      notAuthorized:    'auth-not-authorized',
      userInfoChanged:  'user-info-changed'
    });

})();
