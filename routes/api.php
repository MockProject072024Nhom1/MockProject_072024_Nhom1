<?php

use App\Http\Controllers\BodyguardController;
use App\Http\Controllers\SERVICEController;
use Illuminate\Http\Request;
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


Route::prefix('service')->group(function() {
    Route::get('/', [SERVICEController::class, 'index']);
    Route::post('/createservice', [SERVICEController::class, 'store']);

});
 
Route::prefix('bodyguard')->group(function() {
    Route::get('/', [BodyguardController::class, 'index']);
    Route::post('/createbodyguard', [BodyguardController::class, 'store']);
});
 
