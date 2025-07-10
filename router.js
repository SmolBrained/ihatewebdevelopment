const siteRouter = {
    pages: {
        "home": "index.html",
        "support": "support.html",
        "get-involved": "get-involved.html",
        "receive-tutoring": "receive-tutoring.html",
        "the-team": "team.html",
        "news": "news.html",
        "articles": "articles.html",
        "lessons": "lessons.html",
        "report-time": "report-time.html",
        "about": "about.html",
        "contact": "contact.html",
        "member": "members.html"
    },
    members: {
        "alejandra-perry000": {
            name: "Alejandra Perry",
            portrait: "https://i.imgur.com/kSx0mKf.png",
            secondaryImage: "https://i.imgur.com/example.jpeg",
            bio: "Alejandra Perry is the founder and director of Literary Speaking. She is passionate about education and community service.",
            facts: ["Founder & Director", "Loves to read and write"],
            color: "#f2e7ff"
        },
        "amelia-guerra000": {
            name: "Amelia Guerra",
            portrait: "https://i.imgur.com/HYqSjLz.jpeg",
            secondaryImage: "https://i.imgur.com/Ol9vqAP.jpeg",
            bio: "Hi, I'm Amelia. I chose to start tutoring because I like helping others. Tutoring gives others a chance to pinpoint what they struggle with to further learn and improve from it. What I would say I enjoy about tutoring is learning alongside others myself and being able to see the effort made along the way. Tutoring aligns with my goals because it helps me improve my communication, cooperation, tolerance, and problem-solving skills for my future and present goals.",
            facts: ["Junior", "Tutors at Paul W. Bell Middle School", "Tutoring since December 2024", "Teaches Middle School ESOL English", "Aspiring Nurse Practitioner"],
            color: "#f2e7ff"
        },
        "isabella-stubbs000": {
            name: "Isabella Stubbs",
            portrait: "https://i.imgur.com/W1Upqjf.png",
            secondaryImage: "https://i.imgur.com/BqaQwiu.png",
            bio: "Hello, I'm Isabella! I've chosen to become a tutor in order to improve my own teaching skills while at the same time having an opportunity to help others.",
            facts: ["Freshman", "Tutors at Paul W. Bell Middle School", "Tutoring since December 2024", "Teaches Middle School ESOL English and Math", "Aspiring Computer Engineer"],
            color: "#c3e5ff"
        },
        "eimy-gil000": {
            name: "Eimy Gil",
            portrait: "https://i.imgur.com/qKn2wFX.jpeg",
            secondaryImage: "https://i.imgur.com/meQImyb.jpeg",
            bio: "",
            facts: [],
            color: "#d1ffe6"
        },
        "natalie-arenal000": {
            name: "Natalie Arenal",
            portrait: "https://i.imgur.com/qLcPzcc.jpeg",
            secondaryImage: "https://i.imgur.com/SMlS7uy.jpeg",
            bio: "",
            facts: [],
            color: "#f2e7ff"
        },
        "sofia-gonzalez-carba000": {
            name: "Sofia Gonzalez-Carba",
            portrait: "https://i.imgur.com/DGQhsGT.jpeg",
            secondaryImage: "https://i.imgur.com/fFgHnil.jpeg",
            bio: "",
            facts: [],
            color: "#f2e7ff"
        },
        "andrew-cuellar000": {
            name: "Andrew Cuellar",
            portrait: "https://i.imgur.com/zpZwVGr.jpeg",
            secondaryImage: "https://i.imgur.com/X8kuRwU.jpeg",
            bio: "",
            facts: [],
            color: "#f2e7ff"
        },
        "adrian-gomez000": {
            name: "Adrian Gomez",
            portrait: "https://i.imgur.com/oPQQ1kI.png",
            secondaryImage: "https://i.imgur.com/3FWs7Eo.jpeg",
            bio: "",
            facts: [],
            color: "#f2e7ff"
        },
        "johann-lara000": {
            name: "Johann Lara",
            portrait: "https://i.imgur.com/x6nu22B.jpeg",
            secondaryImage: "https://i.imgur.com/cHgC9rn.jpeg",
            bio: "",
            facts: [],
            color: "#fffacd"
        },
        "nicolas-vilches000": {
            name: "Nicolas Vilches",
            portrait: "https://i.imgur.com/1W5K5l9.jpeg",
            secondaryImage: "https://i.imgur.com/P3EN0BH.jpeg",
            bio: "",
            facts: [],
            color: "#fffacd"
        },
        "ilie-tornes000": {
            name: "Ilie Tornes",
            portrait: "https://i.imgur.com/4PzONFl.jpeg",
            secondaryImage: "https://i.imgur.com/j16riwK.jpeg",
            bio: "",
            facts: [],
            color: "#fffacd"
        },
        "nicole-alvarez000": {
            name: "Nicole Alvarez",
            portrait: "https://i.imgur.com/KQ35YhW.jpeg",
            bio: "",
            facts: [],
            color: "#e0ffff"
        },
        "stephanie-jimenez000": {
            name: "Stephanie Jimenez",
            portrait: "https://i.imgur.com/jxhWwce.jpeg",
            bio: "",
            facts: [],
            color: "#f2e7ff"
        },
        "jose-unanue000": {
            name: "Jose Unanue",
            portrait: "https://i.imgur.com/ciF5FZH.jpeg",
            bio: "",
            facts: [],
            color: "#f2e7ff"
        }
    },
    navigateTo(pageId, params = null) {
        let url = this.pages[pageId];
        if (url) {
            if (params) {
                url += `?id=${params}`;
            }
            window.location.href = url;
        } else {
            window.location.href = this.pages['home'];
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const pageId = link.dataset.pageId;
            if (pageId) {
                siteRouter.navigateTo(pageId);
            }
        });
    });
    const currentPage = document.body.dataset.currentPage;
    if (currentPage) {
        document.querySelectorAll(`.nav-link[data-page-id="${currentPage}"]`).forEach(link => {
            link.classList.add('active-page-link');
        });
    }
});
