import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierDeshBordComponent } from './supplier-desh-bord.component';

describe('SupplierDeshBordComponent', () => {
  let component: SupplierDeshBordComponent;
  let fixture: ComponentFixture<SupplierDeshBordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupplierDeshBordComponent]
    });
    fixture = TestBed.createComponent(SupplierDeshBordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
