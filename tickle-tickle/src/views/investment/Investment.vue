<script>
import axios from "axios";


export default {
    data() {
        ``
        return {
            NewsListNaver: [],
            title: '',
            description: '',

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
                                        <h6 class="mb-0">Sales by Country</h6>
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
                                                    <h6 class="mb-0 text-sm">{{ bounce }}</h6>
                                                </div>
                                            </div>
                                            <hr class="mt-3 mb-1 horizontal dark" />
                                        </li>
                                    </ul>
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