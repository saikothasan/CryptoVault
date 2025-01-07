import { Progress } from "@/components/ui/progress"

interface PasswordStrengthProps {
  password: string;
}

export function PasswordStrength({ password }: PasswordStrengthProps) {
  const calculateStrength = (password: string): number => {
    let strength = 0;
    if (password.length >= 8) strength += 25;
    if (password.match(/[a-z]+/)) strength += 25;
    if (password.match(/[A-Z]+/)) strength += 25;
    if (password.match(/[0-9]+/)) strength += 25;
    if (password.match(/[$@#&!]+/)) strength += 25;
    return Math.min(100, strength);
  };

  const strength = calculateStrength(password);

  const getColor = (strength: number): string => {
    if (strength < 30) return 'bg-red-500';
    if (strength < 60) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">Password Strength</label>
      <Progress value={strength} className={`w-full h-2 ${getColor(strength)}`} />
    </div>
  );
}

