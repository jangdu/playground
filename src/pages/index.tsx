import { ModeToggle } from '@/components/theme/Toggle';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

export default function Home() {
  const { toast } = useToast();

  return (
    <div>
      <h1>Hello</h1>
      {/* Add more UI components here */}
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
