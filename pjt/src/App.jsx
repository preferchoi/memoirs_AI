import { useState } from 'react'
import { CallGPT } from './apis/gpt';

function App() {
  const [data, setData] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleClickAPICall = async () => {
    try {
      setIsLoading(true)
      const message = await CallGPT();
      setData(message)
    } catch (err) {

    } finally {
      setIsLoading(false)
    }
  };
  return (
    <>
      <button onClick={handleClickAPICall}>GPT_API_CALL</button>
      <div>
        data: {data}
      </div>
      <div>
        isLoading: {isLoading ? "loading.." : "finish!"}
      </div>
    </>
  )
}

export default App
