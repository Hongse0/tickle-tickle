<script setup>
import { onBeforeUnmount, onMounted } from "vue";
import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import axios from 'axios';

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

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/transactions');
    if (response.data && response.data.length > 0) {
      const events = response.data;

      // Calculate total income per day
      const totalIncomePerDay = calculateTotalIncomePerDay(events);

      calendar = new Calendar(document.getElementById(props.id), {
        contentHeight: "auto",
        plugins: [dayGridPlugin],
        initialView: props.initialView,
        selectable: props.selectable,
        editable: props.editable,
        events: events,
        initialDate: props.initialDate,
        headerToolbar: {
          start: "title",
          center: "",
          end: "today prev,next",
        },
        eventContent: eventContent(totalIncomePerDay),
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

const calculateTotalIncomePerDay = (events) => {

  const totalIncomePerDay = {};
  events.forEach(event => {
    console.log(event);

    console.log(event.isIncome);
    if (event.isIncome) {
      const date = event.start;
      if (totalIncomePerDay[date]) {
        totalIncomePerDay[date] += event.cost;
      }
      else {
        totalIncomePerDay[date] = event.cost;
      }
    }
    
  });
  return totalIncomePerDay;
};

const eventContent = (totalIncomePerDay) => {
  return (info) => {
    console.log(totalIncomePerDay);
    const date = info.event.startStr.split('T')[0]; 
    const totalIncome = totalIncomePerDay[date] || 0; // 해당 날짜의 총 수입 또는 기본값 0
    console.log(totalIncomePerDay[date]);
    return {
      html: `<div class="text-center">${totalIncome}</div>`
    };
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
