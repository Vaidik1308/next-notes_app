import React, { useState } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './editor.css'

const RichTextEditor = ({content,setContent}) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (content) => {
    setContent(content);
  };

  const onSave = () => {
    const content = JSON.stringify(convertToRaw(editorState.getCurrentContent()));
    // Save content to database or send to server
    console.log(content);
    
  };

  return (
    <div className='w-full h-[40vh]'>
      <Editor
        className="h-[40vh] bg-white"
        content={content}
        onEditorStateChange={onEditorStateChange}
      />
      <button onClick={onSave}>Save</button>
    </div>
  );
};

export default RichTextEditor;