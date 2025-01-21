export function getVersion(version: string | undefined): string {
  if (version) {
    return version;
  }
  return "不明";
}
