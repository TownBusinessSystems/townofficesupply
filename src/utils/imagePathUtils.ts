
/**
 * Utility function to fix image paths consistently across the application
 * This handles different path formats and ensures images display correctly
 */
export const fixImagePath = (path: string | undefined): string => {
  // If path is undefined or empty, return a placeholder
  if (!path) return "https://placehold.co/800x800/e2e8f0/a1a1aa?text=Product+Image";
  
  // Handle paths that start with "public/"
  if (path.startsWith("public/")) {
    return path.substring(7);
  }
  
  // Handle paths that start with "/"
  if (path.startsWith("/")) {
    return path.substring(1);
  }
  
  // Return the path as is for all other cases
  return path;
};
