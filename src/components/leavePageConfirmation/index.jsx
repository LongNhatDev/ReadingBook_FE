import React from "react";
import ReactDOM from "react-dom";

import ConfirmBox from "./ConfirmBox";

export function LeavePageConfirmation(
  message: string,
  callback: (ok: boolean) => void
): void {
  const container = document.createElement("div");

  document.body.appendChild(container);
  const { header, content, cancelButtonCaption, confirmButtonCaption } =
    JSON.parse(message);

  const removeConfirmBox = () => {
    ReactDOM.unmountComponentAtNode(container);
    container.remove();
  };

  const handleConfirm = () => {
    removeConfirmBox();
    callback(true);
  };
  const handleCancel = () => {
    removeConfirmBox();
    callback(false);
  };

  ReactDOM.render(
    <ConfirmBox
      isOpen={true}
      onCancel={handleCancel}
      onConfirm={handleConfirm}
      message={content}
      header={header}
      cancelButtonCaption={cancelButtonCaption}
      confirmButtonCaption={confirmButtonCaption}
    />,
    container
  );
}

const LeavePagePrompt = (props) => {
  const { active, header, content, confirmButtonCaption, cancelButtonCaption } =
    props;
  const { t } = useTranslation();

  return (
    <Prompt
      when={active}
      message={JSON.stringify({
        header: header || t("leave_page_prompt_default.leave_page"),
        content: content || t("leave_page_prompt_default.content"),
        confirmButtonCaption:
          confirmButtonCaption || t("leave_page_prompt_default.leave"),
        cancelButtonCaption:
          cancelButtonCaption || t("leave_page_prompt_default.cancel"),
      })}
    />
  );
};

export default LeavePagePrompt;
