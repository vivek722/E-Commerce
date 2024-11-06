import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHomeDesignComponent } from './user-home-design.component';

describe('UserHomeDesignComponent', () => {
  let component: UserHomeDesignComponent;
  let fixture: ComponentFixture<UserHomeDesignComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserHomeDesignComponent]
    });
    fixture = TestBed.createComponent(UserHomeDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
