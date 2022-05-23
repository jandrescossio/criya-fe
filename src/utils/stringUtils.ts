export function ellipsis (str: string, length: number): string {
  return str.length > length ? `${str.substring(0, length)}...` : str
}

export function concatenateArray (arr: string[], separator: string): string {
  return arr.join(separator)
}
