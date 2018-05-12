import Statics from './Statics';
import ContextMonitor from './ContextMonitor';

class WebGLSentry {
    constructor (context) {
        this.monitor = new ContextMonitor(context);
        if (this.monitor.ready) {
            
        }
    }
    toString () {
        return `${Statics.product} ${Statics.version}`;
    }
}

// Global scope for console usage.
global.WebGLSentry = WebGLSentry;

export default WebGLSentry;