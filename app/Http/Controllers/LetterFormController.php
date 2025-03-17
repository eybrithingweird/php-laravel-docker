<?php

namespace App\Http\Controllers;

use App\Models\LetterForm;
use App\Models\FormStatus;
use Illuminate\Http\Request;

use App\Http\Resources\LetterFormResource;

class LetterFormController extends Controller
{
	/**
	 * Display a listing of the resource.
	 */
	public function index()
	{
		return LetterFormResource::collection(LetterForm::all());
	}

	/**
	 * Store a newly created resource in storage.
	 */
	public function store(Request $request)
	{
		$letterform = LetterForm::create($request->validated());
		return new LetterFormResource($letterform);
	}

	/**
	 * Display the specified resource.
	 */
	public function showMysulat(Request $request)
	{
		$allLetterForms = array();
		$letters = LetterForm::where('src_employee_id', '=', $request->route('id'))->orderBy('created_at', 'DESC')->get();
		foreach ($letters as $letter) {
			$formStatus = FormStatus::where('letter_form_id', '=', $letter['id'])->get();
			array_push($allLetterForms, [$letter, $formStatus[0]]);
		}

		return new LetterFormResource($allLetterForms);
	}

	/**
	 * Update the specified resource in storage.
	 */
	public function update(Request $request, LetterForm $letterform)
	{
		$data = $request->validate([
			'subject' => 'nullable|min:3',
			'notes' => 'nullable|string',
			'supporting_docu' => 'nullable|url:drive.google.com',
			'is_sent' => 'nullable|boolean',
		]);
		// $letterform = LetterForm::where('id', '=', $request->route('id'))->update($data);
		
		return LetterForm::findOrFail($request->route('id'))->update($data);
	}

	/**
	 * Update the specified resource in storage.
	 */
	public function patchSend(Request $request, LetterForm $letterform)
	{
		$data = $request->validate([
			'is_sent' => 'required|boolean',
			'letter_date' => 'required',
		]);
		// $letterform = LetterForm::where('id', '=', $request->route('id'))->update($data);
		
		return LetterForm::findOrFail($request->route('id'))->update($data);
	}

	/**
	 * Update the specified resource in storage.
	 */
	public function patchUrgent(Request $request, LetterForm $letterform)
	{
		error_log($request->route('id'));
		$data = $request->validate([
			'is_urgent' => 'required|boolean',
		]);
		error_log($data['is_urgent']);
		$letterform = LetterForm::where('id', '=', $request->route('id'))->get()[0];
		// $letterform = LetterForm::where('id', '=', $request->route('id'));
		error_log($letterform['subject']);
		error_log($letterform['is_urgent']);

		$letterform2 = LetterForm::findOrFail($request->route('id'))->get()[0];
		error_log($letterform2['subject']);
		error_log($letterform2['is_urgent']);

		return LetterForm::findOrFail($request->route('id'))->update($data);
	}

	/**
	 * Remove the specified resource from storage.
	 */
	public function destroy(LetterForm $letterform)
	{
		$letterform->delete();
		return response()->noContent();
	}
}
