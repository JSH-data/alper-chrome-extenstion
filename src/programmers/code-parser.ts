export function getSubmittedCode() {
  const codes = document.querySelector("textarea");

  if (codes === null || codes.textContent === null) {
    throw new Error("There is no codes! Upload is Failed!");
  }

  return contentEncoder(codes.textContent);
}
