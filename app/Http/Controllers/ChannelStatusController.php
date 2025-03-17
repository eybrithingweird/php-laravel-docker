<?php

namespace App\Http\Controllers;

use App\Models\ChannelStatus;
use Illuminate\Http\Request;

use App\Http\Resources\ChannelStatusResource;

class ChannelStatusController extends Controller
{
	/**
	 * Display a listing of the resource.
	 */
	public function index()
	{
		return ChannelStatusResource::collection(ChannelStatus::all());
	}

	/**
	 * Store a newly created resource in storage.
	 */
	public function store(Request $request)
	{
		$channelstatus = ChannelStatus::create($request->validated());
		return new ChannelStatusResource($channelstatus);
	}

	/**
	 * Display the specified resource.
	 */
	public function show(Request $request)
	{
		// return new ChannelStatusResource($channelstatus);
		return new ChannelStatusResource(ChannelStatus::where('id', '=',$request->route('id'))->get());
	}

	/**
	 * Display the specified resource.
	 */
	public function showIncoming(Request $request)
	{
		return new ChannelStatusResource(ChannelStatus::where('next_employee_id', '=', $request->route('id'))->get());
	}
	
	/**
	 * Display the specified resource.
	 */
	public function showOutgoing(Request $request)
	{
		return new ChannelStatusResource(ChannelStatus::where('current_employee_id', '=', $request->route('id'))->get());
	}

	/**
	 * Update the specified resource in storage.
	 */
	public function update(Request $request, ChannelStatus $channelstatus)
	{
		$channelstatus->update($request->validated());
		return new ChannelStatusResource($channelstatus);
	}

	public function converter($data){
		// typeof channelStatus[0] === 'string' ?
		// 		channelStatus[0].toString() :
		// 			channelStatus[0].length > 1 ? 
		// 			( channelStatus[0][0].id != null ? channelStatus[0][0].id.toString() : channelStatus[0][0].toString() ) : 
		// 			( channelStatus[0].id != null ? channelStatus[0].id.toString() : channelStatus[0].toString() ),
		if (gettype($data) === 'string') {
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
	public function patchOutgoing(Request $request, ChannelStatus $channelstatus)
	{
		$channelStatus = ChannelStatus::findOrFail($request->route('id'))->get();
		$dst_emp_id = $channelStatus['dst_employee_id'];
		$validated = $request->validate([
			'user_id' => 'required|string',
		]);
		$current = $channelStatus['current_employee_id'];
		$next = $channelStatus['next_employee_id'];
		if ($current === null && $next === null) {
			$data = [
				'current_employee_id' => $validated['user_id'],
				'next_employee_id' => $this->converter($dst_emp_id[0]),
			];
			return ChannelStatus::findOrFail($request->route('id'))->update($data);
		} else {

		}
	}

	/**
	 * Remove the specified resource from storage.
	 */
	public function destroy(ChannelStatus $channelstatus)
	{
		$channelstatus->delete();
		return response()->noContent();
	}
}
