import {TestBed} from '@angular/core/testing';
import { AppComponent } from './app.component';
import {OrdersComponent} from "./orders/orders.component";
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [AppComponent, OrdersComponent],
    imports: [HttpClientTestingModule],
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
