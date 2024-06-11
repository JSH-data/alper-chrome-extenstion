// Content를 Base64 포멧으로 변환하기 위한 함수입니다.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function contentEncoder(code: string) {
  // console.log("original code", code);

  const encoder = new TextEncoder();

  const bytes = encoder.encode(code);
  // console.log("bytes", bytes);

  const binaryString = String.fromCodePoint(...bytes);
  // console.log("binary string", binaryString);

  const base64EncodedString = btoa(binaryString);

  // console.log("After encode", base64EncodedString);

  return base64EncodedString;
}
