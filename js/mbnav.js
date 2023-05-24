window.addEventListener("load", function () {
    const mbNav = document.querySelector(".mb-nav");
    const mbNavActive = "mb-nav-active";
    const mbWrap = document.querySelector(".mb-wrap");
    const mbNavWrap = "mb-wrap-active";
    const mbwidth = 1024;
    mbNav.addEventListener("click", function () {
        // 토글도 좋다.
        // mbNa.classList.toggle("mb-nav-active")
        // mb-nav-active 클래스 적용 여부(true, false)
        let checkActive = mbNav.classList.contains("mb-nav-active");

        if (checkActive === false) {
            mbNav.classList.add(mbNavActive);
            mbWrap.classList.add(mbNavWrap);
        } else {
            mbNav.classList.remove(mbNavActive);
            mbWrap.classList.remove(mbNavWrap);
        }
    });
    // 화면의 리사이즈를 체크 해서 처리
    this.window.addEventListener("resize", function () {
        const windowWidth = window.innerWidth;
        if (windowWidth > mbwidth) {
            mbNav.classList.remove(mbNavActive);
            mbWrap.classList.remove(mbNavWrap);
        }
    });
    // 모바일 아코디언 메뉴
    const sideMenuA = document.querySelectorAll(".side-menu > li > a");
    const sideSubMenu = document.querySelectorAll(".side-menu > li > .submenu");
    sideMenuA.forEach((item, index) => {
        item.addEventListener("click", (event) => {
            // a tag 의 href 를 막는다.
            event.preventDefault();
            changeSubmenu(index);
        });
    });
    function changeSubmenu(_index) {
        sideSubMenu.forEach((item, index) => {
            if (_index === index) {
                if (item.style.display === "block") {
                    item.style.display = "none";
                } else {
                    item.style.display = "block";
                }
            } else {
                item.style.display = "none";
            }
        });
    }
});
