import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnEventsComponent } from './btn-events.component';

describe('BtnEventsComponent', () => {
  let component: BtnEventsComponent;
  let fixture: ComponentFixture<BtnEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnEventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
