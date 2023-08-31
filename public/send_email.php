<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $direccion = $_POST["direccion"];
  $telefono = $_POST["telefono"];
  $message = $_POST["message"];
  $nov_message = $_POST["nov_message"];
  $taller = $_POST["taller"];
  
  $to = "tomas.murphy.tm@gmail.com";
  
  $subject = "$name / $taller";
  $headers = "From: $email" . "\r\n" .
    "Reply-To: $email" . "\r\n" .
    "X-Mailer: PHP/" . phpversion();
  
  $full_message = "Taller: $taller\nNombre: $name\nEmail: $email\nDirección: $direccion\nTeléfono: $telefono\nMensaje: $message\nSuscripción: $nov_message";
  
  mail($to, $subject, $full_message, $headers);
}
?>
