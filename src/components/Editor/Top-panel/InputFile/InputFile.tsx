import React from 'react'
import style from './InputFile.module.css';

const InputFile = () => {

    const [fileSelected, setFileSelected] = React.useState<File>() // also tried <string | Blob>

    const handleImageChange = function (e: React.ChangeEvent<HTMLInputElement>) {
        const fileList = e.target.files;
        if (!fileList) return;
        setFileSelected(fileList[0]);
    };
    
    const uploadFile = function (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) {
        if (fileSelected) {
            const formData = new FormData();
            formData.append("image", fileSelected, fileSelected.name);
        }
    };

    return (
        <label htmlFor="photo" className={style.InputFile}>
            <input
                accept="img/*"
                id="image"
                name="image"
                type="file"
                multiple={false}
                onChange={handleImageChange}
            />
            <button
                className={style.button}
                onClick={uploadFile}
            >
                Choose Picture
            </button>
        </label>
    )
}

export default InputFile
