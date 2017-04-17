import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    this.set('page', params.page);
    return this.store.findRecord('Entry', {page: params.page, isXref: 'force', isRootEntry: 'force'});
  },
  setupController: function(controller, model){
    controller.set('page', this.get('page'));
    controller.set('content', model);
  },
  actions: {
    goToPage: function(page){
      this.send('saveAll');
      this.transitionTo('utilities.cleanup-entries.page', page);
    },
    saveAll: function () {
      var model = this.controller.get('content');
      model.forEach(function(item){
        if(item.get('hasDirtyAttributes')){
          item.save().then(function(data){
            console.log("Saved: " + data);
          }, function(err){
            console.log({
              error: err,
              message:"Error while saving"
            });
          });
        }
      });
    }
  }
});
