import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaserequestApproveComponent } from './purchaserequest-approve.component';

describe('PurchaserequestApproveComponent', () => {
  let component: PurchaserequestApproveComponent;
  let fixture: ComponentFixture<PurchaserequestApproveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaserequestApproveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaserequestApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
