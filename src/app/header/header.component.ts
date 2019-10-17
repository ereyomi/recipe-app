import {
  Component,
  OnInit,
  NgZone,
  ViewChild,
  AfterViewInit,
  ElementRef,
  HostListener
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  ok: boolean = false;
  toggle: boolean = false;
  constructor(zone: NgZone) {
    window.onscroll = () => {
      zone.run(() => {
        if (
          document.body.scrollTop > 80 ||
          document.documentElement.scrollTop > 80
        ) {
          this.ok = true;
        } else {
          this.ok = false;
        }
      });
    };
  }

  ngOnInit() {}
  toggleMenu() {
    console.log('toggle');
    this.toggle ? (this.toggle = false) : (this.toggle = true);
    console.log(this.toggle);
  }
}
