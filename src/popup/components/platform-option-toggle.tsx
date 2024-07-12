import { ChangeEvent, useEffect, useState } from "react";

export default function PlatformOptionToggle() {
  const [toggleStatus, setToggleStatus] = useState<"ON" | "OFF">("OFF");
  const onChangeCheckCondition = async (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const option = event.target.checked ? "ON" : "OFF";

    await ChromeStorage.setData({
      [CONSTANT.PLATFORM_OPTION]: option,
    });

    setToggleStatus(option);
  };

  const getPlatformOptions = async () => {
    const platformOption = await ChromeStorage.getData(
      CONSTANT.PLATFORM_OPTION,
    );

    if (!platformOption || platformOption === "OFF") {
      setToggleStatus("OFF");

      return;
    }

    setToggleStatus("ON");
  };

  useEffect(() => {
    getPlatformOptions();
  }, []);

  return (
    <>
      <span>
        If enabled, the platform name will be appended to the end of the
        Directory Path.
      </span>
      <label className="switch">
        <input
          type="checkbox"
          checked={toggleStatus === "ON"}
          onChange={onChangeCheckCondition}
        />
        <span className="slider"></span>
      </label>
    </>
  );
}
