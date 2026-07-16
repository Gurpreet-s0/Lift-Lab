import React from 'react'

const Button = ({content}) => {
  return (
<button

      className="w-full rounded-xl bg-primary py-3 font-semibold text-background transition-all duration-200 hover:bg-primary-hover active:scale-[0.98]"

    >

      {content}

    </button>
  )
}

export default Button