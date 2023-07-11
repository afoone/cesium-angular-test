import { AfterViewInit, Component } from '@angular/core';

import * as Cesium from 'cesium';


@Component({
  selector: 'app-cesium-hello-world',
  templateUrl: './cesium-hello-world.component.html',
  styleUrls: ['./cesium-hello-world.component.css']
})
export class CesiumHelloWorldComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    Cesium.Ion.defaultAccessToken = 'your-cesium-ion-access-token';

    const viewer = new Cesium.Viewer('cesiumContainer');
    viewer.entities.add({
      name: 'Hello, World!',
      position: Cesium.Cartesian3.fromDegrees(-75.59777, 40.03883),
      point: {
        pixelSize: 10,
        color: Cesium.Color.RED
      }
    });
  }

}
