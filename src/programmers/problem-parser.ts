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
  const codes = document.querySelector("textarea");

  if (codes === null || codes.textContent === null) {
    throw new Error("There is no codes! Upload is Failed!");
  }

  return contentEncoder(codes.textContent);
}
