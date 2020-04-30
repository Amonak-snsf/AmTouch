<import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraggerImageComponent } from './dragger-image.component';

describe('DraggerImageComponent', () => {
  let component: DraggerImageComponent;
  let fixture: ComponentFixture<DraggerImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraggerImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraggerImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
