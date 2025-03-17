<?php

namespace App\Http\Controllers;

use App\Models\FormStatus;
use App\Models\LetterForm;
use App\Models\EmployeeOic;
use App\Models\BufferEmployee;
use Illuminate\Http\Request;

use App\Http\Resources\FormStatusResource;

class FormStatusController extends Controller
{
	/**
	 * Display a listing of the resource.
	 */
	public function index()
	{
		return FormStatusResource::collection(FormStatus::all());
	}

	/**
	 * Store a newly created resource in storage.
	 */
	public function store(Request $request)
	{
		$formstatus = FormStatus::create($request->validated());
		return new FormStatusResource($formstatus);
	}

	/**
	 * Display the specified resource.
	 */
	public function showIncoming(Request $request)
	{
		// return new FormStatusResource(FormStatus::where('next_employee_id', '=', $request->route('id'))->get());
		$allLetterForms = array();
		// error_log($request->route('id'));
		$formStatuses = FormStatus::where('next_employee_id', '=', $request->route('id'))->whereNotNull('current_employee_id')->where('status', '=', 'in progress')->get();
		foreach ($formStatuses as $formStatus) {
			$letterForm = LetterForm::where('id', '=', $formStatus['letter_form_id'])->get();
			array_push($allLetterForms, [$letterForm[0], $formStatus]);
		}
		$employeeOIC = EmployeeOic::where('oic_employee_id', '=', $request->route('id'))->get();
		foreach ($employeeOIC as $oic) {
			$originalEmp = $oic['employee_id'];
			$formStatusesOIC = FormStatus::where('next_employee_id', '=', $originalEmp)->whereNotNull('current_employee_id')->where('status', '=', 'in progress')->get();
			foreach ($formStatusesOIC as $formStatusOIC) {
				$letterForm = LetterForm::where('id', '=', $formStatusOIC['letter_form_id'])->get();
				array_push($allLetterForms, [$letterForm[0], $formStatusOIC]);
			}
		}
		$employeeOrigOIC = EmployeeOic::where('employee_id', '=', $request->route('id'))->get();
		foreach ($employeeOrigOIC as $oic) {
			$originalEmp = $oic['oic_employee_id'];
			$formStatusesOIC = FormStatus::where('next_employee_id', '=', $originalEmp)->whereNotNull('current_employee_id')->where('status', '=', 'in progress')->get();
			foreach ($formStatusesOIC as $formStatusOIC) {
				$letterForm = LetterForm::where('id', '=', $formStatusOIC['letter_form_id'])->get();
				array_push($allLetterForms, [$letterForm[0], $formStatusOIC]);
			}
		}
		$bufferEmployee = BufferEmployee::where('buffer_employee_id', '=', $request->route('id'))->get();
		foreach ($bufferEmployee as $buffer) {
			// $originalEmp = $buffer['added_by_employee_id'];
			$formStatusesBuffer = FormStatus::where('next_employee_id', '=', '1')->whereNotNull('current_employee_id')->where('status', '=', 'in progress')->get();
			foreach ($formStatusesBuffer as $formStatusBuffer) {
				$letterForm = LetterForm::where('id', '=', $formStatusBuffer['letter_form_id'])->get();
				array_push($allLetterForms, [$letterForm[0], $formStatusBuffer]);
			}
		}

		return new FormStatusResource($allLetterForms);
	}
	
	public function showReceived(Request $request)
	{
		// return new FormStatusResource(FormStatus::where('next_employee_id', '=', $request->route('id'))->get());
		$allLetterForms = array();
		$formStatuses = FormStatus::where('next_employee_id', '=', $request->route('id'))->where('current_employee_id', '=', null)->get();
		foreach ($formStatuses as $formStatus) {
			$letterForm = LetterForm::where('id', '=', $formStatus['letter_form_id'])->get();
			array_push($allLetterForms, [$letterForm[0], $formStatus]);
		}
		$employeeOIC = EmployeeOic::where('oic_employee_id', '=', $request->route('id'))->get();
		foreach ($employeeOIC as $oic) {
			$originalEmp = $oic['employee_id'];
			$formStatusesOIC = FormStatus::where('next_employee_id', '=', $originalEmp)->where('current_employee_id', '=', null)->get();
			foreach ($formStatusesOIC as $formStatusOIC) {
				$letterForm = LetterForm::where('id', '=', $formStatusOIC['letter_form_id'])->get();
				array_push($allLetterForms, [$letterForm[0], $formStatusOIC]);
			}
		}
		$employeeOrigOIC = EmployeeOic::where('employee_id', '=', $request->route('id'))->get();
		foreach ($employeeOrigOIC as $oic) {
			$originalEmp = $oic['oic_employee_id'];
			$formStatusesOIC = FormStatus::where('next_employee_id', '=', $originalEmp)->where('current_employee_id', '=', null)->get();
			foreach ($formStatusesOIC as $formStatusOIC) {
				$letterForm = LetterForm::where('id', '=', $formStatusOIC['letter_form_id'])->get();
				array_push($allLetterForms, [$letterForm[0], $formStatusOIC]);
			}
		}
		$bufferEmployee = BufferEmployee::where('buffer_employee_id', '=', $request->route('id'))->get();
		foreach ($bufferEmployee as $buffer) {
			// $originalEmp = $buffer['added_by_employee_id'];
			$formStatusesBuffer = FormStatus::where('next_employee_id', '=', '1')->where('current_employee_id', '=', null)->get();
			foreach ($formStatusesBuffer as $formStatusBuffer) {
				$letterForm = LetterForm::where('id', '=', $formStatusBuffer['letter_form_id'])->get();
				array_push($allLetterForms, [$letterForm[0], $formStatusBuffer]);
			}
		}

		return new FormStatusResource($allLetterForms);
	}

	/**
	 * Display the specified resource.
	 */
	public function showOutgoing(Request $request)
	{
		$allLetterForms = array();
		$formStatuses = FormStatus::where('current_employee_id', '=', $request->route('id'))->where('status', '=', 'in progress')->get();
		foreach ($formStatuses as $formStatus) {
			$letterForm = LetterForm::where('id', '=', $formStatus['letter_form_id'])->get();
			array_push($allLetterForms, [$letterForm[0], $formStatus]);
		}
		$employeeOIC = EmployeeOic::where('oic_employee_id', '=', $request->route('id'))->get();
		foreach ($employeeOIC as $oic) {
			$originalEmp = $oic['employee_id'];
			$formStatusesOIC = FormStatus::where('current_employee_id', '=', $originalEmp)->where('status', '=', 'in progress')->get();
			foreach ($formStatusesOIC as $formStatusOIC) {
				$letterForm = LetterForm::where('id', '=', $formStatusOIC['letter_form_id'])->get();
				array_push($allLetterForms, [$letterForm[0], $formStatusOIC]);
			}
		}
		$bufferEmployee = BufferEmployee::where('buffer_employee_id', '=', $request->route('id'))->get();
		foreach ($bufferEmployee as $buffer) {
			// $originalEmp = $buffer['added_by_employee_id'];
			$formStatusesBuffer = FormStatus::where('current_employee_id', '=', '1')->get();
			foreach ($formStatusesBuffer as $formStatusBuffer) {
				$letterForm = LetterForm::where('id', '=', $formStatusBuffer['letter_form_id'])->get();
				array_push($allLetterForms, [$letterForm[0], $formStatusBuffer]);
			}
		}

		return new FormStatusResource($allLetterForms);
		// return new FormStatusResource(FormStatus::where('current_employee_id', '=', $request->route('id'))->get());
	}

	/**
	 * Display the specified resource.
	 */
	public function showWithdrawn(Request $request)
	{
		// return new FormStatusResource(FormStatus::where('next_employee_id', '=', $request->route('id'))->get());
		$allLetterForms = array();
		// error_log($request->route('id'));
		$formStatuses = FormStatus::where('next_employee_id', '=', $request->route('id'))->where('status', '=', 'withdrawn')->get();
		foreach ($formStatuses as $formStatus) {
			error_log($formStatus['letter_form_id']);
			$letterForm = LetterForm::where('id', '=', $formStatus['letter_form_id'])->get();
			array_push($allLetterForms, [$letterForm[0], $formStatus]);
		}
		$employeeOIC = EmployeeOic::where('oic_employee_id', '=', $request->route('id'))->get();
		foreach ($employeeOIC as $oic) {
			$originalEmp = $oic['employee_id'];
			$formStatusesOIC = FormStatus::where('next_employee_id', '=', $request->route('id'))->where('status', '=', 'withdrawn')->get();
			foreach ($formStatusesOIC as $formStatusOIC) {
				$letterForm = LetterForm::where('id', '=', $formStatusOIC['letter_form_id'])->get();
				array_push($allLetterForms, [$letterForm[0], $formStatusOIC]);
			}
		}
		$employeeOrigOIC = EmployeeOic::where('employee_id', '=', $request->route('id'))->get();
		foreach ($employeeOrigOIC as $oic) {
			$originalEmp = $oic['oic_employee_id'];
			$formStatusesOIC = FormStatus::where('next_employee_id', '=', $request->route('id'))->where('status', '=', 'withdrawn')->get();
			foreach ($formStatusesOIC as $formStatusOIC) {
				$letterForm = LetterForm::where('id', '=', $formStatusOIC['letter_form_id'])->get();
				array_push($allLetterForms, [$letterForm[0], $formStatusOIC]);
			}
		}
		$bufferEmployee = BufferEmployee::where('buffer_employee_id', '=', $request->route('id'))->get();
		foreach ($bufferEmployee as $buffer) {
			// $originalEmp = $buffer['added_by_employee_id'];
			$formStatusesBuffer = FormStatus::where('next_employee_id', '=', '1')->where('status', '=', 'withdrawn')->get();
			foreach ($formStatusesBuffer as $formStatusBuffer) {
				$letterForm = LetterForm::where('id', '=', $formStatusBuffer['letter_form_id'])->get();
				array_push($allLetterForms, [$letterForm[0], $formStatusBuffer]);
			}
		}

		return new FormStatusResource($allLetterForms);
	}

	/**
	 * Display the specified resource.
	 */
	public function showCancelled(Request $request)
	{
		// return new FormStatusResource(FormStatus::where('next_employee_id', '=', $request->route('id'))->get());
		$allLetterForms = array();
		// error_log($request->route('id'));
		$formStatuses = FormStatus::where(function ($query) use ($request) { $query->where('next_employee_id', '=', $request->route('id'))->orWhere('current_employee_id', '=', $request->route('id')); })->where('status', '=', 'cancelled')->get();
		foreach ($formStatuses as $formStatus) {
			error_log($formStatus['letter_form_id']);
			$letterForm = LetterForm::where('id', '=', $formStatus['letter_form_id'])->get();
			array_push($allLetterForms, [$letterForm[0], $formStatus]);
		}
		$employeeOIC = EmployeeOic::where('oic_employee_id', '=', $request->route('id'))->get();
		foreach ($employeeOIC as $oic) {
			$originalEmp = $oic['employee_id'];
			$formStatusesOIC = FormStatus::where(function ($query) use ($request) { $query->where('next_employee_id', '=', $request->route('id'))->orWhere('current_employee_id', '=', $request->route('id')); })->where('status', '=', 'cancelled')->get();
			foreach ($formStatusesOIC as $formStatusOIC) {
				$letterForm = LetterForm::where('id', '=', $formStatusOIC['letter_form_id'])->get();
				array_push($allLetterForms, [$letterForm[0], $formStatusOIC]);
			}
		}
		$employeeOrigOIC = EmployeeOic::where('employee_id', '=', $request->route('id'))->get();
		foreach ($employeeOrigOIC as $oic) {
			$originalEmp = $oic['oic_employee_id'];
			$formStatusesOIC = FormStatus::where(function ($query) use ($request) { $query->where('next_employee_id', '=', $request->route('id'))->orWhere('current_employee_id', '=', $request->route('id')); })->where('status', '=', 'cancelled')->get();
			foreach ($formStatusesOIC as $formStatusOIC) {
				$letterForm = LetterForm::where('id', '=', $formStatusOIC['letter_form_id'])->get();
				array_push($allLetterForms, [$letterForm[0], $formStatusOIC]);
			}
		}
		$bufferEmployee = BufferEmployee::where('buffer_employee_id', '=', $request->route('id'))->get();
		foreach ($bufferEmployee as $buffer) {
			// $originalEmp = $buffer['added_by_employee_id'];
			$formStatusesBuffer = FormStatus::where(function ($query) use ($request) { $query->where('next_employee_id', '=', '1')->orWhere('current_employee_id', '=', '1'); })->where('status', '=', 'cancelled')->get();
			foreach ($formStatusesBuffer as $formStatusBuffer) {
				$letterForm = LetterForm::where('id', '=', $formStatusBuffer['letter_form_id'])->get();
				array_push($allLetterForms, [$letterForm[0], $formStatusBuffer]);
			}
		}

		return new FormStatusResource($allLetterForms);
	}

	/**
	 * Display the specified resource.
	 */
	public function showFormStatus(Request $request, FormStatus $formstatus)
	{
		// return new FormStatusResource($formstatus);
		return new FormStatusResource(FormStatus::where('letter_form_id', '=', $request->route('id'))->get());
	}

	/**
	 * Display the specified resource.
	 */
	public function show(FormStatus $formstatus)
	{
		return new FormStatusResource($formstatus);
	}

	/**
	 * Update the specified resource in storage.
	 */
	public function update(Request $request, FormStatus $formstatus)
	{
		$formstatus->update($request->validated());
		return new FormStatusResource($formstatus);
	}

	public function converter($data){
		// typeof channelStatus[0] === 'string' ?
		// 		channelStatus[0].toString() :
		// 			channelStatus[0].length > 1 ? 
		// 			( channelStatus[0][0].id != null ? channelStatus[0][0].id.toString() : channelStatus[0][0].toString() ) : 
		// 			( channelStatus[0].id != null ? channelStatus[0].id.toString() : channelStatus[0].toString() ),
		if (gettype($data) === 'string') {
			return $data;
		} else if (gettype($data) === 'integer') {
			return $data;
		} else {
			if (count($data) > 1) {
				return $data[0][0]->id != null ? strval($data[0][0]->id) : strval($data[0][0]);
			} else {
				return $data[0]->id != null ? strval($data[0]->id) : strval($data[0]);
			}
		}
	}

	/**
	 * Update the specified resource in storage.
	 */
	public function patchOutgoing(Request $request, FormStatus $formstatus)
	{
		$letterCheck = LetterForm::findOrFail($request->route('id'))->where('src_employee_id', '=', $request['user_id'])->get();
		$formStatus = FormStatus::where('letter_form_id', '=', $request->route('id'))->get();
		$dst_emp_id = $formStatus[0]['dst_employee_id'];
		$validated = $request->validate([
			'user_id' => 'required|string',
		]);
		$current = $formStatus[0]['current_employee_id'];
		$next = $formStatus[0]['next_employee_id'];
		// error_log($dst_emp_id);
		if ($current === null && $next === null) {
			$data = [
				'current_employee_id' => $validated['user_id'],
				'next_employee_id' => $this->converter($dst_emp_id[0]),
			];
			return FormStatus::where('letter_form_id', '=', $request->route('id'))->update($data);
		} else {
			$res = '';
			$res2 = '';
			$arrayNumbers = [];
			foreach ($dst_emp_id as $key => $value) {
				// error_log($key);
				if (is_string($value)) {
					error_log('(');
					error_log($value);
					error_log($next);
					error_log(')');
					if ($value === $next) {
						// error_log('equal');
						$res = $key;
					}
					array_push($arrayNumbers, [$key, 0]);
				} else {
					foreach ($value as $key2 => $value2) {
						error_log('<');
						error_log($value2);
						error_log(gettype($value2));
						error_log($next);
						error_log(gettype($next));
						error_log('>');
						if ($value2 == $next && gettype($value2) != gettype($next)) {
							error_log('equal');
							$res = $key;
							$res2 = $key2;
						}
					}
					array_push($arrayNumbers, [$key, $key2]);
				}
			}

			if ($res2 === '') {
				error_log('problem');
				error_log($res);
				$nextGet = $dst_emp_id[$res + 1];
				if (!is_string($nextGet)) {
					$nextGet = $dst_emp_id[$res + 1][0];
				}
			} else {
				$arrNum = $arrayNumbers[$res][1];
				if ($res2 + 1 > $arrNum) {
					$nextGet = $dst_emp_id[$res + 1];
					if (!is_string($nextGet)) {
						$nextGet = $dst_emp_id[$res + 1][0];
					}
				} else {
					$nextGet = $dst_emp_id[$res][$res2 + 1];
				}
			}

			$data = [
				'current_employee_id' => $next,
				'next_employee_id' => $this->converter($nextGet),
			];

			return FormStatus::where('letter_form_id', '=', $request->route('id'))->update($data);
		}
	}

	public function cancelLetter(Request $request, FormStatus $formstatus)
	{
		$data = $request->validate([
			'status' => 'required|string',
		]);
		
		return FormStatus::where('letter_form_id', '=', $request->route('id'))->update($data);
	}

	public function patchReceive(Request $request)
	{
		$data = [
			'current_employee_id' => null,
		];
		// $letterform = LetterForm::where('id', '=', $request->route('id'))->update($data);
		
		return FormStatus::where('letter_form_id', '=', $request->route('id'))->update($data);
	}

	public function patchFinalAction(Request $request)
	{
		// $data = [
		// 	'current_employee_id' => null,
		// ];
		$data = $request->validate([
			'status' => 'required|string',
		]);
		// $letterform = LetterForm::where('id', '=', $request->route('id'))->update($data);
		
		return FormStatus::where('letter_form_id', '=', $request->route('id'))->update($data);
	}

	/**
	 * Remove the specified resource from storage.
	 */
	public function destroy(FormStatus $formstatus)
	{
		$formstatus->delete();
		return response()->noContent();
	}
}
