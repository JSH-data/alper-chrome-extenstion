function PopupTab() {
  const onClickColorChanger = async () => {
    const [tab] = await chrome.tabs.query({
      active: true,
      currentWindow: true,
    });

    await chrome.scripting.executeScript({
      target: { tabId: tab.id! },
      func: () => {
        document.body.style.backgroundColor = "green";
      },
    });

    console.log("변경 성공");
  };

  const onClickStorageTester = () => {
    console.log("시작입니다잉");

    const value = "this_key";
    chrome.storage.local.set({ key: value }).then(() => {
      console.log("Value is set");
    });

    console.log("intermediate");

    chrome.storage.local.get(["key"]).then((result) => {
      console.log("Value is " + result.key);
    });

    console.log("last");
  };

  return (
    <>
      <div className="card">
        <button onClick={onClickStorageTester}>
          스토리지 저장 및 확인 버튼
        </button>
        <button onClick={onClickColorChanger}>색상을 바꾸는 버튼</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  );
}

export default PopupTab;
