import META from '@adkit.so/meta-pixel'
import type { MetaPixelConfig } from '@adkit.so/meta-pixel'

/**
 * Initialize Meta Pixel (non-hook version)
 * 
 * Call this once in your app root if you prefer not to use hooks.
 * 
 * @param config - Meta Pixel configuration
 * 
 * @example
 * ```tsx
 * // main.tsx or App.tsx
 * import { initMetaPixel } from '@adkit.so/meta-pixel-react'
 * 
 * initMetaPixel({ pixelIds: 'YOUR_PIXEL_ID' })
 * 
 * // Then use the hook anywhere
 * import { useMetaPixel } from '@adkit.so/meta-pixel-react'
 * 
 * function MyComponent() {
 *   const meta = useMetaPixel()
 *   meta.track('Purchase', { value: 99.99, currency: 'USD' })
 * }
 * ```
 */
export function initMetaPixel(config: MetaPixelConfig): void {
  if (!META.isLoaded()) {
    META.init(config)
  }
}

