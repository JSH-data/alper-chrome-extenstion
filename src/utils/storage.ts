type UserInfo = {
  repo: string;
  directory: string;
  owner: string;
  token: string;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
      CONSTANT.LINKED_REPO,
      CONSTANT.OWNER_NAME,
      CONSTANT.ACCESS_TOKEN,
      CONSTANT.DIRECTORY_NAME,
    ]);

    return {
      repo: data[CONSTANT.LINKED_REPO],
      directory: data[CONSTANT.DIRECTORY_NAME],
      owner: data[CONSTANT.OWNER_NAME],
      token: data[CONSTANT.ACCESS_TOKEN],
    };
  }
}
