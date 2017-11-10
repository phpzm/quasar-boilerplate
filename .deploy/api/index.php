<?php

if (isset($_SERVER['HTTP_ORIGIN'])) {
  header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
}
header("Access-Control-Allow-Headers: Authorization, Content-Type");

if ($_SERVER['REQUEST_METHOD'] == "OPTIONS") {
    header("Access-Control-Allow-Methods: POST, GET, PUT, DELETE, PATCH, OPTIONS");
    header("Access-Control-Max-Age: 1728000");
    header("Content-Length: 0");
    header("Content-Type: text/plain");
    exit(0);
}

$token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjUsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3QvYXBpL3YxL2F1dGgvbG9naW4' .
    'iLCJpYXQiOjE1MDg4OTg5OTYsImV4cCI6MTUwODkwMjU5NiwibmJmIjoxNTA4ODk4OTk2LCJqdGkiOiI5WHNOcGpickdVeXdGVGlvIn0.QH4Y' .
    '5DurBTgqekfyjx3ssdduqKBMIH5zeZztRkJdZI0';

header("Access-Control-Expose-Headers: Authorization");
header("Content-Type: application/json");
header("Authorization: {$token}");

$uri = '';
if (isset($_SERVER['REQUEST_URI'])) {
  $uri = $_SERVER['REQUEST_URI'];
}

$returns = [
    '/api/v1/auth/login' => [
        'user' => [
            'name' => 'Grupo de PHP da Zona da Mata',
            'email' => 'contato@phpzm.rocks',
            'profile' => 'admin',
            'permissions' => [
              'admin.organization' => [
                'permission' => 1
              ],
              'admin.permission' => [
                'permission' => 3
              ],
              'admin.user' => [
                'permission' => 4
              ]
            ],
        ],
        'token' => $token
    ]
];

if ($uri === '/api/v1/admin/permission/activate/2') {
    http_response_code(412);
}

$body = isset($returns[$uri]) ? $returns[$uri] : json_decode(file_get_contents(__DIR__ . '/fake.json'));

echo json_encode([
    'body' => $body,
    'meta' => ['total' => 96, 'page' => 1, 'last' => 4],
    'status' => ['code' => '200'],
]);
