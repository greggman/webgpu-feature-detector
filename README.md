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

## Docs

See [here](https://greggman.github.io/webgpu-feature-detector/docs)

## Example

Tex

## License

[MIT](LICENSE.md)
