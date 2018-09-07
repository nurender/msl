import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaharajVinayakGlobalComponent } from './maharaj-vinayak-global.component';

describe('MaharajVinayakGlobalComponent', () => {
  let component: MaharajVinayakGlobalComponent;
  let fixture: ComponentFixture<MaharajVinayakGlobalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaharajVinayakGlobalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaharajVinayakGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
