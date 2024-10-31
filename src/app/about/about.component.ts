import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  aboutme: string = `A highly skilled Senior Software Development Engineer with extensive experience in backend development, cloud computing, and software architecture. Proficient in Python, JavaScript, TypeScript, Go, PHP, and C/C++, with hands-on expertise in frameworks such as Django, FastAPI, AngularJS, Flask, Express, and Node.js. Experienced in building and managing cloud infrastructures using AWS (Lambda, EC2, S3), GCP, and Docker for scalable, serverless applications.

Demonstrated a strong ability to lead cross-functional teams, automate workflows, and improve infrastructure costs by 15% through DevOps practices and CI/CD pipelines with Docker and Bitbucket. Successfully migrated legacy systems to modern architectures and developed ETL pipelines with Apache Airflow for real-time reporting.`;

  work: Array<any> = [
    {
      company: 'Fusion Computing Limited',
      position: 'Sr.Software Development Engineer',
      time_period: 'August 2023 - September 2024',
      place: 'Toronto Canada',
      projects: [
        // {
        //   name: "MyHinez",
        //   link: '#',
        // },
        // {
        //   name: "Starling Fintech",
        //   link: '#',
        // },
        // {
        //   name: "Swiftrevel",
        //   link: '#',
        // },
      ],
      tech: [
        // {
        //   name: "Angular",
        //   link: 'https://angular.dev/',
        // },
        // {
        //   name: "React",
        //   link: 'https://react.dev/',
        // },
        // {
        //   name: "laravel",
        //   link: 'https://laravel.com/',
        // },
        // {
        //   name: "php",
        //   link: 'https://www.php.net/',
        // },
        // {
        //   name: "mysql",
        //   link: 'https://www.mysql.com/',
        // },
        // {
        //   name: "tailwind",
        //   link: 'https://tailwindcss.com/',
        // },
        // {
        //   name: "TypeScript",
        //   link: 'https://www.typescriptlang.org/',
        // },
        // {
        //   name: "JavaScript",
        //   link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        // },
      ],
    },
    {
      company: 'RewardOps',
      position: 'Lead Software Development Engineer',
      time_period: 'August 2022 - September 2023',
      place: 'Toronto Canada',
      projects: [],
      tech: [],
    },
    {
      company: 'Epica Labs',
      position: 'Sr.Software Development Engineer',
      time_period: 'June 2020 - November 2022',
      place: 'Chambly Canada',
      projects: [
        // {
        //   name: "DeliMix",
        //   link: '#',
        // },
        // {
        //   name: "Gamtech",
        //   link: '#',
        // },
        // {
        //   name: "Hotefy",
        //   link: '#',
        // },
      ],
      tech: [
        // {
        //   name: "Angular",
        //   link: 'https://angular.dev/',
        // },
        // {
        //   name: "React",
        //   link: 'https://react.dev/',
        // },
        // {
        //   name: "Next",
        //   link: 'https://nextjs.org/',
        // },
        // {
        //   name: "PostgreSQL",
        //   link: 'https://www.postgresql.org/',
        // },
        // {
        //   name: "tailwind",
        //   link: 'https://tailwindcss.com/',
        // },
        // {
        //   name: "TypeScript",
        //   link: 'https://www.typescriptlang.org/',
        // },
        // {
        //   name: "JavaScript",
        //   link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        // },
      ],
    },
    {
      company: 'Royal Bank of Canada',
      position: 'Software Engineer II',
      time_period: 'June 2019 - May 2020',
      place: 'Toronto Canada',
      projects: [],
      tech: [],
    },
    {
      company: 'MicroAge',
      position: 'Software Engineer',
      time_period: 'August 2018 - May 2019',
      place: 'Ontario Canada',
      projects: [
        // {
        //   name: "Band",
        //   link: '#',
        // },
      ],
      tech: [
        // {
        //   name: "React",
        //   link: 'https://react.dev/',
        // },
        // {
        //   name: "Node",
        //   link: 'https://nodejs.org/',
        // },
        // {
        //   name: "Mongodb",
        //   link: 'https://www.mongodb.com/',
        // },
        // {
        //   name: "mysql",
        //   link: 'https://www.mysql.com/',
        // },
        // {
        //   name: "HTML",
        //   link: 'https://tailwindcss.com/',
        // },
        // {
        //   name: "CSS",
        //   link: 'https://tailwindcss.com/',
        // },
        // {
        //   name: "JavaScript",
        //   link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        // },
        // {
        //   name: "TypeScript",
        //   link: 'https://www.typescriptlang.org/',
        // },
        // {
        //   name: "Github",
        //   link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        // },
      ],
    },
  ];

  education: Array<any> = [
    {
      studied_at: 'Ontario Tech University',
      qualified: 'Bachelor of Technology in Information Technology',
      time_period: '2014 - 2018',
      place: 'Ontario Canada',
    },
    {
      studied_at: 'Canadian Technology College',
      qualified: "Bachelor's, Computer Science",
      time_period: '2011 - 2014',
      place: 'Toronto Canada',
    },
  ];
}
