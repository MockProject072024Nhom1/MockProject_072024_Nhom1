<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class UserController extends Controller
{
    /**
     * @OA\Get(
     *     path="/users",
     *     summary="Get all users",
     *     @OA\Response(response="200", description="List of users")
     * )
     */
    public function index()
    {
        return User::all();
    }

    /**
     * @OA\Get(
     *     path="/users/{UserId}",
     *     summary="Get a user by ID",
     *     @OA\Parameter(name="UserId", in="path", required=true, description="User ID", @OA\Schema(type="integer")),
     *     @OA\Response(response="200", description="User details"),
     *     @OA\Response(response="404", description="User not found")
     * )
     */
    public function show($UserId)
    {
        $user = User::find($UserId);

        if (!$user) {
            return response()->json(['message' => 'User not found'], Response::HTTP_NOT_FOUND);
        }

        return $user;
    }

    /**
     * @OA\Post(
     *     path="/users",
     *     summary="Create a new user",
     *     @OA\RequestBody(
     *         @OA\MediaType(mediaType="application/json",
     *             @OA\Schema(ref="#/components/schemas/User")
     *         )
     *     ),
     *     @OA\Response(response="201", description="User created"),
     *     @OA\Response(response="400", description="Invalid input")
     * )
     */
    public function store(Request $request)
    {
        $request->validate([
            'FirstName' => 'required|string|max:100',
            'LastName' => 'required|string|max:100',
            'Email' => 'required|email|max:50',
            'Password' => 'required|string|min:6|max:12',
            'Avatar' => 'nullable|string|max:255',
            'Address' => 'nullable|string|max:255',
            'PhoneNumber' => 'required|string|size:10',
            'Gender' => 'nullable|in:M,F,O',
            'DoB' => 'required|date|before:today',
            'Status' => 'nullable|in:Active,Inactive',
            'RoleId' => 'required|integer|exists:roles,RoleId',
            'CityId' => 'required|integer|exists:cities,CityId',
        ]);

        $user = User::create($request->all());

        return response()->json($user, Response::HTTP_CREATED);
    }

    /**
     * @OA\Put(
     *     path="/users/{UserId}",
     *     summary="Update a user",
     *     @OA\Parameter(name="UserId", in="path", required=true, description="User ID", @OA\Schema(type="integer")),
     *     @OA\RequestBody(
     *         @OA\MediaType(mediaType="application/json",
     *             @OA\Schema(ref="#/components/schemas/User")
     *         )
     *     ),
     *     @OA\Response(response="200", description="User updated"),
     *     @OA\Response(response="404", description="User not found")
     * )
     */
    public function update(Request $request, $UserId)
    {
        $user = User::find($UserId);

        if (!$user) {
            return response()->json(['message' => 'User not found'], Response::HTTP_NOT_FOUND);
        }

        $request->validate([
            'FirstName' => 'sometimes|required|string|max:100',
            'LastName' => 'sometimes|required|string|max:100',
            'Email' => 'sometimes|required|email|max:50',
            'Password' => 'sometimes|required|string|min:6|max:12',
            'Avatar' => 'sometimes|nullable|string|max:255',
            'Address' => 'sometimes|nullable|string|max:255',
            'PhoneNumber' => 'sometimes|required|string|size:10',
            'Gender' => 'sometimes|nullable|in:M,F,O',
            'DoB' => 'sometimes|required|date|before:today',
            'Status' => 'sometimes|nullable|in:Active,Inactive',
            'RoleId' => 'sometimes|required|integer|exists:roles,RoleId',
            'CityId' => 'sometimes|required|integer|exists:cities,CityId',
        ]);

        $user->update($request->all());

        return $user;
    }

    /**
     * @OA\Delete(
     *     path="/users/{UserId}",
     *     summary="Delete a user",
     *     @OA\Parameter(name="UserId", in="path", required=true, description="User ID", @OA\Schema(type="integer")),
     *     @OA\Response(response="204", description="User deleted"),
     *     @OA\Response(response="404", description="User not found")
     * )
     */
    public function destroy($UserId)
    {
        $user = User::find($UserId);

        if (!$user) {
            return response()->json(['message' => 'User not found'], Response::HTTP_NOT_FOUND);
        }

        $user->delete();

        return response()->json(['message' => 'User deleted'], Response::HTTP_NO_CONTENT);
    }
}
