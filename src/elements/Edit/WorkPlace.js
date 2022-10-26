import { useRef, useEffect, useState } from 'react';
import styled from "styled-components";
function WorkPlace() {


    const inputRef = useRef();
    const [text, setText] = useState("teste");
    console.log(text)
    useEffect(() => {

        inputRef.current.focus();

    }, [])

    function editDescription(description) {

        setText(description);
        
    }

    return (

        <>
            <CustomDiv>

                <h1>useRef</h1>
                
                    <input name='description' value={text} type='text' ref={inputRef} onChange={(e) => editDescription(e.target.value)} onKeyDown={(e) =>{

                        if(e.key === 'Enter'){
                            alert(e.target.value);
                        }
                        if(e.key === 'Escape'){
                            alert('Sai');
                        }

                    }}></input>
                



            </CustomDiv>
        </>
    );


}

const CustomDiv = styled.div`

    background-color:grey;
    height: 200px;
    width:50%;
    margin:auto;
    display:flex;
    flex-direction:column;
    justify-content:center;
    justify-content:space-around;
    padding:20px;
    


`


export { WorkPlace };