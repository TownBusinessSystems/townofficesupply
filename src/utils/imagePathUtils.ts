
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
  
  // Remove 'public/' prefix if it exists (common mistake in image paths)
  let cleanPath = path.startsWith('public/') ? path.substring(7) : path;
  
  // Ensure path starts with a slash for proper loading from the root
  if (!cleanPath.startsWith('/')) {
    cleanPath = `/${cleanPath}`;
  }
  
  // Return the clean path
  return cleanPath;
};
