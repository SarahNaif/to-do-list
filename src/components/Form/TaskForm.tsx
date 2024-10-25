import React from 'react'

const Form = () => {
  return (
    <form>
            <input
              type="text"
              className="p-3 mt-2 mb-4 w-full bg-slate-200 rounded border-2 border-slate-200 focus:border-slate-600 focus:outline-none placeholder:italic"
              placeholder="Add Your Task..."
            />
          </form> 
  )
}

export default Form