import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveNew: function(){
      var self = this;
      var userData = this.controller.getProperties('firstName', 'lastName', 'password', 'email', 'role');
      var newUser = this.store.createRecord('user', userData);
      newUser.save().then(
        function(user){
          self.transitionTo('admin.users.user', user.id);
        },
        function(err){
          console.log(err);
        }
      );
    }
  }
});
