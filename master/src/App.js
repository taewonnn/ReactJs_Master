import styled, {keyframes} from "styled-components";


// styledComponent의 편의성
// className을 알아서 지정해주고 내 코드를 저장해둠!
// + 중복하지 않을 수 있도록 도와줘!!


const Father = styled.div`
  display: flex;
`

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`

const Circle = styled(Box)`
  border-radius: 50px;
`

// animation  -> import {keyframes}

const rotationAnimation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0;
  }
  50% {
    transform: rotate(360deg);
    border-radius: 100px;
  }
  100% {
    transform: rotate(0deg);
    border-radius: 50px;
  }
`

const AnimationBox = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotationAnimation} 1s linear infinite;
  
  // span은 styledComponent가 아니지만, AnimationBox안에 있으므로 지정해줄 수 있음!!
  span {
    font-size: 140px;
    color:red;
    &:hover {
      font-size: 200px;
    }
    &:active {
      opacity: 0;
    }
  }
  
`


// as 개념 => Btn의 속성은 그대로 가져가고 싶은데 button이 아니라 a태그로 가져가고 싶을 때,
// <Btn as="a"> 해주면 속성은 Btn의 것을 가져오지만, a태그의 속성임!!!
const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
`


// attrs({})
// {} 안에 속성들을 미리 넣어두고 컴포넌트는 그냥 <Input>만 사용가능!!
const Input = styled.input.attrs({required: true, minLength: 10})`
  background-color: tomato;
`

function App() {

  return (

    <Father as="header">
      {/*<Box bgColor = "teal"/>*/}
      {/*<Box bgColor = "tomato"/>*/}
      {/*<Circle bgColor = "red"/>*/}
      {/*<Btn>Login</Btn>*/}
      {/*<Btn as="a" href = '/'>Login</Btn>*/}
      {/*<br/>*/}
      {/*<Input />*/}
      {/*<Input />*/}
      <AnimationBox>
        <span>🐿123</span>
      </AnimationBox>

    </Father>

  );
}
export default App;
