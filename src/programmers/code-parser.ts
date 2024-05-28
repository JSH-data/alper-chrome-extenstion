export function getSubmittedCode() {
  const codes = document.querySelectorAll("pre.CodeMirror-line");

  let totalCode = "";

  for (let i = 0; i < codes.length; i += 1) {
    if (i === codes.length - 1) {
      totalCode += codes[i].textContent;

      continue;
    }

    totalCode += codes[i].textContent + "\n";
  }

  return contentEncoder(totalCode);
}
