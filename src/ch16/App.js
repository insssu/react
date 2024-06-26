import { useState } from "react";
import "./App.css";
import Swal from "sweetalert2";

function App() {
    const [ imgSrc, setImgSrc ] = useState("");

    const handleImgClick = () => {
        Swal.fire({
            title: "프로필 이미지 변경",
            text: "프로필을 변경 하시겠습니까?",
            showCancelButton: true,
            confirmButtonText:"예",
            cancelButtonText: "아니오"
        }).then(result => {
            if(result.isConfirmed) {
                const fileElement = document.createElement("")
                fileElement.setAttribute("type", "file");
                fileElement.click();
                fileElement.onchange = (e) => {
                    const file = e.target.files[0];
                    const fileReader = new FileReader();

                    fileReader.onload = (e) => {
                        setImgSrc(e.target.result);
                    }
                    fileReader.readAsDataURL(file)
                }
            }
        })
    }

    return (
        <>
            <div className="container">
                <h1 className="profile">프로필</h1>
                <div className="circle" type="file" onClick={handleImgClick}>
                    {/* <img src={imgSrc} alt=""  /> */}
                </div>
                <input className="name" type="text" />
                <input className="email" type="text" />
                <button className="button">저장</button>
            </div>
        </>
      );
}

export default App;