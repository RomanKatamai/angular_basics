import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrdersComponent } from './orders.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import { ReactiveFormsModule } from '@angular/forms';
import {HttpService} from "../http.service";

describe('OrdersComponent', () => {
  let component: OrdersComponent;
  let fixture: ComponentFixture<OrdersComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrdersComponent],
      imports: [HttpClientTestingModule, ReactiveFormsModule],
    });
    fixture = TestBed.createComponent(OrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should reset the form', () => {
    spyOn(component.form, 'reset');
    const httpServiceMock = jasmine.createSpyObj('HttpService', ['addOrders']);
    component.httpService = httpServiceMock;
    component.form.setValue({
      date: '2023-04-12',
      delivery: 'Не потрібно',
      orderReadiness: 'Ні',
      paymentOfTransport: 'Оплата при отриманні товару(готівка)',
      place: 'На місці',
      repairOrModernization: 'Ремонт',
      urgentRepair: 'Ні'
    });
    component.submit();
      expect(component.form.valid).toBe(true);
      expect(component.form.reset).toHaveBeenCalled();
      expect(httpServiceMock.addOrders).toHaveBeenCalled();
  });
});
