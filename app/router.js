import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.route('utilities', function() {
    this.route('cleanup-entries', function() {
      this.route('page', {path: '/:page'});
    });
    this.route('link-entries');
  });
  this.route('session', {path: '/'}, function(){
    this.route('login');
    this.route('logout');
  });
  this.route('browser', function() {
    this.route('letter', {path: '/:letter'}, function() {
      this.route('root', {path: '/:root'}, function() {
        this.route('show', { path: '/' });
        this.route('edit');
        this.route('etymology');
        this.route('related');
      });
    });
  });
  this.route('admin', function() {
    this.route('users', function() {
      this.route('user', {path: '/:user_id'});
      this.route('new');
    });
  });
});
