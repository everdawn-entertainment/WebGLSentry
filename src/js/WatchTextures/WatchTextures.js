class WatchTextures {
    constructor (context) {
        context.registerCallback('texImage2D', this.texImage2D, this);
    }
    texImage2D (target, level, internalformat, format, type, pixels, format, type, _pixels) {
        console.log(arguments);
        // void gl.texImage2D(target, level, internalformat, format, type, ImageData? pixels);
        if (pixels instanceof ImageData) {
            return;
        }
        // void gl.texImage2D(target, level, internalformat, format, type, HTMLImageElement? pixels);
        if (pixels instanceof HTMLImageElement) {
            return;
        }
        // void gl.texImage2D(target, level, internalformat, format, type, HTMLCanvasElement? pixels);
        if (pixels instanceof HTMLCanvasElement) {
            return;
        }
        // void gl.texImage2D(target, level, internalformat, format, type, HTMLVideoElement? pixels);
        if (pixels instanceof HTMLVideoElement) {
            return;
        }
        // void gl.texImage2D(target, level, internalformat, format, type, ImageBitmap? pixels);
        if (pixels instanceof ImageBitmap) {
            return;
        }
        // void gl.texImage2D(target, level, internalformat, width, height, border, format, type, ArrayBufferView? pixels);
        if (pixels instanceof number) {
            let border = pixels;
            let pixels = _pixels;
            return;
        }
    }
}

export default WatchTextures;