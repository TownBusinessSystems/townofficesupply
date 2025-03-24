
/**
 * Utility function to fix image paths consistently across the application
 * This handles different path formats and ensures images display correctly
 */
export const fixImagePath = (path: string | undefined): string => {
  // If path is undefined or empty, return a placeholder
  if (!path) return "https://placehold.co/800x800/e2e8f0/a1a1aa?text=Product+Image";
  
  // If the path already starts with http or https, return it as is (external images)
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  
  // Ensure path starts with a slash for proper loading from the root
  if (!path.startsWith('/')) {
    return `/${path}`;
  }
  
  // Return the path with the slash
  return path;
};
