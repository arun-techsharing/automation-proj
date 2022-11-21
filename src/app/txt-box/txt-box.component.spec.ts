import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TxtBoxComponent } from './txt-box.component';

describe('TxtBoxComponent', () => {
  let component: TxtBoxComponent;
  let fixture: ComponentFixture<TxtBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TxtBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TxtBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
