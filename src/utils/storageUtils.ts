export function getStorageUrl (filename: string): string {
  return `${process.env.storageUrl}/${filename}`
}