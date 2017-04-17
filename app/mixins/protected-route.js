import Ember from 'ember';

export default Ember.Mixin.create({
  beforeModel: function(transition){
    if(!this.get('session').isLoggedIn){
      this.get('session').set('attemptedTransition', transition);
      console.log(this.get('session'));
      this.transitionTo('session.login');
    }
  },
  actions: {
    logout: function(){
      this.set('session.isLoggedIn', false);
      this.transitionTo('session.login');
    }
  }
});
