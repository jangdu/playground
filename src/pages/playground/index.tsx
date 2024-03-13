import MonacoEditor from '@/components/Editor/MonacoEditor';
import { ModeToggle } from '@/components/theme/Toggle';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

export default function PlaygroundPage() {
  const { toast } = useToast();

  return (
    <div>
      <h1 className="text-xl font-bold">Playground</h1>
      {/* Add more UI components here */}
      <div>
        <MonacoEditor />
      </div>
      <ModeToggle />
      <Button
        onClick={() => {
          toast({ title: 'Hello world', description: 'This is a description' });
        }}
      >
        Click me
      </Button>
    </div>
  );
}
