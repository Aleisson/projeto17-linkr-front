import { useRef, useEffect, useState } from 'react';
import { CustomInput } from './style/edit.Style.js';
import { editPost } from '../../services/edit.services.js';

function Edit({ id, userId, content, isEditing, changeEdit }) {


    const inputRef = useRef();
    const [text, setText] = useState(content);
    const [save, setSave] = useState(content);
    const [disabled, setDisabled] = useState(true);


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



    return (
        <>
            <CustomInput


                backGround={isEditing ? '#FFFFFF' : '#171717'}

                disabled={isEditing && disabled ? false : true}

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
                            changeEdit(false);
                            setSave(text);
                        })

                        promise.catch((e) => {
                            console.error(e);
                            setDisabled(true);
                            changeEdit(true);
                            alert('Não foi possível alterar contéudo, por favor tente novamente');
                        })
                    }
                    if (e.key === 'Escape') {
                        changeEdit(false);
                        setText(save);
                    }

                }}></CustomInput>
        </>
    );
}
export { Edit };