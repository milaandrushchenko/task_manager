<template>
    <DashboardPage />
    <div class="container mx-auto">
        <div class="profile font-normal">
            <div class="flex justify-center">
                <div class="left-block pt-8 p-5 text-white">
                    <section class="personal-info pb-4">
                        <p class="personal-info_name font-bold pb-2"> Robyn
                            Kingsley</p>
                        <div class="personal-info_positions pb-1.5 flex gap-1">
                            <div class="personal-info_image  pt-1">
                                <div class="info-img"></div>
                            </div>
                            <ul class="positions_list uppercase">
                                <li class="position_item">UX/UI DESIGNER</li>
                                <li class="position_item">PRODUCT DESIGNER</li>
                                <li class="position_item">UX RESEARCHER</li>
                            </ul>
                        </div>
                        <p class="personal-info_location location"><svg class="location_img">
                                <use href="../assets/images/icons.svg#icon-location"></use>
                            </svg>Berlin, Germany</p>
                    </section>
                    <section class="education pb-4">
                        <h1 class="font-bold uppercase left-section-title pb-2.5">Education</h1>
                        <article class="education-info pb-2.5">
                            <h2 class="education_title font-semibold pb-0.5">Course</h2>
                            <div class="education_place pb-0.5">University</div>
                            <div class="education_years pb-1">2016-2018</div>
                            <div class="education_information ">Lorem ipsum dolor, sit amet consectetur adipisicing
                                elit.
                                Aliquam odio animi accusantium natus quia, id fugit dolore cum sapiente voluptatem
                                molestias beatae aliquid possimus et doloribus iure modi architecto tempora.</div>
                        </article>
                    </section>
                    <section class="skills">
                        <h1 class="font-bold left-section-title pb-2.5 uppercase">Skills</h1>
                        <ul class="skills-list">
                            <li class="skills-list_item pb-1">User expiriense</li>
                            <li class="skills-list_item pb-1">User expiriense</li>
                        </ul>
                    </section>
                </div>
                <div class="right-block pt-7 px-4">
                    <section class="social flex gap-4 items-center pb-3.5">
                        <div class="social_image"><img src="../assets/images/profile.svg" alt=""></div>
                        <div class="social_nets">
                            <ul class="networks_list">
                                <li class="networks-item"> <svg class="networks-item_img">
                                        <use href="../assets/images/icons.svg#icon-linkedin"></use>
                                    </svg>hi.robyn.kingsley@mail.com</li>
                            </ul>
                        </div>
                    </section>
                    <section class="profile">
                        <h1 class="right-section-title text-bold uppercase font-bold pb-2.5">Profile</h1>
                        <p class="profile_description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
                            impedit natus quidem eveniet quas, illum dolor hic repellendus eaque autem laudantium! Illum
                            labore et odit placeat soluta repellat illo rem!</p>
                    </section>
                    <section class="experience pt-4">
                        <h1 class="right-section-title text-bold uppercase font-bold pb-2.5">experience</h1>
                        <article class="job">
                            <h2 class="job_name font-semibold">Job position</h2>
                            <div class="job_location-years flex justify-between pb-1">
                                <p class="job_location"> Company, Country</p>
                                <p class="job_years">2021 – present</p>
                            </div>
                            <div class="job_description pb-1.5">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam molestiae eius deleniti
                                error numquam, laborum mollitia aliquam, porro commodi illum doloremque tempore maiores
                                dolore sapiente? Cumque similique sapiente amet rerum?
                            </div>
                            <ul class="job_experience experience-list">
                                <li class="experience-list_item"> Unique experience highlight
                                </li>
                                <li class="experience-list_item"> Unique experience highlight
                                </li>
                                <li class="experience-list_item"> Unique experience highlight
                                </li>
                            </ul>
                        </article>
                    </section>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lg="ts">
import DashboardPage from '@/components/DashboardPage.vue';
</script>
<style scoped>
.profile {
    font-family: Inter, sans-serif;
    font-size: 7px;
}

.left-block {
    background-color: rgb(9, 176, 126);
    width: 134px;
}

.left-section-title {
    font-size: 10px;
}

.left-section-title::after {
    content: '';
    display: block;
    width: 17px;
    border-bottom: 0.7px solid rgb(255, 255, 255);
    margin-top: 7px;
}

.personal-info_name {
    font-size: 14px;
}

.info-img {
    background-color: rgb(164, 214, 21);
    width: 6px;
    height: 4px;
}

/* social */
.networks-item_img {
    width: 6px;
    height: 5px;
    fill: rgb(92, 97, 104);
    display: inline-block;
    margin-right: 10px;
}



.skills-list,
.experience-list {
    list-style-type: disc;
    padding-left: 9px;
}

.skills-list_item {
    padding-left: 3px;
}



/* right block */
.right-block {
    width: 254px;
    color: rgb(92, 97, 104);

}

.right-section-title {
    font-size: 10px;
}

.right-section-title::after {
    content: '';
    position: relative;
    left: -16px;
    display: block;
    width: 67px;
    border-bottom: 0.7px solid rgb(92, 97, 104);
    ;
    margin-top: 7px;
}

.location_img {
    width: 5px;
    height: 7px;
    display: inline-block;
    margin-right: 5px;
    fill: white;
}
</style>