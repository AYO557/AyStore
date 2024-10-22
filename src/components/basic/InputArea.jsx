function InputArea({ text, type }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm" htmlFor={type}>
        {text}
      </label>
      <input
        className="py-2 px-3 border border-black rounded-md"
        type={type}
        name={type}
        id={type}
        placeholder={`Enter your ${type}`}
        required
      />
    </div>
  );
}

export default InputArea;
