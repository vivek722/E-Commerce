import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierDeshBordDesignComponent } from './supplier-desh-bord-design.component';

describe('SupplierDeshBordDesignComponent', () => {
  let component: SupplierDeshBordDesignComponent;
  let fixture: ComponentFixture<SupplierDeshBordDesignComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupplierDeshBordDesignComponent]
    });
    fixture = TestBed.createComponent(SupplierDeshBordDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
