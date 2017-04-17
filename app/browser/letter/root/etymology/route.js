import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller){
    var parentController = this.controllerFor('browser.letter.root');
    controller.set('model', parentController.get('model'));
  },
  actions: {
    saveModel: function(){
      this.controller.get('model').save();
    }
  }
});
