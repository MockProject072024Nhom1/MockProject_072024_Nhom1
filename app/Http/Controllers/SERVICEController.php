<?php

namespace App\Http\Controllers;

use App\Models\SERVICE;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
class SERVICEController extends Controller
{
    public function index(){
        $SERVICE = SERVICE::all();
        return response()->json($SERVICE);
    }
    public function store(Request $request)
    {
        $input = $request->all();

        $validator = Validator::make($input, [
            'Name' => 'required|string|max:100',
            'Description' => 'nullable|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Lỗi kiểm tra dữ liệu',
                'data' => $validator->errors()
            ], 400);
        }

        $SERVICE = SERVICE::create($input);

        return response()->json([
            'status' => true,
            'message' => "Service đã lưu thành công",
            'data' => $SERVICE
        ], 201);
    }
}
