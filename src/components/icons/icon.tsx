type IconType = {
  children: string;
  className: string;
};

export const Icon = ({ children, className }: IconType) => {
  return (
    <span className={`material-icons-outlined ${className}`}>{children}</span>
  );
};

type ButtonIcon = {
  children: string;
  className?: string;
  onClick?: () => void;
};

export const ButtonIcon = ({ children, className, onClick }: ButtonIcon) => {
  return (
    <div
      className={`cursor-pointer flex items-center hover:bg-gray-300 p-1 rounded-full ${className}`}
      onClick={onClick}
    >
      <span className="material-icons-outlined">{children}</span>
    </div>
  );
};
