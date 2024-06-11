export function getSubmitButton() {
  const submitButton = document.getElementById("submit-code");

  if (!submitButton) {
    throw new Error("Could not find submitButton");
  }

  return submitButton;
}

export function getEditorNavbar() {
  const navbar = document.querySelector(".editor ul");

  if (navbar === null) {
    throw new Error("Could not find editor navbar");
  }

  return navbar;
}

export function getCodeBlock() {
  return document.querySelectorAll("pre.CodeMirror-Line");
}

export function getProblemName() {
  const fileNameBlock = document.querySelector(".breadcrumb > .active");

  if (fileNameBlock === null || fileNameBlock.textContent === null) {
    throw new Error("Problem name is missing");
  }

  return fileNameBlock.textContent;
}

export function getModalTitle() {
  return document.querySelector("h4.modal-title");
}
