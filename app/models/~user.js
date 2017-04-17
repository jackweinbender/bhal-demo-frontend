import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr('String'),
  lastName: DS.attr('String'),
  email: DS.attr('String'),
  authTokens: DS.attr(),
  role: DS.attr('String'),
  password:DS.attr('String'),
  __v: DS.attr(),
  // Relational properties

  // Timestamp info
  createdAt: DS.attr('Date'),
  lastModified: DS.attr('Date')
});
