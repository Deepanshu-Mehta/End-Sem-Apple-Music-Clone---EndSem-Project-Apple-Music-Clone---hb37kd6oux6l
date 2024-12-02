import { Navigate, Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Nav from "./pages/Nav";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import { useState } from "react";
import Songs from "./pages/Songs";


function App() {
  const [login, setLogin] = useState(false);
  const [token, setToken] = useState('');
  const [buttonText, setButtonText] = useState('');
  const [buttonPath, setButtonPath] = useState('');

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Str buttonText={buttonText} buttonPath={buttonPath}/>,
      children: [
        {
          path: '/',
          element: <Home setButtonText={setButtonText} setButtonPath={setButtonPath} />
        },
        {
          path: '/song/:id',
          element: login ? <Songs token={token}/> : <Navigate replace to="/signin"/>
        },
        {
          path: '/signin',
          element: <Signin setButtonText={setButtonText} setButtonPath={setButtonPath} setLogin={setLogin} setToken={setToken}/>
        },
        {
          path: '/signup',
          element: <Signup setButtonText={setButtonText} setButtonPath={setButtonPath} setLogin={setLogin} setToken={setToken}/>
        }
      ]
    }
  ])
  function Str({buttonText, buttonPath}) {
    return (
      <>
        <header className="fixed w-full">
          <Nav 
            buttonText={login ? 'Sign Out' : buttonText} 
            buttonPath={login ? '/' : buttonPath}
            login={login}
            setLogin={setLogin}
            setToken={setToken}
          />
        </header>
        <main><Outlet/></main>
      </>
    )
  }

  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
