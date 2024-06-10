import { findAcceptText, getSubmittedCode } from "@/leetcode/dom-finder";
import { getFileExtension, getProblemName } from "@/leetcode/problem-parser";

export default class LeetcodeEvent {
  public static addSubmitEvent(buttonElement: Element, cb: () => void) {
    buttonElement.addEventListener("click", () => {
      cb();
    });
  }

  public static intervalEvent() {
    let retryCount = 10;
    let timerId: null | ReturnType<typeof setInterval> = null;

    timerId = setInterval(async () => {
      console.log("인터벌이 작동됩니다.");
      const isAccepted = findAcceptText();

      console.log(isAccepted);

      if (isAccepted && timerId) {
        console.log("문제 풀이가 정상적으로 확인되었습니다.");

        try {
          const code = getSubmittedCode();
          const extension = getFileExtension();
          const { problemName } = getProblemName();

          const fileName = `${problemName}.${extension}`;

          await Github.uploadOrUpdate(fileName, code, "leetcode");

          clearInterval(timerId);
        } catch (error) {
          console.log(error);
          clearInterval(timerId);
        }
      }

      if (timerId && retryCount < 0) {
        console.log("재시도 횟수를 초과하였습니다.");
        clearInterval(timerId);
      }

      retryCount--;
    }, 2000);
  }
}
