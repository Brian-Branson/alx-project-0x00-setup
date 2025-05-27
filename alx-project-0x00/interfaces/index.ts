

export interface PillProps {
  title: string;
  styles?: string; // optional styles for the Pill
}

export interface ButtonProps {
  title: string;
  size?: "small" | "medium" | "large";
  shape?: "rounded-sm" | "rounded-md" | "rounded-full";
  styles?: string; // optional styles for the Button
}
