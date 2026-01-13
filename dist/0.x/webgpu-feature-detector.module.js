/* webgpu-feature-detector@0.0.0, license MIT */
function keysOf(obj) {
    return Object.keys(obj);
}
function hasFeature(features, feature) {
    // eslint-disable-next-line no-restricted-syntax
    return features.has(feature);
}
function isCompatibilityMode(features) {
    return !features.has('core-features-and-limits');
}

/*
This file is a modified version of a file from the WebGPU CTS

Copyright 2019 WebGPU CTS Contributors

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

   1. Redistributions of source code must retain the above copyright notice,
      this list of conditions and the following disclaimer.

   2. Redistributions in binary form must reproduce the above copyright notice,
      this list of conditions and the following disclaimer in the documentation
      and/or other materials provided with the distribution.

   3. Neither the name of the copyright holder nor the names of its
      contributors may be used to endorse or promote products derived from this
      software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

 */
function assert(condition, msg) {
    if (!condition) {
        throw new Error(msg);
    }
}
// --- cut here ---
//
// Texture format tables
//
/**
 * Defaults applied to all texture format tables automatically. Used only inside
 * `formatTableWithDefaults`. This ensures keys are never missing, always explicitly `undefined`.
 *
 * All top-level keys must be defined here, or they won't be exposed at all.
 * Documentation is also written here; this makes it propagate through to the end types.
 */
const kFormatUniversalDefaults = {
    /** Texel block width. */
    blockWidth: undefined,
    /** Texel block height. */
    blockHeight: undefined,
    color: undefined,
    depth: undefined,
    stencil: undefined,
    /**
     * Info when this format can be used as a color render target. The format may require a feature
     * to actually be used as a render target. Eg: rg11b10ufloat which requires rg11b10ufloat-renderable
     * Call {@link isTextureFormatPossiblyUsableAsColorRenderAttachment} before having a device
     * Call {@link isTextureFormatColorRenderable}(device, format) to find out for a particular device.
     * Use {@link kPossibleColorRenderableTextureFormats} for params.
     */
    colorRender: undefined,
    /**
     * Whether the format can possibly be used as a multisample texture. The format may require a
     * feature to actually multisampled. Eg: rg11b10ufloat which requires rg11b10ufloat-renderable
     * Call {@link isTextureFormatPossiblyMultisampled} before having a device
     * Call {@link isTextureFormatMultisampled}(device, format) to find out for a particular device.
     * Use {@link kPossibleMultisampledTextureFormats} for params.
     */
    multisample: undefined,
    /** Optional feature required to use this format, or `undefined` if none. */
    feature: undefined,
    /** The base format for srgb formats. Specified on both srgb and equivalent non-srgb formats. */
    baseFormat: undefined,
    /** @deprecated Use `.color.bytes`, `.depth.bytes`, or `.stencil.bytes`. */
    bytesPerBlock: undefined,
    // IMPORTANT:
    // Add new top-level keys both here and in TextureFormatInfo_TypeCheck.
};
/**
 * Takes `table` and applies `defaults` to every row, i.e. for each row,
 * `{ ... kUniversalDefaults, ...defaults, ...row }`.
 * This only operates at the first level; it doesn't support defaults in nested objects.
 */
function formatTableWithDefaults({ defaults, table, }) {
    return Object.fromEntries(Object.entries(table).map(([k, row]) => [
        k,
        { ...kFormatUniversalDefaults, ...defaults, ...row },
    ])
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    );
}
/** "plain color formats", plus rgb9e5ufloat. */
const kRegularTextureFormatInfo = formatTableWithDefaults({
    defaults: { blockWidth: 1, blockHeight: 1 },
    table: {
        // plain, 8 bits per component
        r8unorm: {
            color: {
                type: 'float',
                copySrc: true,
                copyDst: true,
                storage: false,
                readWriteStorage: false,
                bytes: 1,
            },
            colorRender: { blend: true, resolve: true, byteCost: 1, alignment: 1 },
            multisample: true,
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
        r8snorm: {
            color: {
                type: 'float',
                copySrc: true,
                copyDst: true,
                storage: false,
                readWriteStorage: false,
                bytes: 1,
            },
            multisample: false,
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
        r8uint: {
            color: {
                type: 'uint',
                copySrc: true,
                copyDst: true,
                storage: false,
                readWriteStorage: false,
                bytes: 1,
            },
            colorRender: { blend: false, resolve: false, byteCost: 1, alignment: 1 },
            multisample: true,
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
        r8sint: {
            color: {
                type: 'sint',
                copySrc: true,
                copyDst: true,
                storage: false,
                readWriteStorage: false,
                bytes: 1,
            },
            colorRender: { blend: false, resolve: false, byteCost: 1, alignment: 1 },
            multisample: true,
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
        rg8unorm: {
            color: {
                type: 'float',
                copySrc: true,
                copyDst: true,
                storage: false,
                readWriteStorage: false,
                bytes: 2,
            },
            colorRender: { blend: true, resolve: true, byteCost: 2, alignment: 1 },
            multisample: true,
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
        rg8snorm: {
            color: {
                type: 'float',
                copySrc: true,
                copyDst: true,
                storage: false,
                readWriteStorage: false,
                bytes: 2,
            },
            multisample: false,
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
        rg8uint: {
            color: {
                type: 'uint',
                copySrc: true,
                copyDst: true,
                storage: false,
                readWriteStorage: false,
                bytes: 2,
            },
            colorRender: { blend: false, resolve: false, byteCost: 2, alignment: 1 },
            multisample: true,
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
        rg8sint: {
            color: {
                type: 'sint',
                copySrc: true,
                copyDst: true,
                storage: false,
                readWriteStorage: false,
                bytes: 2,
            },
            colorRender: { blend: false, resolve: false, byteCost: 2, alignment: 1 },
            multisample: true,
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
        rgba8unorm: {
            color: {
                type: 'float',
                copySrc: true,
                copyDst: true,
                storage: true,
                readWriteStorage: false,
                bytes: 4,
            },
            colorRender: { blend: true, resolve: true, byteCost: 8, alignment: 1 },
            multisample: true,
            baseFormat: 'rgba8unorm',
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
        'rgba8unorm-srgb': {
            color: {
                type: 'float',
                copySrc: true,
                copyDst: true,
                storage: false,
                readWriteStorage: false,
                bytes: 4,
            },
            colorRender: { blend: true, resolve: true, byteCost: 8, alignment: 1 },
            multisample: true,
            baseFormat: 'rgba8unorm',
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
        rgba8snorm: {
            color: {
                type: 'float',
                copySrc: true,
                copyDst: true,
                storage: true,
                readWriteStorage: false,
                bytes: 4,
            },
            multisample: false,
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
        rgba8uint: {
            color: {
                type: 'uint',
                copySrc: true,
                copyDst: true,
                storage: true,
                readWriteStorage: false,
                bytes: 4,
            },
            colorRender: { blend: false, resolve: false, byteCost: 4, alignment: 1 },
            multisample: true,
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
        rgba8sint: {
            color: {
                type: 'sint',
                copySrc: true,
                copyDst: true,
                storage: true,
                readWriteStorage: false,
                bytes: 4,
            },
            colorRender: { blend: false, resolve: false, byteCost: 4, alignment: 1 },
            multisample: true,
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
        bgra8unorm: {
            color: {
                type: 'float',
                copySrc: true,
                copyDst: true,
                storage: false,
                readWriteStorage: false,
                bytes: 4,
            },
            colorRender: { blend: true, resolve: true, byteCost: 8, alignment: 1 },
            multisample: true,
            baseFormat: 'bgra8unorm',
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
        'bgra8unorm-srgb': {
            color: {
                type: 'float',
                copySrc: true,
                copyDst: true,
                storage: false,
                readWriteStorage: false,
                bytes: 4,
            },
            colorRender: { blend: true, resolve: true, byteCost: 8, alignment: 1 },
            multisample: true,
            baseFormat: 'bgra8unorm',
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
        // plain, 16 bits per component
        r16unorm: {
            color: {
                type: 'float',
                copySrc: true,
                copyDst: true,
                storage: true,
                readWriteStorage: false,
                bytes: 2,
            },
            colorRender: { blend: true, resolve: false, byteCost: 2, alignment: 2 },
            multisample: true,
            feature: 'texture-formats-tier1',
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
        r16snorm: {
            color: {
                type: 'float',
                copySrc: true,
                copyDst: true,
                storage: true,
                readWriteStorage: false,
                bytes: 2,
            },
            colorRender: { blend: true, resolve: false, byteCost: 2, alignment: 2 },
            multisample: true,
            feature: 'texture-formats-tier1',
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
        r16uint: {
            color: {
                type: 'uint',
                copySrc: true,
                copyDst: true,
                storage: false,
                readWriteStorage: false,
                bytes: 2,
            },
            colorRender: { blend: false, resolve: false, byteCost: 2, alignment: 2 },
            multisample: true,
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
        r16sint: {
            color: {
                type: 'sint',
                copySrc: true,
                copyDst: true,
                storage: false,
                readWriteStorage: false,
                bytes: 2,
            },
            colorRender: { blend: false, resolve: false, byteCost: 2, alignment: 2 },
            multisample: true,
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
        r16float: {
            color: {
                type: 'float',
                copySrc: true,
                copyDst: true,
                storage: false,
                readWriteStorage: false,
                bytes: 2,
            },
            colorRender: { blend: true, resolve: true, byteCost: 2, alignment: 2 },
            multisample: true,
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
        rg16unorm: {
            color: {
                type: 'float',
                copySrc: true,
                copyDst: true,
                storage: true,
                readWriteStorage: false,
                bytes: 4,
            },
            colorRender: { blend: true, resolve: false, byteCost: 4, alignment: 2 },
            multisample: true,
            feature: 'texture-formats-tier1',
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
        rg16snorm: {
            color: {
                type: 'float',
                copySrc: true,
                copyDst: true,
                storage: true,
                readWriteStorage: false,
                bytes: 4,
            },
            colorRender: { blend: true, resolve: false, byteCost: 4, alignment: 2 },
            multisample: true,
            feature: 'texture-formats-tier1',
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
        rg16uint: {
            color: {
                type: 'uint',
                copySrc: true,
                copyDst: true,
                storage: false,
                readWriteStorage: false,
                bytes: 4,
            },
            colorRender: { blend: false, resolve: false, byteCost: 4, alignment: 2 },
            multisample: true,
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
        rg16sint: {
            color: {
                type: 'sint',
                copySrc: true,
                copyDst: true,
                storage: false,
                readWriteStorage: false,
                bytes: 4,
            },
            colorRender: { blend: false, resolve: false, byteCost: 4, alignment: 2 },
            multisample: true,
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
        rg16float: {
            color: {
                type: 'float',
                copySrc: true,
                copyDst: true,
                storage: false,
                readWriteStorage: false,
                bytes: 4,
            },
            colorRender: { blend: true, resolve: true, byteCost: 4, alignment: 2 },
            multisample: true,
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
        rgba16unorm: {
            color: {
                type: 'float',
                copySrc: true,
                copyDst: true,
                storage: true,
                readWriteStorage: false,
                bytes: 8,
            },
            colorRender: { blend: true, resolve: false, byteCost: 8, alignment: 4 },
            multisample: true,
            feature: 'texture-formats-tier1',
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
        rgba16snorm: {
            color: {
                type: 'float',
                copySrc: true,
                copyDst: true,
                storage: true,
                readWriteStorage: false,
                bytes: 8,
            },
            colorRender: { blend: true, resolve: false, byteCost: 8, alignment: 2 },
            multisample: true,
            feature: 'texture-formats-tier1',
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
        rgba16uint: {
            color: {
                type: 'uint',
                copySrc: true,
                copyDst: true,
                storage: true,
                readWriteStorage: false,
                bytes: 8,
            },
            colorRender: { blend: false, resolve: false, byteCost: 8, alignment: 2 },
            multisample: true,
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
        rgba16sint: {
            color: {
                type: 'sint',
                copySrc: true,
                copyDst: true,
                storage: true,
                readWriteStorage: false,
                bytes: 8,
            },
            colorRender: { blend: false, resolve: false, byteCost: 8, alignment: 2 },
            multisample: true,
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
        rgba16float: {
            color: {
                type: 'float',
                copySrc: true,
                copyDst: true,
                storage: true,
                readWriteStorage: false,
                bytes: 8,
            },
            colorRender: { blend: true, resolve: true, byteCost: 8, alignment: 2 },
            multisample: true,
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
        // plain, 32 bits per component
        r32uint: {
            color: {
                type: 'uint',
                copySrc: true,
                copyDst: true,
                storage: true,
                readWriteStorage: true,
                bytes: 4,
            },
            colorRender: { blend: false, resolve: false, byteCost: 4, alignment: 4 },
            multisample: false,
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
        r32sint: {
            color: {
                type: 'sint',
                copySrc: true,
                copyDst: true,
                storage: true,
                readWriteStorage: true,
                bytes: 4,
            },
            colorRender: { blend: false, resolve: false, byteCost: 4, alignment: 4 },
            multisample: false,
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
        r32float: {
            color: {
                type: 'unfilterable-float',
                copySrc: true,
                copyDst: true,
                storage: true,
                readWriteStorage: true,
                bytes: 4,
            },
            colorRender: { blend: false, resolve: false, byteCost: 4, alignment: 4 },
            multisample: true,
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
        rg32uint: {
            color: {
                type: 'uint',
                copySrc: true,
                copyDst: true,
                storage: true,
                readWriteStorage: false,
                bytes: 8,
            },
            colorRender: { blend: false, resolve: false, byteCost: 8, alignment: 4 },
            multisample: false,
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
        rg32sint: {
            color: {
                type: 'sint',
                copySrc: true,
                copyDst: true,
                storage: true,
                readWriteStorage: false,
                bytes: 8,
            },
            colorRender: { blend: false, resolve: false, byteCost: 8, alignment: 4 },
            multisample: false,
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
        rg32float: {
            color: {
                type: 'unfilterable-float',
                copySrc: true,
                copyDst: true,
                storage: true,
                readWriteStorage: false,
                bytes: 8,
            },
            colorRender: { blend: false, resolve: false, byteCost: 8, alignment: 4 },
            multisample: false,
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
        rgba32uint: {
            color: {
                type: 'uint',
                copySrc: true,
                copyDst: true,
                storage: true,
                readWriteStorage: false,
                bytes: 16,
            },
            colorRender: { blend: false, resolve: false, byteCost: 16, alignment: 4 },
            multisample: false,
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
        rgba32sint: {
            color: {
                type: 'sint',
                copySrc: true,
                copyDst: true,
                storage: true,
                readWriteStorage: false,
                bytes: 16,
            },
            colorRender: { blend: false, resolve: false, byteCost: 16, alignment: 4 },
            multisample: false,
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
        rgba32float: {
            color: {
                type: 'unfilterable-float',
                copySrc: true,
                copyDst: true,
                storage: true,
                readWriteStorage: false,
                bytes: 16,
            },
            colorRender: { blend: false, resolve: false, byteCost: 16, alignment: 4 },
            multisample: false,
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
        // plain, mixed component width, 32 bits per texel
        rgb10a2uint: {
            color: {
                type: 'uint',
                copySrc: true,
                copyDst: true,
                storage: false,
                readWriteStorage: false,
                bytes: 4,
            },
            colorRender: { blend: false, resolve: false, byteCost: 8, alignment: 4 },
            multisample: true,
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
        rgb10a2unorm: {
            color: {
                type: 'float',
                copySrc: true,
                copyDst: true,
                storage: false,
                readWriteStorage: false,
                bytes: 4,
            },
            colorRender: { blend: true, resolve: true, byteCost: 8, alignment: 4 },
            multisample: true,
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
        rg11b10ufloat: {
            color: {
                type: 'float',
                copySrc: true,
                copyDst: true,
                storage: false,
                readWriteStorage: false,
                bytes: 4,
            },
            colorRender: { blend: true, resolve: true, byteCost: 8, alignment: 4 },
            multisample: true,
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
        // packed
        rgb9e5ufloat: {
            color: {
                type: 'float',
                copySrc: true,
                copyDst: true,
                storage: false,
                readWriteStorage: false,
                bytes: 4,
            },
            multisample: false,
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
    },
});
// MAINTENANCE_TODO: Distinguishing "sized" and "unsized" depth stencil formats doesn't make sense
// because one aspect can be sized and one can be unsized. This should be cleaned up, but is kept
// this way during a migration phase.
const kSizedDepthStencilFormatInfo = formatTableWithDefaults({
    defaults: { blockWidth: 1, blockHeight: 1, multisample: true },
    table: {
        stencil8: {
            stencil: {
                type: 'uint',
                copySrc: true,
                copyDst: true,
                storage: false,
                readWriteStorage: false,
                bytes: 1,
            },
            bytesPerBlock: 1,
        },
        depth16unorm: {
            depth: {
                type: 'depth',
                copySrc: true,
                copyDst: true,
                storage: false,
                readWriteStorage: false,
                bytes: 2,
            },
            bytesPerBlock: 2,
        },
        depth32float: {
            depth: {
                type: 'depth',
                copySrc: true,
                copyDst: false,
                storage: false,
                readWriteStorage: false,
                bytes: 4,
            },
            bytesPerBlock: 4,
        },
    },
});
const kUnsizedDepthStencilFormatInfo = formatTableWithDefaults({
    defaults: { blockWidth: 1, blockHeight: 1, multisample: true },
    table: {
        depth24plus: {
            depth: {
                type: 'depth',
                copySrc: false,
                copyDst: false,
                storage: false,
                readWriteStorage: false,
                bytes: undefined,
            },
        },
        'depth24plus-stencil8': {
            depth: {
                type: 'depth',
                copySrc: false,
                copyDst: false,
                storage: false,
                readWriteStorage: false,
                bytes: undefined,
            },
            stencil: {
                type: 'uint',
                copySrc: true,
                copyDst: true,
                storage: false,
                readWriteStorage: false,
                bytes: 1,
            },
        },
        'depth32float-stencil8': {
            depth: {
                type: 'depth',
                copySrc: true,
                copyDst: false,
                storage: false,
                readWriteStorage: false,
                bytes: 4,
            },
            stencil: {
                type: 'uint',
                copySrc: true,
                copyDst: true,
                storage: false,
                readWriteStorage: false,
                bytes: 1,
            },
            feature: 'depth32float-stencil8',
        },
    },
});
const kBCTextureFormatInfo = formatTableWithDefaults({
    defaults: {
        blockWidth: 4,
        blockHeight: 4,
        multisample: false,
        feature: 'texture-compression-bc',
    },
    table: {
        'bc1-rgba-unorm': {
            color: {
                type: 'float',
                copySrc: true,
                copyDst: true,
                storage: false,
                readWriteStorage: false,
                bytes: 8,
            },
            baseFormat: 'bc1-rgba-unorm',
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
        'bc1-rgba-unorm-srgb': {
            color: {
                type: 'float',
                copySrc: true,
                copyDst: true,
                storage: false,
                readWriteStorage: false,
                bytes: 8,
            },
            baseFormat: 'bc1-rgba-unorm',
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
        'bc2-rgba-unorm': {
            color: {
                type: 'float',
                copySrc: true,
                copyDst: true,
                storage: false,
                readWriteStorage: false,
                bytes: 16,
            },
            baseFormat: 'bc2-rgba-unorm',
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
        'bc2-rgba-unorm-srgb': {
            color: {
                type: 'float',
                copySrc: true,
                copyDst: true,
                storage: false,
                readWriteStorage: false,
                bytes: 16,
            },
            baseFormat: 'bc2-rgba-unorm',
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
        'bc3-rgba-unorm': {
            color: {
                type: 'float',
                copySrc: true,
                copyDst: true,
                storage: false,
                readWriteStorage: false,
                bytes: 16,
            },
            baseFormat: 'bc3-rgba-unorm',
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
        'bc3-rgba-unorm-srgb': {
            color: {
                type: 'float',
                copySrc: true,
                copyDst: true,
                storage: false,
                readWriteStorage: false,
                bytes: 16,
            },
            baseFormat: 'bc3-rgba-unorm',
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
        'bc4-r-unorm': {
            color: {
                type: 'float',
                copySrc: true,
                copyDst: true,
                storage: false,
                readWriteStorage: false,
                bytes: 8,
            },
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
        'bc4-r-snorm': {
            color: {
                type: 'float',
                copySrc: true,
                copyDst: true,
                storage: false,
                readWriteStorage: false,
                bytes: 8,
            },
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
        'bc5-rg-unorm': {
            color: {
                type: 'float',
                copySrc: true,
                copyDst: true,
                storage: false,
                readWriteStorage: false,
                bytes: 16,
            },
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
        'bc5-rg-snorm': {
            color: {
                type: 'float',
                copySrc: true,
                copyDst: true,
                storage: false,
                readWriteStorage: false,
                bytes: 16,
            },
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
        'bc6h-rgb-ufloat': {
            color: {
                type: 'float',
                copySrc: true,
                copyDst: true,
                storage: false,
                readWriteStorage: false,
                bytes: 16,
            },
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
        'bc6h-rgb-float': {
            color: {
                type: 'float',
                copySrc: true,
                copyDst: true,
                storage: false,
                readWriteStorage: false,
                bytes: 16,
            },
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
        'bc7-rgba-unorm': {
            color: {
                type: 'float',
                copySrc: true,
                copyDst: true,
                storage: false,
                readWriteStorage: false,
                bytes: 16,
            },
            baseFormat: 'bc7-rgba-unorm',
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
        'bc7-rgba-unorm-srgb': {
            color: {
                type: 'float',
                copySrc: true,
                copyDst: true,
                storage: false,
                readWriteStorage: false,
                bytes: 16,
            },
            baseFormat: 'bc7-rgba-unorm',
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
    },
});
const kETC2TextureFormatInfo = formatTableWithDefaults({
    defaults: {
        blockWidth: 4,
        blockHeight: 4,
        multisample: false,
        feature: 'texture-compression-etc2',
    },
    table: {
        'etc2-rgb8unorm': {
            color: {
                type: 'float',
                copySrc: true,
                copyDst: true,
                storage: false,
                readWriteStorage: false,
                bytes: 8,
            },
            baseFormat: 'etc2-rgb8unorm',
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
        'etc2-rgb8unorm-srgb': {
            color: {
                type: 'float',
                copySrc: true,
                copyDst: true,
                storage: false,
                readWriteStorage: false,
                bytes: 8,
            },
            baseFormat: 'etc2-rgb8unorm',
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
        'etc2-rgb8a1unorm': {
            color: {
                type: 'float',
                copySrc: true,
                copyDst: true,
                storage: false,
                readWriteStorage: false,
                bytes: 8,
            },
            baseFormat: 'etc2-rgb8a1unorm',
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
        'etc2-rgb8a1unorm-srgb': {
            color: {
                type: 'float',
                copySrc: true,
                copyDst: true,
                storage: false,
                readWriteStorage: false,
                bytes: 8,
            },
            baseFormat: 'etc2-rgb8a1unorm',
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
        'etc2-rgba8unorm': {
            color: {
                type: 'float',
                copySrc: true,
                copyDst: true,
                storage: false,
                readWriteStorage: false,
                bytes: 16,
            },
            baseFormat: 'etc2-rgba8unorm',
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
        'etc2-rgba8unorm-srgb': {
            color: {
                type: 'float',
                copySrc: true,
                copyDst: true,
                storage: false,
                readWriteStorage: false,
                bytes: 16,
            },
            baseFormat: 'etc2-rgba8unorm',
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
        'eac-r11unorm': {
            color: {
                type: 'float',
                copySrc: true,
                copyDst: true,
                storage: false,
                readWriteStorage: false,
                bytes: 8,
            },
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
        'eac-r11snorm': {
            color: {
                type: 'float',
                copySrc: true,
                copyDst: true,
                storage: false,
                readWriteStorage: false,
                bytes: 8,
            },
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
        'eac-rg11unorm': {
            color: {
                type: 'float',
                copySrc: true,
                copyDst: true,
                storage: false,
                readWriteStorage: false,
                bytes: 16,
            },
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
        'eac-rg11snorm': {
            color: {
                type: 'float',
                copySrc: true,
                copyDst: true,
                storage: false,
                readWriteStorage: false,
                bytes: 16,
            },
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
    },
});
const kASTCTextureFormatInfo = formatTableWithDefaults({
    defaults: {
        multisample: false,
        feature: 'texture-compression-astc',
    },
    table: {
        'astc-4x4-unorm': {
            blockWidth: 4,
            blockHeight: 4,
            color: {
                type: 'float',
                copySrc: true,
                copyDst: true,
                storage: false,
                readWriteStorage: false,
                bytes: 16,
            },
            baseFormat: 'astc-4x4-unorm',
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
        'astc-4x4-unorm-srgb': {
            blockWidth: 4,
            blockHeight: 4,
            color: {
                type: 'float',
                copySrc: true,
                copyDst: true,
                storage: false,
                readWriteStorage: false,
                bytes: 16,
            },
            baseFormat: 'astc-4x4-unorm',
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
        'astc-5x4-unorm': {
            blockWidth: 5,
            blockHeight: 4,
            color: {
                type: 'float',
                copySrc: true,
                copyDst: true,
                storage: false,
                readWriteStorage: false,
                bytes: 16,
            },
            baseFormat: 'astc-5x4-unorm',
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
        'astc-5x4-unorm-srgb': {
            blockWidth: 5,
            blockHeight: 4,
            color: {
                type: 'float',
                copySrc: true,
                copyDst: true,
                storage: false,
                readWriteStorage: false,
                bytes: 16,
            },
            baseFormat: 'astc-5x4-unorm',
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
        'astc-5x5-unorm': {
            blockWidth: 5,
            blockHeight: 5,
            color: {
                type: 'float',
                copySrc: true,
                copyDst: true,
                storage: false,
                readWriteStorage: false,
                bytes: 16,
            },
            baseFormat: 'astc-5x5-unorm',
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
        'astc-5x5-unorm-srgb': {
            blockWidth: 5,
            blockHeight: 5,
            color: {
                type: 'float',
                copySrc: true,
                copyDst: true,
                storage: false,
                readWriteStorage: false,
                bytes: 16,
            },
            baseFormat: 'astc-5x5-unorm',
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
        'astc-6x5-unorm': {
            blockWidth: 6,
            blockHeight: 5,
            color: {
                type: 'float',
                copySrc: true,
                copyDst: true,
                storage: false,
                readWriteStorage: false,
                bytes: 16,
            },
            baseFormat: 'astc-6x5-unorm',
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
        'astc-6x5-unorm-srgb': {
            blockWidth: 6,
            blockHeight: 5,
            color: {
                type: 'float',
                copySrc: true,
                copyDst: true,
                storage: false,
                readWriteStorage: false,
                bytes: 16,
            },
            baseFormat: 'astc-6x5-unorm',
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
        'astc-6x6-unorm': {
            blockWidth: 6,
            blockHeight: 6,
            color: {
                type: 'float',
                copySrc: true,
                copyDst: true,
                storage: false,
                readWriteStorage: false,
                bytes: 16,
            },
            baseFormat: 'astc-6x6-unorm',
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
        'astc-6x6-unorm-srgb': {
            blockWidth: 6,
            blockHeight: 6,
            color: {
                type: 'float',
                copySrc: true,
                copyDst: true,
                storage: false,
                readWriteStorage: false,
                bytes: 16,
            },
            baseFormat: 'astc-6x6-unorm',
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
        'astc-8x5-unorm': {
            blockWidth: 8,
            blockHeight: 5,
            color: {
                type: 'float',
                copySrc: true,
                copyDst: true,
                storage: false,
                readWriteStorage: false,
                bytes: 16,
            },
            baseFormat: 'astc-8x5-unorm',
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
        'astc-8x5-unorm-srgb': {
            blockWidth: 8,
            blockHeight: 5,
            color: {
                type: 'float',
                copySrc: true,
                copyDst: true,
                storage: false,
                readWriteStorage: false,
                bytes: 16,
            },
            baseFormat: 'astc-8x5-unorm',
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
        'astc-8x6-unorm': {
            blockWidth: 8,
            blockHeight: 6,
            color: {
                type: 'float',
                copySrc: true,
                copyDst: true,
                storage: false,
                readWriteStorage: false,
                bytes: 16,
            },
            baseFormat: 'astc-8x6-unorm',
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
        'astc-8x6-unorm-srgb': {
            blockWidth: 8,
            blockHeight: 6,
            color: {
                type: 'float',
                copySrc: true,
                copyDst: true,
                storage: false,
                readWriteStorage: false,
                bytes: 16,
            },
            baseFormat: 'astc-8x6-unorm',
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
        'astc-8x8-unorm': {
            blockWidth: 8,
            blockHeight: 8,
            color: {
                type: 'float',
                copySrc: true,
                copyDst: true,
                storage: false,
                readWriteStorage: false,
                bytes: 16,
            },
            baseFormat: 'astc-8x8-unorm',
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
        'astc-8x8-unorm-srgb': {
            blockWidth: 8,
            blockHeight: 8,
            color: {
                type: 'float',
                copySrc: true,
                copyDst: true,
                storage: false,
                readWriteStorage: false,
                bytes: 16,
            },
            baseFormat: 'astc-8x8-unorm',
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
        'astc-10x5-unorm': {
            blockWidth: 10,
            blockHeight: 5,
            color: {
                type: 'float',
                copySrc: true,
                copyDst: true,
                storage: false,
                readWriteStorage: false,
                bytes: 16,
            },
            baseFormat: 'astc-10x5-unorm',
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
        'astc-10x5-unorm-srgb': {
            blockWidth: 10,
            blockHeight: 5,
            color: {
                type: 'float',
                copySrc: true,
                copyDst: true,
                storage: false,
                readWriteStorage: false,
                bytes: 16,
            },
            baseFormat: 'astc-10x5-unorm',
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
        'astc-10x6-unorm': {
            blockWidth: 10,
            blockHeight: 6,
            color: {
                type: 'float',
                copySrc: true,
                copyDst: true,
                storage: false,
                readWriteStorage: false,
                bytes: 16,
            },
            baseFormat: 'astc-10x6-unorm',
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
        'astc-10x6-unorm-srgb': {
            blockWidth: 10,
            blockHeight: 6,
            color: {
                type: 'float',
                copySrc: true,
                copyDst: true,
                storage: false,
                readWriteStorage: false,
                bytes: 16,
            },
            baseFormat: 'astc-10x6-unorm',
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
        'astc-10x8-unorm': {
            blockWidth: 10,
            blockHeight: 8,
            color: {
                type: 'float',
                copySrc: true,
                copyDst: true,
                storage: false,
                readWriteStorage: false,
                bytes: 16,
            },
            baseFormat: 'astc-10x8-unorm',
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
        'astc-10x8-unorm-srgb': {
            blockWidth: 10,
            blockHeight: 8,
            color: {
                type: 'float',
                copySrc: true,
                copyDst: true,
                storage: false,
                readWriteStorage: false,
                bytes: 16,
            },
            baseFormat: 'astc-10x8-unorm',
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
        'astc-10x10-unorm': {
            blockWidth: 10,
            blockHeight: 10,
            color: {
                type: 'float',
                copySrc: true,
                copyDst: true,
                storage: false,
                readWriteStorage: false,
                bytes: 16,
            },
            baseFormat: 'astc-10x10-unorm',
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
        'astc-10x10-unorm-srgb': {
            blockWidth: 10,
            blockHeight: 10,
            color: {
                type: 'float',
                copySrc: true,
                copyDst: true,
                storage: false,
                readWriteStorage: false,
                bytes: 16,
            },
            baseFormat: 'astc-10x10-unorm',
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
        'astc-12x10-unorm': {
            blockWidth: 12,
            blockHeight: 10,
            color: {
                type: 'float',
                copySrc: true,
                copyDst: true,
                storage: false,
                readWriteStorage: false,
                bytes: 16,
            },
            baseFormat: 'astc-12x10-unorm',
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
        'astc-12x10-unorm-srgb': {
            blockWidth: 12,
            blockHeight: 10,
            color: {
                type: 'float',
                copySrc: true,
                copyDst: true,
                storage: false,
                readWriteStorage: false,
                bytes: 16,
            },
            baseFormat: 'astc-12x10-unorm',
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
        'astc-12x12-unorm': {
            blockWidth: 12,
            blockHeight: 12,
            color: {
                type: 'float',
                copySrc: true,
                copyDst: true,
                storage: false,
                readWriteStorage: false,
                bytes: 16,
            },
            baseFormat: 'astc-12x12-unorm',
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
        'astc-12x12-unorm-srgb': {
            blockWidth: 12,
            blockHeight: 12,
            color: {
                type: 'float',
                copySrc: true,
                copyDst: true,
                storage: false,
                readWriteStorage: false,
                bytes: 16,
            },
            baseFormat: 'astc-12x12-unorm',
            /*prettier-ignore*/ get bytesPerBlock() { return this.color.bytes; },
        },
    },
});
// Definitions for use locally.
// MAINTENANCE_TODO: Consider generating the exports below programmatically by filtering the big list, instead
// of using these local constants? Requires some type magic though.
/* prettier-ignore */ const kCompressedTextureFormatInfo = { ...kBCTextureFormatInfo, ...kETC2TextureFormatInfo, ...kASTCTextureFormatInfo };
/* prettier-ignore */ const kColorTextureFormatInfo = { ...kRegularTextureFormatInfo, ...kCompressedTextureFormatInfo };
/* prettier-ignore */ ({ ...kRegularTextureFormatInfo, ...kSizedDepthStencilFormatInfo });
/* prettier-ignore */ ({ ...kRegularTextureFormatInfo, ...kSizedDepthStencilFormatInfo});
/* prettier-ignore */ const kDepthStencilFormatInfo = { ...kSizedDepthStencilFormatInfo, ...kUnsizedDepthStencilFormatInfo };
/* prettier-ignore */ const kUncompressedTextureFormatInfo = { ...kRegularTextureFormatInfo, ...kSizedDepthStencilFormatInfo, ...kUnsizedDepthStencilFormatInfo };
/* prettier-ignore */ const kAllTextureFormatInfo = { ...kUncompressedTextureFormatInfo, ...kCompressedTextureFormatInfo };
/* prettier-ignore */ const kRegularTextureFormats = keysOf(kRegularTextureFormatInfo);
/* prettier-ignore */ const kColorTextureFormats = keysOf(kColorTextureFormatInfo);
/* prettier-ignore */ const kDepthStencilFormats = keysOf(kDepthStencilFormatInfo);
/* prettier-ignore */ const kAllTextureFormats = keysOf(kAllTextureFormatInfo);
/**
 * DO NOT EXPORT THIS - functions that need info from this table should use the appropriate
 * method for their needs.
 *
 * For a list of textures formats for test parameters there are:
 *
 * Lists of formats that might require features to be enabled
 * * kPossibleColorRenderableTextureFormats
 * * kPossibleStorageTextureFormats
 * * kPossibleReadWriteStorageTextureFormats
 * * kPossibleMultisampledTextureFormats
 *
 * Lists of formats that end in -srgb
 * * kDifferentBaseFormatTextureFormats  (includes compressed textures)
 * * kDifferentBaseFormatRegularTextureFormats (does not include compressed textures)
 *
 * Formats that require a feature to use at all (mostly compressed formats)
 * * kOptionalTextureFormats
 *
 * Misc
 * * kRegularTextureFormats
 * * kSizedDepthStencilFormats
 * * kUnsizedDepthStencilFormats
 * * kCompressedTextureFormats
 * * kUncompressedTextureFormats
 * * kColorTextureFormats - color formats including compressed and sint/uint
 * * kEncodableTextureFormats - formats that TexelView supports.
 * * kSizedTextureFormats - formats that have a known size (so not depth24plus ...)
 * * kDepthStencilFormats - depth, stencil, depth-stencil
 * * kDepthTextureFormats - depth and depth-stencil
 * * kStencilTextureFormats - stencil and depth-stencil
 * * kAllTextureFormats
 *
 * If one of the list above does not work, add a new one or to filter in beforeAllSubcases you generally want to use
 * You will not know if you can actually use a texture for the given use case until the test runs and has a device.
 *
 * * isTextureFormatPossiblyUsableAsRenderAttachment
 * * isTextureFormatPossiblyUsableAsColorRenderAttachment
 * * isTextureFormatPossiblyMultisampled
 * * isTextureFormatPossiblyStorageReadable
 * * isTextureFormatPossiblyStorageReadWritable
 * * isTextureFormatPossiblyFilterableAsTextureF32
 * * isTextureFormatPossiblyUsableWithCopyExternalImageToTexture
 *
 * These are also usable before or during a test
 *
 * * isColorTextureFormat
 * * isDepthTextureFormat
 * * isStencilTextureFormat
 * * isDepthOrStencilTextureFormat
 * * isEncodableTextureFormat
 * * isRegularTextureFormat
 * * isCompressedFloatTextureFormat
 * * isSintOrUintFormat
 *
 * To skip a test use the `skipIfXXX` tests in `GPUTest` if possible. Otherwise these functions
 * require a device to give a correct answer.
 *
 * * isTextureFormatUsableAsRenderAttachment
 * * isTextureFormatColorRenderable
 * * isTextureFormatResolvable
 * * isTextureFormatBlendable
 * * isTextureFormatMultisampled
 * * isTextureFormatUsableAsStorageTexture
 * * isTextureFormatUsableAsReadWriteStorageTexture
 * * isTextureFormatUsableAsStorageFormatInCreateShaderModule
 * * isTextureFormatUsableWithCopyExternalImageToTexture
 *
 * Per-GPUTextureFormat info.
 */
const kTextureFormatInfo = {
    ...kRegularTextureFormatInfo,
    ...kSizedDepthStencilFormatInfo,
    ...kUnsizedDepthStencilFormatInfo,
    ...kBCTextureFormatInfo,
    ...kETC2TextureFormatInfo,
    ...kASTCTextureFormatInfo,
};
// Depth texture formats including formats that also support stencil
[
    ...kDepthStencilFormats.filter(v => kTextureFormatInfo[v].depth),
];
// Stencil texture formats including formats that also support depth
kDepthStencilFormats.filter(v => kTextureFormatInfo[v].stencil);
const kTextureFormatTier1AllowsResolve = [
    'r8snorm',
    'rg8snorm',
    'rgba8snorm',
    'rg11b10ufloat',
];
const kTextureFormatTier1AllowsRenderAttachmentBlendableMultisample = [
    'r16unorm',
    'r16snorm',
    'rg16unorm',
    'rg16snorm',
    'rgba16unorm',
    'rgba16snorm',
    'r8snorm',
    'rg8snorm',
    'rgba8snorm',
    'rg11b10ufloat',
];
const kTextureFormatsTier1EnablesStorageReadOnlyWriteOnly = [
    'r8unorm',
    'r8snorm',
    'r8uint',
    'r8sint',
    'rg8unorm',
    'rg8snorm',
    'rg8uint',
    'rg8sint',
    'r16uint',
    'r16sint',
    'r16float',
    'rg16uint',
    'rg16sint',
    'rg16float',
    'rgb10a2uint',
    'rgb10a2unorm',
    'rg11b10ufloat',
];
const kTextureFormatsTier2EnablesStorageReadWrite = [
    'r8unorm',
    'r8uint',
    'r8sint',
    'rgba8unorm',
    'rgba8uint',
    'rgba8sint',
    'r16uint',
    'r16sint',
    'r16float',
    'rgba16uint',
    'rgba16sint',
    'rgba16float',
    'rgba32uint',
    'rgba32sint',
    'rgba32float',
];
// Texture formats that may possibly be used as a storage texture.
// Some may require certain features to be enabled.
const kPossibleStorageTextureFormats = [
    ...kRegularTextureFormats.filter(f => kTextureFormatInfo[f].color?.storage),
    'bgra8unorm',
    // these can be used as storage when texture-formats-tier1 is enabled
    ...kTextureFormatsTier1EnablesStorageReadOnlyWriteOnly,
];
// Texture formats that may possibly be used as a storage texture.
// Some may require certain features to be enabled.
[
    ...kPossibleStorageTextureFormats.filter(f => kTextureFormatInfo[f].color?.readWriteStorage),
    // these can be used as storage when texture-formats-tier2 is enabled
    ...kTextureFormatsTier2EnablesStorageReadWrite,
];
// Texture formats that may possibly be multisampled.
// Some may require certain features to be enabled.
[
    ...kRegularTextureFormats.filter(f => kTextureFormatInfo[f].multisample),
    ...kDepthStencilFormats.filter(f => kTextureFormatInfo[f].multisample),
];
// Texture formats that may possibly be color renderable.
// Some may require certain features to be enabled.
[
    ...kRegularTextureFormats.filter(f => kTextureFormatInfo[f].colorRender),
];
// Texture formats that have a different base format. This is effectively all -srgb formats
// including compressed formats.
kColorTextureFormats.filter(f => kTextureFormatInfo[f].baseFormat && kTextureFormatInfo[f].baseFormat !== f);
// "Regular" texture formats that have a different base format. This is effectively all -srgb formats
// except compressed formats.
kRegularTextureFormats.filter(f => kTextureFormatInfo[f].baseFormat && kTextureFormatInfo[f].baseFormat !== f);
// Textures formats that are optional
kAllTextureFormats.filter(t => kTextureFormatInfo[t].feature !== undefined);
function isSnormTextureFormat(format) {
    return format.endsWith('snorm');
}
/**
 * Returns true if a texture can be used with copyExternalImageToTexture.
 */
function isTextureFormatUsableWithCopyExternalImageToTexture(features, format) {
    return (isColorTextureFormat(format) &&
        !isSintOrUintFormat(format) &&
        !isCompressedTextureFormat(format) &&
        !isSnormTextureFormat(format) &&
        isTextureFormatColorRenderable(features, format));
}
//
// Other related stuff
//
const kDepthStencilFormatCapabilityInBufferTextureCopy = {
    // kUnsizedDepthStencilFormats
    depth24plus: {
        CopyB2T: [],
        CopyT2B: [],
        texelAspectSize: { 'depth-only': -1, 'stencil-only': -1 },
    },
    'depth24plus-stencil8': {
        CopyB2T: ['stencil-only'],
        CopyT2B: ['stencil-only'],
        texelAspectSize: { 'depth-only': -1, 'stencil-only': 1 },
    },
    // kSizedDepthStencilFormats
    depth16unorm: {
        CopyB2T: ['all', 'depth-only'],
        CopyT2B: ['all', 'depth-only'],
        texelAspectSize: { 'depth-only': 2, 'stencil-only': -1 },
    },
    depth32float: {
        CopyB2T: [],
        CopyT2B: ['all', 'depth-only'],
        texelAspectSize: { 'depth-only': 4, 'stencil-only': -1 },
    },
    'depth32float-stencil8': {
        CopyB2T: ['stencil-only'],
        CopyT2B: ['depth-only', 'stencil-only'],
        texelAspectSize: { 'depth-only': 4, 'stencil-only': 1 },
    },
    stencil8: {
        CopyB2T: ['all', 'stencil-only'],
        CopyT2B: ['all', 'stencil-only'],
        texelAspectSize: { 'depth-only': -1, 'stencil-only': 1 },
    },
};
/**
 * Gets all copyable aspects for copies between texture and buffer for specified depth/stencil format and copy type, by spec.
 */
function depthStencilFormatCopyableAspects(type, format) {
    const appliedType = type === 'WriteTexture' ? 'CopyB2T' : type;
    return kDepthStencilFormatCapabilityInBufferTextureCopy[format][appliedType];
}
/**
 * Computes whether a copy between a depth/stencil texture aspect and a buffer is supported, by spec.
 */
function depthStencilBufferTextureCopySupported(type, format, aspect) {
    const supportedAspects = depthStencilFormatCopyableAspects(type, format);
    return supportedAspects.includes(aspect);
}
/**
 * Gets the feature needed for a give texture format or undefined if none.
 */
function getRequiredFeatureForTextureFormat(format) {
    return kTextureFormatInfo[format].feature;
}
function getFeaturesForFormats(formats) {
    return Array.from(new Set(formats.map(f => (f ? kTextureFormatInfo[f].feature : undefined))));
}
function isTextureFormatTier1EnablesRenderAttachmentBlendableMultisample(format) {
    return kTextureFormatTier1AllowsRenderAttachmentBlendableMultisample.includes(format);
}
function isTextureFormatTier1EnablesResolve(format) {
    return kTextureFormatTier1AllowsResolve.includes(format);
}
function isTextureFormatTier1EnablesStorageReadOnlyWriteOnly(format) {
    return kTextureFormatsTier1EnablesStorageReadOnlyWriteOnly.includes(format);
}
function isTextureFormatTier2EnablesStorageReadWrite(format) {
    return kTextureFormatsTier2EnablesStorageReadWrite.includes(format);
}
function isCompressedTextureFormat(format) {
    return format in kCompressedTextureFormatInfo;
}
function isColorTextureFormat(format) {
    return !!kTextureFormatInfo[format].color;
}
function isDepthTextureFormat(format) {
    return !!kTextureFormatInfo[format].depth;
}
function isStencilTextureFormat(format) {
    return !!kTextureFormatInfo[format].stencil;
}
function isDepthOrStencilTextureFormat(format) {
    return isDepthTextureFormat(format) || isStencilTextureFormat(format);
}
/**
 * Returns if a texture can be used as a render attachment. some color formats and all
 * depth textures and stencil textures are usable with usage RENDER_ATTACHMENT.
 */
function isTextureFormatUsableAsRenderAttachment(features, format) {
    if (format === 'rg11b10ufloat') {
        return hasFeature(features, 'rg11b10ufloat-renderable');
    }
    if (isTextureFormatTier1EnablesRenderAttachmentBlendableMultisample(format)) {
        return hasFeature(features, 'texture-formats-tier1');
    }
    return !!(kTextureFormatInfo[format].colorRender || isDepthOrStencilTextureFormat(format));
}
/**
 * Returns if a texture can be used as a "colorAttachment".
 */
function isTextureFormatColorRenderable(features, format) {
    if (format === 'rg11b10ufloat') {
        return hasFeature(features, 'rg11b10ufloat-renderable');
    }
    if (isTextureFormatTier1EnablesRenderAttachmentBlendableMultisample(format)) {
        return hasFeature(features, 'texture-formats-tier1');
    }
    return !!kAllTextureFormatInfo[format].colorRender;
}
/**
 * Returns if a texture can be blended.
 */
function isTextureFormatBlendable(features, format) {
    if (!isTextureFormatColorRenderable(features, format)) {
        return false;
    }
    if (format === 'rg11b10ufloat') {
        return hasFeature(features, 'rg11b10ufloat-renderable');
    }
    if (is32Float(format)) {
        return hasFeature(features, 'float32-blendable');
    }
    return !!kAllTextureFormatInfo[format].colorRender?.blend;
}
/**
 * Returns true if a texture can be filtered.
 */
function isTextureFormatFilterable(features, format) {
    const type = getTextureFormatType(format);
    switch (type) {
        case 'float':
            return true;
        case 'unfilterable-float':
            assert(is32Float(format));
            return hasFeature(features, 'float32-filterable');
        default:
            return false;
    }
}
/**
 * Returns the texture's type (float, unsigned-float, sint, uint, depth)
 */
function getTextureFormatType(format, aspect = 'all') {
    const info = kTextureFormatInfo[format];
    let type;
    switch (aspect) {
        case 'all':
            type = info.color?.type ?? info.depth?.type ?? info.stencil?.type;
            break;
        case 'depth-only':
            type = info.depth?.type;
            break;
        case 'stencil-only':
            type = info.stencil?.type;
            break;
    }
    assert(!!type);
    return type;
}
function is32Float(format) {
    return format === 'r32float' || format === 'rg32float' || format === 'rgba32float';
}
const kCompatModeUnsupportedStorageTextureFormats = [
    'rg32float',
    'rg32sint',
    'rg32uint',
];
/**
 * Return true if the format can be used as a write only storage texture.
 * Note: Some formats can be compiled in a shader but can not be used
 * in a pipeline or elsewhere. This function returns whether or not the format
 * can be used in general. If you want to know if the format can used when compiling
 * a shader @see {@link isTextureFormatUsableAsStorageFormatInCreateShaderModule}
 */
function isTextureFormatUsableAsWriteOnlyStorageTexture(features, format) {
    if (isCompatibilityMode(features)) {
        if (kCompatModeUnsupportedStorageTextureFormats.indexOf(format) >= 0) {
            return false;
        }
    }
    if (format === 'bgra8unorm' && hasFeature(features, 'bgra8unorm-storage')) {
        return true;
    }
    if (isTextureFormatTier1EnablesStorageReadOnlyWriteOnly(format) &&
        hasFeature(features, 'texture-formats-tier1')) {
        return true;
    }
    const info = kTextureFormatInfo[format];
    return !!(info.color?.storage || info.depth?.storage || info.stencil?.storage);
}
/**
 * Return true if the format can be used with the given access mode
 * access can be either GPUStorageTextureAccess or WGSL access
 * Note: Some formats can be compiled in a shader but can not be used
 * in a pipeline or elsewhere. This function returns whether or not the format
 * can be used in general. If you want to know if the format can used when compiling
 * a shader @see {@link isTextureFormatUsableAsStorageFormatInCreateShaderModule}
 */
function isTextureFormatUsableWithStorageAccessMode(features, format, access) {
    switch (access) {
        case 'read':
        case 'read-only':
            return isTextureFormatUsableAsReadOnlyStorageTexture(features, format);
        case 'write':
        case 'write-only':
            return isTextureFormatUsableAsWriteOnlyStorageTexture(features, format);
        case 'read_write':
        case 'read-write':
            return isTextureFormatUsableAsReadWriteStorageTexture(features, format);
    }
}
/**
 * Return true if the format can be used as a read only storage texture.
 * Note: Some formats can be compiled in a shader but can not be used
 * in a pipeline or elsewhere. This function returns whether or not the format
 * can be used in general. If you want to know if the format can used when compiling
 * a shader @see {@link isTextureFormatUsableAsStorageFormatInCreateShaderModule}
 */
function isTextureFormatUsableAsReadOnlyStorageTexture(features, format) {
    // This is the only storage texture format that isn't readable as a storage format.
    if (format === 'bgra8unorm') {
        return false;
    }
    // All other formats that can be used as a storage texture can be used as
    // both read-only and write-only.
    return isTextureFormatUsableAsWriteOnlyStorageTexture(features, format);
}
function isTextureFormatUsableAsReadWriteStorageTexture(features, format) {
    if (isTextureFormatTier2EnablesStorageReadWrite(format)) {
        return hasFeature(features, 'texture-formats-tier2');
    }
    return !!kTextureFormatInfo[format].color?.readWriteStorage;
}
/**
 * Returns true if format is sint or uint
 */
function isSintOrUintFormat(format) {
    const info = kTextureFormatInfo[format];
    const type = info.color?.type ?? info.depth?.type ?? info.stencil?.type;
    return type === 'sint' || type === 'uint';
}
/**
 * Returns true if format can be multisampled.
 */
const kCompatModeUnsupportedMultisampledTextureFormats = [
    'r8uint',
    'r8sint',
    'rg8uint',
    'rg8sint',
    'rgba8uint',
    'rgba8sint',
    'r16uint',
    'r16sint',
    'rg16uint',
    'rg16sint',
    'rgba16uint',
    'rgba16sint',
    'rgb10a2uint',
    'rgba16float',
    'r32float',
];
/**
 * Returns true if you can make a multisampled texture from the given format.
 */
function isTextureFormatMultisampled(features, format) {
    if (isCompatibilityMode(features)) {
        if (kCompatModeUnsupportedMultisampledTextureFormats.indexOf(format) >= 0) {
            return false;
        }
    }
    if (format === 'rg11b10ufloat') {
        return hasFeature(features, 'rg11b10ufloat-renderable');
    }
    if (isTextureFormatTier1EnablesRenderAttachmentBlendableMultisample(format)) {
        return hasFeature(features, 'texture-formats-tier1');
    }
    return kAllTextureFormatInfo[format].multisample;
}
/**
 * Returns true if a texture can be "resolved". uint/sint formats can be multisampled but
 * can not be resolved.
 */
function isTextureFormatResolvable(features, format) {
    if (format === 'rg11b10ufloat') {
        return hasFeature(features, 'rg11b10ufloat-renderable');
    }
    if (isTextureFormatTier1EnablesResolve(format)) {
        return hasFeature(features, 'texture-formats-tier1');
    }
    // You can't resolve a non-multisampled format.
    if (!isTextureFormatMultisampled(features, format)) {
        return false;
    }
    const info = kAllTextureFormatInfo[format];
    return !!info.colorRender?.resolve;
}
// MAINTENANCE_TODD: See if we can remove this. This doesn't seem useful since
// formats are not on/off by feature. Some are on but a feature allows them to be
// used in more cases, like going from un-renderable to renderable, etc...
getFeaturesForFormats(kAllTextureFormats);

/**
 * For a given texture format, check if you can call `writeTexture`,
 * `copyBufferToTexture`, `copyTextureToBuffer`, and `copyTextureToTexture`
 */
function copySupported(features, type, format, aspect, sampleCount = 1) {
    if (isCompatibilityMode(features)) {
        if (sampleCount > 1 && type === 'CopyT2T') {
            return false;
        }
        if (isCompressedTextureFormat(format)) {
            return type === 'WriteTexture' || type === 'CopyB2T';
        }
    }
    if (isDepthOrStencilTextureFormat(format)) {
        switch (type) {
            case 'CopyT2T': {
                switch (format) {
                    case 'depth24plus':
                    case 'depth32float':
                        return false;
                    case 'depth24plus-stencil8':
                    case 'depth32float-stencil8':
                        return aspect === 'stencil-only';
                }
                break;
            }
            default:
                return depthStencilBufferTextureCopySupported(type, format, aspect);
        }
    }
    return sampleCount == 1 || type === 'CopyT2T';
}
function isTextureFormatSupported(features, format) {
    if (format === 'bgra8unorm-srgb') {
        if (isCompatibilityMode(features)) {
            return false;
        }
    }
    const feature = getRequiredFeatureForTextureFormat(format);
    return !feature || features.has(feature);
}
/**
 * Returns, for the given device, what features a texture supports.
 */
function getTextureSupportedFeatures(features, format) {
    const supported = isTextureFormatSupported(features, format);
    return {
        supported,
        multisample: supported && isTextureFormatMultisampled(features, format),
        resolvable: supported && isTextureFormatResolvable(features, format),
        blendable: supported && isTextureFormatBlendable(features, format),
        filterable: supported && isTextureFormatFilterable(features, format),
        colorRenderable: supported && isTextureFormatColorRenderable(features, format),
        renderAttachment: supported && isTextureFormatUsableAsRenderAttachment(features, format),
        copyExternalImageToTexture: supported && isTextureFormatUsableWithCopyExternalImageToTexture(features, format),
        storageReadOnly: supported && isTextureFormatUsableWithStorageAccessMode(features, format, 'read'),
        storageWriteOnly: supported && isTextureFormatUsableWithStorageAccessMode(features, format, 'write'),
        storageReadWrite: supported && isTextureFormatUsableWithStorageAccessMode(features, format, 'read-write'),
    };
}

export { copySupported, getTextureSupportedFeatures };
//# sourceMappingURL=webgpu-feature-detector.module.js.map
