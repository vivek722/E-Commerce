import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsAboutInventoryComponent } from './details-about-inventory.component';

describe('DetailsAboutInventoryComponent', () => {
  let component: DetailsAboutInventoryComponent;
  let fixture: ComponentFixture<DetailsAboutInventoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsAboutInventoryComponent]
    });
    fixture = TestBed.createComponent(DetailsAboutInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
