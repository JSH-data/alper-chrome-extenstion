import { ChangeEvent } from "react";
import TextInput from "@/popup/components/text-input";
import Permission from "@/popup/components/permission.tsx";
import "./index.css";
import RepositorySelector from "@/popup/components/repository-selector";
import useUserInfo from "@/popup/hooks/useUserInfo.tsx";

function PopupTab() {
  const {
    authStatus,
    ownerName,
    repoNames,
    repoName,
    savePath,
    setSavePath,
    setRepoName,
  } = useUserInfo();

  const onChangeRepoInput = async (name: string) => {
    await ChromeStorage.setData({
      [CONSTANT.REPO_NAME]: name,
    });
    setRepoName(name);
  };

  const onChangeSavePathInput = (event: ChangeEvent<HTMLInputElement>) => {
    setSavePath(event.target.value);
  };

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
      {authStatus === "PENDING" && <h5>Loading...</h5>}

      {authStatus === "REJECTED" && <Permission />}

      {authStatus === "PERMITTED" && (
        <>
          <p>Have a Nice Day {ownerName}!</p>
          <RepositorySelector
            repoNames={repoNames}
            defaultRepo={repoName}
            onClickRepo={onChangeRepoInput}
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
