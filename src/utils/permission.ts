async function checkPermission() {
  const search = window.location.search;

  const params = new URLSearchParams(search);

  const authCode = params.get("code");

  if (authCode) {
    const accessToken = await getAccessToken(authCode);

    if (accessToken !== null) {
      ChromeStorage.setData({ [CONSTANT.ACCESS_TOKEN]: accessToken }).then(
        () => {
          console.log("SAVE SUCCESS!");
        }
      );
    }
  }
}

checkPermission();
