
const Button = ({ label, iconUrl, backgroundColor, textColor, borderColor, fullWidth }) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none 
    ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}` : "bg-violet-600/80 text-white border-violet-600/80"
      } rounded-full ${fullWidth && 'w-full'}"}`}
      >
      {label}

      {iconUrl && <img
        src={iconUrl}
        alt={label}
        className="ml-2 rounded-full w-5 h-5" />}
    </button>
  )
}

export default Button