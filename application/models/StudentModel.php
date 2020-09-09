<?php defined('BASEPATH') OR exit('No direct script access allowed');

class StudentModel extends CI_Model {
	// insert into students table
 public function addStudent($data) {
 	return $this->db->insert('student',$data);
 }	

 // return values from student table with second highest student
 public function getStudents(){
  $student_data['students'] = $this->db->select("id,CONCAT(first_name,' ',last_name) as fullName,pocket_money")
   							   ->from("student")
   							   ->order_by('pocket_money','DESC')
   							   ->get()
   							   ->result_array();

  $student_data['secondHighest'] = (array)$this->db->select("CONCAT(first_name,' ',last_name) as fullName,pocket_money")
 											   ->from('student')
 											   ->order_by('pocket_money','DESC')
 											   ->limit(1,1)->get()->row();
 	return $student_data;
 }

}





?>