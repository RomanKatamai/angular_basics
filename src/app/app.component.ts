import {Component} from '@angular/core'
import {FormControl, FormGroup, Validators} from '@angular/forms'
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  form: FormGroup
  constructor(private http: HttpClient) {
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
      this.http.post('http://localhost:8080/api/order', newOrders)
        .subscribe(orders =>
          console.log(orders))
      this.form.reset()
    }
  }
}

