function RegisterButton({ text, isDisabled, isLoading }) {
  return (
    <button
      className={` w-full py-3 font-bold rounded-md ${
        !isDisabled
          ? "lg:bg-blue-500 text-blue-500 bg-white lg:text-white hover:bg-blue-600 "
          : "bg-blue-200 text-blue-100 cursor-not-allowed"
      }`}
      type="submit"
      disabled={isDisabled ? true : false}
    >
      {isLoading ? "loading..." : text}
    </button>
  );
}

export default RegisterButton;
