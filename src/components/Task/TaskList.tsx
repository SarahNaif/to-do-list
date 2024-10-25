import React from "react";
import { FaRegTrashAlt, FaPencilAlt  } from "react-icons/fa";
import TaskItem from "./TaskItem";


const List: React.FC= () => {
  return (
    <ul>
    <TaskItem />
  </ul>
  )
}

export default List