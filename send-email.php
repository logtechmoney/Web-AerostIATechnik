<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Configuración del servidor mail.elserver.com
$smtp_host = 'mail.elserver.com';
$smtp_port = 587;
$smtp_username = 'info@aerostaitechnik.com.ar';
$smtp_password = 'Klabes0758';
$smtp_from_email = 'info@aerostaitechnik.com.ar';
$smtp_from_name = 'AerostAI Technik';

// Obtener datos del POST
$data = json_decode(file_get_contents('php://input'), true);

if (!$data) {
    echo json_encode(['success' => false, 'message' => 'Datos inválidos']);
    exit;
}

$to_emails = $data['to'] ?? [];
$subject = $data['subject'] ?? 'Contacto desde Web';
$from_email = $data['from'] ?? '';
$from_name = $data['fromName'] ?? '';
$company = $data['company'] ?? 'No especificada';
$phone = $data['phone'] ?? 'No especificado';
$message = $data['message'] ?? '';
$type = $data['type'] ?? 'Contacto';

// Validar campos requeridos
if (empty($from_email) || empty($from_name) || empty($message)) {
    echo json_encode(['success' => false, 'message' => 'Faltan campos requeridos']);
    exit;
}

// Validar email
if (!filter_var($from_email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['success' => false, 'message' => 'Email inválido']);
    exit;
}

// Construir mensaje HTML
$html_message = "
<!DOCTYPE html>
<html>
<head>
    <meta charset='UTF-8'>
    <title>$subject</title>
</head>
<body style='font-family: Arial, sans-serif; margin: 0; padding: 20px; background-color: #f4f4f4;'>
    <div style='max-width: 600px; margin: 0 auto; background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);'>
        <div style='text-align: center; margin-bottom: 30px;'>
            <h1 style='color: #2c3e50; margin: 0;'>Nuevo Mensaje de Contacto</h1>
            <p style='color: #7f8c8d; margin: 10px 0;'>$type</p>
        </div>
        
        <div style='background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;'>
            <h2 style='color: #2c3e50; margin-top: 0;'>Información del Contacto</h2>
            <p><strong>Nombre:</strong> $from_name</p>
            <p><strong>Email:</strong> $from_email</p>
            <p><strong>Empresa:</strong> $company</p>
            <p><strong>Teléfono:</strong> $phone</p>
        </div>
        
        <div style='background-color: #e8f5e8; padding: 20px; border-radius: 8px; margin-bottom: 20px;'>
            <h2 style='color: #27ae60; margin-top: 0;'>Mensaje</h2>
            <p style='white-space: pre-wrap; line-height: 1.6;'>$message</p>
        </div>
        
        <div style='text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;'>
            <p style='color: #7f8c8d; font-size: 12px; margin: 0;'>
                Este mensaje fue enviado desde el formulario de contacto de AerostAI Technik<br>
                Fecha: " . date('Y-m-d H:i:s') . "
            </p>
        </div>
    </div>
</body>
</html>";

// Headers para email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: $smtp_from_name <$smtp_from_email>" . "\r\n";
$headers .= "Reply-To: $from_name <$from_email>" . "\r\n";

// Enviar a cada destinatario
$success_count = 0;
$total_emails = count($to_emails);

foreach ($to_emails as $to_email) {
    if (mail($to_email, $subject, $html_message, $headers)) {
        $success_count++;
    }
}

if ($success_count === $total_emails) {
    echo json_encode(['success' => true, 'message' => 'Emails enviados correctamente']);
} else {
    echo json_encode(['success' => false, 'message' => "Error: Solo $success_count de $total_emails emails fueron enviados"]);
}
?>
