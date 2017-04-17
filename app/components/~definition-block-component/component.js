import Ember from 'ember';

export default Ember.Component.extend({
  isEditing: false,
  actions: {
    save: function(){
      this.sendAction('save');
      this.set('isEditing', false);
    },
    toggleEdit: function(){
      var loggedIn = this.get('isLoggedIn');
      var isEditing = this.get('isEditing');

      if(isEditing){
        this.sendAction('rollback');
      }

      if(loggedIn){
        this.set('isEditing', !isEditing);
      }
    }
  }
});
