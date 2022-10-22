import styled from "styled-components";
import logo from "../assets/imgs/linkr.svg";
import { IoIosArrowDown } from "react-icons/io";
import { GoSearch } from "react-icons/go";

export default function Topbar() {
  return (
    <CONTENT>
      <img src={logo} alt="" />

      <div>
        <input placeholder="Search for people" />
        <GoSearch />
      </div>

      <USER>
        <IoIosArrowDown />
        <div>
          <img src="" alt="" />
        </div>
      </USER>
    </CONTENT>
  );
}

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
