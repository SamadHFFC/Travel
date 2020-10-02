import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpFormComponent } from './cp-form.component';

describe('CpFormComponent', () => {
  let component: CpFormComponent;
  let fixture: ComponentFixture<CpFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
