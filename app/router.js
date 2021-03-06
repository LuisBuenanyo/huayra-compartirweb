import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.route('tips');
  this.route('archivos');
  this.route('equipos');
  this.route('preferencias');
  this.route('descargas');
  this.route('servicios');
});
