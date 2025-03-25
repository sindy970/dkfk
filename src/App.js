import React from "react";
import Calendar from "./pages/Calendar";
import Daytimer from "./pages/Daytimer";


function App() {
  const handleCopyUrl = (gubun) => {
    const accountText = document.getElementById(gubun).innerText;
    const accountNumber = accountText.split(" ")[1]; // 계좌 번호만 추출
    navigator.clipboard.writeText(accountNumber).then(() => {
      alert("계좌번호가 복사되었습니다!");
    });
  };

  return(
    <>
      <div>
        <Calendar />
        <Daytimer />
      </div>
    </>
  );
}

export default App;
