<?php

namespace App\Http\Controllers;

use App\Models\RequestField;
use Illuminate\Http\Request;
use App\Http\Resources\RequestFieldResource;

class RequestFieldController extends Controller
{
	/**
	 * Display a listing of the resource.
	 */
	public function index()
	{
		return RequestFieldResource::collection(RequestField::all());
	}

	/**
	 * Store a newly created resource in storage.
	 */
	public function store(Request $request)
	{
		$requestField = RequestField::create($request->validated());
		return new RequestFieldResource($requestField);
	}

	/**
	 * Store a newly created resource in storage.
	 */
	// public function postData(Request $request)
	// {
	// 	$data = $request->validate([
	// 		'request_type_id' => 'required|number',
	// 		'all_field_id' => 'required|number'
	// 	]);
	// 	// $requestField = RequestField::create($request->validated());
	// 	return new RequestFieldResource(RequestField::create($data));
	// }

	/**
	 * Update the specified resource in storage.
	 */
	public function patchData(Request $request, RequestField $requestField)
	{
		$data = $request->validate([
			// 'request_type_id' => 'nullable|number',
			'all_field_id' => 'required|numeric'
		]);
		return RequestField::findOrFail($request->route('id'))->update($data);
	}

	/**
	 * Display the specified resource.
	 */
	public function show(RequestField $requestField, Request $request)
	{
		return new RequestFieldResource(RequestFields::where('request_type_id', '=', $request->route('id'))->get());
	}

	/**
	 * Update the specified resource in storage.
	 */
	public function update(Request $request, RequestField $requestField)
	{
		$requestField->update($request->validated());
		return new RequestFieldResource($requestField);
	}

	/**
	 * Remove the specified resource from storage.
	 */
	public function destroy(RequestField $requestField)
	{
		$requestField->delete();
		return response()->noContent();
	}
}
