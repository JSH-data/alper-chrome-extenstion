import React, { useState } from "react";

type TextInputProps = {
  labelText: string;
  value: string;
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  keyId: string;
  onSaveHandler?: (key: string) => void;
};

export default function TextInput({
  labelText,
  value,
  onChangeHandler,
  keyId,
}: TextInputProps) {
  const [isEditMode, setIsEditMode] = useState<boolean>(value.length === 0);

  const onClickSaveBtn = async () => {
    await ChromeStorage.setData({
      [keyId]: value,
    });

    setIsEditMode(false);
  };

  return (
    <div className="input-container">
      <label className="input-label" htmlFor={keyId}>
        {labelText}
      </label>
      {isEditMode ? (
        <div className="input-wrapper">
          <input
            id={keyId}
            onChange={onChangeHandler}
            value={value}
            placeholder="TEXT"
          />
          <button onClick={onClickSaveBtn}>저장</button>
        </div>
      ) : (
        <div className="input-wrapper">
          {value}
          <button onClick={() => setIsEditMode(true)}>수정</button>
        </div>
      )}
    </div>
  );
}
