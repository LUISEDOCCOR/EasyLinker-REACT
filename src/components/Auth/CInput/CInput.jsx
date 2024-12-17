export const CInput = ({
  Icon,
  name,
  id,
  placeholder,
  type,
  label,
  stateValue,
  setState,
}) => {
  return (
    <label htmlFor={name} className="flex w-full max-w-2xl flex-col gap-2">
      <span className="text-lg font-bold">{label}</span>
      <div className="flex items-center gap-2 rounded-md border-2 border-black p-2">
        <Icon width={24} />
        <input
          onChange={(e) => {
            setState(e.target.value);
          }}
          value={stateValue}
          name={name}
          id={id}
          type={type}
          placeholder={placeholder}
          className="w-full outline-none"
          required
        />
      </div>
    </label>
  );
};
