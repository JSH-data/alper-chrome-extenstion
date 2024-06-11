import { getModalTitle, getProblemName } from "@/programmers/dom-finder";
import {
  getSubmittedCode,
  getFileExtension,
} from "@/programmers/problem-parser";

export default class ProgrammersEvent {
  public static addSubmitEvent(buttonElement: Element, cb: () => void) {
    buttonElement.addEventListener("click", () => {
      cb();
    });
  }

  public static intervalEvent(onError: (errorMessage: string) => void) {
    let retryCount = 10;
    let timerId: null | ReturnType<typeof setInterval> = null;

    timerId = setInterval(async () => {
      const modalTile = getModalTitle();

      if (modalTile?.textContent === "정답입니다!" && timerId) {
        try {
          const code = getSubmittedCode();
          const extension = getFileExtension();
          const problemName = getProblemName();

          const fileName = `${problemName}.${extension}`;

          await Github.uploadOrUpdate(fileName, code, "programmers");

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
        console.log("재시도 횟수를 초과하였습니다.");
        clearInterval(timerId);
      }

      retryCount--;
    }, 2000);
  }
}
