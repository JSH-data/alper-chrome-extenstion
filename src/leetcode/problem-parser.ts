// Move to TestKeyFile and Make Freeze
const languageMap: { [key: string]: string } = {
  TypeScript: "ts",
  JavaScript: "js",
};

export function getFileExtension() {
  console.log("getFileExtension");

  const extensionChevronButton =
    document.getElementsByClassName("fa-chevron-down")[0];

  const extensionText =
    extensionChevronButton.parentNode?.previousSibling?.textContent;

  if (!extensionText) {
    throw new Error("Could not find file extension");
  }

  console.log(languageMap[extensionText]);

  return "ts";
}

export function getProblemName() {
  const path = window.location.pathname;

  const regex = /^\/problems\/([^/]+)\//;

  const match = path.match(regex);

  return {
    href: window.location.href,
    problemName: match?.[1] as string,
  };
}
