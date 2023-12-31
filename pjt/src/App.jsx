import { useState } from 'react'
import { CallGPT } from './apis/gpt';
import Diaryinput from './components/Diaryinput'
import styled from 'styled-components'

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

  const handleClickAPICall = async (userInput) => {
    try {
      setIsLoading(true)
      const message = await CallGPT({
        prompt: `${userInput}`
      });
      setData(JSON.parse(message))
    } catch (err) {

    } finally {
      setIsLoading(false)
    }
  };

  const handleSubmit = (userInput) => {
    handleClickAPICall(userInput);
  }
  return (
    <AppContainer>
      <AppTitle>
        심리상담사 GPT, AI 회고록
      </AppTitle>
      <Diaryinput isLoading={isLoading} onSubmit={handleSubmit} />
      <button onClick={handleClickAPICall}>GPT_API_CALL</button>
      <div>title: {data.title}</div>
      <div>thumbnail: <img width="600px" src={data.thumbnail}></img></div>
      <div>summary: {data.summary}</div>
      <div>emotional_content: {data.emotional_content}</div>
      <div>emotional_result: {data.emotional_result}</div>
      <div>analysis: {data.analysis}</div>
      <div>action_list: {data.action_list}</div>
    </AppContainer>
  )
}

export default App;

const AppContainer = styled.div`
  padding:20px;
  display:flex;
  flex-direction: column;
  max-width: 720px;
  width: 100%;
  margin: 0 auto;
`;

const AppTitle = styled.div`
  width: 100%;
  font-weight: 400;
  font-size: 35px;
  text-align: center;
  font-family: "Noto Serif KR";
`;