import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    new: function(){
      this.sendAction('newEtymology');
    }
  }
});
