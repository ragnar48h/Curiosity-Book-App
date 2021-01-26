"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mapping_spec_config_1 = require("./mapping.spec.config");
const Service = __importStar(require("./mapping.service"));
describe('@mapping: service methods checks', () => {
    describe('* appearance', () => {
        describe('* default', () => {
            const appearance = 'filled';
            it('* stateless', () => {
                const value = Service.getStatelessAppearanceMapping(mapping_spec_config_1.mapping, 'Button', appearance);
                expect(value).toMatchSnapshot();
            });
            describe('* state', () => {
                it('* active', () => {
                    const value = Service.getStateAppearanceMapping(mapping_spec_config_1.mapping, 'Button', appearance, 'active');
                    expect(value).toMatchSnapshot();
                });
                it('* undefined', () => {
                    const value = Service.getStateAppearanceMapping(mapping_spec_config_1.mapping, 'Button', appearance, 'undefined');
                    expect(value).toBeUndefined();
                });
            });
            describe('* variant', () => {
                it('* success', () => {
                    const value = Service.getStatelessVariantMapping(mapping_spec_config_1.mapping, 'Button', appearance, 'success');
                    expect(value).toMatchSnapshot();
                });
                it('* undefined', () => {
                    const value = Service.getStatelessVariantMapping(mapping_spec_config_1.mapping, 'Button', appearance, 'undefined');
                    expect(value).toBeUndefined();
                });
                describe('* state', () => {
                    it('* active', () => {
                        const value = Service.getStateVariantMapping(mapping_spec_config_1.mapping, 'Button', appearance, 'success', 'active');
                        expect(value).toMatchSnapshot();
                    });
                    it('* undefined', () => {
                        const value = Service.getStateVariantMapping(mapping_spec_config_1.mapping, 'Button', appearance, 'success', 'undefined');
                        expect(value).toBeUndefined();
                    });
                });
            });
        });
        describe('* custom', () => {
            const appearance = 'outline';
            it('* stateless', () => {
                const value = Service.getStatelessAppearanceMapping(mapping_spec_config_1.mapping, 'Button', appearance);
                expect(value).toMatchSnapshot();
            });
            describe('* state', () => {
                it('* active', () => {
                    const value = Service.getStateAppearanceMapping(mapping_spec_config_1.mapping, 'Button', appearance, 'active');
                    expect(value).toMatchSnapshot();
                });
                it('* undefined', () => {
                    const value = Service.getStateAppearanceMapping(mapping_spec_config_1.mapping, 'Button', appearance, 'undefined');
                    expect(value).toBeUndefined();
                });
            });
            describe('* variant', () => {
                it('* success', () => {
                    const value = Service.getStatelessVariantMapping(mapping_spec_config_1.mapping, 'Button', appearance, 'success');
                    expect(value).toMatchSnapshot();
                });
                it('* undefined', () => {
                    const value = Service.getStatelessVariantMapping(mapping_spec_config_1.mapping, 'Button', appearance, 'undefined');
                    expect(value).toMatchSnapshot();
                });
                describe('* state', () => {
                    it('* active', () => {
                        const value = Service.getStateVariantMapping(mapping_spec_config_1.mapping, 'Button', appearance, 'success', 'active');
                        expect(value).toMatchSnapshot();
                    });
                    it('* undefined', () => {
                        const value = Service.getStateVariantMapping(mapping_spec_config_1.mapping, 'Button', appearance, 'success', 'undefined');
                        expect(value).toBeUndefined();
                    });
                });
            });
        });
        describe('* undefined', () => {
            const appearance = 'undefined';
            it('* stateless', () => {
                const value = Service.getStatelessAppearanceMapping(mapping_spec_config_1.mapping, 'Button', appearance);
                expect(value).toBeUndefined();
            });
            describe('* state', () => {
                it('* active', () => {
                    const value = Service.getStateAppearanceMapping(mapping_spec_config_1.mapping, 'Button', appearance, 'active');
                    expect(value).toBeUndefined();
                });
                it('* undefined', () => {
                    const value = Service.getStateAppearanceMapping(mapping_spec_config_1.mapping, 'Button', appearance, 'undefined');
                    expect(value).toBeUndefined();
                });
            });
            describe('* variant', () => {
                it('* success', () => {
                    const value = Service.getStatelessVariantMapping(mapping_spec_config_1.mapping, 'Button', appearance, 'success');
                    expect(value).toBeUndefined();
                });
                it('* undefined', () => {
                    const value = Service.getStatelessVariantMapping(mapping_spec_config_1.mapping, 'Button', appearance, 'undefined');
                    expect(value).toBeUndefined();
                });
                describe('* state', () => {
                    it('* active', () => {
                        const value = Service.getStateVariantMapping(mapping_spec_config_1.mapping, 'Button', appearance, 'success', 'active');
                        expect(value).toBeUndefined();
                    });
                    it('* undefined', () => {
                        const value = Service.getStateVariantMapping(mapping_spec_config_1.mapping, 'Button', appearance, 'success', 'undefined');
                        expect(value).toBeUndefined();
                    });
                });
            });
        });
    });
    describe('* variants groups getting', () => {
        it('* defined component', () => {
            const value = Service.getComponentVariantGroups(mapping_spec_config_1.mapping, 'Button');
            expect(value).toEqual(['status', 'size']);
        });
        it('* undefined component', () => {
            const value = Service.getComponentVariantGroups(mapping_spec_config_1.mapping, 'Undefined');
            expect(value).toBeUndefined();
        });
    });
});
//# sourceMappingURL=mapping.spec.js.map