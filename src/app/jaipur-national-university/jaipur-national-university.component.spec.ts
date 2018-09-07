import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JaipurNationalUniversityComponent } from './jaipur-national-university.component';

describe('JaipurNationalUniversityComponent', () => {
  let component: JaipurNationalUniversityComponent;
  let fixture: ComponentFixture<JaipurNationalUniversityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JaipurNationalUniversityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JaipurNationalUniversityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
