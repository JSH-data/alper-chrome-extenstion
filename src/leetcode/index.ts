import { getSubmitButton, getCodeTabBar } from "./dom-finder";
import LeetcodeEvent from "@/leetcode/event-manager";

checkContentLoad('[data-e2e-locator="console-submit-button"]', "#__next").then(
  (res) => {
    const submitButton = getSubmitButton();
    const codeTabBar = getCodeTabBar();

    if (res && codeTabBar) {
      StatusMessage.appendStatusMessage(codeTabBar);

      LeetcodeEvent.addSubmitEvent(submitButton, () =>
        LeetcodeEvent.intervalEvent(StatusMessage.setMessage),
      );

      ChromeStorage.getUserInfo()
        .then(() => {
          console.log("인증에 성공했습니다!");
        })
        .catch((error: Error) => {
          StatusMessage.setMessage(error.message);
        });
    }
  },
);
