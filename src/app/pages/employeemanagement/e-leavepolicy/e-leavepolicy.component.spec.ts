import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ELeavepolicyComponent } from './e-leavepolicy.component';

describe('ELeavepolicyComponent', () => {
  let component: ELeavepolicyComponent;
  let fixture: ComponentFixture<ELeavepolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ELeavepolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ELeavepolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
