import { useState } from 'react'
import { CallGPT } from './apis/gpt';

const dummy = {
  "title": "강의 따라하기의 어려움",
  "thumbnail": "https://source.unsplash.com/1600x900/?struggle",
  "summary": "강의 따라하기가 어려워서 힘들다.",
  "emotional_content":
    "오늘은 강의를 따라하는 것이 어려웠다. 나는 코드를 그냥 따라 치는 것 밖에 할 수 없는 것 같다. 이런 상황에서는 정말 힘들다고 느껴진다. 어떻게든 해결책을 찾고 싶지만, 머릿속은 혼란스러워진다.",
  "emotional_result": "나는 자신감이 부족하고, 능력에 대한 불안감을 느끼고 있다. 이런 감정들이 나를 힘들게 만든다. 내가 더 열심히 공부하고 노력해야겠다는 생각이 든다.",
  "analysis": "이런 상황에서는 <quote>노력은 배신하지 않는다</quote>라는 명언이 떠올랐다. 나는 능력을 향상시키기 위해 더 많은 노력과 열정을 기울여야 한다. 실패와 어려움을 만나더라도 포기하지 않고 꾸준한 노력을 통해 성장할 수 있다.",
  "action_list": [
    "자신에게 믿음을 갖고 계속해서 노력해야 한다.",
    "어려운 상황에서도 포기하지 않고 문제에 집중해야 한다.",
    "다른 사람들의 도움을 받아서 함께 학습할 수 있는 방법을 찾아보아야 한다."]
}

function App() {
  const [data, setData] = useState(dummy);
  const [isLoading, setIsLoading] = useState(false);

  const handleClickAPICall = async () => {
    try {
      setIsLoading(true)
      const message = await CallGPT({
        prompt: '강의 따라함. 어려움. 코드 따라 치는 것 밖에 못 하는 것 같음. 힘들다.'
      });
      setData(JSON.parse(message))
    } catch (err) {

    } finally {
      setIsLoading(false)
    }
  };
  return (
    <>
      <button onClick={handleClickAPICall}>GPT_API_CALL</button>
      <div>
        data: {JSON.stringify(data)}
        <div>title: {data.title}</div>
        <div>thumbnail: {data.thumbnail}</div>
        <div>summary: {data.summary}</div>
        <div>emotional_content: {data.emotional_content}</div>
        <div>emotional_result: {data.emotional_result}</div>
        <div>analysis: {data.analysis}</div>
        <div>action_list: {data.action_list}</div>
      </div>
      <div>
        isLoading: {isLoading ? "loading.." : "finish!"}
      </div>
    </>
  )
}

export default App
