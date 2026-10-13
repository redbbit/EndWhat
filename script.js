// 滚动淡入效果（只在浏览器支持时启用）
document.addEventListener("DOMContentLoaded", function () {
    if (!('IntersectionObserver' in window)) return;
    const faders = document.querySelectorAll('.fade-in');
    const appearOptions = { threshold: 0.12, rootMargin: "0px 0px -40px 0px" };
    const appearOnScroll = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('appear');
            observer.unobserve(entry.target);
        });
    }, appearOptions);
    faders.forEach(f => appearOnScroll.observe(f));
});