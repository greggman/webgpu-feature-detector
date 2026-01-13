export declare const roundUpToMultipleOf: (v: number, multiple: number) => number;
export declare function keysOf<T extends string>(obj: {
    [k in T]: unknown;
}): readonly T[];
export declare function range<T>(count: number, fn: (i: number) => T): T[];
export declare function normalizeExtent3D(extent: GPUExtent3D): [number, number, number];
export declare function normalizeOrigin3D(origin?: GPUOrigin3D): [number, number, number];
export declare function addOrigin3D(a?: GPUOrigin3D, b?: GPUOrigin3D): [number, number, number];
export declare function hasFeature(features: GPUSupportedFeatures, feature: GPUFeatureName): boolean;
/** Round `n` up to the next multiple of `alignment` (inclusive). */
export declare function align(n: number, alignment: number): number;
/** Round `n` down to the next multiple of `alignment` (inclusive). */
export declare function roundDown(n: number, alignment: number): number;
export declare function isCompatibilityMode(features: GPUSupportedFeatures): boolean;
/**
 * Get texture dimension from view dimension in order to create an compatible texture for a given
 * view dimension.
 */
export declare function getTextureDimensionFromView(viewDimension: GPUTextureViewDimension): "1d" | "2d" | "3d";
