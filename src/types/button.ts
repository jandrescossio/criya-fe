export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  minimal?: boolean;
  intent?: 'primary' | 'success' | 'danger' | 'warning' | false;
}