<?php

namespace App\Http\Controllers;

use App\Models\LetterForm;
use App\Models\FormStatus;

use App\Models\CommentLetter;
use Illuminate\Http\Request;
use App\Http\Resources\CommentLetterResource;

class CommentLetterController extends Controller
{
	/**
	 * Display a listing of the resource.
	 */
	public function index()
	{
		return CommentLetterResource::collection(CommentLetter::all());
	}

	/**
	 * Store a newly created resource in storage.
	 */
	public function store(Request $request)
	{
		$commentletter = CommentLetter::create($request->validated());
		return new CommentLetterResource($commentletter);
	}

	/**
	 * Display the specified resource.
	 */
	public function show(Request $request)
	{
		// return new CommentLetterResource($commentletter);
		// dd($request->route('id'));
		return new CommentLetterResource(CommentLetter::where('letter_form_id', '=', $request->route('id'))->orderBy('created_at', 'ASC')->get());
	}

	/**
	 * Display the specified resource.
	 */
	public function showTagged(Request $request)
	{
		// return new FormStatusResource(FormStatus::where('next_employee_id', '=', $request->route('id'))->get());
		$allLetterForms = array();
		$allLetterFormIDs = array();
		// error_log($request->route('id'));
		// $formStatuses = FormStatus::where('next_employee_id', '=', $request->route('id'))->where('status', '=', 'withdrawn')->get();
		$commentLetters = CommentLetter::all();
		foreach ($commentLetters as $commentLetter) {
			// error_log($formStatus['letter_form_id']);
			$taggedEmployees = $commentLetter['tagged_employee_id'];
			// error_log($taggedEmployees);
			if ($taggedEmployees) {
				foreach ($taggedEmployees as $taggedEmployee){
					if ($taggedEmployee == $request->route('id')) {
						if (in_array($commentLetter['letter_form_id'], $allLetterFormIDs) == false) {
							array_push($allLetterFormIDs, $commentLetter['letter_form_id']);

							$letterForm = LetterForm::where('id', '=', $commentLetter['letter_form_id'])->get();
							$formStatus = FormStatus::where('letter_form_id', '=', $commentLetter['letter_form_id'])->get();
							array_push($allLetterForms, [$letterForm[0], $formStatus[0]]);	
						}
					}
				}
			}
		}

		return new CommentLetterResource($allLetterForms);
	}

	/**
	 * Update the specified resource in storage.
	 */
	public function update(Request $request, CommentLetter $commentletter)
	{
		$commentletter->update($request->validated());
		return new CommentLetterResource($commentletter);
	}

	/**
	 * Remove the specified resource from storage.
	 */
	public function destroy(CommentLetter $commentletter)
	{
		$commentletter->delete();
		return response()->noContent();
	}
}
