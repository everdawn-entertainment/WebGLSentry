import Statics from '../Statics';

describe('js/ContextMonitor', () => {
    it('should have version information', () => {
        expect(Statics.version).toBeDefined();
    });
    it('should have product information', () => {
        expect(Statics.product).toBeDefined();
    });
});