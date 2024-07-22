type UserInfo = {
  repo: string;
  directory: string;
  owner: string;
  token: string;
  platformOption: string;
};

class ChromeStorage {
  static async getData(key: string | string[]) {
    const data = await chrome.storage.local.get(key);

    if (typeof key === "string") {
      return data[key];
    }

    return data;
  }

  static async setData(data: { [key: string]: string | number }) {
    await chrome.storage.local.set(data);
  }

  static async checkData(key: string) {
    const data = await ChromeStorage.getData(key);

    return !!data;
  }

  static async getUserInfo(): Promise<UserInfo> {
    const data = await ChromeStorage.getData([
      CONSTANT.REPO_NAME,
      CONSTANT.OWNER_NAME,
      CONSTANT.ACCESS_TOKEN,
      CONSTANT.STORAGE_PATH,
      CONSTANT.PLATFORM_OPTION,
    ]);

    if (
      !data[CONSTANT.REPO_NAME] ||
      !data[CONSTANT.OWNER_NAME] ||
      !data[CONSTANT.ACCESS_TOKEN]
    ) {
      throw new Error(MESSAGE_TEXT.E41);
    }

    return {
      repo: data[CONSTANT.REPO_NAME],
      owner: data[CONSTANT.OWNER_NAME],
      directory: data[CONSTANT.STORAGE_PATH] ? data[CONSTANT.STORAGE_PATH] : "",
      token: data[CONSTANT.ACCESS_TOKEN],
      platformOption: data[CONSTANT.PLATFORM_OPTION]
        ? data[CONSTANT.PLATFORM_OPTION]
        : "OFF",
    };
  }
}
