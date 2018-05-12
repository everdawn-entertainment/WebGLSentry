let targetGL;

class GLFeature {
    constructor (glName, friendlyName, overrideValue) {
        this.displayName = friendlyName;
        this.glName = glName;
        if (typeof overrideValue !== 'undefined') {
            this.value = overrideValue;
        } else if (targetGL) {
            this.value = targetGL.getParameter( targetGL[glName] );
        }
    }
    static setGL (gl) {
        targetGL = gl;
    }
}

export default GLFeature;