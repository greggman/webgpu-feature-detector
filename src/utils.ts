export const roundUpToMultipleOf = (v: number, multiple: number) => (((v + multiple - 1) / multiple) | 0) * multiple;

export function keysOf<T extends string>(obj: { [k in T]: unknown }): readonly T[] {
  return (Object.keys(obj) as unknown[]) as T[];
}

export function range<T>(count: number, fn: (i: number) => T) {
    return new Array(count).fill(0).map((_, i) => fn(i));
}

const isIterable = (v: any) =>
  v !== null && typeof v[Symbol.iterator] === 'function';

export function normalizeExtent3D(extent: GPUExtent3D): [number, number, number] {
  if (!extent) {
    return [1, 1, 1];
  }
  if (isIterable(extent)) {
    const [w, h = 1, d = 1] = [...extent as number[]];
    return [w, h, d];
  }
  const { width = 1, height = 1, depthOrArrayLayers = 1 } = extent as GPUExtent3DDict;
  return [width, height, depthOrArrayLayers];
}

export function normalizeOrigin3D(origin?: GPUOrigin3D): [number, number, number] {
  if (!origin) {
    return [0, 0, 0];
  }
  if (isIterable(origin)) {
    const [x, y = 0, z = 0] = [...origin as number[]];
    return [x, y, z];
  }
  const { x = 0, y = 0, z = 0 } = origin as GPUOrigin3DDict;
  return [x, y, z];
}

export function addOrigin3D(a?: GPUOrigin3D, b?: GPUOrigin3D): [number, number, number] {
  const an = normalizeOrigin3D(a);
  const bn = normalizeOrigin3D(b);
  return an.map((v, i) => v + bn[i]) as [number, number, number];
}

export function hasFeature(features: GPUSupportedFeatures, feature: GPUFeatureName) {
  // eslint-disable-next-line no-restricted-syntax
  return features.has(feature);
}

/** Round `n` up to the next multiple of `alignment` (inclusive). */
export function align(n: number, alignment: number): number {
  return Math.ceil(n / alignment) * alignment;
}

/** Round `n` down to the next multiple of `alignment` (inclusive). */
export function roundDown(n: number, alignment: number): number {
  return Math.floor(n / alignment) * alignment;
}

export function isCompatibilityMode(features: GPUSupportedFeatures) {
  return !features.has('core-features-and-limits');
}

/**
 * Get texture dimension from view dimension in order to create an compatible texture for a given
 * view dimension.
 */
export function getTextureDimensionFromView(viewDimension: GPUTextureViewDimension) {
  switch (viewDimension) {
    case '1d':
      return '1d';
    case '2d':
    case '2d-array':
    case 'cube':
    case 'cube-array':
      return '2d';
    case '3d':
      return '3d';
    default:
      throw new Error('bad view dimension');
  }
}