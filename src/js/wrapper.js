import Statics from './Statics';
import ContextMonitor from './ContextMonitor';
import GLProxy from './GLProxy';
import WatchTextures from './WatchTextures';
import { ThreeJS } from './Hacks';

class WebGLSentry {
    constructor (context) {
        this.wrappedContext = new GLProxy(context).getProxy();
        this.monitor = new ContextMonitor(this.wrappedContext);
        if (this.monitor.ready) {
            this.watchers = {};
            this.watchers.textures = new WatchTextures(this.wrappedContext);
        }
    }
    static threeJS () {
        ThreeJS();
    }
    toString () {
        return `${Statics.product} ${Statics.version}`;
    }
}

// Global scope for console usage.
global.WebGLSentry = WebGLSentry;

export default WebGLSentry;