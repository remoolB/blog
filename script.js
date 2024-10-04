// 此文件可以扩展页面的交互功能，例如导航栏滚动或动态加载项目
// 例如：平滑滚动效果
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// 获取汉堡菜单和侧边栏元素
const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');

// 点击汉堡菜单，切换侧边栏的显示状态
hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});
