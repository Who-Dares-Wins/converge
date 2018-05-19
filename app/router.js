import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home', { path: '/' });
  this.route('authorize');
  this.route('doctrines');
  this.route('fittings');
  this.route('alliance');

  this.route('corporation', { path: '/corporation/:id' });
  this.route('corporation.doctrines', { path: '/corporation/:id/doctrines' });

  this.route('doctrines.doctrine', { path: '/doctrines/:id' });
  this.route('doctrines.doctrine.edit', { path: '/doctrines/:id/edit' });
});

export default Router;
