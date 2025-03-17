<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Validation\Rule;

use App\Models\Channel;
use App\Models\RequestType;
use App\Models\RequestField;
use App\Models\LetterForm;
use App\Models\FormAddfield;
use App\Models\CommentLetter;
use App\Models\FormStatus;
use App\Models\Employee;
use App\Models\EmployeeOic;
use App\Models\BufferEmployee;
use App\Models\AllField;
use App\Models\FormHistory;

use App\Http\Requests\ChannelRequest;
use App\Http\Requests\RequestTypeRequest;
use App\Http\Requests\RequestFieldRequest;
use App\Http\Requests\LetterFormRequest;
use App\Http\Requests\FormAddfieldRequest;
use App\Http\Requests\FormStatusRequest;
use App\Http\Requests\CommentLetterRequest;
use App\Http\Requests\EmployeeOicRequest;
use App\Http\Requests\BufferEmployeeRequest;
use App\Http\Requests\FormHistoryRequest;

use App\Http\Controllers\RequestTypeController;
use App\Http\Controllers\ChannelController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\OfficeController;
use App\Http\Controllers\DesignationController;
use App\Http\Controllers\AllFieldController;
use App\Http\Controllers\RequestFieldController;
use App\Http\Controllers\FormStatusController;
use App\Http\Controllers\FormAddfieldController;
use App\Http\Controllers\LetterFormController;
use App\Http\Controllers\CommentLetterController;
use App\Http\Controllers\EmployeeOicController;
use App\Http\Controllers\BufferEmployeeController;
use App\Http\Controllers\FormHistoryController;

Route::get('/user', function (Request $request) {
	return $request->user();
})->middleware('auth:sanctum');

Route::apiResource('requesttypes', RequestTypeController::class);
Route::post('requesttypes', function(RequestTypeRequest $request) {
	// dd($request->all());
	$data = $request->validate([
		'reqtype' => 'required|min:3',
		'definition' => 'required|min:3',
		'is_approvable_by_oic' => 'required|boolean',
	]);
	return RequestType::create([
		'reqtype' => $data['reqtype'],
		'definition' => $data['definition'],
		'is_approvable_by_oic' => $data['is_approvable_by_oic'],
	]);
});

Route::apiResource('allfields', AllFieldController::class);
Route::post('allfields', function(Request $request) {
	$data = $request->validate([
		'field' => 'required|min:3',
		'field_type' => 'required|in:text,file,radio,checkbox',
		'field_options' => 'nullable',
	]);
	return AllField::create([
		'field' => $data['field'],
		'field_type' => $data['field_type'],
		'field_options' => $data['field_options']
	]);
});

Route::apiResource('request-fields', RequestFieldController::class);
// Route::get('request-fields/{id}', [RequestFieldController::class, 'show']);
Route::patch('request-fields/{id}', [RequestFieldController::class, 'patchData']);
Route::post('request-fields', function (RequestFieldRequest $request) {
	$data = $request->validate([
		'request_type_id' => 'required|numeric',
		'all_field_id' => 'required|numeric'
	]);
	return RequestField::create([
		'request_type_id' => $data['request_type_id'],
		'all_field_id' => $data['all_field_id']
	]);
});

Route::apiResource('channels', ChannelController::class);
Route::post('channels', function(ChannelRequest $request) {
	$data = $request->validate([
		'request_type_id' => ['required'],
		'dst_offices_id' => ['required'],
	]);
	return Channel::create([
		'request_type_id' => $data['request_type_id'],
		'dst_offices_id' => $data['dst_offices_id'],
	]);
});

// Route::apiResource('create', LetterFormController::class);

Route::patch('create/{id}', [LetterFormController::class, 'update']);
Route::get('mysulat/{id}', [LetterFormController::class, 'showMysulat']);
Route::post('create', function(LetterFormRequest $request) {
	// dd($request->all());
	$data = $request->validate([
		'subject' => 'required|min:3',
		'request_type_id' => 'required',
		'src_employee_id' => 'required',
		'letter_date' => 'required',
		'notes' => 'nullable|string',
		'supporting_docu' => 'nullable|url:drive.google.com',
		'is_sent' => 'required|boolean',
	]);
	$lastLetterId = LetterForm::select('id')->orderBy('id','desc')->first();
	// error_log($lastLetterId);
	$lastLetterId = (int)substr($lastLetterId , -5);
	// error_log($lastLetterId);

	function idFormatting($id) {
		switch ($id){
			case $id < 10:
				return '0000' . $id;
			case $id >= 10 && $id < 100:
				return '000' . $id;
			case $id >= 100 && $id < 1000:
				return '00' . $id;
			case $id >= 1000 && $id < 10000:
				return '0' . $id;
			default:
				return $id;
		}
	}

	// error_log(idFormatting(0));
	// error_log($lastLetterId);

	return LetterForm::create([
		'id' => 'LR-' . date('Y') . date('m') . idFormatting($lastLetterId + 1),
		'subject' => $data['subject'],
		'request_type_id' => $data['request_type_id'],
		'src_employee_id' => $data['src_employee_id'],
		'letter_date' => $data['letter_date'],
		'notes' => $data['notes'] ?? '',
		'supporting_docu' => $data['supporting_docu'] ?? '',
		'is_sent' => $data['is_sent'],
		'is_urgent' => false
	]);
});

Route::get('comment-letter/{id}', [CommentLetterController::class, 'show']);
Route::post('comment-letter/{id}', function (CommentLetterRequest $request) {
	$data = $request->validate([
		'comment' => 'required|min:3',
		'src_employee_id' => 'required|string',
		'hidden_from_requester' => 'required|boolean',
		'tagged_employee_id' => 'nullable|array',
	]);
	return CommentLetter::create([
		'comment' => $data['comment'],
		'letter_form_id' => $request->route('id'),
		'src_employee_id' => $data['src_employee_id'],
		'hidden_from_requester' => $data['hidden_from_requester'],
		'tagged_employee_id' => $data['tagged_employee_id'],
	]);
});

// Route::apiResource('formaddfields', FormAddfieldController::class);
Route::get('formaddfields/{id}', [FormAddfieldController::class, 'show']);
Route::patch('formaddfields/{id}', [FormAddfieldController::class, 'update']);
Route::delete('formaddfields/{id}', [FormAddfieldController::class, 'destroyField']);
Route::post('formaddfields', function(FormAddfieldRequest $request) {
	// dd($request->all());
	$data = $request->validate([
		'letter_form_id' => 'required|string',
		'field_label' => 'required|min:3',
		'field_type' => 'required|in:text,file,radio,checkbox',
		'field_value' => 'nullable',
		'field_option' => 'nullable|string',
	]);

	return FormAddfield::create([
		'letter_form_id' => $data['letter_form_id'],
		'field_label' => $data['field_label'],
		'field_type' => $data['field_type'],
		'field_value' => $data['field_value'] ?? '',
		'field_option' => $data['field_option'] ?? '',
	]);
	// $data = $request->validate([
	// 	'reqtype' => 'required|min:3',
	// 	'definition' => 'required|min:3',
	// ]);
	// return RequestType::create([
	// 	'reqtype' => $data['reqtype'],
	// 	'definition' => $data['definition'],
	// ]);
});

Route::patch('send/{id}', [LetterFormController::class, 'patchSend']);
Route::patch('mark-is-urgent/{id}', [LetterFormController::class, 'patchUrgent']);
// Route::get('form-status/{id}', [FormStatusController::class, 'showConnect']);
Route::patch('outgoing/{id}', [FormStatusController::class, 'patchOutgoing']);
Route::get('form-status/{id}', [FormStatusController::class, 'showFormStatus']);
Route::patch('form-status/{id}', [FormStatusController::class, 'cancelLetter']);
Route::patch('form-status/receive/{id}', [FormStatusController::class, 'patchReceive']);

Route::get('incoming/{id}', [FormStatusController::class, 'showIncoming']);
Route::get('received/{id}', [FormStatusController::class, 'showReceived']);
Route::get('outgoing/{id}', [FormStatusController::class, 'showOutgoing']);
Route::get('withdrawn/{id}', [FormStatusController::class, 'showWithdrawn']);
Route::get('tagged/{id}', [CommentLetterController::class, 'showTagged']);
Route::get('cancelled/{id}', [FormStatusController::class, 'showCancelled']);

Route::patch('final-action/{id}', [FormStatusController::class, 'patchFinalAction']);

// Route::apiResource('channelstatus', ChannelStatusController::class);
// Route::get('incoming/{id}', [LetterFormController::class, 'showIncoming']);
// Route::get('outgoing/{id}', [LetterFormController::class, 'showOutgoing']);
//TODO: Resolve issues with conflicts for Incoming and Outgoing
// Route::get('channelstatus/{id}', [ChannelStatusController::class, 'show']);
// Route::post('channelstatus', function(ChannelStatusRequest $request) {
// 	// dd($request->all());
// 	// error_log($request);
// 	$data = $request->validate([
// 		'current_employee_id' => 'nullable|string',
// 		'next_employee_id' => 'nullable|string',
// 		'dst_employee_id' => 'required|array',
// 	]);
// 	return ChannelStatus::create([
// 		'current_employee_id' => $data['current_employee_id'],
// 		'next_employee_id' => $data['next_employee_id'],
// 		'dst_employee_id' => $data['dst_employee_id'],
// 	]);
// 	// $data = $request->validate([
// 	// 	'reqtype' => 'required|min:3',
// 	// 	'definition' => 'required|min:3',
// 	// ]);
// 	// return RequestType::create([
// 	// 	'reqtype' => $data['reqtype'],
// 	// 	'definition' => $data['definition'],
// 	// ]);
// });

// Route::apiResource('form-status', FormStatusController::class);
Route::post('form-status', function(FormStatusRequest $request) {
	// dd($request->all());
	$data = $request->validate([
		'letter_form_id' => 'required|string',
		'status' => 'required|string',
		'current_employee_id' => 'nullable|string',
		'next_employee_id' => 'nullable|string',
		'dst_employee_id' => 'required|array',
	]);
	return FormStatus::create([
		'letter_form_id' => $data['letter_form_id'],
		'status' => $data['status'],
		'current_employee_id' => $data['current_employee_id'],
		'next_employee_id' => $data['next_employee_id'],
		'dst_employee_id' => $data['dst_employee_id'],
	]);
	// $data = $request->validate([
	// 	'reqtype' => 'required|min:3',
	// 	'definition' => 'required|min:3',
	// ]);
	// return RequestType::create([
	// 	'reqtype' => $data['reqtype'],
	// 	'definition' => $data['definition'],
	// ]);
});

Route::apiResource('employees', EmployeeController::class);

Route::apiResource('employee_oic', EmployeeOicController::class);
Route::post('employee_oic', function(EmployeeOicRequest $request) {
	$data = $request->validate([
		'employee_id' => 'required|string',
		'oic_employee_id' => 'required|string',
		'oic_start_date' => 'required',
		'oic_end_date' => 'required',
		'added_by' => 'required|string',
	]);
	return EmployeeOic::create([
		'employee_id' => $data['employee_id'],
		'oic_employee_id' => $data['oic_employee_id'],
		'oic_start_date' => $data['oic_start_date'],
		'oic_end_date' => $data['oic_end_date'],
		'added_by' => $data['added_by'],
	]);
});

Route::apiResource('offices', OfficeController::class);

Route::apiResource('buffer-employee', BufferEmployeeController::class);
Route::patch('buffer-employee/{id}', [BufferEmployeeController::class, 'update']);
Route::delete('buffer-employee/{id}', [BufferEmployeeController::class, 'destroy']);
Route::post('buffer-employee', function(BufferEmployeeRequest $request) {
	$data = $request->validate([
		'buffer_employee_id' => 'required|string',
		'has_full_permissions' => 'required|boolean',
		'added_by_employee_id' => 'required|string',
	]);
	// error_log($data['added_by_employee_id']);
	return BufferEmployee::create([
		'buffer_employee_id' => $data['buffer_employee_id'],
		'has_full_permissions' => $data['has_full_permissions'],
		'added_by_employee_id' => $data['added_by_employee_id'],
	]);
});

// Route::apiResource('request-fields', RequestFieldController::class);

// Route::apiResource('form_history', FormHistoryController::class);
Route::get('form_history/{id}', [FormHistoryController::class, 'show']);
Route::post('form_history', function(FormHistoryRequest $request) {
	$data = $request->validate([
		'letter_form_id' => 'required|string',
		'src_employee_id' => 'required|string',
		'action_description' => 'required|string',
	]);
	return FormHistory::create([
		'letter_form_id' => $data['letter_form_id'],
		'src_employee_id' => $data['src_employee_id'],
		'action_description' => $data['action_description'],
	]);
});
