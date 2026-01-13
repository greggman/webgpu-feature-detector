import { ImageCopyType } from './format_info.js';
type TextureSupportedFeatures = {
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
 * For a given texture format, check if you can call `writeTexture`,
 * `copyBufferToTexture`, `copyTextureToBuffer`, and `copyTextureToTexture`
 */
export declare function copySupported(features: GPUSupportedFeatures, type: ImageCopyType | 'CopyT2T', format: GPUTextureFormat, aspect: GPUTextureAspect, sampleCount?: number): boolean;
/**
 * Returns, for the given device, what features a texture supports.
 */
export declare function getTextureSupportedFeatures(features: GPUSupportedFeatures, format: GPUTextureFormat): TextureSupportedFeatures;
export {};
