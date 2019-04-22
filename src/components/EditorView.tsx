import * as React from 'react';
import AceEditor from 'react-ace';

import brace from 'brace';
import 'brace/mode/javascript';
import 'brace/theme/monokai';

interface IEditorViewProps {
  text: string;
  isEditable: boolean;
  onTextChange: (text: string) => void;
}

export default ({ text, isEditable, onTextChange }: IEditorViewProps) => {
  const editorStyle = {
    width: '100%',
    height: '100%'
  };

  return (
    <AceEditor
      mode="javascript"
      theme="monokai"
      editorProps={{
        $blockScrolling: Infinity
      }}
      value={text}
      readOnly={!isEditable}
      style={editorStyle}
      onChange={text => onTextChange(text)}
    />
  );
};
