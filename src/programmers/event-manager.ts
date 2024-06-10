import { findModalTitle, getProblemName } from "@/programmers/dom-finder";
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

  public static intervalEvent() {
    let retryCount = 10;
    let timerId: null | ReturnType<typeof setInterval> = null;

    timerId = setInterval(async () => {
      console.log("인터벌이 작동됩니다.");
      const modalTile = findModalTitle();

      console.log(modalTile);

      if (modalTile?.textContent === "정답입니다!" && timerId) {
        console.log("문제 풀이가 정상적으로 확인되었습니다.");

        try {
          const code = getSubmittedCode();
          const extension = getFileExtension();
          const problemName = getProblemName();

          const fileName = `${problemName}.${extension}`;

          console.log(problemName);

          await Github.uploadOrUpdate(fileName, code, "programmers");

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
