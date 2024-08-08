<?php

use App\Http\Controllers\ContractController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

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
Route::prefix('contracts')->group(function () {
    Route::get('/', [ContractController::class, 'index']);
    Route::get('/{ContractId}', [ContractController::class, 'show']);
    Route::post('/', [ContractController::class, 'store']);
    Route::put('/{ContractId}', [ContractController::class, 'update']);
    Route::delete('/{ContractId}', [ContractController::class, 'destroy']);
});

Route::prefix('users')->group(function () {
    Route::get('/', [UserController::class, 'index']);
    Route::get('/{UserId}', [UserController::class, 'show']);
    Route::post('/', [UserController::class, 'store']);
    Route::put('/{UserId}', [UserController::class, 'update']);
    Route::delete('/{UserId}', [UserController::class, 'destroy']);
});
