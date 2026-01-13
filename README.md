# webgpu-feature-detector

Prototype for a webgpu feature detector library, at the moment
for texture formats.

Example:

```js
import { getTextureSupportedFeatures } from './webgpu-feature-detector.module.js';

const adapter = await navigator.gpu.requestAdapter();

const info = getTextureSupportedFeatures(adapter.features, 'rgba32float')
console.log(JSON.stringify(info, null, 2));
```

Might print something like:

```js
{
  "supported": true,
  "multisample": false,
  "resolvable": false,
  "blendable": true,
  "filterable": true,
  "colorRenderable": true,
  "renderAttachment": true,
  "copyExternalImageToTexture": true,
  "storageReadOnly": true,
  "storageWriteOnly": true,
  "storageReadWrite": true
}
```

**NOTE: DO NOT USE THIS LIBRARY (recommended)**

This is/was an experiment in supporting something like
D3D12's `device->CheckFeatureSupport`

The question is, is it really useful? The problem
with this API is it ends up suggesting you should check
for things you really should not likely be checking.

Example: whether or not `copyExternalImageToTexture` is
supported. Only a single format, `'rg11b10ufloat` has
optional support. It's relatively rare format. So you're
using that format then you might want to check but otherwise, checking for common format would just be a waste
of time.

Similarly, `filterable` and `blendable`. The only format that's generally
affected by this is `rgba32float`. So you should not be
checking other formats.

## Docs

See [here](https://greggman.github.io/webgpu-feature-detector/docs)

## License

[MIT](LICENSE.md)
