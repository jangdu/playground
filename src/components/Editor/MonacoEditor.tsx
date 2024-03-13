import React from 'react';

import dynamic from 'next/dynamic';

const Monaco = dynamic(import('react-monaco-editor'), { ssr: false });

export default function MonacoEditor() {
  const [postBody, setPostBody] = React.useState(
    "console.log('hello world!');",
  );
  // const currentTheme = useRecoilValue(currentThemeState);

  return (
    <div>
      <Monaco
        width="100%"
        height="600"
        language="javascript"
        // theme={currentTheme === ThemeFlag.DARK ? 'vs-dark' : 'vs'}
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
