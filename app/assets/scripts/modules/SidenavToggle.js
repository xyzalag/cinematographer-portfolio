class SideMenu {
  constructor() {
    this.init()
  }

  init() {
    window.addEventListener('DOMContentLoaded', this._handleContentLoaded.bind(this))
  }

  _handleContentLoaded() {
    window.addEventListener('scroll', this._handleScroll.bind(this))
  }
}




// import $ from 'jquery';
//
// class SidenavToggle{
//   constructor(){
//     this.sidenav = $(".sidenav-hidden");
//     this.main = $(".main");
//     this.openIcon = $(".open-icon");
//     this.closeIcon = $(".close-icon");
//     this.events();
//   }
//
//     events() {
//     this.openIcon.click(this.showNav.bind(this));
//     this.closeIcon.click(this.closeNav.bind(this));
//   }
//
//   showNav() {
//     this.sidenav.css({"width":"20%"});
//     this.main.css({"margin-left":"20%"});
//   }
//
//   closeNav() {
//     this.sidenav.css({"width":"0"});
//     this.main.css({"margin-left":"20%"});
//   }
//  }

export default SidenavToggle;
