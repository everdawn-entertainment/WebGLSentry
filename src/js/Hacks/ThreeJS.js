/**
 * Modifies the renderer constructor to make the _gl variable assignable.
 * Allows us to swap it's own renderer context with our proxy.
 */
function ThreeJS () {
    if (typeof THREE !== "undefined") {
        // Load up the constructor. Minified is cool.
        let constructorLogic = THREE.WebGLRenderer.prototype.constructor.toString();
        // Find get context to begin strapping in our setContext equivalent
        let getPosition = constructorLogic.indexOf("this.getContext=function(){return ");
        let fnSplice;
        let endPosition;
        let newFunc;
        if (getPosition > 0) {
            endPosition = constructorLogic.indexOf("}", getPosition);
            fnSplice = constructorLogic.substr(getPosition, endPosition - getPosition + 1);
        }
        if (endPosition) {
            let glVarPre = fnSplice.indexOf("return ");
            let glVar = fnSplice.substr(glVarPre + 7, (fnSplice.length - glVarPre - 8));
            newFunc = fnSplice + ";this.setContext=function(ctx){"+glVar+" = ctx};";
        }
        if (newFunc) {
            constructorLogic = constructorLogic.replace(fnSplice, newFunc);
            eval("window.THREE.WebGLRenderer = " + constructorLogic);
            return;
        }
        console.warn('ThreeJS WebGL hack failed, could not identify getContext method of THREE.WebGLRenderer');
    }
}

export { ThreeJS };