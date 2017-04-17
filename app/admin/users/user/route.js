import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    prompt: function(){
      this.controller.set('model.deletePrompt', true);
    },
    delete: function(){
      var self = this;
      var user = this.controller.get('model');
      user.deleteRecord();
      user.save().then(function(){
        self.controller.set('model.deletePrompt', false);
        self.transitionTo('admin.users');
      }, function(err){
        console.log(err);
      });
    }
  }
});
