<?php

namespace App\Http\Controllers;

use App\Models\FormAddfield;
use Illuminate\Http\Request;
use App\Http\Resources\FormAddfieldResource;

class FormAddfieldController extends Controller
{
	/**
	 * Display a listing of the resource.
	 */
	public function index()
	{
		return FormAddfieldResource::collection(FormAddfield::all());
	}

	/**
	 * Store a newly created resource in storage.
	 */
	public function store(Request $request)
	{
		$formaddfield = FormAddfield::create($request->validated());
		return new FormAddfieldResource($formaddfield);
	}

	/**
	 * Display the specified resource.
	 */
	public function show(Request $request)
	{
		// return new FormAddfieldResource($formaddfield);
		return new FormAddfieldResource(FormAddfield::where('letter_form_id', '=', $request->route('id'))->get());
	}

	/**
	 * Update the specified resource in storage.
	 */
	public function update(Request $request, FormAddfield $formaddfield)
	{
		// $data = $request->validate([
		// 	'letter_form_id' => 'required|string',
		// ]);
		// $row = (string)$request->keys()[0];
		$data = $request->validate([
			'field_label' => 'required|min:3',
			'field_value' => 'required',
		]);

		// error_log($request->keys()[0]);
		// dd(FormAddfield::where('letter_form_id', '=', $request->route('id'))->get());
		// $result = FormAddfield::where('letter_form_id', '=', $request->route('id'))->get();
		return FormAddfield::findOrFail($request->route('id'))->update($data);
	}

	/**
	 * Remove the specified resource from storage.
	 */
	public function destroy(FormAddfield $formaddfield)
	{
		$formaddfield->delete();
		return response()->noContent();
	}

	/**
	 * Remove the specified resource from storage.
	 */
	public function destroyField(Request $request, FormAddfield $formaddfield)
	{
		$field = FormAddfield::findOrFail($request->route('id'));
		$field->delete();
		return response()->noContent();
	}
}
