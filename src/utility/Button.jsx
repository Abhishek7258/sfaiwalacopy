import React from 'react'

const Button = ({cont="Know More",icon=<i class="ri-arrow-right-line"></i>}) => {
  return (
    <div className="bg-teal-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
      {cont}{" "}{icon} 
    </div>
  )
}

export default Button
