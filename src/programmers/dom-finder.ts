export function getSubmitButton() {
  console.log("findSubmitButton");

  const submitButton = document.getElementById("submit-code");

  if (!submitButton) {
    throw new Error("Could not find submitButton");
  }

  return submitButton;
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

export function findModalTitle() {
  return document.querySelector("h4.modal-title");
}
