import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function(){
    this.set('session.isLoggedIn', false);
    this.transitionTo('session.login');
  }
});
