import { assert } from 'chai';
import { TimeRule } from './Time';
import { Component as ComponentBase } from '../../core/component/Component';
class Component extends ComponentBase() {}
describe('TimeRule', () => {
    const component = new Component({key: 'data'});
    const rule = new TimeRule(component);
    it ('Default value should be valid.', async () => {
        assert.equal(await rule.check(), true);
    });
});