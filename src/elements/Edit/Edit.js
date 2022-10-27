import { useRef, useEffect, useState } from 'react';
import { CustomDiv, CustomInput } from './style/edit.Style.js'
function Edit() {


    const inputRef = useRef();
    const [text, setText] = useState("teste");
    const [isEditing, setEditing] = useState(false);
    console.log(text)
    useEffect(() => {
        if (isEditing) {

            inputRef.current.focus();

        } else {
            inputRef.current.blur();
        }


    }, [isEditing])

    function editDescription(description) {

        setText(description);

    }

    return (
        <CustomInput


            backGround={isEditing ? '#FFFFFF' : '#171717'}
            disabled={isEditing ? false : true}
            name='description' value={text}

            type='text'

            ref={inputRef}
            onChange={(e) => editDescription(e.target.value)}
            onKeyDown={(e) => {

                if (e.key === 'Enter') {
                    alert(e.target.value);
                    setEditing(false);
                }
                if (e.key === 'Escape') {
                    alert('Sai');
                    setEditing(false);
                }

            }}></CustomInput>

    )
}
export { Edit }