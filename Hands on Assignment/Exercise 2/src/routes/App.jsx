import { Outlet } from 'react-router-dom'
import '../App.css'
import Heading from '../components/Heading'
import Links from '../components/Links'

function App() {
  return (
    <>
      <Heading></Heading>
      <Links></Links>
      <Outlet></Outlet>
    </>
  )
}

export default App
