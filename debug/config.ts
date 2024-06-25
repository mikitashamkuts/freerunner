// Define individual flags to enable or disable the why-did-you-render debugging feature
export const isWhyDidItRenderEnabled = false;
const UIComponentWhyDidItRenderDebugActive = true;
const ScreenComponentWhyDidItRenderDebugActive = true;
const HolderComponentWhyDidItRenderDebugActive = true;

// Export a configuration object that consolidates the individual debug flags
export const whyDidItRenderConfig = {
  // Flag to enable/disable why-did-you-render debugging for UI components
  UIComponentDebugActive: UIComponentWhyDidItRenderDebugActive,
  // Flag to enable/disable why-did-you-render debugging for screen components
  ScreenComponentDebugActive: ScreenComponentWhyDidItRenderDebugActive,
  // Flag to enable/disable why-did-you-render debugging for holder components
  HolderComponentDebugActive: HolderComponentWhyDidItRenderDebugActive,
};
