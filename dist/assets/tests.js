'use strict';

define("barkbase/tests/integration/components/dog-form-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | dog-form', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "ed4En3ZK",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"dog-form\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "fiMsKfWn",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"dog-form\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("barkbase/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
  });
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('controllers/dog/create.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/dog/create.js should pass ESLint\n\n');
  });
  QUnit.test('controllers/dog/edit.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/dog/edit.js should pass ESLint\n\n');
  });
  QUnit.test('controllers/dog/index.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/dog/index.js should pass ESLint\n\n3:10 - \'filter\' is defined but never used. (no-unused-vars)');
  });
  QUnit.test('models/dog.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/dog.js should pass ESLint\n\n');
  });
  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
  QUnit.test('routes/dog/create.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/dog/create.js should pass ESLint\n\n');
  });
  QUnit.test('routes/dog/detail.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/dog/detail.js should pass ESLint\n\n');
  });
  QUnit.test('routes/dog/edit.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/dog/edit.js should pass ESLint\n\n');
  });
  QUnit.test('routes/dog/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/dog/index.js should pass ESLint\n\n');
  });
  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint\n\n');
  });
});
define("barkbase/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('barkbase/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'barkbase/templates/application.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('barkbase/templates/dog/create.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'barkbase/templates/dog/create.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('barkbase/templates/dog/detail.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'barkbase/templates/dog/detail.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('barkbase/templates/dog/edit.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'barkbase/templates/dog/edit.hbs should pass TemplateLint.\n\nbarkbase/templates/dog/edit.hbs\n  11:0  error  Incorrect indentation for `<div>` beginning at L11:C0. Expected `<div>` to be at an indentation of 2 but was found at 0.  block-indentation\n  13:4  error  Self-closing a void element is redundant  self-closing-void-elements\n');
  });
  QUnit.test('barkbase/templates/dog/index.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'barkbase/templates/dog/index.hbs should pass TemplateLint.\n\nbarkbase/templates/dog/index.hbs\n  9:6  error  Incorrect indentation for `<i>` beginning at L9:C6. Expected `<i>` to be at an indentation of 8 but was found at 6.  block-indentation\n  31:8  error  Incorrect indentation for `<div>` beginning at L31:C8. Expected `<div>` to be at an indentation of 10 but was found at 8.  block-indentation\n  35:14  error  Incorrect indentation for `<img>` beginning at L35:C14. Expected `<img>` to be at an indentation of 16 but was found at 14.  block-indentation\n  37:14  error  Incorrect indentation for `<img>` beginning at L37:C14. Expected `<img>` to be at an indentation of 16 but was found at 14.  block-indentation\n  48:28  error  Incorrect indentation for `link-to` beginning at L47:C12. Expected `{{/link-to}}` ending at L48:C28 to be at an indentation of 12 but was found at 16.  block-indentation\n  47:86  error  Incorrect indentation for `{{fa-icon}}` beginning at L47:C86. Expected `{{fa-icon}}` to be at an indentation of 14 but was found at 86.  block-indentation\n  50:29  error  Incorrect indentation for `button` beginning at L49:C12. Expected `</button>` ending at L50:C29 to be at an indentation of 12 but was found at 20.  block-indentation\n  49:88  error  Incorrect indentation for `{{fa-icon}}` beginning at L49:C88. Expected `{{fa-icon}}` to be at an indentation of 14 but was found at 88.  block-indentation\n  35:14  error  Self-closing a void element is redundant  self-closing-void-elements\n  37:14  error  Self-closing a void element is redundant  self-closing-void-elements\n');
  });
  QUnit.test('barkbase/templates/index.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'barkbase/templates/index.hbs should pass TemplateLint.\n\n');
  });
});
define("barkbase/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('integration/components/dog-form-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/dog-form-test.js should pass ESLint\n\n');
  });
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
  QUnit.test('unit/adapters/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/application-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/controllers/product/create-test.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'unit/controllers/product/create-test.js should pass ESLint\n\n4:32 - Unnecessary escape character: \\c. (no-useless-escape)\n9:55 - Unnecessary escape character: \\c. (no-useless-escape)');
  });
  QUnit.test('unit/controllers/product/edit-test.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'unit/controllers/product/edit-test.js should pass ESLint\n\n4:32 - Unnecessary escape character: \\e. (no-useless-escape)\n9:55 - Unnecessary escape character: \\e. (no-useless-escape)');
  });
  QUnit.test('unit/controllers/product/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/product/index-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/models/dog-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/dog-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/product/create-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/product/create-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/product/detail-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/product/detail-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/product/edit-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/product/edit-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/product/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/product/index-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/serializers/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/application-test.js should pass ESLint\n\n');
  });
});
define("barkbase/tests/test-helper", ["barkbase/app", "barkbase/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("barkbase/tests/unit/adapters/application-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Adapter | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let adapter = this.owner.lookup('adapter:application');
      assert.ok(adapter);
    });
  });
});
define("barkbase/tests/unit/controllers/product/create-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | dog\create', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:dog\create');
      assert.ok(controller);
    });
  });
});
define("barkbase/tests/unit/controllers/product/edit-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | dog\edit', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:dog\edit');
      assert.ok(controller);
    });
  });
});
define("barkbase/tests/unit/controllers/product/index-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | dog\\index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:dog\\index');
      assert.ok(controller);
    });
  });
});
define("barkbase/tests/unit/models/dog-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Model | dog', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('dog', {});
      assert.ok(model);
    });
  });
});
define("barkbase/tests/unit/routes/product/create-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | dog.create', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:dog.create');
      assert.ok(route);
    });
  });
});
define("barkbase/tests/unit/routes/product/detail-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | dog.detail', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:dog.detail');
      assert.ok(route);
    });
  });
});
define("barkbase/tests/unit/routes/product/edit-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | dog.edit', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:dog.edit');
      assert.ok(route);
    });
  });
});
define("barkbase/tests/unit/routes/product/index-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | dog.index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:dog.index');
      assert.ok(route);
    });
  });
});
define("barkbase/tests/unit/serializers/application-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Serializer | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let serializer = store.serializerFor('application');
      assert.ok(serializer);
    });
    (0, _qunit.test)('it serializes records', function (assert) {
      let store = this.owner.lookup('service:store');
      let record = store.createRecord('application', {});
      let serializedRecord = record.serialize();
      assert.ok(serializedRecord);
    });
  });
});
define('barkbase/config/environment', [], function() {
  var prefix = 'barkbase';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('barkbase/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map