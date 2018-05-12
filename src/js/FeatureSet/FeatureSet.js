import Feature from './Feature';

/**
 * Object holds information about the current GPUs WebGL 1 features.
 */
class GLSentryFeatureSet {
    constructor (gl) {
        if (!(gl instanceof WebGLRenderingContext)) {
            throw new Error("Cannot instantiate GLSentryFeatureSet without a valid WebGLRenderingContext.");
        }
        Feature.setGL(gl);
        this.features = [];
        this.probeFeatures();
    }
    /**
     * Instantiates all the GL Feature records.
     */
    probeFeatures () {
        /** Load extensions */
        let glExtensionTextureFloat = gl.getExtension( 'OES_texture_float' );
        let glExtensionTextureHalfFloat = gl.getExtension( 'OES_texture_half_float' );
        let glExtensionDebugRendererInfo = gl.getExtension( 'WEBGL_debug_renderer_info' );
        let glExtensionDrawBuffers = gl.getExtension( 'WEBGL_draw_buffers' );
        let glExtensionAnisotropic = gl.getExtension( 'EXT_texture_filter_anisotropic' ) || gl.getExtension( 'WEBKIT_EXT_texture_filter_anisotropic' );
        let glExtensionColorBufferFloat = gl.getExtension( 'WEBGL_color_buffer_float' ) || gl.getExtension( 'EXT_color_buffer_float' );
        let glExtensionColorBufferHalfFloat = gl.getExtension( 'EXT_color_buffer_half_float' );
    
        /** Attributes and vectors */
        this.features.push(new Feature('MAX_VERTEX_ATTRIBS', 'Maximum Vertex Attributes'));
        this.features.push(new Feature('MAX_VARYING_VECTORS', 'Maximum Varying Vectors'));

        this.features.push(new Feature('MAX_VERTEX_UNIFORM_VECTORS', 'Maximum Vertex Uniform Vectors'));
        this.features.push(new Feature('MAX_FRAGMENT_UNIFORM_VECTORS', 'Maximum Fragment Uniform Vectors'));

        /** Textures */
        this.features.push(new Feature('MAX_TEXTURE_IMAGE_UNITS', 'Maximum Fragment Texture Image Units'));
        this.features.push(new Feature('MAX_VERTEX_TEXTURE_IMAGE_UNITS', 'Maximum Vertex Texture Image Units'));
        this.features.push(new Feature('MAX_COMBINED_TEXTURE_IMAGE_UNITS', 'Maximum Combined Texture Image Units'));

        this.features.push(new Feature('MAX_TEXTURE_SIZE', 'Maximum 2D Texture Resolution'));
        this.features.push(new Feature('MAX_CUBE_MAP_TEXTURE_SIZE', 'Maximum Cube Texture Resolution'));

        this.features.push(new Feature('MAX_TEXTURE_MAX_ANISOTROPY_EXT', 'Maximum Texture Anisotropy', glExtensionAnisotropic && gl.getParameter( glExtensionAnisotropic.MAX_TEXTURE_MAX_ANISOTROPY_EXT )));

        /** Points */
        this.features.push(new Feature('ALIASED_POINT_SIZE_RANGE', 'Point Size Range'));
        this.features.push(new Feature('ALIASED_LINE_WIDTH_RANGE', 'Line Width Range'));

        /** Buffer Sizes */
        this.features.push(new Feature('MAX_VIEWPORT_DIMS', 'Max Viewport Dimensions'));
        this.features.push(new Feature('MAX_RENDERBUFFER_SIZE', 'Max Render Buffer Resolution'));

        /** Colour depth */
        this.features.push(new Feature('RED_BITS', 'Frambuffer Red Bits'));
        this.features.push(new Feature('GREEN_BITS', 'Frambuffer Green Bits'));
        this.features.push(new Feature('BLUE_BITS', 'Frambuffer Blue Bits'));
        this.features.push(new Feature('ALPHA_BITS', 'Frambuffer Alpha Bits'));
        this.features.push(new Feature('DEPTH_BITS', 'Depth Bits'));
        this.features.push(new Feature('STENCIL_BITS', 'Stencil Bits'));
        this.features.push(new Feature('SUBPIXEL_BITS', 'Sub-pixel Bits'));

        /* Multisample Anit-aliasing */
        this.features.push(new Feature('SAMPLES', 'MSAA Samples'));
        this.features.push(new Feature('SAMPLE_BUFFERS', 'MSAA Sampling Buffer Count'));

        /* Extensions */
        this.features.push(new Feature('EXTENSIONS', 'Supported Extensions', gl.getSupportedExtensions()));

        /* Vendor */
        this.features.push(new Feature('RENDERER', 'WebGL Renderer'));
        this.features.push(new Feature('VENDOR', 'WebGL Vendor'));
        this.features.push(new Feature('VERSION', 'WebGL Version'));
        this.features.push(new Feature('SHADING_LANGUAGE_VERSION', 'GLSL Version'));

        /* GPU Footprinting */
        this.features.push(new Feature('UNMASKED_RENDERER_WEBGL', 'Unmasked Vendor Name (Unreliable)', glExtensionDebugRendererInfo && gl.getParameter( glExtensionDebugRendererInfo.UNMASKED_RENDERER_WEBGL )));
        this.features.push(new Feature('UNMASKED_VENDOR_WEBGL', 'Unmasked Vendor Name (Unreliable)', glExtensionDebugRendererInfo && gl.getParameter( glExtensionDebugRendererInfo.UNMASKED_VENDOR_WEBGL )));
    }
}

export default GLSentryFeatureSet;