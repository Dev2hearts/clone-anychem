// 웹브라우저에 html, css, js, image
// 모두 불러들여서 렌더링 준비가 끝나면
// 그때 function 의 블럭 안쪽 {} 실행
window.addEventListener("load", function () {
    // 모바일 버튼 기능

    // nav 에 마우스 오버하면 header 높이 260px 변경하기
    // nav 에 마우스 아웃하면 header 높이 100px 변경하기
    // header 를 js 로 저장해 보자(변수 정의해 보자)
    let header = document.querySelector(".header");
    // nav 를 js 로 저장해 보자(변수 정의해 보자)
    let nav = document.querySelector(".nav");
    // console.log(header);
    // console.log(nav);

    // nav 에 마우스 오버 처리
    // html 요소에 마우스 오버 처리하는 법
    nav.addEventListener("mouseenter", function () {
        // header 의 높이를 260px로 고치고 싶다.
        // header.style.height = "260px";
        // 우리는 260px로 변경되는 class 를 작성해 두었다.
        header.classList.add("header-active");
    });
    // nav 에 마우스 아웃 처리
    // html 요소에 마우스 아웃 처리하는 법
    nav.addEventListener("mouseleave", function () {
        // header 의 높이를 100px로 고치고 싶다.
        // header.style.height = "100px";
        // class를 제거 한다.
        header.classList.remove("header-active");
    });
    let gnbA = document.querySelectorAll(".gnb > li");
    let navBlueBar = document.querySelector(".nav-blue-bar");

    let posX = gnbA[0].getBoundingClientRect().left;
    let widthX = gnbA[0].getBoundingClientRect().width;
    navBlueBar.style.left = posX + "px";
    navBlueBar.style.width = widthX + "px";
    gnbA.forEach((item) => {
        item.addEventListener("mouseenter", function (event) {
            let posX = this.getBoundingClientRect().left;
            let widthX = this.getBoundingClientRect().width;
            // navBlueBar.style.left = posX + "px";
            // navBlueBar.style.width = widthX + "px";
            anime({
                targets: navBlueBar,
                left: posX,
                width: widthX,
                easing: "easeInOutQuad",
                duration: 500,
            });
        });
    });
    // 스크롤에 의한 position:fixed, relative 교체
    const visual = this.document.querySelector(".visual");
    window.addEventListener("scroll", (event) => {
        // 스크롤 위치값을 파악
        let scY = this.window.scrollY;
        // classList.add() 와 remove() 활용
        if (scY !== 0) {
            header.classList.add("header-fixed");
            visual.classList.add("visual-fixed");
            // 스크롤바가 아래로 조금이라도 이동
            // position:fixed;
        } else {
            header.classList.remove("header-fixed");
            visual.classList.remove("visual-fixed");
            // 스크롤바가 최상단에 위치.
            // position: relative;
        }
    });
});
