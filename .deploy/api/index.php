<?php

header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
header("Access-Control-Allow-Headers: Authorization, Content-Type");

if ($_SERVER['REQUEST_METHOD'] == "OPTIONS") {
    header("Access-Control-Allow-Methods: POST, GET, PUT, DELETE, PATCH, OPTIONS");
    header("Access-Control-Max-Age: 1728000");
    header("Content-Length: 0");
    header("Content-Type: text/plain");
    exit(0);
}

header("Access-Control-Expose-Headers: Authorization");
header("Content-Type: application/json");
header("Authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjUsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3QvYXBpL3YxL2F1dGgvbG9naW4iLCJpYXQiOjE1MDg4OTg5OTYsImV4cCI6MTUwODkwMjU5NiwibmJmIjoxNTA4ODk4OTk2LCJqdGkiOiI5WHNOcGpickdVeXdGVGlvIn0.QH4Y5DurBTgqekfyjx3ssdduqKBMIH5zeZztRkJdZI0");

echo json_encode([
    'body' => [
        'user' => [
          'name' => 'Grupo de PHP da Zona da Mata',
          'email' => 'contato@phpzm.rocks',
        ],
        'token' => 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjUsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3QvYXBpL3YxL2F1dGgvbG9naW4iLCJpYXQiOjE1MDg4OTg5OTYsImV4cCI6MTUwODkwMjU5NiwibmJmIjoxNTA4ODk4OTk2LCJqdGkiOiI5WHNOcGpickdVeXdGVGlvIn0.QH4Y5DurBTgqekfyjx3ssdduqKBMIH5zeZztRkJdZI0'
    ]
]);
