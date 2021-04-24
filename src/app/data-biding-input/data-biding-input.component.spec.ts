import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBidingInputComponent } from './data-biding-input.component';

describe('DataBidingInputComponent', () => {
  let component: DataBidingInputComponent;
  let fixture: ComponentFixture<DataBidingInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataBidingInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBidingInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
