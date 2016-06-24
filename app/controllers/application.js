import Ember from 'ember';

export default Ember.Controller.extend({
	init() {
		this._super(...arguments);
		alert('OMG it works');
		//console.log("[DEBUG] application controller init executed");
	}
});
