export function getFileExtension() {
  const language = document
    .querySelector(".dropdown-language button")
    ?.textContent?.trim();

  if (language && EXTENSIONS_NAME[language]) {
    return EXTENSIONS_NAME[language];
  }

  throw new Error("Failed to get file extensions");
}

export function getSubmittedCode() {
  const codeElement = document.querySelector("#code");

  if (codeElement === null) {
    throw new Error("There is no codes! Upload is Failed!");
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-expect-error
  const codeText = codeElement.value as string;

  return contentEncoder(codeText);
}
