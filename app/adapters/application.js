// manage communication with external APIs or data sources
// JSONAPIAdapter ensures the requests and responses are correctly formatted

import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
    namespace: 'api'
});

// when requests are made by the adapter, requests will go to /api/[route]