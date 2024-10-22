function RegisterButton({ text }) {
  return (
    <button
      className="bg-blue-500 w-full py-3 font-bold text-white hover:bg-blue-600 rounded-md"
      type="submit"
    >
      {text}
    </button>
  );
}

export default RegisterButton;
