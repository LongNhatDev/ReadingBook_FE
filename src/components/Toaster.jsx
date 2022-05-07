import {
  Toaster as BluePrintToaster,
  Position,
  Intent,
  ProgressBar,
} from "@blueprintjs/core";

import styled from "styled-components";
import * as React from "react";

const Toaster = BluePrintToaster.create({
  className: "recipe-toaster",
  position: Position.TOP_RIGHT,
});

export const showErrorToaster = (message) => {
  Toaster.show({
    message,
    intent: Intent.DANGER,
    timeout: 4000,
  });
};

export const showSuccessToaster = (message) => {
  Toaster.show({
    message,
    intent: Intent.SUCCESS,
    timeout: 4000,
  });
};

export const showProgressBarToaster = (loadedPercent, fileName) => {
  const progressBarValue = loadedPercent / 100; // value from 0 to 1
  const toasterTimeout = Math.floor(progressBarValue); //0 or 1 value

  Toaster.show(
    {
      message: (
        <>
          <FileNameWrapper>{`${fileName}`}</FileNameWrapper>
          <ProgressBarWrapper>
            <ProgressBar
              className="toast-upload-bar"
              intent="primary"
              value={progressBarValue}
            />
            {`${loadedPercent}%`}
          </ProgressBarWrapper>
        </>
      ),
      icon: "cloud-upload",
      timeout: toasterTimeout, //0 value will keep this toaster showed
    },
    fileName
  );
};

export default Toaster;

const FileNameWrapper = styled.div`
  width: 20rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const ProgressBarWrapper = styled.div`
  margin-top: 0.2rem;
  display: flex;
  .bp3-progress-bar {
    background: rgba(92, 112, 128, 0.2);
    border-radius: 4rem;
    display: block;
    height: 0.8rem;
    overflow: hidden;
    position: relative;
    width: 80%;
    justify-content: center;
    text-align: center;
    margin: auto 0;
    margin-right: 0.5rem;
  }
`;
