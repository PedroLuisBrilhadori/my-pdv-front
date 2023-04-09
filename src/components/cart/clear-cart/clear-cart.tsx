type ClearCart = {
  onClearItems?: () => void;
};

export const ClearCart = ({ onClearItems }: ClearCart) => {
  return (
    <div className="flex items-center cursor-pointer" onClick={onClearItems}>
      <span className="material-icons-outlined">close</span>
    </div>
  );
};
