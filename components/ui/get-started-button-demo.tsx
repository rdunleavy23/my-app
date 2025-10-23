import { GetStartedButton } from "@/components/ui/get-started-button";

export function GetStartedButtonDemo() {
  return (
    <div className="flex flex-col items-center gap-4 p-8">
      <h3 className="text-lg font-semibold">Get Started Button Demo</h3>
      <GetStartedButton />
      
      <div className="mt-4 text-sm text-muted-foreground text-center">
        <p>Click the button to open the scheduling link</p>
        <p>30-minute call · No pitch, no pressure</p>
      </div>
    </div>
  );
}
