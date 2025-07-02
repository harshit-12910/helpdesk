function Input({ type = 'text', placeholder, value, onChange, required = false, className = '' }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className={`w-[601px] h-[73px] px-4
                  placeholder:text-[30px] placeholder:leading-[35px] 
                  placeholder:font-normal placeholder:text-black 
                  border border-[#000000] bg-white 
                  focus:outline-none focus:border-transparent text-[30px]
                  ${className}`}
    />
  );
}

export default Input;
