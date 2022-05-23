export function getStorageUrl (filename: string): string {
  return `${process.env.NEXT_PUBLIC_STORAGE_URL}/${filename}`
}