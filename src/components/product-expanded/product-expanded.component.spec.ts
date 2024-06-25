import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductExpandedComponent } from './product-expanded.component';

describe('ProductExpandedComponent', () => {
  let component: ProductExpandedComponent;
  let fixture: ComponentFixture<ProductExpandedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductExpandedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductExpandedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
