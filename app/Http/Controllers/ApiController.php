<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;


class ApiController extends Controller
{
    //
    public function users($id){
        $users = User::find($id);
        if($users){
            return response([
                'data' => $users,
                'status_code' => 200,
                'message' => 'Found Successfully.'
            ]);
        }
        return response([
            'data' => null,
            'status_code' => 404,
            'message' => 'Not Found.'
        ]);
    }
}
