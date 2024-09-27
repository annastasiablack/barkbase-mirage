import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  beforeModel() {
    this.transitionTo('dog');  // Change 'dashboard' to your target route name
  }
}