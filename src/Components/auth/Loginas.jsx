import React from 'react'

const Loginas = () => {
  return (
    <div>
        <div className="bg-[#fafafa] mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-lg">
                    <form
                        action="#"
                        className="bg-white mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
                    >
                       <button
                            type="submit"
                            className="block w-full rounded-lg bg-blue-300 px-5 py-3 text-sm font-medium text-white"
                        >
                         <a href='/signin'>Login as user</a>
                        </button>

                        <button
                            type="submit"
                            className="block w-full rounded-lg bg-blue-300 px-5 py-3 text-sm font-medium text-white mt-3"
                        >
                            <a href='signin'>Login as admin</a>
                        </button>
    
                    </form>
                </div>
            </div>
    </div>
  )
}

export default Loginas