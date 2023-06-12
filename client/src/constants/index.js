import { web, mobile, backend, creator } from '../assets';

const services = [
    {
      title: "Access Anywhere",
      icon: web
    },
    {
      title: "Efficiency",
      icon: mobile
    },
    {
      title: "Expertise",
      icon: backend
    },
    {
      title: "Personalization",
      icon: creator
    }
  ];

  const footerLinks = [
    {
        title: "About",
        links: [{ label: "Features", link: "" },
        { label: "Pricing", link: "" },
        { label: "Contact", link: "" },
        { label: "Testimonials", link: "" }
    ]
    },
    {
        title: "Projects",
        links: [ {
            label: "WealthWise",
            link: ""
        },
        {
            label: "Investments",
            link: ""
        },
        {
            label: "Learning Centre",
            link: ""
        },
        {
            label: "Investment Centre",
            link: ""
        },
    ]
    },
    {
        title: "Join Us",
        links: [ {
            label: "Discord",
            link: "https://discord.gg/"
        },
        {
            label: "Facebook",
            link: "https://www.facebook.com"
        },
        {
            label: "Instagram",
            link: "https://www.instagram.com"
        },
        {
            label: "Twitter",
            link: "https://twitter.com"
        }
    ]
    }
];

  export {services, footerLinks};