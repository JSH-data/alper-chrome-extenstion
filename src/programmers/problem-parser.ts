export function getFileExtension() {
  const language = document
    .querySelector(".dropdown-language button")
    ?.textContent?.trim();

  if (language && EXTENSIONS_NAME[language]) {
    return EXTENSIONS_NAME[language];
  }

  throw new Error(MESSAGE_TEXT.E11);
}

export function getSubmittedCode() {
  const codeElement = document.querySelector("#code");

  if (codeElement === null) {
    throw new Error(MESSAGE_TEXT.E21);
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-expect-error
  const codeText = codeElement.value as string;

  return contentEncoder(codeText);
}
