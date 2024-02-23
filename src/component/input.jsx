const Input = ({ label, type = "text", name, formik }) => {
  return (
    <div className="relative z-0 mt-6">
      <input
        type={type}
        id={name}
        {...formik.getFieldProps(name)}
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-purple-800 focus:outline-none focus:ring-0 focus:border-purple-900 peer"
        placeholder=""
      />
      <label
        htmlFor={name}
        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-900 peer-focus:dark:text-purple-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        {label}
      </label>

      {formik.errors[name] && formik.touched[name] && (
        <div className="text-red-500 absolute text-[14px]">
          {formik.errors[name]}
        </div>
      )}
    </div>
  );
};

export default Input;
