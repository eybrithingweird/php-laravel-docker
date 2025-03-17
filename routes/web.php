<?php

use Illuminate\Support\Facades\Route;
use App\Models\Links;

use App\Models\RequestType;

// Route::get('/', function () {
// 	return view('dashboard');
// });

// Route::get('/incoming', function () {
// 	return view('incoming');
// });

// Route::get('/outgoing', function () {
// 	return view('outgoing');
// });

// Route::get('/create', function () {
// 	return view('create');
// });

Route::get('/pdf-preview/{id}/{letter}', function ($id, $letter) {
	return view('pdfpreview', ['title' => 'PDF Preview', 'token' => csrf_token()]);
});

Route::get('/{all}', function () {
	$request = Request::path();
	$check = Links::find($request);
	// error_log($request);

	// $array = [['2024-011', '2024-012'], '2011-022', ['2024-013', '2024-014'], '0001'];
	// // $res = array_search('2024-012', $array);
	// $res = '';
	// $res2 = '';
	// $arrayNumbers = [];
	// foreach ($array as $key => $value) {
	// 	if (is_string($value)) {
	// 		if ($value === '2011-022') {
	// 			$res = $key;
	// 		}
	// 		array_push($arrayNumbers, [$key, 0]);
	// 	} else {
	// 		foreach ($value as $key2 => $value2) {
	// 			if ($value2 === '2011-022') {
	// 				$res = $key;
	// 				$res2 = $key2;
	// 			}
	// 		}
	// 		array_push($arrayNumbers, [$key, $key2]);
	// 	}
	// }

	// if ($res2 === '') {
	// 	$nextGet = $array[$res + 1];
	// 	if (!is_string($nextGet)) {
	// 		$nextGet = $array[$res + 1][0];
	// 	}
	// } else {
	// 	$arrNum = $arrayNumbers[$res][1];
	// 	if ($res2 + 1 > $arrNum) {
	// 		$nextGet = $array[$res + 1];
	// 		if (!is_string($nextGet)) {
	// 			$nextGet = $array[$res + 1][0];
	// 		}
	// 	} else {
	// 		$nextGet = $array[$res][$res2 + 1];
	// 	}
	// }
	// error_log($res);
	// error_log($res2);
	// error_log($nextGet);
	// error_log(count($array));
	// error_log('boundary');

	// error_log($request);

	switch ($request) {
		case 'incoming':
			return view('dashboard', ['title' => 'Incoming Letter Requests', 'token' => csrf_token()]);
			break;

		case 'outgoing':
			return view('dashboard', ['title' => 'Outgoing Letter Requests', 'token' => csrf_token()]);
			break;

		case 'letters':
			return view('dashboard', ['title' => 'All Letter Requests', 'token' => csrf_token()]);
			break;

		case 'mysulat':
			return view('dashboard', ['title' => 'My Letter Requests', 'token' => csrf_token()]);
			break;

		case 'create':
			// $requestTypes = RequestType::all();

			// JavaScript::put([
			// 	'dataRes' => $requestTypes,
			// ]);

			return view('dashboard', ['title' => 'Create Letter Request', 'token' => csrf_token()]);
			break;

		case 'admin':
			return view('dashboard', ['title' => 'Admin Dashboard', 'token' => csrf_token()]);
			break;

		default:
			return view('dashboard', ['title' => 'Dashboard', 'token' => csrf_token()]);
			break;
	}
})
	->where('all', '^(?!api).*$')
	->where('all', '^(?!storage).*$');

?>