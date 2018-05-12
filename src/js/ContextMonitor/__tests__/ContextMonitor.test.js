import ContextMonitor from '../ContextMonitor';
import WebGL from 'webgl-mock';

class mockConsole {
    constructor () {
        this.warn = jest.fn();
        this.log = jest.fn();
        this.info = jest.fn();
        this.error = jest.fn();
    }
};

jest.mock();

describe('js/ContextMonitor', () => {
    let monitor, canvas, gl;
    beforeEach(() => {
        global.console = new mockConsole();
        canvas = new HTMLCanvasElement(250, 250);
        gl = canvas.getContext('webgl');
    })
    it('should not initialize completely when provided an incorrect instace', () => {
        monitor = new ContextMonitor({});
        expect(monitor.ready).toBe(false);
    });
    it('should correctly initialise when given a webgl context', () => {
        monitor = new ContextMonitor(gl);
        expect(monitor.ready).toBe(true);
    });
});