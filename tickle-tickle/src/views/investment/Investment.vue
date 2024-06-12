<script>
import axios from "axios";

export default {
    data() {
        return {
            NewsListNaver: [],
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
                    this.NewsListNaver = this.NewsListNaver.concat(response.data.items);
                    console.log(this.NewsListNaver);
                });
        },
    },
};
</script>