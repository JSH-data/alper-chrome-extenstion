export function getFileExtension() {
  const language = document.querySelector("#editor button")?.textContent;

  if (language && EXTENSIONS_NAME[language]) {
    return EXTENSIONS_NAME[language];
  }

  throw new Error(MESSAGE_TEXT.E11);
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
