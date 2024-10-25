import Form from "./components/Form/Form"
import List from "./components/Task/List"



function App() {
  

  return (
    <>
      <div className="relative flex min-h-screen bg-gray-200 flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
        <h1 className="flex justify-center p-4 md:p-0 mx-px  md:mt-4 md:mb-3 text-center font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-800 to-pink-300">
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
            <Form />
            <ul>
              <List />
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
