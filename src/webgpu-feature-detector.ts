import {
  isTextureFormatBlendable,
  isTextureFormatColorRenderable,
  isTextureFormatFilterable,
  isTextureFormatMultisampled,
  isTextureFormatResolvable,
  isTextureFormatUsableAsRenderAttachment,
  isTextureFormatUsableWithCopyExternalImageToTexture,
  isTextureFormatUsableWithStorageAccessMode,
  isCompressedTextureFormat,
  depthStencilBufferTextureCopySupported,
  getRequiredFeatureForTextureFormat,
  isDepthOrStencilTextureFormat,
  ImageCopyType,
  DepthStencilFormat,
 //ColorTextureFormat,
 //SizedTextureFormat,
 //UncompressedTextureFormat,
 //kColorTextureFormats,
 //kSizedTextureFormats,
 //kDepthStencilFormats,
 //kUncompressedTextureFormats,
 //kAllTextureFormats,
  getBlockInfoForTextureFormat as getBlockInfoForTextureFormatImpl,
} from './format_info.js';
import { isCompatibilityMode } from './utils.js';

export {
  ImageCopyType,
  //ColorTextureFormat,
  //SizedTextureFormat,
  //DepthStencilFormat,
  //UncompressedTextureFormat,
  //kColorTextureFormats,
  //kSizedTextureFormats,
  //kDepthStencilFormats,
  //kUncompressedTextureFormats,
  //kAllTextureFormats,
};

/**
 * Features supported by a texture format.
 */
export type TextureSupportedFeatures = {
  supported: boolean,  // if this is false all others will be false
  multisample: boolean,
  resolvable: boolean,  // not all multisampled textures can be resolved. Example: sint/uint textures
  blendable: boolean,
  filterable: boolean,
  colorRenderable: boolean,  // can be used as a color render attachment
  renderAttachment: boolean,  // can be used as one or more of color OR depth OR depth-stencil attachment
  copyExternalImageToTexture: boolean,
  storageReadOnly: boolean,
  storageWriteOnly: boolean,
  storageReadWrite: boolean,
};

/**
 * Returns the size of a block for a given texture format
 * For a depth-stencil format it return the size of the depth aspect
 * unless you specify the stencil-only aspect.
 */
export function getBlockInfoForTextureFormat(format: GPUTextureFormat, aspect: GPUTextureAspect = 'all') {
  if (aspect === 'stencil-only') {
    format = 'stencil8';
  } else if (format === 'depth24plus' || format === 'depth24plus-stencil8') {
    return { blockWidth: 1, blockHeight: 1 };
  }
  return getBlockInfoForTextureFormatImpl(format);
}

/**
 * For a given texture format, check if you can call `writeTexture`,
 * `copyBufferToTexture`, `copyTextureToBuffer`, and `copyTextureToTexture`
 */
export function copySupported(
  features: GPUSupportedFeatures,
  type: ImageCopyType | 'CopyT2T',
  format: GPUTextureFormat,
  aspect: GPUTextureAspect,
  sampleCount = 1,
) {
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
        return depthStencilBufferTextureCopySupported(type, format as DepthStencilFormat, aspect);
    }
  }
  return sampleCount == 1 || type === 'CopyT2T';
}

function isTextureFormatSupported(features: GPUSupportedFeatures, format: GPUTextureFormat) {
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
export function getTextureSupportedFeatures(features: GPUSupportedFeatures, format: GPUTextureFormat) : TextureSupportedFeatures {
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

