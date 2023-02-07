import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-host-listener',
  templateUrl: './host-listener.component.html',
  styleUrls: ['./host-listener.component.css']
})
export class HostListenerComponent {

  msg: string = '';

  // 1. Listen to some event on the host. In this case: the Window object.
  // Optionally: send ['$event'] with the function.
  @HostListener('window:offline', ['$event'])
  onOffline(event: any) {
    this.msg = 'We are offline!'
    // change the backgroundcolor to indicate that we are offline
    document.body.style.backgroundColor = 'rgba(255,0,0,0.52)';
  }

  @HostListener('window:online')
  onOnline() {
    this.msg = 'We are online!'
    // reset the backgroundcolor
    document.body.style.backgroundColor = 'rgba(255,0,0,0)';
  }

  // Workshop: listen to the mousemove event and show the (x, y)-position on the screen.
}
