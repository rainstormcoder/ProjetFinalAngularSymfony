import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  deviceInfo = null;

  constructor(private deviceService: DeviceDetectorService) {
    // this.epicFunction();
  }
  
    // epicFunction() {
    //   console.log('hello `hearder` component');
    //   this.deviceInfo = this.deviceService.getDeviceInfo();
    //   const isMobile = this.deviceService.isMobile();
    //   const isTablet = this.deviceService.isTablet();
    //   const isDesktopDevice = this.deviceService.isDesktop();
    //   console.log(this.deviceInfo);
    //   console.log(isMobile);  // returns if the device is a mobile device (android / iPhone / windows-phone etc)
    //   console.log(isTablet);  // returns if the device us a tablet (iPad etc)
    //   console.log(isDesktopDevice); // returns if the app is running on a Desktop browser.
    // }

  ngOnInit(): void {
  }

}
