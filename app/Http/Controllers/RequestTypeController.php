<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;

use App\Http\Requests\RequestTypeRequest;
use App\Http\Resources\RequestTypeResource;
use App\Models\RequestType;

use Illuminate\Http\Request;

class RequestTypeController extends Controller
{
	/**
	 * Display a listing of the resource.
	 */
	public function index()
	{
		return RequestTypeResource::collection(RequestType::all());
	}

	/**
	 * Store a newly created resource in storage.
	 */
	public function store(Request $request)
	{
		$requestType = RequestType::create($request->validated());
		return new RequestTypeResource($requestType);
	}

	/**
	 * Display the specified resource.
	 */
	public function show(RequestType $requestType)
	{
		return new RequestTypeResource($requestType);
	}

	/**
	 * Update the specified resource in storage.
	 */
	public function update(Request $request, RequestType $requestType)
	{
		$requestType->update($request->validated());
		return new RequestTypeResource($requestType);
	}

	/**
	 * Remove the specified resource from storage.
	 */
	public function destroy(RequestType $requestType)
	{
		$requestType->delete();
		return response()->noContent();
	}
}
