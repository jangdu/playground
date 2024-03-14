import React from 'react';

import dynamic from 'next/dynamic';
import { useTheme } from 'next-themes';

const Monaco = dynamic(import('react-monaco-editor'), { ssr: false });

export default function MonacoEditor() {
  const [postBody, setPostBody] = React.useState(
    "console.log('hello world!');",
  );

  const { theme } = useTheme();

  return (
    <div>
      <Monaco
        width="100%"
        height="600"
        language="javascript"
        theme={theme === 'dark' ? 'vs-dark' : 'vs-light'}
        value={postBody}
        options={{
          minimap: {
            enabled: false,
          },
        }}
        onChange={setPostBody}
      />
    </div>
  );
}
