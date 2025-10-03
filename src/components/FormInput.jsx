function FormInput({ type, name, label, placeholder }) {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text text-[15px]">{label}</span>
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="input input-bordered w-full h-9 text-sm focus:outline-none focus:border-blue-500 focus:shadow-lg focus:shadow-blue-400/50"
      />
    </div>
  );
}

export default FormInput;
