// eslint-disable-next-line @typescript-eslint/no-unused-vars
class Github {
  static async uploadOrUpdate(
    fileName: string,
    code: string,
    platform: string,
  ) {
    const { repo, directory, owner, token, platformOption } =
      await ChromeStorage.getUserInfo();

    const encodedFileName = encodeURIComponent(fileName);
    const directoryPath = `${directory.length ? directory + "/" : ""}${platformOption === "ON" ? platform + "/" : ""}`;
    const encodedFilePath = `${directoryPath}${encodedFileName}`;
    const normalPath = `${directoryPath}${fileName}`;

    const contentInfo = await getContentInfo({
      repo,
      token,
      urlPath: encodedFilePath,
      owner,
    });

    if (contentInfo?.sha) {
      const commitMessage = getUpdateCommitMessage(fileName, platform);

      return updateFile({
        repo,
        owner,
        path: normalPath,
        urlPath: encodedFilePath,
        token,
        message: commitMessage,
        content: code,
        sha: contentInfo.sha,
      });
    }

    const commitMessage = getUploadCommitMessage(fileName, platform);

    return uploadNewFile({
      repo,
      owner,
      path: normalPath,
      token,
      urlPath: encodedFilePath,
      message: commitMessage,
      content: code,
    });
  }
}
