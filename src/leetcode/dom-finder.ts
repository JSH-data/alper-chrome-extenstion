export function getSubmitButton() {
  return document.querySelector('[data-e2e-locator="console-submit-button"]');
}

export function findAcceptText(): boolean {
  const acceptedText = document.querySelectorAll(
    '[data-e2e-locator="submission-result"]',
  );

  return !!acceptedText.length;
}

export function getSubmittedCode() {
  const codeBlock = document.getElementsByClassName(
    "flex items-center gap-2 pb-2 text-sm font-medium text-text-tertiary",
  )[0].parentElement;

  const codeElement = codeBlock?.querySelector("code");

  if (!codeElement) {
    throw new Error(MESSAGE_TEXT.E21);
  }

  return contentEncoder(codeElement.innerText);
}

export function getCodeTabBar() {
  return document.querySelector("#code_tabbar_outer div div");
}
