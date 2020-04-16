import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-top',
  templateUrl: './scroll-top.component.html',
  styleUrls: ['./scroll-top.component.scss']
})
export class ScrollTopComponent {
  scrollToTopShow: boolean;
  topPosToStartShowing = 600;
  topPosToEndsShowing = 900;

  constructor() { }


  @HostListener('window:scroll')
  checkScroll() {
      
    // window의 scroll top
    // Both window.pageYOffset and document.documentElement.scrollTop returns the same result in all the cases. window.pageYOffset is not supported below IE 9.

    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const body = document.getElementsByTagName('body')[0];
    // console.log('[scroll]', scrollPosition);
    // console.log('[height]', body.scrollHeight - scrollPosition);
    
    if (scrollPosition >= this.topPosToStartShowing && (body.scrollHeight - scrollPosition) >= this.topPosToEndsShowing ) {
      this.scrollToTopShow = true;
    } else {
      this.scrollToTopShow = false;
    }

  }

  // TODO: Cross browsing
  scrollToTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }


}
