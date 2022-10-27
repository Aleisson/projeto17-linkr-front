import { useRef, useEffect, useState } from 'react';
import { CustomDiv, CustomInput } from './style/edit.Style.js';
import { editPost } from '../../services/edit.services.js';

function Edit({ id, userId, content }) {


    const inputRef = useRef();
    const [text, setText] = useState(content);
    const [save, setSave] = useState(content);
    const [disabled, setDisabled] = useState(true);
    const [isEditing, setEditing] = useState(false);

    useEffect(() => {
       
        if (isEditing) {

            inputRef.current.focus();

        } else {
            inputRef.current.blur();
        }


    })

    function editDescription(description) {

        setText(description);

    }

    function clickEdit() {
        setEditing(isEditing => !isEditing);
        setText(save);
    }

    return (
        <>
            <CustomDiv>

                <button onClick={clickEdit}>edit</button>

                <CustomInput


                    backGround={isEditing ? '#FFFFFF' : '#171717'}
                    
                    disabled={isEditing && disabled? false : true}

                    name='description'

                    value={text}

                    type='text'

                    ref={inputRef}

                    onChange={(e) => editDescription(e.target.value)}

                    onKeyDown={(e) => {

                        if (e.key === 'Enter') {
                            
                            setDisabled(false);

                            const promise = editPost(id, userId, text);
                            
                            promise.then(() => {
                                setDisabled(true);
                                setEditing(false);
                                setSave(text);
                            })

                            promise.catch((e) => {
                                console.error(e);
                                setDisabled(true);
                                setEditing(true);
                                alert('Não foi possível alterar contéudo, por favor tente novamente');                                
                            })
                        }
                        if (e.key === 'Escape') {
                            setEditing(false);
                            setText(save);
                        }

                    }}></CustomInput>

            </CustomDiv>
        </>
    );
}
export { Edit };