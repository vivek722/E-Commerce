import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsAboutProductComponent } from './details-about-product.component';

describe('DetailsAboutProductComponent', () => {
  let component: DetailsAboutProductComponent;
  let fixture: ComponentFixture<DetailsAboutProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsAboutProductComponent]
    });
    fixture = TestBed.createComponent(DetailsAboutProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
