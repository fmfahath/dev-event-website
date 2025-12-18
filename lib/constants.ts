export type EventItems = {
    image:string;
    title: string;
    slug: string;
    location: string;
    date: string;
    time: string;
}

export const events: EventItems[] = [
    {
        image: "/images/event1.png",
        title: "Full Stack Developer Conference 2025",
        slug: "full-stack-developer-conference-2025",
        location: "Colombo, Sri Lanka",
        date: "2025-02-15",
        time: "09:00 AM – 05:00 PM"
    },
    {
        image: "/images/event2.png",
        title: "React & Next.js Meetup",
        slug: "react-nextjs-meetup",
        location: "Online",
        date: "2025-03-05",
        time: "06:00 PM – 08:00 PM"
    },
    {
        image: "/images/event3.png",
        title: "JavaScript Bootcamp",
        slug: "javascript-bootcamp",
        location: "Batticaloa, Sri Lanka",
        date: "2025-03-20",
        time: "10:00 AM – 04:00 PM"
    },
    {
        image: "/images/event4.png",
        title: "AI & Machine Learning Summit",
        slug: "ai-machine-learning-summit",
        location: "Kandy, Sri Lanka",
        date: "2025-04-10",
        time: "09:30 AM – 06:00 PM"
    },
    {
        image: "/images/event5.png",
        title: "DevOps & Cloud Engineering Workshop",
        slug: "devops-cloud-engineering-workshop",
        location: "Online",
        date: "2025-04-22",
        time: "02:00 PM – 06:00 PM"
    },
    {
        image: "/images/event6.png",
        title: "MERN Stack Hands-on Training",
        slug: "mern-stack-hands-on-training",
        location: "Colombo, Sri Lanka",
        date: "2025-05-12",
        time: "09:00 AM – 04:30 PM"
    }
]
