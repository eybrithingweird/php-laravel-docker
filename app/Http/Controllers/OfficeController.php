<?php

namespace App\Http\Controllers;

use App\Models\Office;
use App\Http\Resources\OfficeResource;
use Illuminate\Http\Request;

class OfficeController extends Controller
{
	/**
	 * Display a listing of the resource.
	 */
	public function index()
	{
		return OfficeResource::collection(Office::all());
	}

	/**
	 * Store a newly created resource in storage.
	 */
	public function store(Request $request)
	{
		$office = Office::create($request->validated());
		return new OfficeResource($office);
	}

	/**
	 * Display the specified resource.
	 */
	public function show(Office $office)
	{
		return new OfficeResource($office);
	}

	/**
	 * Update the specified resource in storage.
	 */
	public function update(Request $request, Office $office)
	{
		$office->update($request->validated());
		return new OfficeResource($office);
	}

	/**
	 * Remove the specified resource from storage.
	 */
	public function destroy(Office $office)
	{
		$office->delete();
		return response()->noContent();
	}
}
