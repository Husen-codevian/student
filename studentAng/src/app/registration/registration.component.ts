import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { StudentService } from '../_httpservice/student.service';
import { CustomValidator } from '../shared/validators/custome.validator';
import { ToastrService } from 'ngx-toastr';
declare var $: any;

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  studentFrm: FormGroup;
  submitted = false;
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$';
  errorBlock: any;

  constructor(private std: StudentService, private fb: FormBuilder, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.studentFrm = this.fb.group({
      first_name: ['', [Validators.required, CustomValidator.string]],
      last_name: ['', [Validators.required, CustomValidator.string]],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      pocket_money: ['', [Validators.required, CustomValidator.numeric]],
      password: ['', Validators.required],
      age: ['', [Validators.required, CustomValidator.numeric]],
      city: ['', [Validators.required, CustomValidator.string]],
      state: ['', [Validators.required, CustomValidator.string]],
      zip: ['', [Validators.required, CustomValidator.numeric]],
      country: ['', [Validators.required, CustomValidator.string]],
    });
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.studentFrm.invalid) {
      return;
    }

    // Created formData Object and appended all the input values
    var fd = this.convertFormData(this.studentFrm.value);
    this.std.addStudent(fd).subscribe((data) => {
      if (data.status === false) {
        if ($.isEmptyObject(data.error_data)) {
          this.errorBlock = false;
          this.toastr.success('inserted successfully', 'Success!');
          this.onReset();
        } else {
          this.errorBlock = true;
          $('.print-error-msg').css('display', 'block');
          $('.print-error-msg').html(data.error_data);
        }
      } else {
        this.errorBlock = false;
        this.toastr.success('inserted successfully', 'Success!');
        this.onReset();
      }
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.studentFrm.controls; }

  // reset the Form on cancel
  onReset() {
    this.submitted = false;
    this.errorBlock = false;
    this.studentFrm.reset();
    $('.print-error-msg').css('display', 'none');
    $('.print-error-msg').html('');
  }

  /* Converter object into Form Data */
  convertFormData(object: any) {
    const formData = new FormData();
    Object.keys(object).forEach(key => formData.append(key, object[key]));
    return formData;
  }

}