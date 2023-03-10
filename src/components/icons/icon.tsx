type IconType = {
  children: string;
  className: string;
};

export const Icon = ({ children, className }: IconType) => {
  return (
    <span className={`material-symbols-outlined ${className}`}>{children}</span>
  );
};
