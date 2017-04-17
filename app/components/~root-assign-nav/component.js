import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    goToPage: function(){
      this.sendAction('goToPage', this.get('page'));
    },
    saveAll: function(){
      this.sendAction('saveAll');
    },
    nextPage: function(){
      var page = parseInt(this.get('page'));
      if(page < 1127){
        this.sendAction('goToPage', page + 1);
      }
    },
    prevPage: function(){
      var page = parseInt(this.get('page'));
      if(page > 1){
        this.sendAction('goToPage', page - 1);
      }
    }
  }
});
