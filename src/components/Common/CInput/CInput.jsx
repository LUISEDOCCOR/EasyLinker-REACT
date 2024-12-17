export const CInput = ({
  Icon,
  name,
  placeholder,
  type,
  label,
  register,
  errors,
}) => {
  return (
    <label htmlFor={name} className="flex w-full max-w-2xl flex-col gap-2">
      <span className="text-lg font-bold">{label}</span>
      <div className="flex items-center gap-2 rounded-md border-2 border-black p-2">
        <Icon width={24} />
        <input
          name={name}
          id={name}
          type={type}
          placeholder={placeholder}
          className="w-full outline-none"
          {...register(name)}
        />
      </div>
      {errors[name] && (
        <span role="alert" className="xl:text-md text-s">
          {errors[name].message}
        </span>
      )}
    </label>
  );
};
