import { Dumbbell } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/Button";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-background)]/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="flex gap-2 items-center text-[var(--color-foreground)]"
        >
          <Dumbbell className="w-6 h-6 text-[var(--color-accent)]" />
          <span className="font-semibold text-lg">GymAI</span>
        </Link>
        <nav>
          <>
            <Link to="/auth/sign-in">
              <Button>Sign In</Button>
            </Link>
          </>
        </nav>
      </div>
    </header>
  );
}
