import { useState, useEffect } from "react";

type repoInfo = {
  name: string;
};

export default function useUserInfo() {
  const [repoName, setRepoName] = useState("");
  const [repoNames, setRepoNames] = useState<string[]>([]);
  const [ownerName, setOwnerName] = useState("");
  const [savePath, setSavePath] = useState("");
  const [authStatus, setAuthStatus] = useState<
    "PENDING" | "REJECTED" | "PERMITTED"
  >("PENDING");

  const getRepoNames = async (token: string, userName: string) => {
    const result = await fetch(
      `https://api.github.com/users/${userName}/repos`,
      {
        method: "GET",
        headers: {
          Accept: "application/vnd.github+json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      },
    );

    if (!result.ok) {
      throw new Error("Failed to get repo names.");
    }

    const repoInfo = await result.json();

    const names = repoInfo.map((repo: repoInfo) => repo.name);

    setRepoNames(names);
  };

  const setDefaultInfo = async () => {
    const directory = await ChromeStorage.getData(CONSTANT.STORAGE_PATH);
    if (directory?.length) {
      setSavePath(directory);
    }

    const repo = await ChromeStorage.getData(CONSTANT.REPO_NAME);
    if (repo?.length) {
      setRepoName(repo);
    }
  };

  const loadUserName = async (token: string): Promise<string> => {
    const nameFromStorage = await ChromeStorage.getData(CONSTANT.OWNER_NAME);

    if (nameFromStorage?.length) {
      return nameFromStorage;
    }

    const nameFromGit = await getUserName(token);

    if (nameFromGit === null) {
      throw new Error(`Could not find user name from ${token}`);
    }

    await ChromeStorage.setData({
      [CONSTANT.OWNER_NAME]: nameFromGit,
    });

    return nameFromGit;
  };

  const getUserInfo = async () => {
    try {
      const token = await ChromeStorage.getData(CONSTANT.ACCESS_TOKEN);

      if (!token) {
        throw new Error("No access token");
      }
      const name = await loadUserName(token);

      await getRepoNames(token, name);
      await setDefaultInfo();

      setOwnerName(name);

      setAuthStatus("PERMITTED");
    } catch (error) {
      console.log(error);

      setAuthStatus("REJECTED");
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return {
    authStatus,
    ownerName,
    repoNames,
    repoName,
    savePath,
    setSavePath,
    setRepoName,
  };
}
