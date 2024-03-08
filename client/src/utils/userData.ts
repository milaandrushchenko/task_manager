interface Education {
    title: string;
    place: string;
    years: string;
    information: string;
}

interface UserData {
    name: string;
    positions: string[]; 
    location: string;
    education: Education[]; 
    skills: string[]; 
    image: string;
    contactDetails: { 
        email: string;
        phone: string;
        linkedIn: string;
    };
    profile:string;
    experience: {
        jobPosition: string;
        location: string;
        years: string;
        description: string;
        uniqueExperience: string[]; 
    }[];
}

export const userData: UserData = {
    name: 'Robyn Kingsley',
    positions: ['UX/UI DESIGNER', 'PRODUCT DESIGNER', 'UX RESEARCHER'],
    location: 'Berlin, Germany',
    education: [{
        title: 'Course',
        place: 'University',
        years: '2016 – 2018',
        information: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas accumsan lacus. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. '
    },
    {
        title: 'Course',
        place: 'University',
        years: '2016 – 2018',
        information: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas accumsan lacus. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. '
    }],
    skills: ['App design', 'App design', 'App design'],
    image: '',
    contactDetails: {
        email: 'hi.robyn.kingsley@mail.com',
        phone: '+88 533 000 250',
        linkedIn: 'www.linkedin.com/in/robynkingsley'
    },
    profile:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas accumsan lacus. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. ',
    experience: [{
        jobPosition: 'Job position',
        location: 'Company, Country',
        years: '2021 –  present',
        description: 'ILorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas accumsan lacus. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Purus ut faucibus pulvinar elementum. Eget aliquet nibh praesent tristique magna sit. Scelerisque purus semper eget duis at tellus at.',
        uniqueExperience: ['Unique experience highlight', 'Unique experience highlight', 'Unique experience highlight']
    }]
};
