import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const UploadChapter = () => {
  const [data, setData] = useState({});
  async function submitHandler(event) {
    event.preventDefault();
    const sendData = {
      title: "Chapter1",
      content: data,
    };
    fetch(
      "https://book-reader-27e5c-default-rtdb.asia-southeast1.firebasedatabase.app/chapters.json",
      {
        method: "POST",
        body: JSON.stringify(sendData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  const onChangeHandler = (event, editor) => {
    setData(editor.getData());
  };
  return (
    <React.Fragment>
      <form onSubmit={submitHandler}>
        <CKEditor
          id="11"
          editor={ClassicEditor}
          onReady={(editor) => {
            console.log("Editor is ready to use!", editor);
          }}
          onChange={onChangeHandler}
        />
        <button>Luyn</button>
      </form>
    </React.Fragment>
  );
};

export default UploadChapter;
