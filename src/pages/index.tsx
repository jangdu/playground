import { ModeToggle } from "@/components/theme/Toggle";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <h1>Hello</h1>
      {/* Add more UI components here */}
      <ModeToggle />
      <Button>Click me</Button>
    </div>
  );
}
