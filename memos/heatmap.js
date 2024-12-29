// 将代码包装在 DOMContentLoaded 事件中
document.addEventListener('DOMContentLoaded', () => {
    class HeatmapCard extends HTMLElement {
    constructor() {
        super();
        this.rss_url = '';
        this.attachShadow({ mode: 'open' });

        // 监听系统颜色方案的变化
        this.colorSchemeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        this.colorSchemeMediaQuery.addEventListener('change', this.handleColorSchemeChange.bind(this));
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    --ht-main: #334155;
                    --ht-tooltip: #24292f;
                    --ht-tooltip-bg: #fff;
                    --ht-lv-0: #ebedf0;
                    --ht-lv-1: #9be9a8;
                    --ht-lv-2: #40c463;
                    --ht-lv-3: #30a14e;
                    --ht-lv-4: #216e39;
                }
                :host([data-theme="dark"]) {
                    --ht-main: #94a3b8;
                    --ht-tooltip: #24292f;
                    --ht-tooltip-bg: #fff;
                    --ht-lv-0: #161b22;
                    --ht-lv-1: #0e4429;
                    --ht-lv-2: #006d32;
                    --ht-lv-3: #26a641;
                    --ht-lv-4: #39d353;
                }
                .heatmap_container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    font-size: 10px;
                    line-height: 12px;
                    color: var(--ht-main);
                    background-color: transparent;
                }
                .heatmap_content {
                    display: flex;
                    flex-direction: row;
                    align-items: flex-end;
                    background-color: transparent;
                }
                .heatmap_week {
                    display: flex;
                    margin-top: 0.25rem;
                    margin-right: 0.25rem;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: flex-end;
                    text-align: right;
                    background-color: transparent;
                }
                .heatmap_main {
                    display: flex;
                    flex-direction: column;
                    background-color: transparent;
                }
                .heatmap_month {
                    display: flex;
                    margin-top: 0.25rem;
                    margin-right: 0.25rem;
                    flex-direction: row;
                    justify-content: space-around;
                    align-items: flex-end;
                    text-align: right;
                }
                .heatmap {
                    display: flex;
                    flex-direction: row;
                    height: 84px;
                    background-color: transparent;
                }
                .heatmap_footer {
                    display: flex;
                    margin-top: 0.5rem;
                    background-color: transparent;
                }
                .heatmap_level {
                    display: flex;
                    gap: 2px;
                    margin: 0 0.25rem;
                    flex-direction: row;
                    width: max-content;
                    height: 10px;
                    background-color: transparent;
                }
                .heatmap_level_item {
                    display: block;
                    border-radius: 0.125rem;
                    width: 10px;
                    height: 10px;
                }
                .heatmap_level_0 {
                    background: var(--ht-lv-0);
                }
                .heatmap_level_1 {
                    background: var(--ht-lv-1);
                }
                .heatmap_level_2 {
                    background: var(--ht-lv-2);
                }
                .heatmap_level_3 {
                    background: var(--ht-lv-3);
                }
                .heatmap_level_4 {
                    background: var(--ht-lv-4);
                }
                .heatmap_day {
                    width: 10px;
                    height: 10px;
                    background-color: transparent;
                    margin: 1px;
                    border-radius: 2px;
                    display: inline-block;
                    position: relative;
                }
                .heatmap_tooltip {
                    position: absolute;
                    bottom: 12px;
                    left: 50%;
                    width: max-content;
                    color: var(--ht-tooltip);
                    background-color: var(--ht-tooltip-bg);
                    font-size: 12px;
                    line-height: 16px;
                    padding: 8px;
                    border-radius: 3px;
                    white-space: pre-wrap;
                    opacity: 1;
                    transition: 0.3s;
                    z-index: 1000;
                    text-align: right;
                    transform: translateX(-50%);
                }
                .heatmap_tooltip_count,
                .heatmap_tooltip_post {
                    display: inline-block;
                }
                .heatmap_tooltip_title,
                .heatmap_tooltip_date {
                    display: block;
                }
                .heatmap_tooltip_date {
                    margin: 0 0.25rem;
                }
                .heatmap_day_level_0 {
                    background-color: var(--ht-lv-0);
                }
                .heatmap_day_level_1 {
                    background-color: var(--ht-lv-1);
                }
                .heatmap_day_level_2 {
                    background-color: var(--ht-lv-2);
                }
                .heatmap_day_level_3 {
                    background-color: var(--ht-lv-3);
                }
                .heatmap_day_level_4 {
                    background-color: var(--ht-lv-4);
                }
            </style>
            <div class="heatmap_container">
                <div class="heatmap_content">
                    <div class="heatmap_week">
                        <span>Mon</span>
                        <span>&nbsp;</span>
                        <span>Wed</span>
                        <span>&nbsp;</span>
                        <span>Fri</span>
                        <span>&nbsp;</span>
                        <span>Sun</span>
                    </div>
                    <div class="heatmap_main">
                        <div class="month heatmap_month"></div>
                        <div id="heatmap" class="heatmap"></div>
                    </div>
                </div>
                <div class="heatmap_footer">
                    <div class="heatmap_less">Less</div>
                    <div class="heatmap_level">
                        <span class="heatmap_level_item heatmap_level_0"></span>
                        <span class="heatmap_level_item heatmap_level_1"></span>
                        <span class="heatmap_level_item heatmap_level_2"></span>
                        <span class="heatmap_level_item heatmap_level_3"></span>
                        <span class="heatmap_level_item heatmap_level_4"></span>
                    </div>
                    <div class="heatmap_more">More</div>
                </div>
            </div>
        `;

        this.generateMonthLabels();
        this.fetchData();

        // 初始化主题
        this.updateTheme();
    }

    fetchData() {
        fetch(this.rss_url)
            .then(response => response.text())
            .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
            .then(data => {
                let items;
                if (data.querySelector("entry")) {
                    // Atom feed
                    items = data.querySelectorAll("entry");
                } else if (data.querySelector("item")) {
                    // RSS feed
                    items = data.querySelectorAll("item");
                } else {
                    throw new Error("Unsupported feed format");
                }

                var blogInfo = {
                    "pages": []
                };

                items.forEach(item => {
                    var page = {
                        "title": item.querySelector("title").textContent,
                        "link": item.querySelector("link").textContent,
                        "date": new Date(item.querySelector("published, pubDate").textContent).toISOString().split('T')[0],
                        "word_count": new DOMParser().parseFromString(item.querySelector("summary, description").textContent, "text/html").body.textContent.trim().length.toString()
                    };
                    blogInfo.pages.push(page);
                });

                this.createHeatmap(blogInfo);
            })
            .catch(error => {
                console.log('Request failed: ' + error.message);
            });
    }

    generateMonthLabels() {
        const monthDiv = this.shadowRoot.querySelector('.month');
        const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        const currentDate = new Date();
        const startMonthIndex = (currentDate.getMonth() - 5 + 12) % 12; // 显示最近六个月的标签

        for (let i = startMonthIndex; i < startMonthIndex + 6; i++) {
            const monthSpan = document.createElement('span');
            const monthIndex = i % 12;
            monthSpan.textContent = monthNames[monthIndex];
            monthDiv.appendChild(monthSpan);
        }
    }

    createHeatmap(blogInfo) {
        const container = this.shadowRoot.getElementById('heatmap');
        const startDate = this.getStartDate();
        const endDate = new Date();

        let currentWeek = this.createWeek();
        container.appendChild(currentWeek);

        let currentDate = startDate;
        let weekCount = 0;

        while (currentDate <= endDate && weekCount < 26) {
            const dateString = `${currentDate.getFullYear()}-${("0" + (currentDate.getMonth() + 1)).slice(-2)}-${("0" + (currentDate.getDate())).slice(-2)}`;

            const articleDataList = blogInfo.pages.filter(page => page.date === dateString);

            if (articleDataList.length > 0) {
                const titles = articleDataList.map(data => data.title);
                const title = titles.map(t => `《${t}》`).join('<br />');

                let count = 0;
                let post = articleDataList.length;

                articleDataList.forEach(data => {
                    count += parseInt(data.word_count, 10);
                });

                const day = this.createDay(dateString, title, count, post);
                currentWeek.appendChild(day);
            } else {
                const day = this.createDay(dateString, '', '0', '0');
                currentWeek.appendChild(day);
            }

            if (currentDate.getDay() === 0) {
                currentWeek = this.createWeek();
                container.appendChild(currentWeek);
                weekCount++;
            }

            currentDate.setDate(currentDate.getDate() + 1);
        }
    }

    createDay(date, title, count, post) {
        const day = document.createElement("div");
        day.className = "heatmap_day";
        day.setAttribute("data-title", title);
        day.setAttribute("data-count", count);
        day.setAttribute("data-post", post);
        day.setAttribute("data-date", date);

        day.addEventListener("mouseenter", function () {
            const tooltip = document.createElement("div");
            tooltip.className = "heatmap_tooltip";

            let tooltipContent = "";

            if (post && parseInt(post, 10) !== 0) {
                tooltipContent += '<span class="heatmap_tooltip_post">' + '共 ' + post + ' 篇' + '</span>';
            }

            if (count && parseInt(count, 10) !== 0) {
                tooltipContent += '<span class="heatmap_tooltip_count">' + ' ' + count + ' 字；' + '</span>';
            }

            if (title && parseInt(title, 10) !== 0) {
                tooltipContent += '<span class="heatmap_tooltip_title">' + title + '</span>';
            }

            if (date) {
                tooltipContent += '<span class="heatmap_tooltip_date">' + date + '</span>';
            }

            tooltip.innerHTML = tooltipContent;
            day.appendChild(tooltip);
        });

        day.addEventListener("mouseleave", function () {
            const tooltip = day.querySelector(".heatmap_tooltip");
            if (tooltip) {
                day.removeChild(tooltip);
            }
        });

        if (count == 0) {
            day.classList.add("heatmap_day_level_0");
        } else if (count > 0 && count < 1000) {
            day.classList.add("heatmap_day_level_1");
        } else if (count >= 1000 && count < 2000) {
            day.classList.add("heatmap_day_level_2");
        } else if (count >= 2000 && count < 3000) {
            day.classList.add("heatmap_day_level_3");
        } else {
            day.classList.add("heatmap_day_level_4");
        }

        return day;
    }

    createWeek() {
        const week = document.createElement('div');
        week.className = 'heatmap_week';
        return week;
    }

    getStartDate() {
        const today = new Date();
        const startDate = new Date();
        startDate.setDate(today.getDate() - 26 * 7); // 26周前

        while (startDate.getDay() !== 1) {
            startDate.setDate(startDate.getDate() + 1);
        }

        return startDate;
    }

    setTheme(theme) {
        if (theme === 'light') {
            this.setAttribute('data-theme', 'light');
        } else {
            this.setAttribute('data-theme', 'dark');
        }
    }

    handleColorSchemeChange(event) {
        if (event.matches) {
            this.setTheme('dark');
        } else {
            this.setTheme('light');
        }
    }

    updateTheme() {
        const systemPrefersDark = this.colorSchemeMediaQuery.matches;
        const documentTheme = document.documentElement.getAttribute('data-theme');
        if (documentTheme) {
            this.setTheme(documentTheme);
        } else {
            this.setTheme(systemPrefersDark ? 'dark' : 'light');
        }
    }
}

customElements.define('heatmap-card', HeatmapCard);


});

document.addEventListener('DOMContentLoaded', () => {
    const defaultTheme = window.DEFAULT_THEME || 'light'; // 确保 DEFAULT_THEME 存在
    const initialTheme = localStorage.getItem('theme') || defaultTheme;
    document.documentElement.setAttribute('data-theme', initialTheme);

    const heatmapCards = document.querySelectorAll('heatmap-card');
    if (heatmapCards.length > 0) {
        heatmapCards.forEach(card => card.setTheme(initialTheme));
    }

    const observer = new MutationObserver(mutations => {
        if (mutations.length > 0 && mutations[0].type === 'attributes' && mutations[0].attributeName === 'data-theme') {
            const newTheme = document.documentElement.getAttribute('data-theme') || defaultTheme;
            const heatmapCards = document.querySelectorAll('heatmap-card');
            if (heatmapCards.length > 0) {
                heatmapCards.forEach(card => card.setTheme(newTheme));
            }
        }
    });

    observer.observe(document.documentElement, { attributes: true });

    // 主题切换按钮
    const themeToggleButton = document.getElementById('theme-toggle');
    themeToggleButton.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
});