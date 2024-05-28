import { findSubmitButton } from "./dom-finder";
import LeetcodeEvent from "@/leetcode/event-manager";

function addIconsOnPage() {
  console.log("addIconsOnPage");

  const codeSectionHeader = document.getElementById("code_tabbar_outer");

  if (codeSectionHeader) {
    const signature = document.createElement("div");

    signature.textContent = "Alpher Is Running!";

    codeSectionHeader?.parentElement?.appendChild(signature);
  }
}

// InterSectionObserver로 변경 예정
setTimeout(() => {
  addIconsOnPage();

  const button = findSubmitButton();

  LeetcodeEvent.addSubmitEvent(button, LeetcodeEvent.intervalEvent);
}, 3000);
