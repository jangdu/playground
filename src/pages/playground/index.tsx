import { useToast } from '@/components/ui/use-toast';
import LiveCodes from 'livecodes/react';
import type { EmbedOptions, Playground } from 'livecodes';
import { useState } from 'react';

const LiveCode = () => {
  const [playground, setPlayground] = useState<Playground>();

  const onReady = (sdk: Playground) => {
    setPlayground(sdk);
  };

  const run = async () => {
    await playground?.run();
  };

  const options: EmbedOptions = {
    config: {
      markup: {
        language: 'html',
        content: '<div id="app"></div>',
      },
      style: {
        language: 'css',
        content: 'body { color: red; }',
      },
      script: {
        language: 'javascript',
        content: 'console.log("hello from JavaScript!");',
      },
      activeEditor: 'script',
      editor: 'monaco',
      autoupdate: true,
      autosave: true,
      formatOnsave: true,
      tools: {
        enabled: ['console', 'tests'],
        active: 'console',
        status: 'open',
      },
    },
    params: {
      console: 'full',
    },
  };

  return (
    <div className="flex h-full w-full">
      <LiveCodes sdkReady={onReady} {...options} height="800px" />
    </div>
  );
};

export default function PlaygroundPage() {
  const { toast } = useToast();

  return (
    <div className="flex flex-col">
      <h1 className="text-xl font-bold">Playground</h1>
      <LiveCode />
    </div>
  );
}
