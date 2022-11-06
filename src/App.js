import { Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary"
import Counter from './components/Counter'
import Home from './components/Home'
import ErrorPage from './components/ErrorPage'
import "./App.css"

export default function App() {
  return (
      <ErrorBoundary>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/counter' element={<Counter />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </ErrorBoundary>
  )
}
