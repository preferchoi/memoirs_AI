import { useState } from 'react'
import { Input, Button } from 'antd';

const { TextArea } = Input;

const Diaryinput = ({isLoading, onSubmit}) => {
  const [userInput, setUserInput] = useState('');

  const handleUserInput = (e) => {
    setUserInput(e.target.value)
  }

  const handleClick = () => {
    onSubmit(userInput)
  }
  return (
  <>
    <TextArea rows={4} value={userInput} onChange={handleUserInput}/>
    <Button loading={isLoading} onClick={(handleClick)}>회고록 작성!</Button>
  </>
)};

export default Diaryinput;