import styled from "styled-components";

const CONTENT = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: calc(100vh - 72px);
  height: fit-content;
  margin-top: 72px;
  padding: 0 16.66% 16px 16.66%;
`;
const TOPTIMELINE = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 160px;
  width: 100%;
  font-family: "Oswald", sans-serif;
  font-size: 43px;
  font-weight: bold;
  color: #ffffff;
`;
const TIMELINE = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: fit-content;
`;

const POSTS = styled.div`
  display: flex;
  flex-direction: column;
  width: 64%;
  height: fit-content;
`;
const INSERTPOST = styled.div`
  display: flex;
  height: 210px;
  width: 100%;
  margin: 0 0 14px 0;
  padding: 18px 18px 18px 18px;
  background-color: #ffffff;
  border-radius: 15px;
`;
const LEFTPOST = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 14%;
  height: 100%;
`;
const RIGTHPOST = styled.div`
  width: 86%;
  height: 100%;
`;
const USERIMAGE = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 27px;
  margin-bottom: 20px;
`;
const INSERTPOSTMESSAGE = styled.div`
  display: flex;
  height: 40px;
  width: 100%;
  padding-top: 10px;
  font-family: "Lato", sans-serif;
  font-weight: lighter;
  font-size: 20px;
  color: #707070;
`;
const FORM = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  height: calc(100% -55px);
  width: 100%;
`;
const INPUT = styled.input`
  width: 100%;
  height: ${(props) => props.h};
  margin-bottom: 5px;
  padding-left: 10px;
  background-color: #efefef;
  border: none;
  border-radius: 5px;
  ::placeholder {
    font-family: "Lato", sans-serif;
    font-weight: lighter;
    font-size: 15px;
    color: #949494;
  }
`;
const BUTTON = styled.button`
  height: 31px;
  width: 112px;
  background-color: #1877f2;
  border-radius: 5px;
  border: none;
  font-family: "Lato", sans-serif;
  font-weight: bold;
  font-size: 14px;
  color: #ffffff;
`;
const MESSAGE = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 150px;
  width: 100%;
  font-family: "Lato", sans-serif;
  font-weight: bold;
  font-size: 25px;
  color: #ffffff;
`;

const STYLES = {
  CONTENT,
  TOPTIMELINE,
  TIMELINE,
  POSTS,
  INSERTPOST,
  LEFTPOST,
  RIGTHPOST,
  USERIMAGE,
  INSERTPOSTMESSAGE,
  FORM,
  INPUT,
  BUTTON,
  MESSAGE,
};
export default STYLES;
