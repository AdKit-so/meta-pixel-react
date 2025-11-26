// Primary API (Recommended - Simple & Clean)
export { useMetaPixel } from './useMetaPixel'
export { initMetaPixel } from './init'

// Alternative API (For those who prefer Provider pattern)
export { MetaPixelProvider } from './MetaPixelProvider'
export type { MetaPixelProviderProps } from './MetaPixelProvider'

// Re-export types from @adkit.so/meta-pixel for convenience
export type { 
  StandardEvent, 
  EventData, 
  EventMetaData, 
  MetaPixelConfig,
  MetaPixelInterface 
} from '@adkit.so/meta-pixel'

