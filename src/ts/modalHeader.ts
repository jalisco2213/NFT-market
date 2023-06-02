import type { HtmlHTMLAttributes } from "vue";

window.addEventListener('DOMContentLoaded', function () {
    const modalPop = () => {
        const modalPopMenu = document.querySelector('.pop__up') as HTMLElement;
        document.querySelector('.header__login')?.addEventListener('click', () => modalPopMenu.classList.add('active'));
        document.querySelector('.pop__up_close')?.addEventListener('click', () => modalPopMenu.classList.remove('active'));
    }
    modalPop();

    const modalWallet = () => {
        const modalWalletMenu = document.querySelector('.wallet__info') as HTMLElement;
        document.querySelector('.wallet__img')?.addEventListener('click', () => modalWalletMenu.classList.add('wallet_active'));
        document.getElementById('close_modal')?.addEventListener('click', () => modalWalletMenu.classList.remove('wallet_active'));
    }
    modalWallet();
});