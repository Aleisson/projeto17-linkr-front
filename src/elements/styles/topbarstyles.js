import styled from "styled-components";

const CONTENT = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 10px;
  padding-left: 28px;
  left: 0;
  top: 0;
  z-index: 1;
  height: 72px;
  width: 100vw;
  background-color: #151515;
  img {
    width: 108px;
    height: 50px;
  }
  div {
    position: relative;
    width: 563px;
    height: 45px;
    input {
      display: flex;
      align-items: center;
      width: 563px;
      height: 45px;
      padding: 14px;

      background-color: #ffffff;
      border-radius: 8px;
      border: none;

      ::placeholder {
        font-family: "Lato", sans-serif;
        display: flex;
        align-items: center;
        font-size: 19px;
        line-height: 23px;
        color: #c6c6c6;
      }
    }
    svg {
      position: absolute;
      right: 15px;
      top: 13px;
      width: 21px;
      height: 21px;
      cursor: pointer;
      color: #c6c6c6;
    }
  }
`;

const BoxUsers = styled.ul`
  border-radius: 8px;
  background: #e7e7e7;
  li {
    width: 563px;
    height: 45px;
    padding: 14px 17px;

    display: flex;
    align-items: center;

    img {
      width: 39px;
      height: 39px;
      margin-right: 14px;
      border-radius: 50%;
    }

    p {
      font-family: "Lato", sans-serif;
      font-size: 17px;
      line-height: 23px;

      color: #515151;
    }
  }
`;

const USER = styled.section`
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  svg {
    color: #ffffff;
  }
  img {
    border-radius: 50%;
    width: 53px;
    height: 53px;
  }
  div {
    border-radius: 50%;
    width: 53px;
    height: 53px;
    background-color: blueviolet;
  }
`;

const LogOut = styled.div`
  background-color: #171717;
  width: 130px;
  height: 47px;
  border-bottom-left-radius: 15px;
  position: fixed;
  right: 0%;

  display: flex;
  justify-content: center;
  align-items: center;

    h1 {
      font-family: "Lato", sans-serif;
      font-size: 17px;
      color: white;
    }
`;

const STYLES = {
  CONTENT: CONTENT,
  BoxUsers: BoxUsers,
  USER: USER,
  LogOut: LogOut
}

export default STYLES;