
/**
 * Wraps around a real WebGL context and intercepts calls allowing
 * GLSentry to keep track of objects.
 */
class GLProxy {
    constructor (realGL) {
        this._proxy = new Proxy(realGL, this);
        this._real = realGL;
        this._methodMap = {};
        this._scopeMap = {};
        this._boundRegistration = this.registerCallback.bind(this);
    }
    getProxy () {
        return this._proxy;
    }
    registerCallback (name, callback, scope) {
        if (typeof name !== 'string') {
            console.warn('No valid name was provided, could not register callback.');
            return;
        }
        if (typeof callback === 'function') {
            this._methodMap[name] = callback;
            this._scopeMap[name] = scope;
        }
    }
    get (target, name, receiver) {
        // The only thing we don't proxy.
        if (name === "registerCallback") return this._boundRegistration;

        // Do the thing!
        let val = target[name];
        switch (typeof target[name]) {
            case 'undefined': {

            } break;
            case 'function': {
                return function (...args) {
                    let result;
                    try {
                        console.info(`WebGL -> ${name} -> ${args.join(' , ')}`);
                        result = val.apply(this._real, args);
                    } catch (e) {
                        console.error('WebGL Sentry intercepted a failing WebGL command.', e);
                    }
                    this.methodCall({
                        name,
                        args,
                    })
                    return result;
                }.bind(this);
            } break;
            default: {
                return val;
            } break;
        }
    }
    methodCall (e) {
        let method = this._methodMap[e.name];
        let scope;
        if (method) {
            scope = this._scopeMap[e.name];
            method.apply(scope ? scope : this, e.arguments);
        }
    }
}

// var GLProxy = new Proxy(GLProxy)

export default GLProxy;