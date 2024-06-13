<script setup>
import { onBeforeUnmount, onMounted } from "vue";
import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import axios from 'axios';
import { useRouter } from 'vue-router';

const props = defineProps({
  id: {
    type: String,
    default: "widget-calendar",
  },
  title: {
    type: String,
    default: "",
  },
  day: {
    type: String,
    default: "",
  },
  year: {
    type: String,
    default: "",
  },
  initialView: {
    type: String,
    default: "dayGridMonth",
  },
  initialDate: {
    type: String,
    default: "2024-06-01",
  },
  selectable: {
    type: Boolean,
    default: true,
  },
  editable: {
    type: Boolean,
    default: true,
  },
});

let calendar;
const router = useRouter();

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/transactions');
    if (response.data && response.data.length > 0) {
      const event = response.data; // title에 cost 결과값을 넣기

      // 날짜별 cost 합산을 위한 객체
      const groupedIncomeEvents = event.reduce((acc, event) => {
        if (event.isIncome) { // isIncome이 true인 경우에만 cost를 더함
          const date = event.start.split('T')[0]; // 날짜만 추출
          if (!acc[date]) {
            acc[date] = 0;
          }
          acc[date] += parseInt(event.cost);
        }
        return acc;
      }, {});

      const groupedExpenseEvents = event.reduce((acc, event) => {
        if (!event.isIncome) { // isIncome이 false인 경우에만 cost를 더함
          const date = event.start.split('T')[0]; // 날짜만 추출
          if (!acc[date]) {
            acc[date] = 0;
          }
          acc[date] += parseInt(event.cost);
        }
        return acc;
      }, {});

      // 합산된 cost 값을 이벤트 객체 배열로 변환
      const summedIncomeEvents = Object.keys(groupedIncomeEvents).map(date => ({
        id: `+ ${date}`,
        start: date,
        title: `+ ${groupedIncomeEvents[date]}`,
      }));

      const summedExpenseEvents = Object.keys(groupedExpenseEvents).map(date => ({
        id: `- ${date}`,
        start: date,
        title: `- ${groupedExpenseEvents[date]}`,
        color: 'red', // 빨간색으로 지정

      }));

      // 두 개의 이벤트 배열을 합침
      const summedEvents = [...summedIncomeEvents, ...summedExpenseEvents];
      calendar = new Calendar(document.getElementById(props.id), {
        contentHeight: "auto",
        plugins: [dayGridPlugin],
        initialView: props.initialView,
        selectable: props.selectable,
        editable: props.editable,
        events: summedEvents,
        initialDate: props.initialDate,
        headerToolbar: {
          start: "title",
          center: "",
          end: "today prev,next",
        },
        views: {
          month: {
            titleFormat: {
              month: "long",
              year: "numeric",
            },
          },
          agendaWeek: {
            titleFormat: {
              month: "long",
              year: "numeric",
              day: "numeric",
            },
          },
          agendaDay: {
            titleFormat: {
              month: "short",
              year: "numeric",
              day: "numeric",
            },
          },
        },
        eventClick: (info) => {
          const date = info.event.startStr.split('T')[0];
          router.push({ name: 'TransactionDetail', params: { date } });
        },
      });
      calendar.render();
    } else {
      console.error("No events data found.");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});

onBeforeUnmount(() => {
  if (calendar) {
    calendar.destroy();
  }
});

</script>

<template>
  <div class="card widget-calendar">
    <div class="p-3 pb-0 card-header">
      <h6 class="mb-0">{{ props.title }}</h6>
      <div class="d-flex">
        <div class="mb-0 text-sm p font-weight-bold widget-calendar-day">
          {{ props.day }}
        </div>
        <div class="mb-1 text-sm p font-weight-bold widget-calendar-year">
          {{ props.year }}
        </div>
      </div>
    </div>
    <div class="p-3 card-body">
      <div :id="props.id" data-toggle="widget-calendar">
        
      </div>
    </div>
  </div>
</template>
