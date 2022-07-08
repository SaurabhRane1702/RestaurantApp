import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { RestaurantData } from './restaurant.model';

@Component({
  selector: 'app-restaurant-dash',
  templateUrl: './restaurant-dash.component.html',
  styleUrls: ['./restaurant-dash.component.css'],
})
export class RestaurantDashComponent implements OnInit {
  formValue!: FormGroup;
  restaurantModelObj: RestaurantData = new RestaurantData();
  allRestaurantData: any;
  showAdd!: boolean;
  showUpdate!: boolean;
  constructor(private formBuilder: FormBuilder, private api: ApiService) {}

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      name: [''],
      email: [''],
      mobile: [''],
      address: [''],
      services: [''],
    });

    //call this on page load
    this.getAllData();
  }

  onClickAddRestuarant() {
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }

  onClickOfClearBtn() {
    this.formValue.reset();
  }

  //Now Subscribing Our Data which is maped from services
  addRestaurant() {
    this.restaurantModelObj.name = this.formValue.value.name;
    this.restaurantModelObj.email = this.formValue.value.email;
    this.restaurantModelObj.mobile = this.formValue.value.mobile;
    this.restaurantModelObj.address = this.formValue.value.address;
    this.restaurantModelObj.services = this.formValue.value.services;

    this.api.postRestaurant(this.restaurantModelObj).subscribe(
      (res) => {
        console.log(res);
        alert('Restaurant Records added Successfully');
        this.formValue.reset();
        this.getAllData(); //this is called so that page refresh is not reuired if data is added
      },
      (err) => {
        alert('Something went wrong');
      }
    );
  }

  //Get all data
  getAllData() {
    this.api.getRestaurant().subscribe((res) => {
      this.allRestaurantData = res;
    });
  }

  //Delete record from table
  deleteRestaurantData(data: any) {
    this.api.deleteRestaurant(data.id).subscribe((res) => {
      alert('Restaurant Data Deleted Successfully');
      this.getAllData(); //so that page refresh dynamically
    });
  }

  //edit restaurant data from list
  onEditRestaurantData(data: any) {
    this.showAdd = false;
    this.showUpdate = true;
    this.restaurantModelObj.id = data.id;
    this.formValue.controls['name'].setValue(data.name);
    this.formValue.controls['email'].setValue(data.email);
    this.formValue.controls['mobile'].setValue(data.mobile);
    this.formValue.controls['address'].setValue(data.address);
    this.formValue.controls['services'].setValue(data.services);
  }

  //on udpating
  updateRestaurant() {
    this.restaurantModelObj.name = this.formValue.value.name;
    this.restaurantModelObj.email = this.formValue.value.email;
    this.restaurantModelObj.mobile = this.formValue.value.mobile;
    this.restaurantModelObj.address = this.formValue.value.address;
    this.restaurantModelObj.services = this.formValue.value.services;

    this.api
      .updateRestaurant(this.restaurantModelObj, this.restaurantModelObj.id)
      .subscribe((res) => {
        alert('Record Updated');
        let ref = document.getElementById('clear');
        ref?.click();

        this.getAllData(); //this is called so that page refresh is not reuired if data is added
      });
  }
}
