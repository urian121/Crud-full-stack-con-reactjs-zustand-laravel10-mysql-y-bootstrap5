<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EmpleadoController;
use Illuminate\Support\Facades\File;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/empleados', [EmpleadoController::class, 'index']);
Route::post('/empleados', [EmpleadoController::class, 'store']);
Route::get('/empleados/{id}', [EmpleadoController::class, 'show']);
Route::put('/empleados/{id}', [EmpleadoController::class, 'update']);
Route::delete('/empleados/{id}', [EmpleadoController::class, 'destroy']);

//Definiendo una ruta para obtener la imagen avatar del empleado
Route::get('/avatars/{filename}', function ($filename) {
    $path = public_path('avatars/' . $filename);

    if (!File::exists($path)) {
        abort(404);
    }

    return response()->file($path);
});
