import './App.css'
import BadCounter from './components/BadCounter'
import Immutabillity from './components/Immutabillity'
import CounterExam from './components/CounterExam'
import DarkModeToggle from './components/DarkModeToggle'
import TwoInputs from './components/TwoInputs'
import GreetingForm from './components/GreetingForm'

function App() {

  return (
    <>
      <Immutabillity></Immutabillity>
      <BadCounter></BadCounter>
      <CounterExam></CounterExam>
      <DarkModeToggle></DarkModeToggle>
      <TwoInputs></TwoInputs>
      <GreetingForm></GreetingForm>
    </>
  )
}

export default App
