import { findAcceptText, getSubmittedCode } from "@/leetcode/dom-finder";
import { getFileExtension, getProblemName } from "@/leetcode/problem-parser";

export default class LeetcodeEvent {
  public static addSubmitEvent(buttonElement: Element, cb: () => void) {
    buttonElement.addEventListener("click", () => {
      cb();
    });
  }

  public static intervalEvent(onError: (errorMessage: string) => void) {
    let retryCount = 10;
    let timerId: null | ReturnType<typeof setInterval> = null;

    timerId = setInterval(async () => {
      const isAccepted = findAcceptText();

      if (isAccepted && timerId) {
        try {
          const code = getSubmittedCode();
          const extension = getFileExtension();
          const { problemName } = getProblemName();

          const fileName = `${problemName}.${extension}`;

          await Github.uploadOrUpdate(fileName, code, "leetcode");

          clearInterval(timerId);
        } catch (error) {
          if (error instanceof Error) {
            onError(error.message);
          }

          console.error(error);

          clearInterval(timerId);
        }
      }

      if (timerId && retryCount < 0) {
        console.error("재시도 횟수를 초과하였습니다.");
        clearInterval(timerId);
      }

      retryCount--;
    }, 2000);
  }
}
