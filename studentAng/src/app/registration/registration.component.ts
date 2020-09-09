import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { StudentService } from '../_httpservice/student.service';
import { ToastrService } from 'ngx-toastr';
declare var $: any;

// Custom Validators
import { checkString } from '../shared/validators/string.validator';
import { onlyNumber } from '../shared/validators/number.validator';


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
      first_name: ['', [Validators.required, checkString]],
      last_name: ['', [Validators.required, checkString]],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      pocket_money: ['', [Validators.required, onlyNumber]],
      password: ['', Validators.required],
      age: ['', [Validators.required, onlyNumber]],
      city: ['', [Validators.required, checkString]],
      state: ['', [Validators.required, checkString]],
      zip: ['', [Validators.required, onlyNumber]],
      country: ['', [Validators.required, checkString]],
    });
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.studentFrm.invalid) {
      return;
    }

    // Created formData Object and appended all the input values
    var fd = new FormData();
    fd.append('first_name', this.studentFrm.get('first_name').value);
    fd.append('last_name', this.studentFrm.get('last_name').value);
    fd.append('email', this.studentFrm.get('email').value);
    fd.append('password', this.studentFrm.get('password').value);
    fd.append('pocket_money', this.studentFrm.get('pocket_money').value);
    fd.append('age', this.studentFrm.get('age').value);
    fd.append('city', this.studentFrm.get('city').value);
    fd.append('state', this.studentFrm.get('state').value);
    fd.append('zip', this.studentFrm.get('zip').value);
    fd.append('country', this.studentFrm.get('country').value);

    this.std.addStudent(fd).subscribe((data) => {
      if (data.status == false) {
        if ($.isEmptyObject(data.error_data)) {
          this.errorBlock = false;
          this.toastr.success('inserted successfully', 'Success!');
          this.onReset();
        } else {
          this.errorBlock = true;
          $(".print-error-msg").css('display', 'block');
          $(".print-error-msg").html(data.error_data);
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
    $(".print-error-msg").css('display', 'none');
    $(".print-error-msg").html('');

  }

}
