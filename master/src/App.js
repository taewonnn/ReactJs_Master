import styled from "styled-components";


// styledComponent의 편의성
// className을 알아서 지정해주고 내 코드를 저장해둠!
// + 중복하지 않을 수 있도록 도와줘!!


const Father = styled.div`
  display: flex;
`

const BoxOne = styled.div`
  background-color: teal; 
  width: 100px;
  height: 100px;
`

const BoxTwo = styled.div`
  background-color: tomato; 
  width: 100px;
  height: 100px;
`

const Text = styled.span`
  color: white;
`;


function App() {

  return (
  // <div style = { {display: "flex"} }>
  //   <div style = { {backgroundColor: "teal", width: 100, height: 100} }></div>
  //   <div style = { {backgroundColor: "tomato", width: 100, height: 100} }></div>
  // </div>

    <Father>
      <BoxOne>
        <Text>daramZ</Text>
      </BoxOne>
      <BoxTwo />
    </Father>

  );
}
export default App;
