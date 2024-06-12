<script setup>
import { onBeforeUnmount, onMounted } from "vue";

import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
let calendar;

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
  events: {
    type: Array,
    default: () => [
      {
					"id" : 1,
					"userId" :1,
					"start" : "2024-06-11",
					"price": 6000, 
					"title": "Real MY SQL구입",
					"memo": "책 엄청 비싸네;;",
					"isIncome": true, 
					"category": "쇼핑"
				},
				
			{
					"id" : 2,
					"userId" :1,
					"start" : "2024-06-12",
					"price": 18000, 
					"title": "vue.js 마스터 구입",
					"memo": "뷰 마스터가 되어야지!",
					"isIncome": true,  
					"category": "쇼핑"
				},
				
				{
					"id" : 3,
					"userId" :1,
					"start" : "2024-06-10",
					"price": 26000, 
					"title": "Spring 시작 구입",
					"memo": "어려워보인당...",
					"isIncome": false, 
					"category": "쇼핑"
				},
        {
					"id" : 4,
					"userId" :1,
					"start" : "2024-06-11",
					"price": 10000, 
					"title": "Real MY SQL판매",
					"memo": "안할래",
					"isIncome": false, 
					"category": "중고거래"
				},
    ],
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

onMounted(() => {
  calendar = new Calendar(document.getElementById(props.id), {
    contentHeight: "auto",
    plugins: [dayGridPlugin],
    initialView: props.initialView,
    selectable: props.selectable,
    editable: props.editable,
    events: props.events,
    initialDate: props.initialDate,
    headerToolbar: {
      start: "title", // will normally be on the left. if RTL, will be on the right
      center: "",
      end: "today prev,next", // will normally be on the right. if RTL, will be on the left
    },
    eventContent: eventContent,  // 추가
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
  });

  calendar.render();
});

onBeforeUnmount(() => {
  if (calendar) {
    calendar.destroy();
  }
});
const eventContent = (info) => {
  return {
    html: `<div class="text-center">${info.event.extendedProps.price}</div>`
  };
};

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
      <div :id="props.id" data-toggle="widget-calendar"></div>
    </div>
  </div>
</template>
