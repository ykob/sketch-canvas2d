export default class Menu {
  constructor() {
    this.$page = $('.c-page');
    this.$btn = $('.c-menu__btn');
    this.setEvent();
  }
  setEvent() {
    this.$btn.on('click', () => {
      if (this.$page.hasClass('menu-opened')) {
        this.$page.removeClass('menu-opened');
        this.$btn.removeClass('menu-opened');
      } else {
        this.$page.addClass('menu-opened');
        this.$btn.addClass('menu-opened');
      }
    });
  }
}
