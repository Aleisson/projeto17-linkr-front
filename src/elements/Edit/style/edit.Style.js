import styled from "styled-components";


// const CustomDiv = styled.div`

//     background-color:#4D4D4D;
//     height: 200px;
//     width:50%;
//     margin:auto;
//     display:flex;
//     flex-direction:column;
//     justify-content:center;
//     justify-content:space-around;
//     padding:20px;
    
    

// `

const CustomInput = styled.input`
    
    display: flex;
    width: 100%;
    height:40%;
    border-radius:16px;
    margin: 0 0 16px 0;
    padding: 18px 18px 18px 18px;
    background-color: ${props => props.backGround};
    border-style: none;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #4C4C4C;
    outline:none;

`;


export { CustomInput };

