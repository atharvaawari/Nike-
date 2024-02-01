import React from 'react'
import useTheme from '../context/ThemeContext'

function ThemeButton() {

  const {themeMode, darkTheme, lightTheme} =useTheme()
  const onChangeBtn = (e) => {
    const darkModeStatus = e.currentTarget.checked
    if(darkModeStatus) {
      darkTheme()
    } else{
      lightTheme()
    }
  }

  return (
    <label className="relative inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onChange={onChangeBtn}
                checked = {themeMode==="dark"}  
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-400 dark:peer-focus:ring-black rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-black"></div>
            <span className="ml-3 text-xl font-montserrat font-semibold text-gray-500 dark:text-white">Switch Theme</span>
        </label>
  )
}

export default ThemeButton