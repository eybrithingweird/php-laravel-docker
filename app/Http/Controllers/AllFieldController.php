<?php

namespace App\Http\Controllers;

use App\Models\AllField;
use Illuminate\Http\Request;
use App\Http\Resources\AllFieldResource;

class AllFieldController extends Controller
{
	/**
	 * Display a listing of the resource.
	 */
	public function index()
	{
		return AllFieldResource::collection(AllField::all());
	}

	/**
	 * Store a newly created resource in storage.
	 */
	public function store(Request $request)
	{
		$allField = AllField::create($request->validated());
		return new AllFieldResource($allField);
	}

	/**
	 * Display the specified resource.
	 */
	public function show(AllField $allField)
	{
		return new AllFieldResource($allField);
	}

	/**
	 * Update the specified resource in storage.
	 */
	public function update(Request $request, AllField $allField)
	{
		$allField->update($request->validated());
		return new AllFieldResource($allField);
	}

	/**
	 * Remove the specified resource from storage.
	 */
	public function destroy(AllField $allField)
	{
		$allField->delete();
		return response()->noContent();
	}
}