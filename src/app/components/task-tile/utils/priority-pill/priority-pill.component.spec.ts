import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriorityPillComponent } from './priority-pill.component';

describe('PriorityPillComponent', () => {
  let component: PriorityPillComponent;
  let fixture: ComponentFixture<PriorityPillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriorityPillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PriorityPillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
