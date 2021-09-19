<?php 
$errors = '';
//$myemail = 'ahmed.metwally@myipharmacy.ca';//<-----Put Your email address here.
$emails = [
    "Millwoods" => "myipharmacy@gmail.com",
    "Chinatown" => "ctipharmacy@gmail.com",
    "Downtown" => "dtipharmacy@gmail.com",
    "Highway 16" => "highway16A.ipharmacy@gmail.com",
    "Salvation" => "salvation.ipharmacy@gmail.com"
];
if(
   empty($_POST['location']) ||
   empty($_POST['f-name'])  || 
   empty($_POST['l-name']) ||
   empty($_POST['phone']) ||
   empty($_POST['email']) ||
   empty($_POST['rx-number']) ||
   empty($_POST['detail1']) ||  
   empty($_POST['comments'])||
   empty($_POST['automatic']))
{
    $errors .= "\n Error: all fields are required";
}

$location = $_POST['location'];
$fname = $_POST['f-name']; 
$lname = $_POST['l-name']; 
$email_address = $_POST['email']; 
$phone = $_POST['phone'];
$RXnumber = $_POST['rx-number']; 
$DetailsRadio = $_POST['detail1'];
$comments = $_POST['comments']; 
$automaticRadio = $_POST['automatic']; 
if (!preg_match(
"/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i", 
$email_address))
{
    $errors .= "\n Error: Invalid email address";
}

if( empty($errors))
{
	$to = $emails[$_POST['location']]; 
	$email_subject = "apatient TRANSFER MY MEDICATIONS TO IPHARMACY form submission: $fname";
	$email_body = "You have received a new Request. ".
	" Here are the details:\n FirstName: $fname \n LastName: $lname \n Email: $email_address \n phone: $phone \n RXNumber: \n $RXnumber \n Pickup Details: \n $DetailsRadio \n Comments: $comments \n Would you like your refills automatically filled for pickup in the future ?: $automaticRadio"; 
	
	$headers = "From: $myemail\n"; 
	$headers .= "Reply-To: $email_address";
	
	mail($to,$email_subject,$email_body,$headers);
	//redirect to the 'thank you' page
	header('Location: thank-you.html');
} 
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"> 
<html>
<head>
	<title> Apatient TRANSFER MY MEDICATIONS TO IPHARMACY form handler</title>
</head>

<body>
<!-- This page is displayed only if there is some error -->
<?php
echo nl2br($errors);
?>


</body>
</html>