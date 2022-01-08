import React, { useEffect, useRef, useState } from 'react'
import { connect } from 'react-redux';
import { InsertImg } from '../../../../store/actionCreators/imgActionCreator';
import style from './InputFile.module.css';

const InputFile = (props: DispatchProps) => {

    const inputRef = useRef<HTMLInputElement>(null);
    const selectedImageUrlRef = useRef<string>();
    const [loading, setLoading] = useState(false);

    function revokeImageUrl () {
        if (selectedImageUrlRef.current != null) {
            window.URL.revokeObjectURL(selectedImageUrlRef.current)
        }
    }

    function openSelectImageModal() {
        if (inputRef.current) {
            setLoading(true);
            inputRef.current.click()
        }
    }

    function updateSelectedImage() {
        revokeImageUrl();
        if (inputRef.current && inputRef.current.files) {
            const image = inputRef.current.files[0];
            selectedImageUrlRef.current = window.URL.createObjectURL(image);
            props.InsertImg(selectedImageUrlRef.current);
        }
        setLoading(false)
    }

    useEffect(() => revokeImageUrl, [])

    return (
        <label htmlFor="photo" className={style.InputFile}>
            <input
                ref={inputRef}
                accept=".jpg,.png"
                type="file"
                multiple={false}
                onChange={updateSelectedImage}
                style={{display: 'none'}}
            />
            <button
                className={style.button}
                onClick={openSelectImageModal} 
                disabled={loading}
            >
                Choose Picture
            </button>
        </label>
    )
}

type DispatchProps = ReturnType<typeof mapDispatchToProps>

const mapDispatchToProps = (dispatch: Function) => {
    return {
        InsertImg: (newSrc: string) => dispatch(InsertImg(newSrc)),
    }
}

export default connect(null, mapDispatchToProps)(InputFile);
