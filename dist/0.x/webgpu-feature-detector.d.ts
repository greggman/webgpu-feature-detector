import { ImageCopyType } from './format_info.js';
export { ImageCopyType, };
/**
 * Features supported by a texture format.
 */
export type TextureSupportedFeatures = {
    supported: boolean;
    multisample: boolean;
    resolvable: boolean;
    blendable: boolean;
    filterable: boolean;
    colorRenderable: boolean;
    renderAttachment: boolean;
    copyExternalImageToTexture: boolean;
    storageReadOnly: boolean;
    storageWriteOnly: boolean;
    storageReadWrite: boolean;
};
/**
 * Returns the size of a block for a given texture format
 * For a depth-stencil format it return the size of the depth aspect
 * unless you specify the stencil-only aspect.
 */
export declare function getBlockInfoForTextureFormat(format: GPUTextureFormat, aspect?: GPUTextureAspect): {
    blockWidth: 1 | 4 | 8 | 5 | 6 | 10 | 12;
    blockHeight: 1 | 4 | 8 | 5 | 6 | 10 | 12;
    bytesPerBlock: 1 | 2 | 4 | 8 | 16 | undefined;
} | {
    blockWidth: number;
    blockHeight: number;
};
/**
 * For a given texture format, check if you can call `writeTexture`,
 * `copyBufferToTexture`, `copyTextureToBuffer`, and `copyTextureToTexture`
 */
export declare function copySupported(features: GPUSupportedFeatures, type: ImageCopyType | 'CopyT2T', format: GPUTextureFormat, aspect: GPUTextureAspect, sampleCount?: number): boolean;
/**
 * Returns, for the given device, what features a texture supports.
 */
export declare function getTextureSupportedFeatures(features: GPUSupportedFeatures, format: GPUTextureFormat): TextureSupportedFeatures;
