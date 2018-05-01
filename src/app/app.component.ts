import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { CameraPreview, CameraPreviewOptions } from '@ionic-native/camera-preview';
import { HomePage } from '../pages/home/home';

@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage: HomePage;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public cameraPreview: CameraPreview) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      const cameraPreviewOpts: CameraPreviewOptions = {
        x: 0,
        y: 0,
        width: window.screen.width,
        height: window.screen.height,
        camera: 'rear',
        tapPhoto: true,
        previewDrag: true,
        toBack: true,
        alpha: 1
      };
      cameraPreview.startCamera(cameraPreviewOpts);
    });
  }
}
