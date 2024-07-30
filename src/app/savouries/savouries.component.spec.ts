import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavouriesComponent } from './savouries.component';

describe('SavouriesComponent', () => {
  let component: SavouriesComponent;
  let fixture: ComponentFixture<SavouriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavouriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavouriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
