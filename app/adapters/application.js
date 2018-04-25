import DS from 'ember-data';
import ENV from 'converge/config/environment';

export default DS.RESTAdapter.extend({
  coalesceFindRequests: true, // these blueprints support coalescing (reduces the amount of requests)
  namespace: 'api',           // same as API prefix in Sails config
  host: ENV.API_URL           // Sails server
});
