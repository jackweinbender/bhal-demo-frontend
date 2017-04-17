import Ember from 'ember';
import ENV from '../../config/environment';

export default Ember.Route.extend({
  actions:{
    /* Handles sending POST to API server */
    login: function(){
      var self = this;
      Ember.$.post(ENV.APP.API_HOST + '/login', {
        email: this.controller.get('email'),
        password: this.controller.get('password')
      }).then(function(response){
        /* On success, set the session data */
        self.set('session.authToken', response.token);
        self.set('session.currentUser', response.user);
        self.set('session.isLoggedIn', true);

        /* Retrieve the original transition from session object if present */
        var transition = self.get('session').attemptedTransition;
        if(transition){
          console.log(transition);
          // Retry the original transition
          transition.retry();
        } else {
          // transition to browse route if no transition exists
          self.transitionTo('browser');
        }

      }, function(){
        /* On Error */
        alert('Could not login!');
      });
    }
  }
});
