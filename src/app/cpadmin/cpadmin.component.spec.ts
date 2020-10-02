import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CPAdminComponent } from './cpadmin.component';

describe('CPAdminComponent', () => {
  let component: CPAdminComponent;
  let fixture: ComponentFixture<CPAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CPAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CPAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
