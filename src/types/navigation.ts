export namespace Navigation {
  export interface Option {
    name: string;
    href: string;
    intent?: 'primary' | 'success' | 'danger' | 'warning' | false;
  }

  export interface MenuProps {
    options: Option[];
    disableActiveRoute?: boolean;
    disableMinimal?: boolean;
  }
}