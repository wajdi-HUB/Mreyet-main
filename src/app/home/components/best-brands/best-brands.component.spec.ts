import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestBrandsComponent } from './best-brands.component';

describe('BestBrandsComponent', () => {
  let component: BestBrandsComponent;
  let fixture: ComponentFixture<BestBrandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestBrandsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
