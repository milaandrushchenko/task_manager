interface TemplateData {
    html: string;
    css: string;
}

export const templateData: TemplateData = {
    html: `
    <div class="profile font-normal">
    <div class="flex justify-center">
        <div class="left-block pt-8 p-5 text-white">
            <section class="personal-info pb-4">
                <p class="personal-info_name font-bold pb-2"> </p>
                <div class="personal-info_positions pb-1.5 flex gap-1">
                    <div class="personal-info_image  pt-1">
                        <div class="info-img"></div>
                    </div>
                    <ul class="positions_list uppercase">
                        <li class="position_item"></li>
                    </ul>
                </div>
                <p class="personal-info_location location"><svg class="location_img">
                        <use href="../assets/images/icons.svg#icon-location"></use>
                    </svg></p>
            </section>
            <section class="education pb-4">
                <h1 class="font-bold uppercase left-section-title pb-2.5">Education</h1>
                <article class="education pb-2.5">
                    <h2 class="education_title font-semibold pb-0.5"></h2>
                    <div class="education_place pb-0.5"></div>
                    <div class="education_years pb-1"></div>
                    <div class="education_information ">
                </article>
            </section>
            <section class="skills">
                <h1 class="font-bold left-section-title pb-2.5 uppercase">Skills</h1>
                <ul class="skills-list">
                    <li class="skills-list_item pb-1"></li>
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
                            </svg></li>
                    </ul>
                </div>
            </section>
            <section class="profile">
                <h1 class="right-section-title text-bold uppercase font-bold pb-2.5">Profile</h1>
                <p class="profile_description"></p>
            </section>
            <section class="experience pt-4">
                <h1 class="right-section-title text-bold uppercase font-bold pb-2.5">experience</h1>
                <article class="job">
                    <h2 class="job_name font-semibold"></h2>
                    <div class="job_location-years flex justify-between pb-1">
                        <p class="job_location"> </p>
                        <p class="job_years"></p>
                    </div>
                    <div class="job_description pb-1.5">
                    </div>
                    <ul class="job_experience experience-list">
                        <li class="experience-list_item">
                        </li>
                    </ul>
                </article>
            </section>
        </div>
    </div>
</div>
    `,
    css: `
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
    `
};
