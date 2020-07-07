import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawPaperComponent } from './draw-paper.component';

describe('DrawPaperComponent', () => {
  let component: DrawPaperComponent;
  let fixture: ComponentFixture<DrawPaperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawPaperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawPaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
