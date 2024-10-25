import { FaRegTrashAlt, FaPencilAlt  } from "react-icons/fa";


const List = () => {
  return (
    <li>
    <div className="mt-7 ml-3 flex justify-between">
      <label className="inline-flex items-center gap-2">
        <input
          type="checkbox"
          className=" h-6 w-5 accent-violet-200  hover:accent-violet-200  border-0 rounded-md focus:ring-0"
        />
        <span>Task one </span> 
      </label>

      <div className="flex gap-2">
        <button  className=" text-purple-700 hover:text-white hover:bg-purple-600 p-1 px-1 rounded">
        <FaRegTrashAlt />
        </button>
        <button  className=" text-purple-700 hover:text-white hover:bg-purple-600 p-1 px-1 rounded">
        <FaPencilAlt />
        </button>
      </div>
    </div>
  </li>
  )
}

export default List