<?php

namespace App\Http\Controllers;

use App\Models\Bodyguard;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
class BodyguardController extends Controller
{
    public function index(){
        $bodyguard = Bodyguard::all();
        return response()->json($bodyguard);
    }

    public function store(Request $request){
        $input = $request->all();
        $validator = Validator::make($input, [
        'BGId' => 'required|integer|exists:USER,UserId',
        'Certificate' => 'nullable|string|max:255',
        'Experience' => 'required|numeric|min:0',
        'Salary' => 'required|numeric|min:0',
        'Health' => 'nullable|string|max:255',
        'Skills' => 'nullable|string|max:255',
        'Status' => 'nullable|string|in:Working,Day Off',
        'ServiceId' => 'required|integer|exists:SERVICE,ServiceId',
    ]);
        if ($validator->fails()) {
            $arr = [
                'success' => false,
                'message' => 'Errors',
                'data' => $validator->errors()
            ];
            return response()->json($arr, 200);
        }
        $bodyguard  = Bodyguard::create($input);
        $arr = [
            'status' => true,
            'message' => "bodyguard sucess",
            'data' => $bodyguard
        ];
        return response()->json($arr, 201);
    }
}
