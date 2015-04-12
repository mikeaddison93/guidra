import DS from "ember-data";

// define the User model
var User = DS.Model.extend({
  name:  DS.attr('string'),
  durableWrites:   DS.attr('string'),
  strategyClass:   DS.attr('string'),
  strategyOptions: DS.attr('string')
  //tables:     DS.hasMany('book', {async: true})
});

User.reopenClass({
  FIXTURES: [
    {id: 1, durableWrites: 'Yes', name: 'Jobs'},
    {id: 2, durableWrites: 'No', name: 'Ive'}
  ]
});

export default User;
