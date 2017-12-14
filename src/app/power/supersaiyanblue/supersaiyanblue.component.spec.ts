import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupersaiyanblueComponent } from './supersaiyanblue.component';

describe('SupersaiyanblueComponent', () => {
  let component: SupersaiyanblueComponent;
  let fixture: ComponentFixture<SupersaiyanblueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupersaiyanblueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupersaiyanblueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
