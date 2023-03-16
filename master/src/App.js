import styled from "styled-components";


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


function App() {

  return (
  // <div style = { {display: "flex"} }>
  //   <div style = { {backgroundColor: "teal", width: 100, height: 100} }></div>
  //   <div style = { {backgroundColor: "tomato", width: 100, height: 100} }></div>
  // </div>

    <Father>
      <Box bgColor = "teal"/>
      <Box bgColor = "tomato"/>
      <Circle bgColor = "red"/>
    </Father>

  );
}
export default App;
