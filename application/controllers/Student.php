<?php

defined('BASEPATH') OR exit('No direct script access allowed');
header("Access-Control-Allow-Origin: *"); 

if (isset($_SERVER['HTTP_ORIGIN'])) {
	header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
	header('Access-Control-Allow-Credentials: true');
	header('Access-Control-Max-Age: 86400'); 
}
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
	if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
		header("Access-Control-Allow-Methods: GET, POST, OPTIONS");         

	if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
		header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
	exit(0);
}

use Restserver\Libraries\REST_Controller;
require APPPATH . '/libraries/REST_Controller.php';

class Student extends REST_Controller {
  function __construct() {
     parent::__construct(); 
     $this->load->model('StudentModel');
  }
  
  /* Insert the data to db of students*/
 public function addStudent_post() {
  try{
   	  $this->form_validation->set_rules('first_name', 'first name', 'trim|required|alpha');
	  $this->form_validation->set_rules('last_name', 'last name', 'trim|required|alpha');
	  $this->form_validation->set_rules('email', 'email', 'trim|required|valid_email');
	  $this->form_validation->set_rules('password', 'password', 'trim|required');
	  $this->form_validation->set_rules('pocket_money', 'pocket money','trim|required|numeric');
	  $this->form_validation->set_rules('age', 'age', 'trim|required|numeric');
	  $this->form_validation->set_rules('city', 'city', 'trim|required|alpha');
	  $this->form_validation->set_rules('state', 'state', 'trim|required|alpha');
	  $this->form_validation->set_rules('zip', 'zip', 'trim|required|numeric');
	  $this->form_validation->set_rules('country', 'country', 'trim|required|alpha');

	  if ($this->form_validation->run() == FALSE) {
	    $errors = validation_errors();
	    $message = ['status' => false,'message' => 'fields are missing','error_data'=>$errors];
	    return $this->response($message, REST_Controller::HTTP_NON_AUTHORITATIVE_INFORMATION);       	
	  }else{
	   $data = $this->input->post();
	   
	   $form_data = array(
	   	'first_name' => $data['first_name'],
	   	'last_name' => $data['last_name'],
	   	'email' => $data['email'],
	   	'pocket_money' => $data['pocket_money'],
	   	'password' => md5($data['password'])
	   );
	   
	   // Called to Model function having insert query
	   $ins_res = $this->StudentModel->addStudent($form_data);
	   $message = ['status' => true,'message' => 'added successfully!'];
	   return $this->response($message, REST_Controller::HTTP_OK);
	  }
   } catch(Exception $e ) {
	  log_message( 'error', $e->getMessage( ) . ' in ' . $e->getFile() . ':' . $e->getLine() );
	  $message = ['status' => false,'message' => 'Some Exception has be caught'];
	  return $this->response($message, REST_Controller::HTTP_BAD_REQUEST);
   }
}

/* Function to get All Students as well as student with second highest salary*/
 public function getStudents_get(){
  try{
  	  // Called to Model function to get all data
  	  $student_data = $this->StudentModel->getStudents();
  	  $message = ['status' => true, 'data'=>$student_data];
	  return $this->response($message, REST_Controller::HTTP_OK);
  } catch(Exception $e ) {
	  log_message( 'error', $e->getMessage( ) . ' in ' . $e->getFile() . ':' . $e->getLine() );
	  $message = ['status' => false,'message' => 'Some Exception has be caught'];
	  return $this->response($message, REST_Controller::HTTP_BAD_REQUEST);
   }
}



}
