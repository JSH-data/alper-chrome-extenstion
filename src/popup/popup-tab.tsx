import React, { useEffect, useState } from "react";
import TextInput from "@/popup/components/text-input";
import Permission from "@/popup/components/permission.tsx";
import "./index.css";

function PopupTab() {
  const [repoName, setRepoName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [savePath, setSavePath] = useState("");
  const [isPermitted, setIsPermitted] = useState<
    "PENDING" | "REJECTED" | "PERMITTED"
  >("PENDING");

  const onChangeRepoInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRepoName(event.target.value);
  };

  const onChangeSavePathInput = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSavePath(event.target.value);
  };

  const loadUserName = async (token: string): Promise<string | undefined> => {
    const nameFromStorage = await ChromeStorage.getData(CONSTANT.OWNER_NAME);

    if (nameFromStorage?.length) {
      return nameFromStorage;
    }

    const nameFromGit = await getUserName(token);

    if (nameFromGit === null) {
      setIsPermitted("REJECTED");

      return;
    }

    await ChromeStorage.setData({
      [CONSTANT.OWNER_NAME]: nameFromGit,
    });

    return nameFromGit;
  };

  const getUploadInfo = async (token: string) => {
    const name = await loadUserName(token);

    if (name) {
      setOwnerName(name);
    }

    const directory = await ChromeStorage.getData(CONSTANT.STORAGE_PATH);

    if (directory?.length) {
      setSavePath(directory);
    }

    const repo = await ChromeStorage.getData(CONSTANT.REPO_NAME);

    if (repo?.length) {
      setRepoName(repo);
    }
  };

  const getUserData = async () => {
    const token = await ChromeStorage.getData(CONSTANT.ACCESS_TOKEN);

    console.log("token", token);

    if (token) {
      await getUploadInfo(token);

      setIsPermitted("PERMITTED");

      return;
    }

    setIsPermitted("REJECTED");
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div
      className={"popup-tab"}
      style={{
        display: "flex",
        flexDirection: "column",
        width: "200px",
      }}
    >
      <h3 className="title">Welcome! To Alper!</h3>
      {isPermitted === "PENDING" && <h5>Loading...</h5>}

      {isPermitted === "REJECTED" && <Permission />}

      {isPermitted === "PERMITTED" && (
        <>
          <p>Have a Nice Day {ownerName}!</p>
          <TextInput
            onChangeHandler={onChangeRepoInput}
            value={repoName}
            labelText="Repository Name"
            keyId={CONSTANT.REPO_NAME}
          />
          <TextInput
            onChangeHandler={onChangeSavePathInput}
            value={savePath}
            labelText="Directory"
            keyId={CONSTANT.STORAGE_PATH}
          />
        </>
      )}
    </div>
  );
}

export default PopupTab;
