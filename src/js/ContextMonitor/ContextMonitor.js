class ContextMonitor {
    get ready () {
        return this._ready === true;
    }
    constructor (glContext) {
        if (!(glContext instanceof WebGLRenderingContext)) {
            console.warn('The object provided was not a WebGL Rendering context. WebGL Sentry is compatible only with WebGL contexts, support for WebGL2 is not included.');
            return;
        }
        this._ready = true;
    }
}

export default ContextMonitor;