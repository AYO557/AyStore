function InputArea({ text, type, onChange, value }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm" htmlFor={type}>
        {text}
      </label>
      <input
        onChange={onChange}
        className="py-2 px-3 text-black border border-black rounded-md w-full"
        type={type}
        name={type}
        value={value}
        id={type}
        placeholder={`Enter your ${type === "text" ? "name" : type}`}
        required
      />
    </div>
  );
}

export default InputArea;
