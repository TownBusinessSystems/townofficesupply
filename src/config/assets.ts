export const ASSET_PATHS = {
  blackToner: {
    base: '/assets/blacktoner',
    getImagePath: (filename: string) => `${ASSET_PATHS.blackToner.base}/${filename}.jpg`
  }
} as const; 