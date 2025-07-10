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
        "report-time": "report-time.html"
    },
    navigateTo(pageId) {
        const url = this.pages[pageId];
        if (url) {
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