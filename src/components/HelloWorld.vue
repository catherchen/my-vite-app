<!--
 * @Description: 
 * @Author: linchen13
 * @Date: 2021-08-18 11:31:45
 * @LastEditTime: 2021-11-18 10:26:01
 * @LastEditors: linchen13
-->
<template>
 <div>
 <van-config-provider :theme-vars="themeVars">
      <van-calendar
        ref="calendarRefs"
        :show-title="false"
        :min-date="minDate"
        :max-date="maxDate"
        :poppable="false"
        :show-confirm="false"
        :show-mark="false"
        first-day-of-week="1"
        class="custom-calendar"
      >
      </van-calendar>
    </van-config-provider>
 </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const minDate = new Date(2021,10,1);
const maxDate = new Date(2021,10,30);
const themeVars = {
  calendarHeaderTitleHeight: '40px',
  calendarweekdaysHeight: '40px',
  calendarDayHeight: '52px',
  calendarSelectedDaySize: '36px',
  calendarSelectedDayBackgroundColor: "#004EA2",
  calendarWeekdaysHeight: '44px',
  calendarHeaderTitleHeight: '54px',
  calendarHeaderSubtitleFontSize: '40px',
};

onMounted(() => {
  const calendarRef = ref<CalendarInstance>();
  calendarRef.value?.scrollToDate(new Date(2021, 10, 29));
});
</script>
<style lang="scss" scoped>
.custom-calendar{
  height: 200px;
}
</style>
