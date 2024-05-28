export function findSubmitButton() {
  console.log("findSubmitButton");

  const submitButton = document.querySelector(
    '[data-e2e-locator="console-submit-button"]'
  );

  if (!submitButton) {
    throw new Error("Could not find submitButton");
  }

  return submitButton;
}

export function findAcceptText(): boolean {
  const accepedText = document.querySelectorAll(
    '[data-e2e-locator="submission-result"]'
  );

  return !!accepedText.length;
}

export function getSubmittedCode() {
  const codeBlock = document.getElementsByClassName(
    "flex items-center gap-2 pb-2 text-sm font-medium text-text-tertiary"
  )[0].parentElement;

  const codeElement = codeBlock?.querySelector("code");

  if (!codeElement) {
    throw new Error("Could not find code block");
  }

  return contentEncoder(codeElement.innerText);
}
