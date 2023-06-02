import type { HtmlHTMLAttributes } from "vue";
window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.header__burger')?.addEventListener('click', () => {
        document.querySelector('.nav')?.classList.toggle('is_active')
    })
});