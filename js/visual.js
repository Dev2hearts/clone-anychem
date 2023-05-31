/**
 * 작성자: 박지성
 * 작성일: 2023-05-26
 * 기능 업데이트 : json 데이터를 이용한 html 구조 생성
 */

window.addEventListener("load", (event) => {
    const swVisualWrap = document.querySelector(".sw-visual .swiper-wrapper");
    fetch("data/visualdata.json")
        .then((res) => res.json())
        .then((result) => makeVisualHtml(result))
        .catch((err) => console.log(err));
    function makeVisualHtml(_data) {
        let html = ``;
        _data.img.forEach((item) => {
            let temp = `
            <div class="swiper-slide" style="background-image: url(images/${item})"></div>
            `;
            html += temp;
        });
        swVisualWrap.innerHTML = html;
        const swVisual = new Swiper(".sw-visual", {
            loop: true,
            effect: "fade",
            speed: 800,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".sw-visual-pg",
                clickable: true,
            },
        });
        // 위의 구문을 통해서 slide 생성이 완료 되면
        // .sw-visyal-pg .swiper-pagination-bullet이 생성됨
        // innerHTML 을 이용해서 내용을 넣어보자.
        const swVisualBullets = document.querySelectorAll(".sw-visual-pg .swiper-pagination-bullet");
        swVisualBullets.forEach((item, index, arr) => {
            if (index < 9) {
                item.innerHTML = `<em>0${index + 1}</em>`;
            } else {
                item.innerHTML = `<em>${index + 1}</em>`;
            }
            // 3항 연산자
            // item.innerHTML = `<em>${index < 9 ? '0' : ''}${index + 1}</em>`;
        });
    }
});
