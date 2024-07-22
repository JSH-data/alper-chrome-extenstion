import { getEditorNavbar, getSubmitButton } from "@/programmers/dom-finder.ts";
import ProgrammersEvent from "@/programmers/event-manager.ts";

checkContentLoad("#submit-code", "body").then((res) => {
  const submitButton = getSubmitButton();
  const navbar = getEditorNavbar();

  if (res && navbar && submitButton) {
    StatusMessage.appendStatusMessage(navbar);

    ProgrammersEvent.addSubmitEvent(submitButton, () =>
      ProgrammersEvent.intervalEvent(StatusMessage.setMessage),
    );

    ChromeStorage.getUserInfo()
      .then(() => {
        console.log("인증에 성공했습니다!");
      })
      .catch((error: Error) => {
        StatusMessage.setMessage(error.message);
      });

    return;
  }

  StatusMessage.setMessage(MESSAGE_TEXT.E51);
});
