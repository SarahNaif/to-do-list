import TaskForm from "./components/Form/TaskForm"
import TaskList from "./components/Task/TaskList"



function App () {
  

  return (
  
      <div className="relative flex min-h-screen  flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
        <h1 className="flex justify-center p-4  mx-px mb-4 md:mb-4  text-center font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-800 to-pink-300">
          To Do List
        </h1>
        <div className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
          <div className="p-2">
            <figure className="mb-4">
              <blockquote className="italic font-extralight text-slate-700 mb-5">
                <q> To-Do lists help us break life into small steps. </q>
                <figcaption className="ml-5 text-sm">—Randy Pausch</figcaption>
              </blockquote>
            </figure>
            <TaskForm />
           <TaskList/>
          </div>
        </div>
      </div>

  )
}

export default App
