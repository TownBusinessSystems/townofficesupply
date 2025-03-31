import { cn } from "@/lib/utils";

/**
 * Props for the LoadingSpinner component
 */
interface LoadingSpinnerProps {
  /** Optional CSS class name to apply to the container */
  className?: string;
  /** Optional text to display below the spinner */
  text?: string;
}

/**
 * A reusable loading spinner component that displays a centered spinning animation
 * @param props - Component props
 * @returns A loading spinner with optional text
 */
export default function LoadingSpinner({ className, text }: LoadingSpinnerProps): JSX.Element {
  return (
    <div 
      className={cn("flex flex-col items-center justify-center min-h-[200px]", className)}
      role="status"
      aria-label="Loading"
    >
      <div 
        className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"
        aria-hidden="true"
      />
      {text && (
        <p className="mt-2 text-sm text-muted-foreground">{text}</p>
      )}
    </div>
  );
} 