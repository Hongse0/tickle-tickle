<script>
import axios from "axios";
import US from "@/assets/img/icons/flags/US.png";
import DE from "@/assets/img/icons/flags/DE.png";
import GB from "@/assets/img/icons/flags/GB.png";
import BR from "@/assets/img/icons/flags/BR.png";
import AU from "@/assets/img/icons/flags/AU.png";

export default {
    data() {
        return {
            NewsListNaver: [],
            title: '',
            description: '',
            sales: {
                us: {
                    country: "United States",
                    sale: "1,367.00",
                    bounce: "-0.44%",
                    flag: US,
                },
                germany: {
                    country: "Germany",
                    sale: "3.900",
                    bounce: "-.22%",
                    flag: DE,
                },
                britain: {
                    country: "Great Britain",
                    sale: "1,478.93",
                    bounce: "-0.34%",
                    flag: GB,
                },
                brasil: {
                    country: "Brasil",
                    sale: "253.29",
                    bounce: "-0.23%",
                    flag: BR,
                },
                australia: {
                    country: "Australia",
                    sale: "911.08",
                    bounce: "-0.39%",
                    flag: AU,
                },
            }
        };
    },

    mounted() {
        this.getNewsList();
    },

    methods: {
        getNewsList() {
            const URL =
                `/v1/search/news.json?query=${encodeURI('경제')}&start=1&display=10&sort=sim`;
            const clientId = "zkakaRsefw05VWLfk39a";
            const clientSecret = "0db25UBbLS";
            axios
                .get(URL, {
                    headers: {
                        Accept: "application/json",
                        "X-Naver-Client-Id": clientId,
                        "X-Naver-Client-Secret": clientSecret,
                    },
                })
                .then((response) => {
                    console.log(response.data);
                    // this.NewsListNaver = this.NewsListNaver.concat(response.data.items);
                    // console.log(this.NewsListNaver);
                    console.log(response.data.items[0].title)
                    this.title = response.data.items[0].title;
                    this.description = response.data.items[0].description;
                });
        },
    },

};

</script>

<template>
    <!-- <div class="row">
        <div class="col-lg-12 mb-lg">
            <div class="mb-3 card">
                <div class="p-3 card-body">
                    <h1>이 그래프는 홍세영님의 1년간 월별 소비를 보여주고 있어요.</h1>
                </div>
            </div>
        </div>
    </div> -->
    <div class="py-4 container-fluid">
        <div class="card h-100">
            <div class="mb-3 card">
                <div class="p-3 card-body">
                    <div class="row mt-4">
                        <div class="col-md-7">
                            <div class="card">
                                <div class="card-header pb-0 px-3">
                                    <h6 class="mb-0">오늘의 증시</h6>
                                </div>
                                <div class="card-body pt-4 p-3">
                                    <ul class="list-group">
                                        <div class="d-flex flex-column">
                                            <h6 class="mb-1 text-sm"> 코스피 KOSPI </h6>

                                            <span class="text-dark font-weight-bold ms-sm-2">
                                                2,764.76 </span>
                                            <span class="mb-2 text-danger text=xs">
                                                🔺38.16
                                                <span class="ms-3 ms-sm-2 text-danger font-weight-bold">
                                                    +1.44% </span>
                                            </span>
                                        </div>

                                    </ul>
                                </div>
                                <div class="card-body pt-4 p-3">
                                    <ul class="list-group">
                                        <div class="d-flex flex-column">
                                            <h6 class="mb-1 text-sm"> 코스닥 KOSDAQ </h6>

                                            <span class="text-dark font-weight-bold ms-sm-2">
                                                875.55 </span>
                                            <span class="mb-2 text-danger text=xs">
                                                🔺4.83
                                                <span class="ms-3 ms-sm-2 text-danger font-weight-bold">
                                                    +0.55% </span>
                                            </span>
                                        </div>

                                    </ul>
                                </div>
                                <div class="card-body pt-4 p-3">
                                    <ul class="list-group">
                                        <div class="d-flex flex-column">
                                            <h6 class="mb-1 text-sm"> 나스닥 NDAQ</h6>

                                            <span class="text-dark font-weight-bold ms-sm-2">
                                                59.55 USD </span>
                                            <span class="mb-2 text-danger text=xs">
                                                🔺38.16
                                                <span class="ms-3 ms-sm-2 text-danger font-weight-bold">
                                                    +0.90% </span>
                                            </span>
                                        </div>

                                    </ul>
                                </div>

                            </div>
                        </div>
                        <div class="col-md-5">
                            <div class="card">
                                <div class="p-3 pb-0 card-header">
                                    <div class="d-flex justify-content-between">
                                        <h6 class="mb-0">오늘의 환율</h6>
                                    </div>
                                </div>
                                <div class="p-3 card-body">
                                    <ul class="list-group list-group-flush list my--3">
                                        <li v-for="({ flag, country, sale, bounce }, index) in sales" :key="index"
                                            class="px-0 border-0 list-group-item">
                                            <div class="row align-items-center">
                                                <div class="col-auto">
                                                    <!-- Country flag -->
                                                    <img :src="flag" alt="Country flag" />
                                                </div>
                                                <div class="col">
                                                    <p class="mb-0 text-xs font-weight-bold">Country:</p>
                                                    <h6 class="mb-0 text-sm">{{ country }}</h6>
                                                </div>
                                                <div class="text-center col">
                                                    <p class="mb-0 text-xs font-weight-bold">Sales:</p>
                                                    <h6 class="mb-0 text-sm">{{ sale }}</h6>
                                                </div>
                                                <div class="text-center col">
                                                    <p class="mb-0 text-xs font-weight-bold">Bounce:</p>
                                                    <h6 class="mb-0 text-sm text-primary">{{ bounce }}</h6>
                                                </div>
                                            </div>
                                            <hr class="mt-3 mb-1 horizontal dark" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-4 row">
                        <div class="col-12 col-lg-6">
                            <!-- 메인 뉴스 -->
                            <div class="card h-100">
                                <div class="py-3 card-header d-flex align-items-center border-bottom">
                                    <div class="d-flex align-items-center">

                                        <div class="mx-1">
                                            <p class="text-xl text-dark font-black" style="font-weight: 900;">세계은행 "올해
                                                세계
                                                경제성장률
                                                2.6%로 안정적"</p>
                                            <small class="d-block text-muted">입력 2024-06-12 06:16 | 수정 2024-06-12
                                                06:37</small>
                                        </div>
                                    </div>
                                </div>

                                <div class="card-body">
                                    <img alt="Image placeholder"
                                        src="https://pip-thumb.zumst.com/api/v1/tdbez_VC002_91207565_content.jpeg?w=640&h=360"
                                        class="shadow-lg img-fluid border-radius-lg mb-3" />
                                    <p class="mb-4">
                                        올해 세계 경제는 작년과 비슷한 성장세를 유지하면서 안정될 것으로 전망됐습니다.<br><br>
                                        지만 저소득 국가의 성장률은 작년보다 낮을 것으로 예상돼, 세계 경제 성장률이 코로나19 이전 수준을 회복하려면 앞으로 몇 년 더 필요할 것으로
                                        예상됐습니다.<br><br>
                                        세계은행은 현지시간 11일 세계경제전망을 발표하고 올해 세계 경제 성장률을 2.6%로 전망했습니다.<br><br>
                                        지난해 세계 경제 성장률 추정치와 같은 수치로, 세계은행은 "올해 세계 경제가 코로나19 이후 3년 만에 처음으로 안정될 것으로 예상된다"고
                                        밝혔습니다.<br><br>
                                        이번 전망치는 세계은행이 지난 1월 발표한 2.4%보다 0.2% 포인트 높은 수치입니다.<br><br>
                                        성장률 전망치 상승의 주요 원인은 미국 경제의 예상보다 강한 성장으로 분석됐습니다.<br><br>
                                        올해 선진국 경제 성장률 전망치는 1.5%로 1월보다 0.3% 포인트 올랐고, 특히 미국은 0.9% 포인트 오른 2.5% 성장률로
                                        전망됐습니다.<br>
                                        하지만 신흥시장과 개발도상국의 성장률은 작년보다도 낮을 전망입니다.<br><br>
                                        이들 국가의 성장률은 작년 4.2%에서 올해 4.0%로 전망됐습니다.<br><br>
                                        MBC뉴스 김민욱입니다.<br><br>
                                    </p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style></style>