import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierSideBarComponent } from './supplier-side-bar.component';

describe('SupplierSideBarComponent', () => {
  let component: SupplierSideBarComponent;
  let fixture: ComponentFixture<SupplierSideBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupplierSideBarComponent]
    });
    fixture = TestBed.createComponent(SupplierSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
