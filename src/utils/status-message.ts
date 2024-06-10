// eslint-disable-next-line @typescript-eslint/no-unused-vars
class StatusMessage {
  static elementId: string = "alpher-status-message";

  static appendStatusMessage(parentNode: Element) {
    const element = document.createElement("div");

    element.id = StatusMessage.elementId;
    element.textContent = MESSAGE_TEXT.NORMAL;
    element.style.display = "flex";
    element.style.alignItems = "center";

    parentNode.appendChild(element);
  }

  static getStatusElement() {
    return document.getElementById(StatusMessage.elementId);
  }

  static setMessage(message: string) {
    const statusElement = StatusMessage.getStatusElement();

    if (statusElement) {
      statusElement.textContent = message;
    }
  }
}
