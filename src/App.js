import React from "react";
import Calendar from "./pages/Calendar";
import Daytimer from "./pages/Daytimer";
import Map from "./pages/Map";
import main from "./imgs/main-min.jpg";
import ring from "./imgs/ring-min.png";


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
          <div className="title">
            <h1 className="mt20 yel">we're getting</h1>
            <h1 className="mt20 yel">married</h1>
          </div>
          <div className="mt20 main-img-area">
              <div className="img-border">
                <img className="main-img" src={main}/>
              </div>
              <div className="mt10 main-text-area">
                  <div className="main-text">
                    <h1>신랑</h1>
                  </div>
                <img className="text-img" src={ring} />
                  <div className="main-text">
                    <h1>조아라</h1>
                  </div>
              </div>
          </div>

        <div className="mt30 invitation-area">
            <h1 className="mt20 yel title-content">INVITATION</h1>
            <h3 className="mt10"> 문구</h3>
            <h3 className="mt10"> 문구</h3>
            <h3 className="mt10"> 문구</h3>
            <h3 className="mt10"> 문구</h3>
            <h3 className="mt10"> 문구</h3>
            <h3 className="mt10"> 문구</h3>
        </div>

        <div className="mt30 map-area">
            <h1 className="mt20 yel title-content">예식 안내</h1>
            <h4 className="mt10 map-text">2025년 5월 25일 일요일 오후1시</h4>
            <h4 className="mt10 map-text">웨스턴펠리스 웨딩홀 펠리스홀</h4>
            <img className="map-area"/>
            <Map />
        </div>



      <div className="mt30">
        <Calendar />
      </div>
        <div className="mt30">
            <Daytimer />
        </div>
    </>
  );
}

export default App;
