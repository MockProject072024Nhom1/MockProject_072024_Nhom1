<?php

namespace App\Http\Controllers;

use App\Models\Contract;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ContractController extends Controller
{
    /**
     * @OA\Get(
     *     path="/contracts",
     *     summary="Get all contracts",
     *     @OA\Response(response="200", description="List of contracts")
     * )
     */
    public function index()
    {
        return Contract::all();
    }

    /**
     * @OA\Get(
     *     path="/contracts/{ContractId}",
     *     summary="Get a contract by ID",
     *     @OA\Parameter(name="ContractId", in="path", required=true, description="Contract ID", @OA\Schema(type="integer")),
     *     @OA\Response(response="200", description="Contract details"),
     *     @OA\Response(response="404", description="Contract not found")
     * )
     */
    public function show($ContractId)
    {
        $contract = Contract::find($ContractId);

        if (!$contract) {
            return response()->json(['message' => 'Contract not found'], Response::HTTP_NOT_FOUND);
        }

        return $contract;
    }

    /**
     * @OA\Post(
     *     path="/contracts",
     *     summary="Create a new contract",
     *     @OA\RequestBody(
     *         @OA\MediaType(mediaType="application/json",
     *             @OA\Schema(ref="#/components/schemas/Contract")
     *         )
     *     ),
     *     @OA\Response(response="201", description="Contract created"),
     *     @OA\Response(response="400", description="Invalid input")
     * )
     */
    public function store(Request $request)
    {
        $request->validate([
            'ContractName' => 'required|string|max:100',
            'CreatedAt' => 'required|date',
            'StartDate' => 'required|date',
            'FinishDate' => 'required|date',
            'Cost' => 'required|numeric',
            'PaymentMethod' => 'nullable|in:Online,Cash',
            'PaymentStatus' => 'nullable|in:30% Prepayment,Completed',
            'File' => 'nullable|string',
            'SupervisorId' => 'required|exists:SUPERVISOR,SupervisorId',
            'RegistrationId' => 'required|exists:REGISTRATION,RegistrationId',
        ]);

        $contract = Contract::create($request->all());

        return response()->json($contract, Response::HTTP_CREATED);
    }

    /**
     * @OA\Put(
     *     path="/contracts/{ContractId}",
     *     summary="Update a contract",
     *     @OA\Parameter(name="ContractId", in="path", required=true, description="Contract ID", @OA\Schema(type="integer")),
     *     @OA\RequestBody(
     *         @OA\MediaType(mediaType="application/json",
     *             @OA\Schema(ref="#/components/schemas/Contract")
     *         )
     *     ),
     *     @OA\Response(response="200", description="Contract updated"),
     *     @OA\Response(response="404", description="Contract not found")
     * )
     */
    public function update(Request $request, $ContractId)
    {
        $contract = Contract::find($ContractId);

        if (!$contract) {
            return response()->json(['message' => 'Contract not found'], Response::HTTP_NOT_FOUND);
        }

        $request->validate([
            'ContractName' => 'sometimes|required|string|max:100',
            'CreatedAt' => 'sometimes|required|date',
            'StartDate' => 'sometimes|required|date',
            'FinishDate' => 'sometimes|required|date',
            'Cost' => 'sometimes|required|numeric',
            'PaymentMethod' => 'sometimes|nullable|in:Online,Cash',
            'PaymentStatus' => 'sometimes|nullable|in:30% Prepayment,Completed',
            'File' => 'sometimes|nullable|string',
            'SupervisorId' => 'sometimes|required|exists:SUPERVISOR,SupervisorId',
            'RegistrationId' => 'sometimes|required|exists:REGISTRATION,RegistrationId',
        ]);

        $contract->update($request->all());

        return $contract;
    }

    /**
     * @OA\Delete(
     *     path="/contracts/{ContractId}",
     *     summary="Delete a contract",
     *     @OA\Parameter(name="ContractId", in="path", required=true, description="Contract ID", @OA\Schema(type="integer")),
     *     @OA\Response(response="204", description="Contract deleted"),
     *     @OA\Response(response="404", description="Contract not found")
     * )
     */
    public function destroy($ContractId)
    {
        $contract = Contract::find($ContractId);

        if (!$contract) {
            return response()->json(['message' => 'Contract not found'], Response::HTTP_NOT_FOUND);
        }

        $contract->delete();

        return response()->json(['message' => 'Contract deleted'], Response::HTTP_NO_CONTENT);
    }
}
