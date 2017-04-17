import DS from 'ember-data';
import ENV from '../config/environment';

export default DS.JSONAPIAdapter.extend({
  host: ENV.APP.API_HOST,
  namespace:'api/v1',
  coalesceFindRequests: true,
  shouldReloadAll: function(){
    return true;
  },
  shouldBackgroundReloadRecord: function(){
    return false;
  },
  headers: function() {
    return {
      "Authorization": this.get('session.authToken'),
      'Content-Type': 'application/json'
    };
  }.property().volatile()
});
