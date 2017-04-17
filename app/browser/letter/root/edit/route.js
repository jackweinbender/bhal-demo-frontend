import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller){
    var parentController = this.controllerFor('browser.letter.root');
    controller.set('model', parentController.get('model'));
  },
  actions: {
    willTransition(transition) {
      // If the 'editing' property is TRUE and there are changes to the model
      // askthe user to confirm that they want to discard changes.
      if (this.controller.get('editing') && this.controller.get('model.hasDirtyAttributes')) {
        // Confirm box
        let proceed = confirm('You have unsaved changes. Would you like to discard them and proceed anyway?');

        if(proceed){
          // Reset the model & controller
          this.controller.get('model').rollback();
          this.controller.set('editing', false);

          return true;
        } else {
          // Halt; do nothing.
          transition.abort();
        }
      } else {
        // Reset editing so that it doesn' carry over to other subroutes
        this.controller.set('editing', false);
        return true;
      }
    },
    edit: function(){
      // Toggle the editing property
      var edit = this.controller.get('editing');
      this.controller.set('editing', !edit);
    },
    updateId: function(){
    /** This function saves the Eytmology Model in the event that either
     * the 'display' or 'homonymNumber' properties have changed.
     * Saving this item returns an object with a different ID because the
     * ID is computed based on those two properties. Ember doesn't lik this.
     * So, we actually use the error callback to transitionTo the route
     * for the new object. The URL parameter is computed based on the 'display'
     * and 'homonymNumber' values.
     **/
      var that = this;
      this.controller.get('model').save().then(function(){

        // The callback for if nothing actually changed.
        console.log("Successfuly saved model");

        // Swap the editing property
        that.send('edit');

      }, function(err){

        // The parameter to pass to the new Route
        var newRoot = that.controller.get('rootId');

        // Swap the editing property
        that.send('edit');

        // Log the error just in case it's something different.
        console.log(err);

        // Make the transition to the new Root route.
        that.transitionTo('browser.letter.root.edit', newRoot);
      });
    }
  }
});
