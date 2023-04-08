type IconType = {
  children: string;
  className: string;
};

export const Icon = ({ children, className }: IconType) => {
  return (
    <span className={`material-icons-outlined ${className}`}>{children}</span>
  );
};
