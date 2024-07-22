export function getSubmitButton() {
  return document.getElementById("submit-code");
}

export function getEditorNavbar() {
  return document.querySelector(".editor ul");
}

export function getCodeBlock() {
  return document.querySelectorAll("pre.CodeMirror-Line");
}

export function getProblemName() {
  const fileNameBlock = document.querySelector(".breadcrumb > .active");

  if (fileNameBlock === null || fileNameBlock.textContent === null) {
    throw new Error(MESSAGE_TEXT.E21);
  }

  return fileNameBlock.textContent;
}

export function getModalTitle() {
  return document.querySelector("h4.modal-title");
}
