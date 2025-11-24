<?php

namespace App\Services;

use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

class EmailNotificationService
{
    /**
     * Envía un correo de texto plano a la lista de destinatarios. Ignora correos vacíos.
     *
     * @param array $recipients lista de correos
     * @param string $subject asunto
     * @param string $body cuerpo de texto
     */
    public static function send(array $recipients, string $subject, string $body): void
    {
        $emails = array_values(array_filter(array_unique($recipients)));
        if (empty($emails)) {
            return;
        }

        foreach ($emails as $email) {
            try {
                Mail::raw($body, function ($message) use ($email, $subject) {
                    $message->to($email)->subject($subject);
                });
            } catch (\Throwable $exception) {
                Log::warning('No se pudo enviar email de notificación', [
                    'email' => $email,
                    'error' => $exception->getMessage(),
                ]);
            }
        }
    }
}
