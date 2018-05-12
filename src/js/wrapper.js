import Statics from './Statics';
import ContextMonitor from './ContextMonitor';
import GLProxy from './GLProxy';
import WatchTextures from './WatchTextures';

class WebGLSentry {
    constructor (context) {
        this.wrappedContext = new GLProxy(context).getProxy();
        this.monitor = new ContextMonitor(this.wrappedContext);
        if (this.monitor.ready) {
            this.watchers = {};
            this.watchers.textures = new WatchTextures(this.wrappedContext);
        }
    }
    toString () {
        return `${Statics.product} ${Statics.version}`;
    }
}

// Global scope for console usage.
global.WebGLSentry = WebGLSentry;

export default WebGLSentry;