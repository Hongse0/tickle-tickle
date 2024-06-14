<script setup>
import { onMounted, ref } from "vue";
import { DataTable } from "simple-datatables";
import axios from 'axios';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const result = ref([]);
const date = route.params.date;
const router = useRouter();
const dataTableBasic = ref(null);

const goToTransactionList = () => {
    router.push({ name: 'TransactionList' });
};

// 카테고리 변환 함수
const getCategoryDisplayName = (category) => {
    switch (category) {
        case "education": return "교육";
        case "traffic": return "교통";
        case "cafe": return "카페/간식";
        case "alcohol": return "술/유흥";
        case "health": return "의료/건강";
        case "food": return "식비";
        case "life": return "생활";
        case "present": return "경조/선물";
        case "culture": return "문화/여가";
        case "finance": return "금융";
        case "shop": return "쇼핑";
        case "salary": return "급여";
        case "business": return "사업수익";
        case "pin": return "용돈";
        case "insurance": return "보험금";
        case "scholarship": return "장학금";
        case "used": return "중고거래";
        case "real": return "부동산";
        case "dutch": return "더치페이";
        case "etc": return "기타";
        default: return "기타";
    }
};

const fetchData = async () => {
    try {
        const response = await axios.get("http://localhost:3000/transactions");
        const allData = response.data;
        result.value = allData.filter((transaction) => transaction.start.split("T")[0] === date);

        const tableRows = result.value.map((obj) => {
            const { id, start, cost, title, memo, isIncome, category } = obj;
            return [
                title,
                getCategoryDisplayName(category),
                isIncome ? "수입" : "지출",
                start,
                cost.toString(),
                memo,
                `<button class="btn btn-danger btn-sm" data-id="${id}" @click="deleteTransaction(${id})">삭제</button>`
            ];
        });

        if (dataTableBasic.value) {
            dataTableBasic.value.destroy();
        }

        dataTableBasic.value = new DataTable("#datatable-basic", {
            data: {
                headings: ["내역", "카테고리", "수입/지출", "날짜", "금액", "메모", "삭제"],
                data: tableRows
            },
            searchable: false,
            fixedHeight: true
        });

        // 이벤트 위임 방식으로 삭제 버튼 클릭 이벤트 처리
        document.querySelector("#datatable-basic tbody").addEventListener("click", async (event) => {
            if (event.target.classList.contains("btn-danger")) {
                const id = event.target.getAttribute("data-id");
                await deleteTransaction(id);
            }
        });

    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

const deleteTransaction = async (id) => {
    try {
        await axios.delete(`http://localhost:3000/transactions/${id}`);
        fetchData(); // 테이블 갱신
    } catch (error) {
        console.error("Error deleting transaction:", error);
    }
};

onMounted(fetchData);
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
                        <div class="col text-end mx-3 float-right">
                            <a href="#" class="fw-light text-right btn btn-primary btn-sm active" role="button"
                                aria-pressed="true" @click="goToTransactionList">목록</a>
                        </div>
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
                                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                        삭제
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