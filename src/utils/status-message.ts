class StatusMessage {
  static elementId = "alpher-status-message" as const;

  static appendStatusMessage(parentNode: Element, color = "#B2BEB5") {
    const element = document.createElement("div");

    element.id = StatusMessage.elementId;
    element.textContent = MESSAGE_TEXT.NORMAL;
    element.style.display = "flex";
    element.style.alignItems = "center";
    element.style.color = color;

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
