import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EraseMagicComponent } from './erase-magic.component';

describe('EraseMagicComponent', () => {
  let component: EraseMagicComponent;
  let fixture: ComponentFixture<EraseMagicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EraseMagicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EraseMagicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
