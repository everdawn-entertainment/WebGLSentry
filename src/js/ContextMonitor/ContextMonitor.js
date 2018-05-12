import FeatureSet from "../FeatureSet";

class ContextMonitor {
    get ready () {
        return this._ready === true;
    }
    constructor (glContext) {
        if (!(glContext instanceof WebGLRenderingContext)) {
            console.warn('The object provided was not a WebGL Rendering context. WebGL Sentry is compatible only with WebGL contexts, support for WebGL2 is not included.');
            return;
        }
        this._gl = glContext;
        this._ready = true;
    }
    get features () {
        if (this.ready) {
            if (!this._features) {
                this._features = new FeatureSet(this._gl);
            }
            return this._features;
        }
    }
}

export default ContextMonitor;