function getUpdateCommitMessage(fileName: string, platform: string) {
  return `Update Algorithm ${fileName} from ${platform}`;
}

function getUploadCommitMessage(fileName: string, platform: string) {
  return `Upload Algorithm ${fileName} from ${platform}`;
}
