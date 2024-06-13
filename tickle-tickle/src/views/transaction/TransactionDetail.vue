<script setup>
import { onMounted, ref } from "vue";
import { DataTable } from "simple-datatables";
import axios from 'axios';

const result = ref([]);


// 카테고리 변환 함수
const getCategoryDisplayName = (category) => {
    switch (category) {
        case "education":
            return "교육";
        case "traffic":
            return "교통";
        case "cafe":
            return "카페/간식";
        case "alcohol":
            return "술/유흥";
        case "health":
            return "의료/건강";
        case "food":
            return "식비";
        case "life":
            return "생활";
        case "present":
            return "경조/선물";
        case "culture":
            return "문화/여가";
        case "finance":
            return "금융";
        case "shop":
            return "쇼핑";


        case "salary":
            return "급여";
        case "business":
            return "사업수익";
        case "pin":
            return "용돈";
        case "insurance":
            return "보험금";
        case "scholarship":
            return "장학금";
        case "used":
            return "중고거래";
        case "real":
            return "부동산";
        case "dutch":
            return "더치페이";
        case "etc":
            return "기타";

        default:
            return "기타"; // 기본적으로 원래 값을 반환
    }
};


// const getData = async () => {

// };
onMounted(async () => {

    const response = await axios.get('http://localhost:3000/transactions');
    result.value = response.data;  // 데이터를 result.value에 저장


    // const result = await getData();

    if (result.value.length > 0) {
        const dataTableBasic = new DataTable("#datatable-basic", {
            searchable: false,
            fixedHeight: true,
        });

        const tableRows = result.value.map((obj) => {  // result.value를 사용
            const { start, cost, title, memo, isIncome, category } = obj;
            return [
                // 컬럼 순서 여기서 지정
                title,
                getCategoryDisplayName(category),
                isIncome ? "수입" : "지출",  // isIncome 값을 기반으로 변환

                start,
                cost.toString(),
                memo,
            ];
        });

        if (tableRows.length > 0) {
            dataTableBasic.rows.add(tableRows);
        }
    }
});
</script>
<template>
    <div class="py-4 container-fluid">
        <div class="mt-4 row">
            <div class="col-12">
                <div class="card">
                    <!-- Card header -->
                    <div class="card-header">
                        <h5 class="mb-0">가계부 상세 조회</h5>
                        <p class="mb-0 text-sm">
                            오늘의 수입과 지출을 확인해보세요.
                        </p>
                    </div>
                    <div class="table-responsive">
                        <table id="datatable-basic" class="table table-flush">
                            <thead class="thead-light">
                                <tr>
                                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                        내역
                                    </th>
                                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                        카테고리
                                    </th>
                                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                        수입/지출
                                    </th>
                                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                        날짜
                                    </th>
                                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                        금액
                                    </th>
                                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                        메모
                                    </th>
                                </tr>
                            </thead>
                            <tbody></tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
