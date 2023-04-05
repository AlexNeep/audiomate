type SelectProps = {
  value: string;
  onChange: (id: string) => void;
  children: JSX.Element | JSX.Element[];
};

const Select = ({ value, onChange, children }: SelectProps) => {
  return (
    <select
      defaultValue={value}
      onChange={(e) => onChange(e.currentTarget.value)}
      className="w-40 cursor-pointer rounded bg-slate-200 py-2 px-4 text-center text-slate-900 shadow"
    >
      {children}
    </select>
  );
};

export default Select;
