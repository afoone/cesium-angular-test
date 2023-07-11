import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CesiumHelloWorldComponent } from './cesium-hello-world.component';

describe('CesiumHelloWorldComponent', () => {
  let component: CesiumHelloWorldComponent;
  let fixture: ComponentFixture<CesiumHelloWorldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CesiumHelloWorldComponent]
    });
    fixture = TestBed.createComponent(CesiumHelloWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
