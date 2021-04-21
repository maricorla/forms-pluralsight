import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { DataService } from '../data/data.service';
import { UserSettings } from '../data/user-settings';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  originalUserSettings: UserSettings = {
    name: null,
    emailOffers: null,
    interfaceStyle: null,
    subscriptionType: null,
    notes:null
  }

  singleModel = "On";
  userSettings: UserSettings = { ...this.originalUserSettings };
  postError = false;
  postErrorMessage = '';
  subscriptionTypes: Observable<string[]>;
  startDate: Date;
  myTime: Date;
  userRating =0;
  maxRating= 10;
   isReadonly = false;
  constructor(private dataservice:DataService) { }

  ngOnInit(): void {
    this.subscriptionTypes = this.dataservice.getSubsriptionType();
    this.startDate = new Date();
    this.myTime = new Date();
  }

  onSubmit(form: NgForm) {
    console.log('in onsubmit: ', form.value);
/* 
    if (form.valid) {
      this.dataservice.postUserSettingsForm(this.userSettings).subscribe(
      result => console.log('success: ', result),
      error=>this.onHttpError(error)
    );
    } else {
      this.postError = true;
      this.postErrorMessage = "Please fix the above errors";
    } */
    
  }

  onHttpError(errorResponse: any) {
    console.log('error: ', errorResponse);
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;
    

  }

}
