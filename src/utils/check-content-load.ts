function checkContentLoad(
  targetSelector: string,
  parentSelector: string,
): Promise<boolean> {
  return new Promise((resolve) => {
    let observer: MutationObserver | null = null;

    const callback = (mutations: MutationRecord[]) => {
      mutations.forEach((mutation) => {
        const flag = mutation.target.contains(
          document.querySelector(targetSelector),
        );
        if (flag && observer !== null) {
          observer.disconnect();

          resolve(true);
        }
      });
    };

    observer = new MutationObserver(callback);

    const root = document.querySelector(parentSelector) as Element;

    observer.observe(root, {
      childList: true,
      subtree: true,
      attributes: false,
    });
  });
}
