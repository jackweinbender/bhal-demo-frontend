import Ember from 'ember';

/**
  Handles user session data by keeping the authtoken and currentUser.
  Also deals with isLoggedIn variable to help redirect protected
  pages.
*/

export default Ember.Service.extend({
  /* Initialized the session based on the values stored in LocalStorage */
  init: function(){
    
    /* Set isLoggedIn to false to prevent a default login status */
    this.set('isLoggedIn', true);

    /* If the session key is set in LocalStorage, JSON.parse it */
    if(localStorage.hasOwnProperty('session')){
       var sessionData = JSON.parse(localStorage.session);
      
      /* If token and user are both Truthy */
      if(sessionData.token && sessionData.user){

        /* Set values on Object from sessionData */
        this.set('authToken', sessionData.token);
        this.set('currentUser', sessionData.user);

        /* And set isLoggedIn to true */
        this.set('isLoggedIn', true);
      }
    } 
  },

  /**
    Observes  any change on either authToken or currentUser 
    Resets the localStorage values if something changes 
    in order to persist the state if something goes wrong 
  */

  watchSessionData: function(){
    var sessionData = {
      token: this.get('authToken'),
      user: this.get('currentUser')
    };
    localStorage.session = JSON.stringify(sessionData);
  }.observes('authToken', 'currentUser'),

  /**
    Observes the isLoggedIn property. Used primarily to detect a 
    "logout" in which case this sets the session values to null and 
    deletes the localStorage session data. Any further navigation 
    should redirect to login
  */

  watchForLogout: function(){
    if(this.get('isLoggedIn') === false){
      this.set('authToken', null);
      this.set('currentUser', null);
      delete localStorage.session;
    }
  }.observes('isLoggedIn')
});