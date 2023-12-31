import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderPackageComponent } from './order-package.component';

describe('OrderPackageComponent', () => {
  let component: OrderPackageComponent;
  let fixture: ComponentFixture<OrderPackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderPackageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
