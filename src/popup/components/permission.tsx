export default function Permission() {
  const moveToPermissionPage = () => {
    const GITHUB_LOGIN_URL =
      "https://github.com/login/oauth/authorize?client_id=Ov23lig139G2CisyrKek&scope=repo%20read%3Auser";

    chrome.tabs.update({
      url: GITHUB_LOGIN_URL,
    });

    window.close();
  };

  return (
    <section className="permission-container">
      <h5 className="permission-header">
        Press the button below to get Github Permission!
      </h5>
      <button onClick={moveToPermissionPage} className="permission-link">
        Go to Permission
      </button>
    </section>
  );
}
