export declare function unreachable(msg?: string): never;
export type ImageCopyType = 'WriteTexture' | 'CopyB2T' | 'CopyT2B';
export declare const kImageCopyTypes: readonly ImageCopyType[];
/** "plain color formats", plus rgb9e5ufloat. */
declare const kRegularTextureFormatInfo: {
    readonly r8unorm: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 1;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: true;
            readonly resolve: true;
            readonly byteCost: 1;
            readonly alignment: 1;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 1;
    };
    readonly r8snorm: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 1;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 1;
    };
    readonly r8uint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "uint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 1;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 1;
            readonly alignment: 1;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 1;
    };
    readonly r8sint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "sint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 1;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 1;
            readonly alignment: 1;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 1;
    };
    readonly rg8unorm: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 2;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: true;
            readonly resolve: true;
            readonly byteCost: 2;
            readonly alignment: 1;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 2;
    };
    readonly rg8snorm: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 2;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 2;
    };
    readonly rg8uint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "uint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 2;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 2;
            readonly alignment: 1;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 2;
    };
    readonly rg8sint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "sint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 2;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 2;
            readonly alignment: 1;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 2;
    };
    readonly rgba8unorm: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: true;
            readonly resolve: true;
            readonly byteCost: 8;
            readonly alignment: 1;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: "rgba8unorm";
        readonly bytesPerBlock: 4;
    };
    readonly 'rgba8unorm-srgb': {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: true;
            readonly resolve: true;
            readonly byteCost: 8;
            readonly alignment: 1;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: "rgba8unorm";
        readonly bytesPerBlock: 4;
    };
    readonly rgba8snorm: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 4;
    };
    readonly rgba8uint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "uint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 4;
            readonly alignment: 1;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 4;
    };
    readonly rgba8sint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "sint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 4;
            readonly alignment: 1;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 4;
    };
    readonly bgra8unorm: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: true;
            readonly resolve: true;
            readonly byteCost: 8;
            readonly alignment: 1;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: "bgra8unorm";
        readonly bytesPerBlock: 4;
    };
    readonly 'bgra8unorm-srgb': {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: true;
            readonly resolve: true;
            readonly byteCost: 8;
            readonly alignment: 1;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: "bgra8unorm";
        readonly bytesPerBlock: 4;
    };
    readonly r16unorm: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 2;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: true;
            readonly resolve: false;
            readonly byteCost: 2;
            readonly alignment: 2;
        };
        readonly multisample: true;
        readonly feature: "texture-formats-tier1";
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 2;
    };
    readonly r16snorm: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 2;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: true;
            readonly resolve: false;
            readonly byteCost: 2;
            readonly alignment: 2;
        };
        readonly multisample: true;
        readonly feature: "texture-formats-tier1";
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 2;
    };
    readonly r16uint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "uint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 2;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 2;
            readonly alignment: 2;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 2;
    };
    readonly r16sint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "sint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 2;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 2;
            readonly alignment: 2;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 2;
    };
    readonly r16float: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 2;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: true;
            readonly resolve: true;
            readonly byteCost: 2;
            readonly alignment: 2;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 2;
    };
    readonly rg16unorm: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: true;
            readonly resolve: false;
            readonly byteCost: 4;
            readonly alignment: 2;
        };
        readonly multisample: true;
        readonly feature: "texture-formats-tier1";
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 4;
    };
    readonly rg16snorm: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: true;
            readonly resolve: false;
            readonly byteCost: 4;
            readonly alignment: 2;
        };
        readonly multisample: true;
        readonly feature: "texture-formats-tier1";
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 4;
    };
    readonly rg16uint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "uint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 4;
            readonly alignment: 2;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 4;
    };
    readonly rg16sint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "sint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 4;
            readonly alignment: 2;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 4;
    };
    readonly rg16float: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: true;
            readonly resolve: true;
            readonly byteCost: 4;
            readonly alignment: 2;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 4;
    };
    readonly rgba16unorm: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 8;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: true;
            readonly resolve: false;
            readonly byteCost: 8;
            readonly alignment: 4;
        };
        readonly multisample: true;
        readonly feature: "texture-formats-tier1";
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 8;
    };
    readonly rgba16snorm: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 8;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: true;
            readonly resolve: false;
            readonly byteCost: 8;
            readonly alignment: 2;
        };
        readonly multisample: true;
        readonly feature: "texture-formats-tier1";
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 8;
    };
    readonly rgba16uint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "uint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 8;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 8;
            readonly alignment: 2;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 8;
    };
    readonly rgba16sint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "sint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 8;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 8;
            readonly alignment: 2;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 8;
    };
    readonly rgba16float: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 8;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: true;
            readonly resolve: true;
            readonly byteCost: 8;
            readonly alignment: 2;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 8;
    };
    readonly r32uint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "uint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: true;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 4;
            readonly alignment: 4;
        };
        readonly multisample: false;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 4;
    };
    readonly r32sint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "sint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: true;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 4;
            readonly alignment: 4;
        };
        readonly multisample: false;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 4;
    };
    readonly r32float: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "unfilterable-float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: true;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 4;
            readonly alignment: 4;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 4;
    };
    readonly rg32uint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "uint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 8;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 8;
            readonly alignment: 4;
        };
        readonly multisample: false;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 8;
    };
    readonly rg32sint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "sint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 8;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 8;
            readonly alignment: 4;
        };
        readonly multisample: false;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 8;
    };
    readonly rg32float: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "unfilterable-float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 8;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 8;
            readonly alignment: 4;
        };
        readonly multisample: false;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 8;
    };
    readonly rgba32uint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "uint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 16;
            readonly alignment: 4;
        };
        readonly multisample: false;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 16;
    };
    readonly rgba32sint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "sint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 16;
            readonly alignment: 4;
        };
        readonly multisample: false;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 16;
    };
    readonly rgba32float: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "unfilterable-float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 16;
            readonly alignment: 4;
        };
        readonly multisample: false;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 16;
    };
    readonly rgb10a2uint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "uint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 8;
            readonly alignment: 4;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 4;
    };
    readonly rgb10a2unorm: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: true;
            readonly resolve: true;
            readonly byteCost: 8;
            readonly alignment: 4;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 4;
    };
    readonly rg11b10ufloat: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: true;
            readonly resolve: true;
            readonly byteCost: 8;
            readonly alignment: 4;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 4;
    };
    readonly rgb9e5ufloat: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 4;
    };
};
declare const kSizedDepthStencilFormatInfo: {
    readonly stencil8: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: undefined;
        readonly depth: undefined;
        readonly stencil: {
            readonly type: "uint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 1;
        };
        readonly colorRender: undefined;
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 1;
    };
    readonly depth16unorm: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: undefined;
        readonly depth: {
            readonly type: "depth";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 2;
        };
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 2;
    };
    readonly depth32float: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: undefined;
        readonly depth: {
            readonly type: "depth";
            readonly copySrc: true;
            readonly copyDst: false;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 4;
        };
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 4;
    };
};
declare const kUnsizedDepthStencilFormatInfo: {
    readonly depth24plus: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: undefined;
        readonly depth: {
            readonly type: "depth";
            readonly copySrc: false;
            readonly copyDst: false;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: undefined;
        };
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: undefined;
    };
    readonly 'depth24plus-stencil8': {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: undefined;
        readonly depth: {
            readonly type: "depth";
            readonly copySrc: false;
            readonly copyDst: false;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: undefined;
        };
        readonly stencil: {
            readonly type: "uint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 1;
        };
        readonly colorRender: undefined;
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: undefined;
    };
    readonly 'depth32float-stencil8': {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: undefined;
        readonly depth: {
            readonly type: "depth";
            readonly copySrc: true;
            readonly copyDst: false;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 4;
        };
        readonly stencil: {
            readonly type: "uint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 1;
        };
        readonly colorRender: undefined;
        readonly multisample: true;
        readonly feature: "depth32float-stencil8";
        readonly baseFormat: undefined;
        readonly bytesPerBlock: undefined;
    };
};
declare const kCompressedTextureFormatInfo: {
    readonly 'astc-4x4-unorm': {
        readonly blockWidth: 4;
        readonly blockHeight: 4;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-astc";
        readonly baseFormat: "astc-4x4-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'astc-4x4-unorm-srgb': {
        readonly blockWidth: 4;
        readonly blockHeight: 4;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-astc";
        readonly baseFormat: "astc-4x4-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'astc-5x4-unorm': {
        readonly blockWidth: 5;
        readonly blockHeight: 4;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-astc";
        readonly baseFormat: "astc-5x4-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'astc-5x4-unorm-srgb': {
        readonly blockWidth: 5;
        readonly blockHeight: 4;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-astc";
        readonly baseFormat: "astc-5x4-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'astc-5x5-unorm': {
        readonly blockWidth: 5;
        readonly blockHeight: 5;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-astc";
        readonly baseFormat: "astc-5x5-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'astc-5x5-unorm-srgb': {
        readonly blockWidth: 5;
        readonly blockHeight: 5;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-astc";
        readonly baseFormat: "astc-5x5-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'astc-6x5-unorm': {
        readonly blockWidth: 6;
        readonly blockHeight: 5;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-astc";
        readonly baseFormat: "astc-6x5-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'astc-6x5-unorm-srgb': {
        readonly blockWidth: 6;
        readonly blockHeight: 5;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-astc";
        readonly baseFormat: "astc-6x5-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'astc-6x6-unorm': {
        readonly blockWidth: 6;
        readonly blockHeight: 6;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-astc";
        readonly baseFormat: "astc-6x6-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'astc-6x6-unorm-srgb': {
        readonly blockWidth: 6;
        readonly blockHeight: 6;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-astc";
        readonly baseFormat: "astc-6x6-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'astc-8x5-unorm': {
        readonly blockWidth: 8;
        readonly blockHeight: 5;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-astc";
        readonly baseFormat: "astc-8x5-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'astc-8x5-unorm-srgb': {
        readonly blockWidth: 8;
        readonly blockHeight: 5;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-astc";
        readonly baseFormat: "astc-8x5-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'astc-8x6-unorm': {
        readonly blockWidth: 8;
        readonly blockHeight: 6;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-astc";
        readonly baseFormat: "astc-8x6-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'astc-8x6-unorm-srgb': {
        readonly blockWidth: 8;
        readonly blockHeight: 6;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-astc";
        readonly baseFormat: "astc-8x6-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'astc-8x8-unorm': {
        readonly blockWidth: 8;
        readonly blockHeight: 8;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-astc";
        readonly baseFormat: "astc-8x8-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'astc-8x8-unorm-srgb': {
        readonly blockWidth: 8;
        readonly blockHeight: 8;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-astc";
        readonly baseFormat: "astc-8x8-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'astc-10x5-unorm': {
        readonly blockWidth: 10;
        readonly blockHeight: 5;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-astc";
        readonly baseFormat: "astc-10x5-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'astc-10x5-unorm-srgb': {
        readonly blockWidth: 10;
        readonly blockHeight: 5;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-astc";
        readonly baseFormat: "astc-10x5-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'astc-10x6-unorm': {
        readonly blockWidth: 10;
        readonly blockHeight: 6;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-astc";
        readonly baseFormat: "astc-10x6-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'astc-10x6-unorm-srgb': {
        readonly blockWidth: 10;
        readonly blockHeight: 6;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-astc";
        readonly baseFormat: "astc-10x6-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'astc-10x8-unorm': {
        readonly blockWidth: 10;
        readonly blockHeight: 8;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-astc";
        readonly baseFormat: "astc-10x8-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'astc-10x8-unorm-srgb': {
        readonly blockWidth: 10;
        readonly blockHeight: 8;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-astc";
        readonly baseFormat: "astc-10x8-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'astc-10x10-unorm': {
        readonly blockWidth: 10;
        readonly blockHeight: 10;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-astc";
        readonly baseFormat: "astc-10x10-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'astc-10x10-unorm-srgb': {
        readonly blockWidth: 10;
        readonly blockHeight: 10;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-astc";
        readonly baseFormat: "astc-10x10-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'astc-12x10-unorm': {
        readonly blockWidth: 12;
        readonly blockHeight: 10;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-astc";
        readonly baseFormat: "astc-12x10-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'astc-12x10-unorm-srgb': {
        readonly blockWidth: 12;
        readonly blockHeight: 10;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-astc";
        readonly baseFormat: "astc-12x10-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'astc-12x12-unorm': {
        readonly blockWidth: 12;
        readonly blockHeight: 12;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-astc";
        readonly baseFormat: "astc-12x12-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'astc-12x12-unorm-srgb': {
        readonly blockWidth: 12;
        readonly blockHeight: 12;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-astc";
        readonly baseFormat: "astc-12x12-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'etc2-rgb8unorm': {
        readonly blockWidth: 4;
        readonly blockHeight: 4;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 8;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-etc2";
        readonly baseFormat: "etc2-rgb8unorm";
        readonly bytesPerBlock: 8;
    };
    readonly 'etc2-rgb8unorm-srgb': {
        readonly blockWidth: 4;
        readonly blockHeight: 4;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 8;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-etc2";
        readonly baseFormat: "etc2-rgb8unorm";
        readonly bytesPerBlock: 8;
    };
    readonly 'etc2-rgb8a1unorm': {
        readonly blockWidth: 4;
        readonly blockHeight: 4;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 8;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-etc2";
        readonly baseFormat: "etc2-rgb8a1unorm";
        readonly bytesPerBlock: 8;
    };
    readonly 'etc2-rgb8a1unorm-srgb': {
        readonly blockWidth: 4;
        readonly blockHeight: 4;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 8;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-etc2";
        readonly baseFormat: "etc2-rgb8a1unorm";
        readonly bytesPerBlock: 8;
    };
    readonly 'etc2-rgba8unorm': {
        readonly blockWidth: 4;
        readonly blockHeight: 4;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-etc2";
        readonly baseFormat: "etc2-rgba8unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'etc2-rgba8unorm-srgb': {
        readonly blockWidth: 4;
        readonly blockHeight: 4;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-etc2";
        readonly baseFormat: "etc2-rgba8unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'eac-r11unorm': {
        readonly blockWidth: 4;
        readonly blockHeight: 4;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 8;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-etc2";
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 8;
    };
    readonly 'eac-r11snorm': {
        readonly blockWidth: 4;
        readonly blockHeight: 4;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 8;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-etc2";
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 8;
    };
    readonly 'eac-rg11unorm': {
        readonly blockWidth: 4;
        readonly blockHeight: 4;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-etc2";
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 16;
    };
    readonly 'eac-rg11snorm': {
        readonly blockWidth: 4;
        readonly blockHeight: 4;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-etc2";
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 16;
    };
    readonly 'bc1-rgba-unorm': {
        readonly blockWidth: 4;
        readonly blockHeight: 4;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 8;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-bc";
        readonly baseFormat: "bc1-rgba-unorm";
        readonly bytesPerBlock: 8;
    };
    readonly 'bc1-rgba-unorm-srgb': {
        readonly blockWidth: 4;
        readonly blockHeight: 4;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 8;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-bc";
        readonly baseFormat: "bc1-rgba-unorm";
        readonly bytesPerBlock: 8;
    };
    readonly 'bc2-rgba-unorm': {
        readonly blockWidth: 4;
        readonly blockHeight: 4;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-bc";
        readonly baseFormat: "bc2-rgba-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'bc2-rgba-unorm-srgb': {
        readonly blockWidth: 4;
        readonly blockHeight: 4;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-bc";
        readonly baseFormat: "bc2-rgba-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'bc3-rgba-unorm': {
        readonly blockWidth: 4;
        readonly blockHeight: 4;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-bc";
        readonly baseFormat: "bc3-rgba-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'bc3-rgba-unorm-srgb': {
        readonly blockWidth: 4;
        readonly blockHeight: 4;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-bc";
        readonly baseFormat: "bc3-rgba-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'bc4-r-unorm': {
        readonly blockWidth: 4;
        readonly blockHeight: 4;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 8;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-bc";
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 8;
    };
    readonly 'bc4-r-snorm': {
        readonly blockWidth: 4;
        readonly blockHeight: 4;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 8;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-bc";
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 8;
    };
    readonly 'bc5-rg-unorm': {
        readonly blockWidth: 4;
        readonly blockHeight: 4;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-bc";
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 16;
    };
    readonly 'bc5-rg-snorm': {
        readonly blockWidth: 4;
        readonly blockHeight: 4;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-bc";
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 16;
    };
    readonly 'bc6h-rgb-ufloat': {
        readonly blockWidth: 4;
        readonly blockHeight: 4;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-bc";
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 16;
    };
    readonly 'bc6h-rgb-float': {
        readonly blockWidth: 4;
        readonly blockHeight: 4;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-bc";
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 16;
    };
    readonly 'bc7-rgba-unorm': {
        readonly blockWidth: 4;
        readonly blockHeight: 4;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-bc";
        readonly baseFormat: "bc7-rgba-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'bc7-rgba-unorm-srgb': {
        readonly blockWidth: 4;
        readonly blockHeight: 4;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-bc";
        readonly baseFormat: "bc7-rgba-unorm";
        readonly bytesPerBlock: 16;
    };
};
declare const kColorTextureFormatInfo: {
    readonly 'astc-4x4-unorm': {
        readonly blockWidth: 4;
        readonly blockHeight: 4;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-astc";
        readonly baseFormat: "astc-4x4-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'astc-4x4-unorm-srgb': {
        readonly blockWidth: 4;
        readonly blockHeight: 4;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-astc";
        readonly baseFormat: "astc-4x4-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'astc-5x4-unorm': {
        readonly blockWidth: 5;
        readonly blockHeight: 4;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-astc";
        readonly baseFormat: "astc-5x4-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'astc-5x4-unorm-srgb': {
        readonly blockWidth: 5;
        readonly blockHeight: 4;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-astc";
        readonly baseFormat: "astc-5x4-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'astc-5x5-unorm': {
        readonly blockWidth: 5;
        readonly blockHeight: 5;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-astc";
        readonly baseFormat: "astc-5x5-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'astc-5x5-unorm-srgb': {
        readonly blockWidth: 5;
        readonly blockHeight: 5;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-astc";
        readonly baseFormat: "astc-5x5-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'astc-6x5-unorm': {
        readonly blockWidth: 6;
        readonly blockHeight: 5;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-astc";
        readonly baseFormat: "astc-6x5-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'astc-6x5-unorm-srgb': {
        readonly blockWidth: 6;
        readonly blockHeight: 5;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-astc";
        readonly baseFormat: "astc-6x5-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'astc-6x6-unorm': {
        readonly blockWidth: 6;
        readonly blockHeight: 6;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-astc";
        readonly baseFormat: "astc-6x6-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'astc-6x6-unorm-srgb': {
        readonly blockWidth: 6;
        readonly blockHeight: 6;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-astc";
        readonly baseFormat: "astc-6x6-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'astc-8x5-unorm': {
        readonly blockWidth: 8;
        readonly blockHeight: 5;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-astc";
        readonly baseFormat: "astc-8x5-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'astc-8x5-unorm-srgb': {
        readonly blockWidth: 8;
        readonly blockHeight: 5;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-astc";
        readonly baseFormat: "astc-8x5-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'astc-8x6-unorm': {
        readonly blockWidth: 8;
        readonly blockHeight: 6;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-astc";
        readonly baseFormat: "astc-8x6-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'astc-8x6-unorm-srgb': {
        readonly blockWidth: 8;
        readonly blockHeight: 6;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-astc";
        readonly baseFormat: "astc-8x6-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'astc-8x8-unorm': {
        readonly blockWidth: 8;
        readonly blockHeight: 8;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-astc";
        readonly baseFormat: "astc-8x8-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'astc-8x8-unorm-srgb': {
        readonly blockWidth: 8;
        readonly blockHeight: 8;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-astc";
        readonly baseFormat: "astc-8x8-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'astc-10x5-unorm': {
        readonly blockWidth: 10;
        readonly blockHeight: 5;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-astc";
        readonly baseFormat: "astc-10x5-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'astc-10x5-unorm-srgb': {
        readonly blockWidth: 10;
        readonly blockHeight: 5;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-astc";
        readonly baseFormat: "astc-10x5-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'astc-10x6-unorm': {
        readonly blockWidth: 10;
        readonly blockHeight: 6;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-astc";
        readonly baseFormat: "astc-10x6-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'astc-10x6-unorm-srgb': {
        readonly blockWidth: 10;
        readonly blockHeight: 6;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-astc";
        readonly baseFormat: "astc-10x6-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'astc-10x8-unorm': {
        readonly blockWidth: 10;
        readonly blockHeight: 8;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-astc";
        readonly baseFormat: "astc-10x8-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'astc-10x8-unorm-srgb': {
        readonly blockWidth: 10;
        readonly blockHeight: 8;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-astc";
        readonly baseFormat: "astc-10x8-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'astc-10x10-unorm': {
        readonly blockWidth: 10;
        readonly blockHeight: 10;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-astc";
        readonly baseFormat: "astc-10x10-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'astc-10x10-unorm-srgb': {
        readonly blockWidth: 10;
        readonly blockHeight: 10;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-astc";
        readonly baseFormat: "astc-10x10-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'astc-12x10-unorm': {
        readonly blockWidth: 12;
        readonly blockHeight: 10;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-astc";
        readonly baseFormat: "astc-12x10-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'astc-12x10-unorm-srgb': {
        readonly blockWidth: 12;
        readonly blockHeight: 10;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-astc";
        readonly baseFormat: "astc-12x10-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'astc-12x12-unorm': {
        readonly blockWidth: 12;
        readonly blockHeight: 12;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-astc";
        readonly baseFormat: "astc-12x12-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'astc-12x12-unorm-srgb': {
        readonly blockWidth: 12;
        readonly blockHeight: 12;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-astc";
        readonly baseFormat: "astc-12x12-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'etc2-rgb8unorm': {
        readonly blockWidth: 4;
        readonly blockHeight: 4;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 8;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-etc2";
        readonly baseFormat: "etc2-rgb8unorm";
        readonly bytesPerBlock: 8;
    };
    readonly 'etc2-rgb8unorm-srgb': {
        readonly blockWidth: 4;
        readonly blockHeight: 4;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 8;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-etc2";
        readonly baseFormat: "etc2-rgb8unorm";
        readonly bytesPerBlock: 8;
    };
    readonly 'etc2-rgb8a1unorm': {
        readonly blockWidth: 4;
        readonly blockHeight: 4;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 8;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-etc2";
        readonly baseFormat: "etc2-rgb8a1unorm";
        readonly bytesPerBlock: 8;
    };
    readonly 'etc2-rgb8a1unorm-srgb': {
        readonly blockWidth: 4;
        readonly blockHeight: 4;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 8;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-etc2";
        readonly baseFormat: "etc2-rgb8a1unorm";
        readonly bytesPerBlock: 8;
    };
    readonly 'etc2-rgba8unorm': {
        readonly blockWidth: 4;
        readonly blockHeight: 4;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-etc2";
        readonly baseFormat: "etc2-rgba8unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'etc2-rgba8unorm-srgb': {
        readonly blockWidth: 4;
        readonly blockHeight: 4;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-etc2";
        readonly baseFormat: "etc2-rgba8unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'eac-r11unorm': {
        readonly blockWidth: 4;
        readonly blockHeight: 4;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 8;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-etc2";
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 8;
    };
    readonly 'eac-r11snorm': {
        readonly blockWidth: 4;
        readonly blockHeight: 4;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 8;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-etc2";
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 8;
    };
    readonly 'eac-rg11unorm': {
        readonly blockWidth: 4;
        readonly blockHeight: 4;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-etc2";
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 16;
    };
    readonly 'eac-rg11snorm': {
        readonly blockWidth: 4;
        readonly blockHeight: 4;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-etc2";
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 16;
    };
    readonly 'bc1-rgba-unorm': {
        readonly blockWidth: 4;
        readonly blockHeight: 4;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 8;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-bc";
        readonly baseFormat: "bc1-rgba-unorm";
        readonly bytesPerBlock: 8;
    };
    readonly 'bc1-rgba-unorm-srgb': {
        readonly blockWidth: 4;
        readonly blockHeight: 4;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 8;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-bc";
        readonly baseFormat: "bc1-rgba-unorm";
        readonly bytesPerBlock: 8;
    };
    readonly 'bc2-rgba-unorm': {
        readonly blockWidth: 4;
        readonly blockHeight: 4;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-bc";
        readonly baseFormat: "bc2-rgba-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'bc2-rgba-unorm-srgb': {
        readonly blockWidth: 4;
        readonly blockHeight: 4;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-bc";
        readonly baseFormat: "bc2-rgba-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'bc3-rgba-unorm': {
        readonly blockWidth: 4;
        readonly blockHeight: 4;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-bc";
        readonly baseFormat: "bc3-rgba-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'bc3-rgba-unorm-srgb': {
        readonly blockWidth: 4;
        readonly blockHeight: 4;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-bc";
        readonly baseFormat: "bc3-rgba-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'bc4-r-unorm': {
        readonly blockWidth: 4;
        readonly blockHeight: 4;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 8;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-bc";
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 8;
    };
    readonly 'bc4-r-snorm': {
        readonly blockWidth: 4;
        readonly blockHeight: 4;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 8;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-bc";
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 8;
    };
    readonly 'bc5-rg-unorm': {
        readonly blockWidth: 4;
        readonly blockHeight: 4;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-bc";
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 16;
    };
    readonly 'bc5-rg-snorm': {
        readonly blockWidth: 4;
        readonly blockHeight: 4;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-bc";
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 16;
    };
    readonly 'bc6h-rgb-ufloat': {
        readonly blockWidth: 4;
        readonly blockHeight: 4;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-bc";
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 16;
    };
    readonly 'bc6h-rgb-float': {
        readonly blockWidth: 4;
        readonly blockHeight: 4;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-bc";
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 16;
    };
    readonly 'bc7-rgba-unorm': {
        readonly blockWidth: 4;
        readonly blockHeight: 4;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-bc";
        readonly baseFormat: "bc7-rgba-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'bc7-rgba-unorm-srgb': {
        readonly blockWidth: 4;
        readonly blockHeight: 4;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-bc";
        readonly baseFormat: "bc7-rgba-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly r8unorm: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 1;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: true;
            readonly resolve: true;
            readonly byteCost: 1;
            readonly alignment: 1;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 1;
    };
    readonly r8snorm: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 1;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 1;
    };
    readonly r8uint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "uint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 1;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 1;
            readonly alignment: 1;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 1;
    };
    readonly r8sint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "sint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 1;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 1;
            readonly alignment: 1;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 1;
    };
    readonly rg8unorm: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 2;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: true;
            readonly resolve: true;
            readonly byteCost: 2;
            readonly alignment: 1;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 2;
    };
    readonly rg8snorm: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 2;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 2;
    };
    readonly rg8uint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "uint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 2;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 2;
            readonly alignment: 1;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 2;
    };
    readonly rg8sint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "sint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 2;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 2;
            readonly alignment: 1;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 2;
    };
    readonly rgba8unorm: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: true;
            readonly resolve: true;
            readonly byteCost: 8;
            readonly alignment: 1;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: "rgba8unorm";
        readonly bytesPerBlock: 4;
    };
    readonly 'rgba8unorm-srgb': {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: true;
            readonly resolve: true;
            readonly byteCost: 8;
            readonly alignment: 1;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: "rgba8unorm";
        readonly bytesPerBlock: 4;
    };
    readonly rgba8snorm: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 4;
    };
    readonly rgba8uint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "uint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 4;
            readonly alignment: 1;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 4;
    };
    readonly rgba8sint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "sint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 4;
            readonly alignment: 1;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 4;
    };
    readonly bgra8unorm: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: true;
            readonly resolve: true;
            readonly byteCost: 8;
            readonly alignment: 1;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: "bgra8unorm";
        readonly bytesPerBlock: 4;
    };
    readonly 'bgra8unorm-srgb': {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: true;
            readonly resolve: true;
            readonly byteCost: 8;
            readonly alignment: 1;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: "bgra8unorm";
        readonly bytesPerBlock: 4;
    };
    readonly r16unorm: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 2;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: true;
            readonly resolve: false;
            readonly byteCost: 2;
            readonly alignment: 2;
        };
        readonly multisample: true;
        readonly feature: "texture-formats-tier1";
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 2;
    };
    readonly r16snorm: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 2;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: true;
            readonly resolve: false;
            readonly byteCost: 2;
            readonly alignment: 2;
        };
        readonly multisample: true;
        readonly feature: "texture-formats-tier1";
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 2;
    };
    readonly r16uint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "uint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 2;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 2;
            readonly alignment: 2;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 2;
    };
    readonly r16sint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "sint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 2;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 2;
            readonly alignment: 2;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 2;
    };
    readonly r16float: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 2;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: true;
            readonly resolve: true;
            readonly byteCost: 2;
            readonly alignment: 2;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 2;
    };
    readonly rg16unorm: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: true;
            readonly resolve: false;
            readonly byteCost: 4;
            readonly alignment: 2;
        };
        readonly multisample: true;
        readonly feature: "texture-formats-tier1";
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 4;
    };
    readonly rg16snorm: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: true;
            readonly resolve: false;
            readonly byteCost: 4;
            readonly alignment: 2;
        };
        readonly multisample: true;
        readonly feature: "texture-formats-tier1";
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 4;
    };
    readonly rg16uint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "uint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 4;
            readonly alignment: 2;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 4;
    };
    readonly rg16sint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "sint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 4;
            readonly alignment: 2;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 4;
    };
    readonly rg16float: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: true;
            readonly resolve: true;
            readonly byteCost: 4;
            readonly alignment: 2;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 4;
    };
    readonly rgba16unorm: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 8;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: true;
            readonly resolve: false;
            readonly byteCost: 8;
            readonly alignment: 4;
        };
        readonly multisample: true;
        readonly feature: "texture-formats-tier1";
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 8;
    };
    readonly rgba16snorm: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 8;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: true;
            readonly resolve: false;
            readonly byteCost: 8;
            readonly alignment: 2;
        };
        readonly multisample: true;
        readonly feature: "texture-formats-tier1";
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 8;
    };
    readonly rgba16uint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "uint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 8;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 8;
            readonly alignment: 2;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 8;
    };
    readonly rgba16sint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "sint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 8;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 8;
            readonly alignment: 2;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 8;
    };
    readonly rgba16float: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 8;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: true;
            readonly resolve: true;
            readonly byteCost: 8;
            readonly alignment: 2;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 8;
    };
    readonly r32uint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "uint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: true;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 4;
            readonly alignment: 4;
        };
        readonly multisample: false;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 4;
    };
    readonly r32sint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "sint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: true;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 4;
            readonly alignment: 4;
        };
        readonly multisample: false;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 4;
    };
    readonly r32float: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "unfilterable-float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: true;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 4;
            readonly alignment: 4;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 4;
    };
    readonly rg32uint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "uint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 8;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 8;
            readonly alignment: 4;
        };
        readonly multisample: false;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 8;
    };
    readonly rg32sint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "sint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 8;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 8;
            readonly alignment: 4;
        };
        readonly multisample: false;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 8;
    };
    readonly rg32float: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "unfilterable-float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 8;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 8;
            readonly alignment: 4;
        };
        readonly multisample: false;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 8;
    };
    readonly rgba32uint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "uint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 16;
            readonly alignment: 4;
        };
        readonly multisample: false;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 16;
    };
    readonly rgba32sint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "sint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 16;
            readonly alignment: 4;
        };
        readonly multisample: false;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 16;
    };
    readonly rgba32float: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "unfilterable-float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 16;
            readonly alignment: 4;
        };
        readonly multisample: false;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 16;
    };
    readonly rgb10a2uint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "uint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 8;
            readonly alignment: 4;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 4;
    };
    readonly rgb10a2unorm: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: true;
            readonly resolve: true;
            readonly byteCost: 8;
            readonly alignment: 4;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 4;
    };
    readonly rg11b10ufloat: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: true;
            readonly resolve: true;
            readonly byteCost: 8;
            readonly alignment: 4;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 4;
    };
    readonly rgb9e5ufloat: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 4;
    };
};
declare const kEncodableTextureFormatInfo: {
    readonly stencil8: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: undefined;
        readonly depth: undefined;
        readonly stencil: {
            readonly type: "uint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 1;
        };
        readonly colorRender: undefined;
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 1;
    };
    readonly depth16unorm: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: undefined;
        readonly depth: {
            readonly type: "depth";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 2;
        };
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 2;
    };
    readonly depth32float: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: undefined;
        readonly depth: {
            readonly type: "depth";
            readonly copySrc: true;
            readonly copyDst: false;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 4;
        };
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 4;
    };
    readonly r8unorm: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 1;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: true;
            readonly resolve: true;
            readonly byteCost: 1;
            readonly alignment: 1;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 1;
    };
    readonly r8snorm: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 1;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 1;
    };
    readonly r8uint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "uint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 1;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 1;
            readonly alignment: 1;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 1;
    };
    readonly r8sint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "sint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 1;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 1;
            readonly alignment: 1;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 1;
    };
    readonly rg8unorm: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 2;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: true;
            readonly resolve: true;
            readonly byteCost: 2;
            readonly alignment: 1;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 2;
    };
    readonly rg8snorm: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 2;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 2;
    };
    readonly rg8uint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "uint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 2;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 2;
            readonly alignment: 1;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 2;
    };
    readonly rg8sint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "sint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 2;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 2;
            readonly alignment: 1;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 2;
    };
    readonly rgba8unorm: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: true;
            readonly resolve: true;
            readonly byteCost: 8;
            readonly alignment: 1;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: "rgba8unorm";
        readonly bytesPerBlock: 4;
    };
    readonly 'rgba8unorm-srgb': {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: true;
            readonly resolve: true;
            readonly byteCost: 8;
            readonly alignment: 1;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: "rgba8unorm";
        readonly bytesPerBlock: 4;
    };
    readonly rgba8snorm: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 4;
    };
    readonly rgba8uint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "uint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 4;
            readonly alignment: 1;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 4;
    };
    readonly rgba8sint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "sint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 4;
            readonly alignment: 1;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 4;
    };
    readonly bgra8unorm: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: true;
            readonly resolve: true;
            readonly byteCost: 8;
            readonly alignment: 1;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: "bgra8unorm";
        readonly bytesPerBlock: 4;
    };
    readonly 'bgra8unorm-srgb': {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: true;
            readonly resolve: true;
            readonly byteCost: 8;
            readonly alignment: 1;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: "bgra8unorm";
        readonly bytesPerBlock: 4;
    };
    readonly r16unorm: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 2;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: true;
            readonly resolve: false;
            readonly byteCost: 2;
            readonly alignment: 2;
        };
        readonly multisample: true;
        readonly feature: "texture-formats-tier1";
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 2;
    };
    readonly r16snorm: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 2;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: true;
            readonly resolve: false;
            readonly byteCost: 2;
            readonly alignment: 2;
        };
        readonly multisample: true;
        readonly feature: "texture-formats-tier1";
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 2;
    };
    readonly r16uint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "uint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 2;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 2;
            readonly alignment: 2;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 2;
    };
    readonly r16sint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "sint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 2;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 2;
            readonly alignment: 2;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 2;
    };
    readonly r16float: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 2;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: true;
            readonly resolve: true;
            readonly byteCost: 2;
            readonly alignment: 2;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 2;
    };
    readonly rg16unorm: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: true;
            readonly resolve: false;
            readonly byteCost: 4;
            readonly alignment: 2;
        };
        readonly multisample: true;
        readonly feature: "texture-formats-tier1";
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 4;
    };
    readonly rg16snorm: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: true;
            readonly resolve: false;
            readonly byteCost: 4;
            readonly alignment: 2;
        };
        readonly multisample: true;
        readonly feature: "texture-formats-tier1";
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 4;
    };
    readonly rg16uint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "uint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 4;
            readonly alignment: 2;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 4;
    };
    readonly rg16sint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "sint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 4;
            readonly alignment: 2;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 4;
    };
    readonly rg16float: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: true;
            readonly resolve: true;
            readonly byteCost: 4;
            readonly alignment: 2;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 4;
    };
    readonly rgba16unorm: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 8;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: true;
            readonly resolve: false;
            readonly byteCost: 8;
            readonly alignment: 4;
        };
        readonly multisample: true;
        readonly feature: "texture-formats-tier1";
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 8;
    };
    readonly rgba16snorm: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 8;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: true;
            readonly resolve: false;
            readonly byteCost: 8;
            readonly alignment: 2;
        };
        readonly multisample: true;
        readonly feature: "texture-formats-tier1";
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 8;
    };
    readonly rgba16uint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "uint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 8;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 8;
            readonly alignment: 2;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 8;
    };
    readonly rgba16sint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "sint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 8;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 8;
            readonly alignment: 2;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 8;
    };
    readonly rgba16float: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 8;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: true;
            readonly resolve: true;
            readonly byteCost: 8;
            readonly alignment: 2;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 8;
    };
    readonly r32uint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "uint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: true;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 4;
            readonly alignment: 4;
        };
        readonly multisample: false;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 4;
    };
    readonly r32sint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "sint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: true;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 4;
            readonly alignment: 4;
        };
        readonly multisample: false;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 4;
    };
    readonly r32float: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "unfilterable-float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: true;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 4;
            readonly alignment: 4;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 4;
    };
    readonly rg32uint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "uint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 8;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 8;
            readonly alignment: 4;
        };
        readonly multisample: false;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 8;
    };
    readonly rg32sint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "sint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 8;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 8;
            readonly alignment: 4;
        };
        readonly multisample: false;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 8;
    };
    readonly rg32float: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "unfilterable-float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 8;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 8;
            readonly alignment: 4;
        };
        readonly multisample: false;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 8;
    };
    readonly rgba32uint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "uint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 16;
            readonly alignment: 4;
        };
        readonly multisample: false;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 16;
    };
    readonly rgba32sint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "sint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 16;
            readonly alignment: 4;
        };
        readonly multisample: false;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 16;
    };
    readonly rgba32float: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "unfilterable-float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 16;
            readonly alignment: 4;
        };
        readonly multisample: false;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 16;
    };
    readonly rgb10a2uint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "uint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 8;
            readonly alignment: 4;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 4;
    };
    readonly rgb10a2unorm: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: true;
            readonly resolve: true;
            readonly byteCost: 8;
            readonly alignment: 4;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 4;
    };
    readonly rg11b10ufloat: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: true;
            readonly resolve: true;
            readonly byteCost: 8;
            readonly alignment: 4;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 4;
    };
    readonly rgb9e5ufloat: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 4;
    };
};
declare const kSizedTextureFormatInfo: {
    readonly 'astc-4x4-unorm': {
        readonly blockWidth: 4;
        readonly blockHeight: 4;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-astc";
        readonly baseFormat: "astc-4x4-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'astc-4x4-unorm-srgb': {
        readonly blockWidth: 4;
        readonly blockHeight: 4;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-astc";
        readonly baseFormat: "astc-4x4-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'astc-5x4-unorm': {
        readonly blockWidth: 5;
        readonly blockHeight: 4;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-astc";
        readonly baseFormat: "astc-5x4-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'astc-5x4-unorm-srgb': {
        readonly blockWidth: 5;
        readonly blockHeight: 4;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-astc";
        readonly baseFormat: "astc-5x4-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'astc-5x5-unorm': {
        readonly blockWidth: 5;
        readonly blockHeight: 5;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-astc";
        readonly baseFormat: "astc-5x5-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'astc-5x5-unorm-srgb': {
        readonly blockWidth: 5;
        readonly blockHeight: 5;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-astc";
        readonly baseFormat: "astc-5x5-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'astc-6x5-unorm': {
        readonly blockWidth: 6;
        readonly blockHeight: 5;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-astc";
        readonly baseFormat: "astc-6x5-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'astc-6x5-unorm-srgb': {
        readonly blockWidth: 6;
        readonly blockHeight: 5;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-astc";
        readonly baseFormat: "astc-6x5-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'astc-6x6-unorm': {
        readonly blockWidth: 6;
        readonly blockHeight: 6;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-astc";
        readonly baseFormat: "astc-6x6-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'astc-6x6-unorm-srgb': {
        readonly blockWidth: 6;
        readonly blockHeight: 6;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-astc";
        readonly baseFormat: "astc-6x6-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'astc-8x5-unorm': {
        readonly blockWidth: 8;
        readonly blockHeight: 5;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-astc";
        readonly baseFormat: "astc-8x5-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'astc-8x5-unorm-srgb': {
        readonly blockWidth: 8;
        readonly blockHeight: 5;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-astc";
        readonly baseFormat: "astc-8x5-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'astc-8x6-unorm': {
        readonly blockWidth: 8;
        readonly blockHeight: 6;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-astc";
        readonly baseFormat: "astc-8x6-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'astc-8x6-unorm-srgb': {
        readonly blockWidth: 8;
        readonly blockHeight: 6;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-astc";
        readonly baseFormat: "astc-8x6-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'astc-8x8-unorm': {
        readonly blockWidth: 8;
        readonly blockHeight: 8;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-astc";
        readonly baseFormat: "astc-8x8-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'astc-8x8-unorm-srgb': {
        readonly blockWidth: 8;
        readonly blockHeight: 8;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-astc";
        readonly baseFormat: "astc-8x8-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'astc-10x5-unorm': {
        readonly blockWidth: 10;
        readonly blockHeight: 5;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-astc";
        readonly baseFormat: "astc-10x5-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'astc-10x5-unorm-srgb': {
        readonly blockWidth: 10;
        readonly blockHeight: 5;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-astc";
        readonly baseFormat: "astc-10x5-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'astc-10x6-unorm': {
        readonly blockWidth: 10;
        readonly blockHeight: 6;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-astc";
        readonly baseFormat: "astc-10x6-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'astc-10x6-unorm-srgb': {
        readonly blockWidth: 10;
        readonly blockHeight: 6;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-astc";
        readonly baseFormat: "astc-10x6-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'astc-10x8-unorm': {
        readonly blockWidth: 10;
        readonly blockHeight: 8;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-astc";
        readonly baseFormat: "astc-10x8-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'astc-10x8-unorm-srgb': {
        readonly blockWidth: 10;
        readonly blockHeight: 8;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-astc";
        readonly baseFormat: "astc-10x8-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'astc-10x10-unorm': {
        readonly blockWidth: 10;
        readonly blockHeight: 10;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-astc";
        readonly baseFormat: "astc-10x10-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'astc-10x10-unorm-srgb': {
        readonly blockWidth: 10;
        readonly blockHeight: 10;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-astc";
        readonly baseFormat: "astc-10x10-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'astc-12x10-unorm': {
        readonly blockWidth: 12;
        readonly blockHeight: 10;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-astc";
        readonly baseFormat: "astc-12x10-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'astc-12x10-unorm-srgb': {
        readonly blockWidth: 12;
        readonly blockHeight: 10;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-astc";
        readonly baseFormat: "astc-12x10-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'astc-12x12-unorm': {
        readonly blockWidth: 12;
        readonly blockHeight: 12;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-astc";
        readonly baseFormat: "astc-12x12-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'astc-12x12-unorm-srgb': {
        readonly blockWidth: 12;
        readonly blockHeight: 12;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-astc";
        readonly baseFormat: "astc-12x12-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'etc2-rgb8unorm': {
        readonly blockWidth: 4;
        readonly blockHeight: 4;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 8;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-etc2";
        readonly baseFormat: "etc2-rgb8unorm";
        readonly bytesPerBlock: 8;
    };
    readonly 'etc2-rgb8unorm-srgb': {
        readonly blockWidth: 4;
        readonly blockHeight: 4;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 8;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-etc2";
        readonly baseFormat: "etc2-rgb8unorm";
        readonly bytesPerBlock: 8;
    };
    readonly 'etc2-rgb8a1unorm': {
        readonly blockWidth: 4;
        readonly blockHeight: 4;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 8;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-etc2";
        readonly baseFormat: "etc2-rgb8a1unorm";
        readonly bytesPerBlock: 8;
    };
    readonly 'etc2-rgb8a1unorm-srgb': {
        readonly blockWidth: 4;
        readonly blockHeight: 4;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 8;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-etc2";
        readonly baseFormat: "etc2-rgb8a1unorm";
        readonly bytesPerBlock: 8;
    };
    readonly 'etc2-rgba8unorm': {
        readonly blockWidth: 4;
        readonly blockHeight: 4;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-etc2";
        readonly baseFormat: "etc2-rgba8unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'etc2-rgba8unorm-srgb': {
        readonly blockWidth: 4;
        readonly blockHeight: 4;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-etc2";
        readonly baseFormat: "etc2-rgba8unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'eac-r11unorm': {
        readonly blockWidth: 4;
        readonly blockHeight: 4;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 8;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-etc2";
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 8;
    };
    readonly 'eac-r11snorm': {
        readonly blockWidth: 4;
        readonly blockHeight: 4;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 8;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-etc2";
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 8;
    };
    readonly 'eac-rg11unorm': {
        readonly blockWidth: 4;
        readonly blockHeight: 4;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-etc2";
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 16;
    };
    readonly 'eac-rg11snorm': {
        readonly blockWidth: 4;
        readonly blockHeight: 4;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-etc2";
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 16;
    };
    readonly 'bc1-rgba-unorm': {
        readonly blockWidth: 4;
        readonly blockHeight: 4;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 8;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-bc";
        readonly baseFormat: "bc1-rgba-unorm";
        readonly bytesPerBlock: 8;
    };
    readonly 'bc1-rgba-unorm-srgb': {
        readonly blockWidth: 4;
        readonly blockHeight: 4;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 8;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-bc";
        readonly baseFormat: "bc1-rgba-unorm";
        readonly bytesPerBlock: 8;
    };
    readonly 'bc2-rgba-unorm': {
        readonly blockWidth: 4;
        readonly blockHeight: 4;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-bc";
        readonly baseFormat: "bc2-rgba-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'bc2-rgba-unorm-srgb': {
        readonly blockWidth: 4;
        readonly blockHeight: 4;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-bc";
        readonly baseFormat: "bc2-rgba-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'bc3-rgba-unorm': {
        readonly blockWidth: 4;
        readonly blockHeight: 4;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-bc";
        readonly baseFormat: "bc3-rgba-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'bc3-rgba-unorm-srgb': {
        readonly blockWidth: 4;
        readonly blockHeight: 4;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-bc";
        readonly baseFormat: "bc3-rgba-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'bc4-r-unorm': {
        readonly blockWidth: 4;
        readonly blockHeight: 4;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 8;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-bc";
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 8;
    };
    readonly 'bc4-r-snorm': {
        readonly blockWidth: 4;
        readonly blockHeight: 4;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 8;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-bc";
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 8;
    };
    readonly 'bc5-rg-unorm': {
        readonly blockWidth: 4;
        readonly blockHeight: 4;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-bc";
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 16;
    };
    readonly 'bc5-rg-snorm': {
        readonly blockWidth: 4;
        readonly blockHeight: 4;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-bc";
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 16;
    };
    readonly 'bc6h-rgb-ufloat': {
        readonly blockWidth: 4;
        readonly blockHeight: 4;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-bc";
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 16;
    };
    readonly 'bc6h-rgb-float': {
        readonly blockWidth: 4;
        readonly blockHeight: 4;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-bc";
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 16;
    };
    readonly 'bc7-rgba-unorm': {
        readonly blockWidth: 4;
        readonly blockHeight: 4;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-bc";
        readonly baseFormat: "bc7-rgba-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly 'bc7-rgba-unorm-srgb': {
        readonly blockWidth: 4;
        readonly blockHeight: 4;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: "texture-compression-bc";
        readonly baseFormat: "bc7-rgba-unorm";
        readonly bytesPerBlock: 16;
    };
    readonly stencil8: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: undefined;
        readonly depth: undefined;
        readonly stencil: {
            readonly type: "uint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 1;
        };
        readonly colorRender: undefined;
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 1;
    };
    readonly depth16unorm: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: undefined;
        readonly depth: {
            readonly type: "depth";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 2;
        };
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 2;
    };
    readonly depth32float: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: undefined;
        readonly depth: {
            readonly type: "depth";
            readonly copySrc: true;
            readonly copyDst: false;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 4;
        };
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 4;
    };
    readonly r8unorm: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 1;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: true;
            readonly resolve: true;
            readonly byteCost: 1;
            readonly alignment: 1;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 1;
    };
    readonly r8snorm: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 1;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 1;
    };
    readonly r8uint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "uint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 1;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 1;
            readonly alignment: 1;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 1;
    };
    readonly r8sint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "sint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 1;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 1;
            readonly alignment: 1;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 1;
    };
    readonly rg8unorm: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 2;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: true;
            readonly resolve: true;
            readonly byteCost: 2;
            readonly alignment: 1;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 2;
    };
    readonly rg8snorm: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 2;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 2;
    };
    readonly rg8uint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "uint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 2;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 2;
            readonly alignment: 1;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 2;
    };
    readonly rg8sint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "sint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 2;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 2;
            readonly alignment: 1;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 2;
    };
    readonly rgba8unorm: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: true;
            readonly resolve: true;
            readonly byteCost: 8;
            readonly alignment: 1;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: "rgba8unorm";
        readonly bytesPerBlock: 4;
    };
    readonly 'rgba8unorm-srgb': {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: true;
            readonly resolve: true;
            readonly byteCost: 8;
            readonly alignment: 1;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: "rgba8unorm";
        readonly bytesPerBlock: 4;
    };
    readonly rgba8snorm: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 4;
    };
    readonly rgba8uint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "uint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 4;
            readonly alignment: 1;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 4;
    };
    readonly rgba8sint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "sint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 4;
            readonly alignment: 1;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 4;
    };
    readonly bgra8unorm: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: true;
            readonly resolve: true;
            readonly byteCost: 8;
            readonly alignment: 1;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: "bgra8unorm";
        readonly bytesPerBlock: 4;
    };
    readonly 'bgra8unorm-srgb': {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: true;
            readonly resolve: true;
            readonly byteCost: 8;
            readonly alignment: 1;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: "bgra8unorm";
        readonly bytesPerBlock: 4;
    };
    readonly r16unorm: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 2;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: true;
            readonly resolve: false;
            readonly byteCost: 2;
            readonly alignment: 2;
        };
        readonly multisample: true;
        readonly feature: "texture-formats-tier1";
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 2;
    };
    readonly r16snorm: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 2;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: true;
            readonly resolve: false;
            readonly byteCost: 2;
            readonly alignment: 2;
        };
        readonly multisample: true;
        readonly feature: "texture-formats-tier1";
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 2;
    };
    readonly r16uint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "uint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 2;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 2;
            readonly alignment: 2;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 2;
    };
    readonly r16sint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "sint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 2;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 2;
            readonly alignment: 2;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 2;
    };
    readonly r16float: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 2;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: true;
            readonly resolve: true;
            readonly byteCost: 2;
            readonly alignment: 2;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 2;
    };
    readonly rg16unorm: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: true;
            readonly resolve: false;
            readonly byteCost: 4;
            readonly alignment: 2;
        };
        readonly multisample: true;
        readonly feature: "texture-formats-tier1";
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 4;
    };
    readonly rg16snorm: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: true;
            readonly resolve: false;
            readonly byteCost: 4;
            readonly alignment: 2;
        };
        readonly multisample: true;
        readonly feature: "texture-formats-tier1";
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 4;
    };
    readonly rg16uint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "uint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 4;
            readonly alignment: 2;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 4;
    };
    readonly rg16sint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "sint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 4;
            readonly alignment: 2;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 4;
    };
    readonly rg16float: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: true;
            readonly resolve: true;
            readonly byteCost: 4;
            readonly alignment: 2;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 4;
    };
    readonly rgba16unorm: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 8;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: true;
            readonly resolve: false;
            readonly byteCost: 8;
            readonly alignment: 4;
        };
        readonly multisample: true;
        readonly feature: "texture-formats-tier1";
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 8;
    };
    readonly rgba16snorm: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 8;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: true;
            readonly resolve: false;
            readonly byteCost: 8;
            readonly alignment: 2;
        };
        readonly multisample: true;
        readonly feature: "texture-formats-tier1";
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 8;
    };
    readonly rgba16uint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "uint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 8;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 8;
            readonly alignment: 2;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 8;
    };
    readonly rgba16sint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "sint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 8;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 8;
            readonly alignment: 2;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 8;
    };
    readonly rgba16float: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 8;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: true;
            readonly resolve: true;
            readonly byteCost: 8;
            readonly alignment: 2;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 8;
    };
    readonly r32uint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "uint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: true;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 4;
            readonly alignment: 4;
        };
        readonly multisample: false;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 4;
    };
    readonly r32sint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "sint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: true;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 4;
            readonly alignment: 4;
        };
        readonly multisample: false;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 4;
    };
    readonly r32float: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "unfilterable-float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: true;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 4;
            readonly alignment: 4;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 4;
    };
    readonly rg32uint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "uint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 8;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 8;
            readonly alignment: 4;
        };
        readonly multisample: false;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 8;
    };
    readonly rg32sint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "sint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 8;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 8;
            readonly alignment: 4;
        };
        readonly multisample: false;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 8;
    };
    readonly rg32float: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "unfilterable-float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 8;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 8;
            readonly alignment: 4;
        };
        readonly multisample: false;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 8;
    };
    readonly rgba32uint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "uint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 16;
            readonly alignment: 4;
        };
        readonly multisample: false;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 16;
    };
    readonly rgba32sint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "sint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 16;
            readonly alignment: 4;
        };
        readonly multisample: false;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 16;
    };
    readonly rgba32float: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "unfilterable-float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 16;
            readonly alignment: 4;
        };
        readonly multisample: false;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 16;
    };
    readonly rgb10a2uint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "uint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 8;
            readonly alignment: 4;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 4;
    };
    readonly rgb10a2unorm: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: true;
            readonly resolve: true;
            readonly byteCost: 8;
            readonly alignment: 4;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 4;
    };
    readonly rg11b10ufloat: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: true;
            readonly resolve: true;
            readonly byteCost: 8;
            readonly alignment: 4;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 4;
    };
    readonly rgb9e5ufloat: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 4;
    };
};
declare const kDepthStencilFormatInfo: {
    readonly depth24plus: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: undefined;
        readonly depth: {
            readonly type: "depth";
            readonly copySrc: false;
            readonly copyDst: false;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: undefined;
        };
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: undefined;
    };
    readonly 'depth24plus-stencil8': {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: undefined;
        readonly depth: {
            readonly type: "depth";
            readonly copySrc: false;
            readonly copyDst: false;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: undefined;
        };
        readonly stencil: {
            readonly type: "uint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 1;
        };
        readonly colorRender: undefined;
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: undefined;
    };
    readonly 'depth32float-stencil8': {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: undefined;
        readonly depth: {
            readonly type: "depth";
            readonly copySrc: true;
            readonly copyDst: false;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 4;
        };
        readonly stencil: {
            readonly type: "uint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 1;
        };
        readonly colorRender: undefined;
        readonly multisample: true;
        readonly feature: "depth32float-stencil8";
        readonly baseFormat: undefined;
        readonly bytesPerBlock: undefined;
    };
    readonly stencil8: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: undefined;
        readonly depth: undefined;
        readonly stencil: {
            readonly type: "uint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 1;
        };
        readonly colorRender: undefined;
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 1;
    };
    readonly depth16unorm: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: undefined;
        readonly depth: {
            readonly type: "depth";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 2;
        };
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 2;
    };
    readonly depth32float: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: undefined;
        readonly depth: {
            readonly type: "depth";
            readonly copySrc: true;
            readonly copyDst: false;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 4;
        };
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 4;
    };
};
declare const kUncompressedTextureFormatInfo: {
    readonly depth24plus: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: undefined;
        readonly depth: {
            readonly type: "depth";
            readonly copySrc: false;
            readonly copyDst: false;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: undefined;
        };
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: undefined;
    };
    readonly 'depth24plus-stencil8': {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: undefined;
        readonly depth: {
            readonly type: "depth";
            readonly copySrc: false;
            readonly copyDst: false;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: undefined;
        };
        readonly stencil: {
            readonly type: "uint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 1;
        };
        readonly colorRender: undefined;
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: undefined;
    };
    readonly 'depth32float-stencil8': {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: undefined;
        readonly depth: {
            readonly type: "depth";
            readonly copySrc: true;
            readonly copyDst: false;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 4;
        };
        readonly stencil: {
            readonly type: "uint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 1;
        };
        readonly colorRender: undefined;
        readonly multisample: true;
        readonly feature: "depth32float-stencil8";
        readonly baseFormat: undefined;
        readonly bytesPerBlock: undefined;
    };
    readonly stencil8: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: undefined;
        readonly depth: undefined;
        readonly stencil: {
            readonly type: "uint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 1;
        };
        readonly colorRender: undefined;
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 1;
    };
    readonly depth16unorm: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: undefined;
        readonly depth: {
            readonly type: "depth";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 2;
        };
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 2;
    };
    readonly depth32float: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: undefined;
        readonly depth: {
            readonly type: "depth";
            readonly copySrc: true;
            readonly copyDst: false;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 4;
        };
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 4;
    };
    readonly r8unorm: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 1;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: true;
            readonly resolve: true;
            readonly byteCost: 1;
            readonly alignment: 1;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 1;
    };
    readonly r8snorm: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 1;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 1;
    };
    readonly r8uint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "uint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 1;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 1;
            readonly alignment: 1;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 1;
    };
    readonly r8sint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "sint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 1;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 1;
            readonly alignment: 1;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 1;
    };
    readonly rg8unorm: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 2;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: true;
            readonly resolve: true;
            readonly byteCost: 2;
            readonly alignment: 1;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 2;
    };
    readonly rg8snorm: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 2;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 2;
    };
    readonly rg8uint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "uint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 2;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 2;
            readonly alignment: 1;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 2;
    };
    readonly rg8sint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "sint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 2;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 2;
            readonly alignment: 1;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 2;
    };
    readonly rgba8unorm: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: true;
            readonly resolve: true;
            readonly byteCost: 8;
            readonly alignment: 1;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: "rgba8unorm";
        readonly bytesPerBlock: 4;
    };
    readonly 'rgba8unorm-srgb': {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: true;
            readonly resolve: true;
            readonly byteCost: 8;
            readonly alignment: 1;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: "rgba8unorm";
        readonly bytesPerBlock: 4;
    };
    readonly rgba8snorm: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 4;
    };
    readonly rgba8uint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "uint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 4;
            readonly alignment: 1;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 4;
    };
    readonly rgba8sint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "sint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 4;
            readonly alignment: 1;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 4;
    };
    readonly bgra8unorm: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: true;
            readonly resolve: true;
            readonly byteCost: 8;
            readonly alignment: 1;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: "bgra8unorm";
        readonly bytesPerBlock: 4;
    };
    readonly 'bgra8unorm-srgb': {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: true;
            readonly resolve: true;
            readonly byteCost: 8;
            readonly alignment: 1;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: "bgra8unorm";
        readonly bytesPerBlock: 4;
    };
    readonly r16unorm: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 2;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: true;
            readonly resolve: false;
            readonly byteCost: 2;
            readonly alignment: 2;
        };
        readonly multisample: true;
        readonly feature: "texture-formats-tier1";
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 2;
    };
    readonly r16snorm: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 2;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: true;
            readonly resolve: false;
            readonly byteCost: 2;
            readonly alignment: 2;
        };
        readonly multisample: true;
        readonly feature: "texture-formats-tier1";
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 2;
    };
    readonly r16uint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "uint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 2;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 2;
            readonly alignment: 2;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 2;
    };
    readonly r16sint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "sint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 2;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 2;
            readonly alignment: 2;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 2;
    };
    readonly r16float: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 2;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: true;
            readonly resolve: true;
            readonly byteCost: 2;
            readonly alignment: 2;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 2;
    };
    readonly rg16unorm: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: true;
            readonly resolve: false;
            readonly byteCost: 4;
            readonly alignment: 2;
        };
        readonly multisample: true;
        readonly feature: "texture-formats-tier1";
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 4;
    };
    readonly rg16snorm: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: true;
            readonly resolve: false;
            readonly byteCost: 4;
            readonly alignment: 2;
        };
        readonly multisample: true;
        readonly feature: "texture-formats-tier1";
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 4;
    };
    readonly rg16uint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "uint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 4;
            readonly alignment: 2;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 4;
    };
    readonly rg16sint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "sint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 4;
            readonly alignment: 2;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 4;
    };
    readonly rg16float: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: true;
            readonly resolve: true;
            readonly byteCost: 4;
            readonly alignment: 2;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 4;
    };
    readonly rgba16unorm: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 8;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: true;
            readonly resolve: false;
            readonly byteCost: 8;
            readonly alignment: 4;
        };
        readonly multisample: true;
        readonly feature: "texture-formats-tier1";
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 8;
    };
    readonly rgba16snorm: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 8;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: true;
            readonly resolve: false;
            readonly byteCost: 8;
            readonly alignment: 2;
        };
        readonly multisample: true;
        readonly feature: "texture-formats-tier1";
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 8;
    };
    readonly rgba16uint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "uint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 8;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 8;
            readonly alignment: 2;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 8;
    };
    readonly rgba16sint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "sint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 8;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 8;
            readonly alignment: 2;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 8;
    };
    readonly rgba16float: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 8;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: true;
            readonly resolve: true;
            readonly byteCost: 8;
            readonly alignment: 2;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 8;
    };
    readonly r32uint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "uint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: true;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 4;
            readonly alignment: 4;
        };
        readonly multisample: false;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 4;
    };
    readonly r32sint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "sint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: true;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 4;
            readonly alignment: 4;
        };
        readonly multisample: false;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 4;
    };
    readonly r32float: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "unfilterable-float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: true;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 4;
            readonly alignment: 4;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 4;
    };
    readonly rg32uint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "uint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 8;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 8;
            readonly alignment: 4;
        };
        readonly multisample: false;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 8;
    };
    readonly rg32sint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "sint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 8;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 8;
            readonly alignment: 4;
        };
        readonly multisample: false;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 8;
    };
    readonly rg32float: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "unfilterable-float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 8;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 8;
            readonly alignment: 4;
        };
        readonly multisample: false;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 8;
    };
    readonly rgba32uint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "uint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 16;
            readonly alignment: 4;
        };
        readonly multisample: false;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 16;
    };
    readonly rgba32sint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "sint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 16;
            readonly alignment: 4;
        };
        readonly multisample: false;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 16;
    };
    readonly rgba32float: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "unfilterable-float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: true;
            readonly readWriteStorage: false;
            readonly bytes: 16;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 16;
            readonly alignment: 4;
        };
        readonly multisample: false;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 16;
    };
    readonly rgb10a2uint: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "uint";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: false;
            readonly resolve: false;
            readonly byteCost: 8;
            readonly alignment: 4;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 4;
    };
    readonly rgb10a2unorm: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: true;
            readonly resolve: true;
            readonly byteCost: 8;
            readonly alignment: 4;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 4;
    };
    readonly rg11b10ufloat: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: {
            readonly blend: true;
            readonly resolve: true;
            readonly byteCost: 8;
            readonly alignment: 4;
        };
        readonly multisample: true;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 4;
    };
    readonly rgb9e5ufloat: {
        readonly blockWidth: 1;
        readonly blockHeight: 1;
        readonly color: {
            readonly type: "float";
            readonly copySrc: true;
            readonly copyDst: true;
            readonly storage: false;
            readonly readWriteStorage: false;
            readonly bytes: 4;
        };
        readonly depth: undefined;
        readonly stencil: undefined;
        readonly colorRender: undefined;
        readonly multisample: false;
        readonly feature: undefined;
        readonly baseFormat: undefined;
        readonly bytesPerBlock: 4;
    };
};
/** A "regular" texture format (uncompressed, sized, single-plane color formats). */
export type RegularTextureFormat = keyof typeof kRegularTextureFormatInfo;
/** A sized depth/stencil texture format. */
export type SizedDepthStencilFormat = keyof typeof kSizedDepthStencilFormatInfo;
/** An unsized depth/stencil texture format. */
export type UnsizedDepthStencilFormat = keyof typeof kUnsizedDepthStencilFormatInfo;
/** A compressed (block) texture format. */
export type CompressedTextureFormat = keyof typeof kCompressedTextureFormatInfo;
/** A color texture format (regular | compressed). */
export type ColorTextureFormat = keyof typeof kColorTextureFormatInfo;
/** An encodable texture format (regular | sized depth/stencil). */
export type EncodableTextureFormat = keyof typeof kEncodableTextureFormatInfo;
/** A sized texture format (regular | sized depth/stencil | compressed). */
export type SizedTextureFormat = keyof typeof kSizedTextureFormatInfo;
/** A depth/stencil format (sized | unsized). */
export type DepthStencilFormat = keyof typeof kDepthStencilFormatInfo;
/** An uncompressed (block size 1x1) format (regular | depth/stencil). */
export type UncompressedTextureFormat = keyof typeof kUncompressedTextureFormatInfo;
export declare const kRegularTextureFormats: readonly RegularTextureFormat[];
export declare const kSizedDepthStencilFormats: readonly SizedDepthStencilFormat[];
export declare const kUnsizedDepthStencilFormats: readonly UnsizedDepthStencilFormat[];
export declare const kCompressedTextureFormats: readonly CompressedTextureFormat[];
export declare const kBCCompressedTextureFormats: readonly CompressedTextureFormat[];
export declare const kASTCCompressedTextureFormats: readonly CompressedTextureFormat[];
export declare const kColorTextureFormats: readonly ColorTextureFormat[];
export declare const kEncodableTextureFormats: readonly EncodableTextureFormat[];
export declare const kSizedTextureFormats: readonly SizedTextureFormat[];
export declare const kDepthStencilFormats: readonly DepthStencilFormat[];
export declare const kUncompressedTextureFormats: readonly UncompressedTextureFormat[];
export declare const kAllTextureFormats: readonly GPUTextureFormat[];
export declare const kDepthTextureFormats: readonly ("depth32float-stencil8" | "stencil8" | "depth16unorm" | "depth32float" | "depth24plus" | "depth24plus-stencil8")[];
export declare const kStencilTextureFormats: ("depth32float-stencil8" | "stencil8" | "depth16unorm" | "depth32float" | "depth24plus" | "depth24plus-stencil8")[];
export declare const kTextureFormatTier1AllowsResolve: readonly ColorTextureFormat[];
export declare const kTextureFormatTier1ThrowsWhenNotEnabled: readonly ColorTextureFormat[];
export declare const kTextureFormatTier1AllowsRenderAttachmentBlendableMultisample: readonly ColorTextureFormat[];
export declare const kTextureFormatsTier1EnablesStorageReadOnlyWriteOnly: readonly ColorTextureFormat[];
export declare const kTextureFormatsTier2EnablesStorageReadWrite: readonly ColorTextureFormat[];
export declare const kPossibleStorageTextureFormats: readonly RegularTextureFormat[];
export declare const kPossibleReadWriteStorageTextureFormats: readonly RegularTextureFormat[];
export declare const kPossibleMultisampledTextureFormats: readonly ("depth32float-stencil8" | "r8unorm" | "r8snorm" | "r8uint" | "r8sint" | "rg8unorm" | "rg8snorm" | "rg8uint" | "rg8sint" | "rgba8unorm" | "rgba8unorm-srgb" | "rgba8snorm" | "rgba8uint" | "rgba8sint" | "bgra8unorm" | "bgra8unorm-srgb" | "r16unorm" | "r16snorm" | "r16uint" | "r16sint" | "r16float" | "rg16unorm" | "rg16snorm" | "rg16uint" | "rg16sint" | "rg16float" | "rgba16unorm" | "rgba16snorm" | "rgba16uint" | "rgba16sint" | "rgba16float" | "r32uint" | "r32sint" | "r32float" | "rg32uint" | "rg32sint" | "rg32float" | "rgba32uint" | "rgba32sint" | "rgba32float" | "rgb10a2uint" | "rgb10a2unorm" | "rg11b10ufloat" | "rgb9e5ufloat" | "stencil8" | "depth16unorm" | "depth32float" | "depth24plus" | "depth24plus-stencil8")[];
export declare const kPossibleColorRenderableTextureFormats: readonly ("r8unorm" | "r8snorm" | "r8uint" | "r8sint" | "rg8unorm" | "rg8snorm" | "rg8uint" | "rg8sint" | "rgba8unorm" | "rgba8unorm-srgb" | "rgba8snorm" | "rgba8uint" | "rgba8sint" | "bgra8unorm" | "bgra8unorm-srgb" | "r16unorm" | "r16snorm" | "r16uint" | "r16sint" | "r16float" | "rg16unorm" | "rg16snorm" | "rg16uint" | "rg16sint" | "rg16float" | "rgba16unorm" | "rgba16snorm" | "rgba16uint" | "rgba16sint" | "rgba16float" | "r32uint" | "r32sint" | "r32float" | "rg32uint" | "rg32sint" | "rg32float" | "rgba32uint" | "rgba32sint" | "rgba32float" | "rgb10a2uint" | "rgb10a2unorm" | "rg11b10ufloat" | "rgb9e5ufloat")[];
export type PossibleColorRenderTextureFormat = (typeof kPossibleColorRenderableTextureFormats)[number];
export declare const kDifferentBaseFormatTextureFormats: ("r8unorm" | "r8snorm" | "r8uint" | "r8sint" | "rg8unorm" | "rg8snorm" | "rg8uint" | "rg8sint" | "rgba8unorm" | "rgba8unorm-srgb" | "rgba8snorm" | "rgba8uint" | "rgba8sint" | "bgra8unorm" | "bgra8unorm-srgb" | "r16unorm" | "r16snorm" | "r16uint" | "r16sint" | "r16float" | "rg16unorm" | "rg16snorm" | "rg16uint" | "rg16sint" | "rg16float" | "rgba16unorm" | "rgba16snorm" | "rgba16uint" | "rgba16sint" | "rgba16float" | "r32uint" | "r32sint" | "r32float" | "rg32uint" | "rg32sint" | "rg32float" | "rgba32uint" | "rgba32sint" | "rgba32float" | "rgb10a2uint" | "rgb10a2unorm" | "rg11b10ufloat" | "rgb9e5ufloat" | "bc1-rgba-unorm" | "bc1-rgba-unorm-srgb" | "bc2-rgba-unorm" | "bc2-rgba-unorm-srgb" | "bc3-rgba-unorm" | "bc3-rgba-unorm-srgb" | "bc4-r-unorm" | "bc4-r-snorm" | "bc5-rg-unorm" | "bc5-rg-snorm" | "bc6h-rgb-ufloat" | "bc6h-rgb-float" | "bc7-rgba-unorm" | "bc7-rgba-unorm-srgb" | "etc2-rgb8unorm" | "etc2-rgb8unorm-srgb" | "etc2-rgb8a1unorm" | "etc2-rgb8a1unorm-srgb" | "etc2-rgba8unorm" | "etc2-rgba8unorm-srgb" | "eac-r11unorm" | "eac-r11snorm" | "eac-rg11unorm" | "eac-rg11snorm" | "astc-4x4-unorm" | "astc-4x4-unorm-srgb" | "astc-5x4-unorm" | "astc-5x4-unorm-srgb" | "astc-5x5-unorm" | "astc-5x5-unorm-srgb" | "astc-6x5-unorm" | "astc-6x5-unorm-srgb" | "astc-6x6-unorm" | "astc-6x6-unorm-srgb" | "astc-8x5-unorm" | "astc-8x5-unorm-srgb" | "astc-8x6-unorm" | "astc-8x6-unorm-srgb" | "astc-8x8-unorm" | "astc-8x8-unorm-srgb" | "astc-10x5-unorm" | "astc-10x5-unorm-srgb" | "astc-10x6-unorm" | "astc-10x6-unorm-srgb" | "astc-10x8-unorm" | "astc-10x8-unorm-srgb" | "astc-10x10-unorm" | "astc-10x10-unorm-srgb" | "astc-12x10-unorm" | "astc-12x10-unorm-srgb" | "astc-12x12-unorm" | "astc-12x12-unorm-srgb")[];
export declare const kDifferentBaseFormatRegularTextureFormats: ("r8unorm" | "r8snorm" | "r8uint" | "r8sint" | "rg8unorm" | "rg8snorm" | "rg8uint" | "rg8sint" | "rgba8unorm" | "rgba8unorm-srgb" | "rgba8snorm" | "rgba8uint" | "rgba8sint" | "bgra8unorm" | "bgra8unorm-srgb" | "r16unorm" | "r16snorm" | "r16uint" | "r16sint" | "r16float" | "rg16unorm" | "rg16snorm" | "rg16uint" | "rg16sint" | "rg16float" | "rgba16unorm" | "rgba16snorm" | "rgba16uint" | "rgba16sint" | "rgba16float" | "r32uint" | "r32sint" | "r32float" | "rg32uint" | "rg32sint" | "rg32float" | "rgba32uint" | "rgba32sint" | "rgba32float" | "rgb10a2uint" | "rgb10a2unorm" | "rg11b10ufloat" | "rgb9e5ufloat")[];
export declare const kOptionalTextureFormats: GPUTextureFormat[];
/**
 * Returns true if a texture can be possibly used with copyExternalImageToTexture.
 * The texture may require certain features to be enabled.
 */
export declare function isTextureFormatPossiblyUsableWithCopyExternalImageToTexture(format: GPUTextureFormat): boolean;
/**
 * Returns true if a texture can be used with copyExternalImageToTexture.
 */
export declare function isTextureFormatUsableWithCopyExternalImageToTexture(features: GPUSupportedFeatures, format: GPUTextureFormat): boolean;
/** `kDepthStencilFormatResolvedAspect[format][aspect]` returns the aspect-specific format for a
 *  depth-stencil format, or `undefined` if the format doesn't have the aspect.
 */
export declare const kDepthStencilFormatResolvedAspect: {
    readonly [k in DepthStencilFormat]: {
        readonly [a in GPUTextureAspect]: DepthStencilFormat | undefined;
    };
};
/**
 * @returns the GPUTextureFormat corresponding to the @param aspect of @param format.
 * This allows choosing the correct format for depth-stencil aspects when creating pipelines that
 * will have to match the resolved format of views, or to get per-aspect information like the
 * `blockByteSize`.
 *
 * Many helpers use an `undefined` `aspect` to means `'all'` so this is also the default for this
 * function.
 */
export declare function resolvePerAspectFormat(format: GPUTextureFormat, aspect?: GPUTextureAspect): GPUTextureFormat;
/**
 * @returns the sample type of the specified aspect of the specified format.
 */
export declare function sampleTypeForFormatAndAspect(format: GPUTextureFormat, aspect: GPUTextureAspect): 'uint' | 'depth' | 'float' | 'sint' | 'unfilterable-float';
/**
 * Gets all copyable aspects for copies between texture and buffer for specified depth/stencil format and copy type, by spec.
 */
export declare function depthStencilFormatCopyableAspects(type: ImageCopyType, format: DepthStencilFormat): readonly GPUTextureAspect[];
/**
 * Computes whether a copy between a depth/stencil texture aspect and a buffer is supported, by spec.
 */
export declare function depthStencilBufferTextureCopySupported(type: ImageCopyType, format: DepthStencilFormat, aspect: GPUTextureAspect): boolean;
/**
 * Returns the byte size of the depth or stencil aspect of the specified depth/stencil format,
 * or -1 if none.
 */
export declare function depthStencilFormatAspectSize(format: DepthStencilFormat, aspect: 'depth-only' | 'stencil-only'): 1 | 2 | 4 | -1;
/**
 * Returns true iff a texture can be created with the provided GPUTextureDimension
 * (defaulting to 2d) and GPUTextureFormat, by spec.
 */
export declare function textureFormatAndDimensionPossiblyCompatible(dimension: undefined | GPUTextureDimension, format: GPUTextureFormat): boolean;
/**
 * Returns true iff a texture can be created with the provided GPUTextureDimension
 * (defaulting to 2d) and GPUTextureFormat for a GPU device, by spec.
 */
export declare function textureDimensionAndFormatCompatibleForDevice(features: GPUSupportedFeatures, dimension: undefined | GPUTextureDimension, format: GPUTextureFormat): boolean;
/**
 * Returns true iff a texture can be used with the provided GPUTextureViewDimension
 */
export declare function textureViewDimensionAndFormatCompatibleForDevice(features: GPUSupportedFeatures, dimension: GPUTextureViewDimension, format: GPUTextureFormat): boolean;
/**
 * Check if two formats are view format compatible.
 */
export declare function textureFormatsAreViewCompatible(features: GPUSupportedFeatures, a: GPUTextureFormat, b: GPUTextureFormat): boolean;
/**
 * Gets the block width, height, and bytes per block for a color texture format.
 * This is for color textures only. For all texture formats @see {@link getBlockInfoForTextureFormat}
 * The point of this function is bytesPerBlock is always defined so no need to check that it's not
 * vs getBlockInfoForTextureFormat where it may not be defined.
 */
export declare function getBlockInfoForColorTextureFormat(format: ColorTextureFormat): {
    blockWidth: 1 | 4 | 8 | 5 | 6 | 10 | 12;
    blockHeight: 1 | 4 | 8 | 5 | 6 | 10 | 12;
    bytesPerBlock: 1 | 2 | 4 | 8 | 16;
};
/**
 * Gets the block width, height, and bytes per block for a sized texture format.
 * This is for sized textures only. For all texture formats @see {@link getBlockInfoForTextureFormat}
 * The point of this function is bytesPerBlock is always defined so no need to check that it's not
 * vs getBlockInfoForTextureFormat where it may not be defined.
 */
export declare function getBlockInfoForSizedTextureFormat(format: SizedTextureFormat): {
    blockWidth: 1 | 4 | 8 | 5 | 6 | 10 | 12;
    blockHeight: 1 | 4 | 8 | 5 | 6 | 10 | 12;
    bytesPerBlock: 1 | 2 | 4 | 8 | 16;
};
/**
 * Gets the block width, height, and bytes per block for an encodable texture format.
 * This is for encodable textures only. For all texture formats @see {@link getBlockInfoForTextureFormat}
 * The point of this function is bytesPerBlock is always defined so no need to check that it's not
 * vs getBlockInfoForTextureFormat where it may not be defined.
 */
export declare function getBlockInfoForEncodableTextureFormat(format: EncodableTextureFormat): {
    blockWidth: 1;
    blockHeight: 1;
    bytesPerBlock: 1 | 2 | 4 | 8 | 16;
};
/**
 * Gets the block width, height, and bytes per block for a color texture format.
 * Note that bytesPerBlock will be undefined if format's size is undefined.
 * If you are only using color or encodable formats, @see {@link getBlockInfoForColorTextureFormat}
 * or {@link getBlockInfoForEncodableTextureFormat}
 */
export declare function getBlockInfoForTextureFormat(format: GPUTextureFormat): {
    blockWidth: 1 | 4 | 8 | 5 | 6 | 10 | 12;
    blockHeight: 1 | 4 | 8 | 5 | 6 | 10 | 12;
    bytesPerBlock: 1 | 2 | 4 | 8 | 16 | undefined;
};
/**
 * Returns the "byteCost" of rendering to a color texture format.
 */
export declare function getColorRenderByteCost(format: PossibleColorRenderTextureFormat): 1 | 2 | 4 | 8 | 16;
/**
 * Returns the "alignment" of rendering to a color texture format.
 */
export declare function getColorRenderAlignment(format: PossibleColorRenderTextureFormat): 1 | 2 | 4;
/**
 * Gets the baseFormat for a texture format.
 */
export declare function getBaseFormatForTextureFormat(format: (typeof kDifferentBaseFormatTextureFormats)[number]): ColorTextureFormat;
export declare function getBaseFormatForRegularTextureFormat(format: RegularTextureFormat): RegularTextureFormat | undefined;
/**
 * Gets the feature needed for a give texture format or undefined if none.
 */
export declare function getRequiredFeatureForTextureFormat(format: GPUTextureFormat): "depth32float-stencil8" | "texture-compression-bc" | "texture-compression-etc2" | "texture-compression-astc" | "texture-formats-tier1" | undefined;
export declare function getFeaturesForFormats<T>(formats: readonly (T & (GPUTextureFormat | undefined))[]): readonly (GPUFeatureName | undefined)[];
export declare function filterFormatsByFeature<T>(feature: GPUFeatureName | undefined, formats: readonly (T & (GPUTextureFormat | undefined))[]): readonly (T & (GPUTextureFormat | undefined))[];
export declare function canCopyToAspectOfTextureFormat(format: GPUTextureFormat, aspect: GPUTextureAspect): boolean | undefined;
export declare function canCopyFromAspectOfTextureFormat(format: GPUTextureFormat, aspect: GPUTextureAspect): boolean | undefined;
/**
 * Returns true if all aspects of texture can be copied to (used with COPY_DST)
 */
export declare function canCopyToAllAspectsOfTextureFormat(format: GPUTextureFormat): boolean;
/**
 * Returns true if all aspects of texture can be copied from (used with COPY_SRC)
 */
export declare function canCopyFromAllAspectsOfTextureFormat(format: GPUTextureFormat): boolean;
export declare function isCompressedTextureFormat(format: GPUTextureFormat): boolean;
export declare function isBCTextureFormat(format: GPUTextureFormat): boolean;
export declare function isASTCTextureFormat(format: GPUTextureFormat): boolean;
export declare function isColorTextureFormat(format: GPUTextureFormat): boolean;
export declare function isDepthTextureFormat(format: GPUTextureFormat): boolean;
export declare function isStencilTextureFormat(format: GPUTextureFormat): boolean;
export declare function isDepthStencilTextureFormat(format: GPUTextureFormat): boolean;
export declare function isDepthOrStencilTextureFormat(format: GPUTextureFormat): boolean;
export declare function isEncodableTextureFormat(format: GPUTextureFormat): boolean;
/**
 * Returns if a texture can be used as a render attachment. some color formats and all
 * depth textures and stencil textures are usable with usage RENDER_ATTACHMENT.
 */
export declare function isTextureFormatUsableAsRenderAttachment(features: GPUSupportedFeatures, format: GPUTextureFormat): boolean;
/**
 * Returns if a texture can be used as a "colorAttachment".
 */
export declare function isTextureFormatColorRenderable(features: GPUSupportedFeatures, format: GPUTextureFormat): boolean;
/**
 * Returns if a texture can be blended.
 */
export declare function isTextureFormatBlendable(features: GPUSupportedFeatures, format: GPUTextureFormat): boolean;
/**
 * Returns true if a texture can be filtered.
 */
export declare function isTextureFormatFilterable(features: GPUSupportedFeatures, format: GPUTextureFormat): boolean;
/**
 * Returns the texture's type (float, unsigned-float, sint, uint, depth)
 */
export declare function getTextureFormatType(format: GPUTextureFormat, aspect?: GPUTextureAspect): "depth" | "float" | "uint" | "sint" | "unfilterable-float";
/**
 * Returns the regular texture's type (float, unsigned-float, sint, uint)
 */
export declare function getTextureFormatColorType(format: RegularTextureFormat): "float" | "uint" | "sint" | "unfilterable-float";
/**
 * Returns true if a texture can possibly be used as a render attachment.
 * The texture may require certain features to be enabled.
 */
export declare function isTextureFormatPossiblyUsableAsRenderAttachment(format: GPUTextureFormat): boolean;
/**
 * Returns true if a texture can possibly be used as a color render attachment.
 * The texture may require certain features to be enabled.
 */
export declare function isTextureFormatPossiblyUsableAsColorRenderAttachment(format: GPUTextureFormat): boolean;
/**
 * Returns true if a texture can possibly be used multisampled.
 * The texture may require certain features to be enabled.
 */
export declare function isTextureFormatPossiblyMultisampled(format: GPUTextureFormat): boolean;
/**
 * Returns true if a texture can possibly be resolved.
 * The texture may require certain features to be enabled.
 */
export declare function isTextureFormatPossiblyResolvable(format: GPUTextureFormat): boolean;
/**
 * Returns true if a texture can possibly be used as a storage texture.
 * The texture may require certain features to be enabled.
 */
export declare function isTextureFormatPossiblyStorageReadable(format: GPUTextureFormat): boolean;
/**
 * Returns true if a texture can possibly be used as a read-write storage texture.
 * The texture may require certain features to be enabled.
 */
export declare function isTextureFormatPossiblyStorageReadWritable(format: GPUTextureFormat): boolean;
export declare function is16Float(format: GPUTextureFormat): format is "r16float" | "rg16float" | "rgba16float";
export declare function is32Float(format: GPUTextureFormat): format is "r32float" | "rg32float" | "rgba32float";
/**
 * Returns true if texture is filterable as `texture_xxx<f32>`
 *
 * examples:
 * * 'rgba8unorm' -> true
 * * 'depth16unorm' -> false
 * * 'rgba32float' -> true (you need to enable feature 'float32-filterable')
 */
export declare function isTextureFormatPossiblyFilterableAsTextureF32(format: GPUTextureFormat): boolean;
export declare const kCompatModeUnsupportedStorageTextureFormats: readonly GPUTextureFormat[];
/**
 * Return true if the format can be used with the given access mode
 * access can be either GPUStorageTextureAccess or WGSL access
 * Note: Some formats can be compiled in a shader but can not be used
 * in a pipeline or elsewhere. This function returns whether or not the format
 * can be used in general. If you want to know if the format can used when compiling
 * a shader @see {@link isTextureFormatUsableAsStorageFormatInCreateShaderModule}
 */
export declare function isTextureFormatUsableWithStorageAccessMode(features: GPUSupportedFeatures, format: GPUTextureFormat, access: GPUStorageTextureAccess | 'read' | 'write' | 'read_write'): boolean;
/**
 * Returns true if format can be used with createShaderModule on the device.
 * Some formats may require a feature to be enabled before they can be used
 * as a storage texture. Others, can't be used in a pipeline but can be compiled
 * in a shader. Examples are rg32float, rg32uint, rg32sint which are not usable
 * in compat mode but shaders can be compiled. Similarly, bgra8unorm can be
 * compiled but can't be used in a pipeline unless feature 'bgra8unorm-storage'
 * is available.
 */
export declare function isTextureFormatUsableAsStorageFormatInCreateShaderModule(features: GPUSupportedFeatures, format: GPUTextureFormat): boolean;
export declare function isRegularTextureFormat(format: GPUTextureFormat): boolean;
/**
 * Returns true if format is both compressed and a float format, for example 'bc6h-rgb-ufloat'.
 */
export declare function isCompressedFloatTextureFormat(format: GPUTextureFormat): boolean;
/**
 * Returns true if format is sint or uint
 */
export declare function isSintOrUintFormat(format: GPUTextureFormat): boolean;
/**
 * Returns true if format can be multisampled.
 */
export declare const kCompatModeUnsupportedMultisampledTextureFormats: readonly GPUTextureFormat[];
/**
 * Returns true if you can make a multisampled texture from the given format.
 */
export declare function isTextureFormatMultisampled(features: GPUSupportedFeatures, format: GPUTextureFormat): boolean;
/**
 * Returns true if a texture can be "resolved". uint/sint formats can be multisampled but
 * can not be resolved.
 */
export declare function isTextureFormatResolvable(features: GPUSupportedFeatures, format: GPUTextureFormat): boolean;
export declare const kFeaturesForFormats: readonly (GPUFeatureName | undefined)[];
/**
 * Given an array of texture formats return the number of bytes per sample.
 */
export declare function computeBytesPerSampleFromFormats(formats: readonly GPUTextureFormat[]): number;
/**
 * Given an array of GPUColorTargetState return the number of bytes per sample
 */
export declare function computeBytesPerSample(targets: GPUColorTargetState[]): number;
/**
 * Returns the maximum valid size in each dimension for a given texture format.
 * This is useful because compressed formats must be a multiple of blocks in size
 * so, for example, the largest valid width of a 2d texture
 * roundDown(device.limits.maxTextureDimension2D, blockWidth)
 */
export declare function getMaxValidTextureSizeForFormatAndDimension(device: GPUDevice, format: GPUTextureFormat, dimension: GPUTextureDimension): [number, number, number];
export {};
