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
                                    <h6 class="mb-0"></h6>
                                </div>
                                <div class="card-body pt-4 p-3">
                                    <ul class="list-group">

                                        <div class="d-flex flex-column">
                                            <h6 class="mb-3 text-sm"> name </h6>
                                            <span class="mb-2 text-xs">
                                                Company Name:
                                                <span class="text-dark font-weight-bold ms-sm-2">
                                                    company </span>
                                            </span>
                                            <span class="mb-2 text-xs">
                                                Email Address:
                                                <span class="text-dark ms-sm-2 font-weight-bold">
                                                    email </span>
                                            </span>
                                            <span class="text-xs">
                                                VAT Number:
                                                <span class="text-dark ms-sm-2 font-weight-bold"> id </span>
                                            </span>
                                        </div>

                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-5">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style></style>