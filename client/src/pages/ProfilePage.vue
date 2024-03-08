<template>
    <DashboardPage />
    <div class="profile-container container mx-auto" :style="templateData.css" ref="profileContainer"></div>
</template>
<script setup lg="ts">
import DashboardPage from '@/components/DashboardPage.vue';
import { templateData } from '@/utils/templateData';
import { userData } from '@/utils/userData';
import { onMounted, ref } from "vue";
import * as cheerio from 'cheerio';

const style = document.createElement('style')
style.innerHTML = templateData.css;
document.head.appendChild(style)

const profileContainer = ref < HTMLElement | null > (null);



onMounted(() => {
    const container = document.querySelector('.profile-container');

    const $ = cheerio.load(templateData.html);

    $('.personal-info_name').text(userData.name);

    userData.positions.map(position=>{
        $('.positions_list').append(`<li class="position_item">${position}</li>`);
    })

    $('.personal-info_location').text(userData.location);




    if (container) {
        container.innerHTML = $.html();
    }
});
</script>
<style scoped></style>