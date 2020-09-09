import { Component, OnInit } from '@angular/core';
import { StudentService } from "../_httpservice/student.service";
import { CheckPrimeNumberService } from '../shared/_sharedService/check-prime-number.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {
  studentsList: any;
  secondHighestName: any;
  secondHighestPocketMoney: any;
  listStatus: any;

  constructor(private std: StudentService, private toastr: ToastrService, private primeCheck: CheckPrimeNumberService) { }

  ngOnInit(): void {
    // Get the List of students on Page load with second max pocket money user;
    this.std.getStudents().subscribe((data) => {
      let dataCheck = data.data.students;
      if (dataCheck.length > 0) {
        this.listStatus = true;
        //Array Of students
        this.studentsList = data.data.students;

        // Details Of second Highest student
        this.secondHighestName = data.data.secondHighest.fullName
        this.secondHighestPocketMoney = data.data.secondHighest.pocket_money
      } else {
        this.listStatus = false;
      }
    });
  }

  // Function called on change event on checkbox
  checkvalue(event) {
    if (event.target.value === 2) {
      event.target.checked = true
    } else if (event.target.value > 2) {
      // called funvtion from service to check prime number => returns true if id is prime
      let res = this.primeCheck.checkForPrime(event.target.value);
      event.target.checked = res;
      if (res === false) {
        this.toastr.error('ID is not a Prime Number', 'Error!');
      }
    }
  }



}
