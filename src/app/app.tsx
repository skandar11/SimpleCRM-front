import 'react-toastify/dist/ReactToastify.css'

import { ToastContainer } from 'react-toastify'

import { AppRouter } from './routes'

function App(): JSX.Element {
  return (
    <div className="app">
      <AppRouter />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  )
}

export default App
