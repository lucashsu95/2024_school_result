// <!-----------------------main Start-->
var flag = "";
var flag2 = 1;
var oldTop = 0;
// const root = document.documentElement;
window.onscroll = function () {
    var nowTop = document.documentElement.scrollTop;
    if (nowTop > oldTop) {
        document.querySelector("nav").classList.add("nav_active");
    } else {
        document.querySelector("nav").classList.remove("nav_active");
    }
    oldTop = nowTop;
};

// <!-----------------------Vue Start-->
const app = Vue.createApp({
    data() {
        return {
            Lsum: 0,
            slide_id: 0,
            slide: [{
                title: "什麼是人工智慧？",
                english: "What is Artificial Intelligence?",
                content: `人工智慧是模擬人類智慧的科技領域，通過機器學習、深度學習等技術實現。它使機器能夠學習、理解、推理和解決問題，應用範疇涵蓋自動駕駛、醫療診斷等多領域。`,
                color: "#7da9d5d9",
                class: "btn-outline-danger",
            },
            {
                title: "常見的AI應用",
                english: "Common Applications of AI",
                content: `人工智慧在日常生活中有著廣泛應用，包括智能助手、影像辨識、語音辨識等。智能助手如Siri和Alexa，以及影像辨識軟體如OpenCV，都是AI技術的實際應用。`,
                color: "#c3c076",
                class: "btn-outline-success",
            },
            {
                title: "AI軟體工具介紹",
                english: "Introduction to AI Software Tools",
                content: "AI的發展得益於多種軟體工具，如TensorFlow、PyTorch、NLTK等。這些工具提供了建立和訓練機器學習模型所需的功能，推動了AI技術的快速發展。",
                color: "#d3a5a5",
                class: "btn-outline-info",
            },
            {
                title: "AI的未來展望",
                english: "The Future of AI",
                content: `人工智慧的未來將不斷演進，應用領域將擴展至更多行業。自動駕駛、醫療診斷、環境監測等將成為AI技術的重要應用，為社會帶來更多的便利和創新。`,
                color: "#b1aacb",
                class: "btn-outline-info",
            }],
            current_contest: {},
            contests: [
                {
                    title: '2021北區程式設計競賽',
                    imgs: ['1.jpg', '2.jpg', '3.jpg'],
                    date: '2021-11-07',
                },
                {
                    title: '2021青年程式設計競賽',
                    imgs: ['1.jpg'],
                    date: '2021-11-13',
                },
                {
                    title: '2022全國技能競賽',
                    imgs: ['1.jpg', '2.jpg', '3.png'],
                    date: '2022-04-21',
                },
                {
                    title: '2022德霖全國程式設計競賽',
                    imgs: ['1.jpg', '2.jpg', '3.jpg'],
                    date: '2022-10-23',
                },
                {
                    title: '2022青年程式設計競賽',
                    imgs: ['1.jpg'],
                    date: '2022-10-29',
                },
                {
                    title: '2022鶑歌培訓賽',
                    imgs: ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
                    date: '2022-11-19',
                },
                {
                    title: '2022專題校內初賽',
                    imgs: ['1.jpg', '2.jpg', '3.jpg'],
                    date: '2022-12-29',
                },
                {
                    title: '2023德明專題',
                    imgs: ['1.jpg'],
                    date: '2023-03-08',
                },
                {
                    title: '2023景文專題',
                    imgs: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'],
                    date: '2023-03-17',
                },
                {
                    title: '2023全國技能競賽-區賽',
                    imgs: ['20230323_114708.jpg', '20230323_114710.jpg', '20230323_114711.jpg'],
                    date: '2023-03-23',
                },
                {
                    title: '2023專題複賽',
                    imgs: ['20230331_134314.jpg'],
                    date: '2023-03-31',
                },
                {
                    title: '2023全國專題',
                    imgs: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'],
                    date: '2023-05-04',
                },
                {
                    title: '2023全國技能競賽-全國賽',
                    imgs: ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
                    date: '2023-07-13',
                },
                {
                    title: '2023TQC比賽',
                    imgs: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg'],
                    date: '2023-10-14',
                },
                {
                    title: '2023鶑歌培訓賽',
                    imgs: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg'],
                    date: '2023-10-28',
                },
                {
                    title: '112全國技藝競賽',
                    imgs: ['all.jpg', '程式4.jpg', '網頁1.jpg', '網頁4.jpg', '程式&網頁.jpg', '文書9.jpg', '文書5.jpg', '文書1.jpg', '文書3.jpg', '文書2.jpg'],
                    date: '2023-11-30',
                },
            ],
            currentIndex: 0,
            auto: null,
        };
    },
    mounted() {
        this.current_contest = this.contests[0]
    },
    computed: {},
    methods: {
        changeCurrentContest(idx) {
            this.current_contest = this.contests[idx];
            this.currentIndex = 0
        },
        prviewImg(title, url) {
            return `./images/${title}/${url}`;
        },
        renderSlider() {
            clearInterval(this.auto);
            this.auto = setTimeout(this.changeSlider, 10000);
        },
        changeSlider(flag = 1) {
            this.currentIndex = (this.currentIndex + flag + this.current_contest.imgs.length) % this.current_contest.imgs.length;
            this.renderSlider();
        },
        changeIndex(index) {
            this.currentIndex = index;
            this.renderSlider();
        },

    },
    watch: {
        currentIndex() {
            this.renderSlider();
        },
    },
    components: {
        'like-btn': {
            template: `
            <svg id="_圖層_1" data-name="圖層 1" xmlns="http://www.w3.org/2000/svg" class="like-btn mt-2"
                @click="likeModel" viewBox="0 0 103.24 92.82">
                <path class="like-btn-cls-1"
                    d="M102.74,29.25c0-15.88-12.87-28.75-28.75-28.75-9.04,0-17.1,4.17-22.37,10.7C46.35,4.67,38.29,.5,29.25,.5,13.37,.5,.5,13.37,.5,29.25c0,9.25,4.38,17.48,11.17,22.74l40.13,40.13,40.21-40.47c6.54-5.27,10.73-13.34,10.73-22.4Z" />
            </svg>
            `,
            methods: {
                likeModel(e) {
                    e.target.style.fill = '#e45a5a'
                }
            }
        },
        'dot': {
            template: `
            <svg id="_圖層_1" data-name="圖層 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.27 10.1" class='dot mb-2 d-block'>
                <circle class="dot-cls-1" cx="5.05" cy="5.05" r="5.05"/>
                <circle class="dot-cls-1" cx="28.13" cy="5.05" r="5.05"/>
                <circle class="dot-cls-1" cx="51.22" cy="5.05" r="5.05"/>
            </svg>
            `
        }
    }
}).mount("#app");
// <!-------------------------main End------------------------->

// <!-------------------------swiper Start------------------------->
var current_contest_swiper = new Swiper('.current-contest-swiper', {
    // loop:true,
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        prevEl: '.current-contest-swiper-prev',
        nextEl: '.current-contest-swiper-next'
    }
})

// <!-------------------------swiper End------------------------->

