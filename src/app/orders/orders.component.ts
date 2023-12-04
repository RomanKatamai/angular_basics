import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

import {HttpService} from "../http.service";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {
  form: FormGroup

  constructor(public httpService: HttpService) {
    this.form = new FormGroup({
      repairOrModernization: new FormControl('', Validators.required),
      urgentRepair: new FormControl('', Validators.required),
      orderReadiness: new FormControl(''),
      date: new FormControl('-'),
      paymentOfTransport: new FormControl(' '),
      place: new FormControl('', Validators.required),
      delivery: new FormControl('', Validators.required)
    })
  }

  submit() {
    if (this.form.valid) {
      const formData = {...this.form.value}
      console.log('Form Data:', formData)
      const newOrders = {
        date: formData.date,
        delivery: formData.delivery,
        orderReadiness: formData.orderReadiness,
        paymentOfTransport: formData.paymentOfTransport,
        place:  formData.place,
        repairOrModernization: formData.repairOrModernization,
        urgentRepair: formData.urgentRepair
      }
      this.httpService.addOrders(newOrders)
        .subscribe(orders => console.log(orders))
      this.form.reset()
    }
  }
}
