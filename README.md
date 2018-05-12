# WebGLSentry

WebGL Sentry is a set of tools designed to help monitor WebGL contexts and identify
performance bottlenecks. It attaches directly on to an existing WebGL context and
proxies some WebGL calls to keep on top of what's happening.

## What should you use it for?

The tools are primarily designed for:

* Keeping track of WebGL Memory Usage
* Keeping track of objects defined
* Identifying performance bottlenecks

# How do you use it?

Create a GLSentry instance passing in the WebGL Context.

You can then call methods of the GLSentry instance to explore your WebGL application.

# Compatibility Notes

GLSentry is designed for use with native WebGL contexts, it should therefore be compatible with
ThreeJS, Babylon, Unity and many others. However it is not intended to replace good GL practises
and tools and should add to your debugging methodology, not replace it.