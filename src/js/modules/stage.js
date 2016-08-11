export default class Stage {
  constructor() {
    this.$stage = $('.c-stage');
    this.$canvas = $('.c-stage__canvas');

    this.resize();
    this.setEvent();
  }
  resize() {
    this.$canvas.attr({
      width: window.innerWidth,
      height: window.innerHeight
    }).css({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }
  setEvent() {
    $(window).on('resize', () => {
      this.resize();
    });
  }
}
