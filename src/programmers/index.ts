import { getSubmitButton } from "@/programmers/dom-finder.ts";
import ProgrammersEvent from "@/programmers/event-manager.ts";

console.log("프로그래머스 페이지에 접속하셨군요 환영합니다.");

// InterSectionObserver로 변경 예정
setTimeout(() => {
  const button = getSubmitButton();

  ProgrammersEvent.addSubmitEvent(button, ProgrammersEvent.intervalEvent);
}, 3000);
