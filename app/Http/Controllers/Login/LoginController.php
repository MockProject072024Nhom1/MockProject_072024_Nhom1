<?php

namespace App\Http\Controllers\Login;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    //show form login
    public function showLoginForm(){
        return view('auth.login');
    }
    public function showRegisterForm(){
        return view('auth.register');
    }

    //process form login
    public function login(Request $request){
        //code...
    }
}
