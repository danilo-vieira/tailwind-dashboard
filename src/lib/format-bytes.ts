export function formatBytes(size: number) {
  const fileSizeInKB = size / 1024

  if (fileSizeInKB > 1024) {
    const fileSizeInMB = fileSizeInKB / 1024

    return fileSizeInMB.toFixed(1).concat(' MB')
  }

  return fileSizeInKB.toFixed(1).concat(' KB')
}
