<?php

namespace App\Http\Controllers;

use App\Models\Channel;
use App\Http\Requests\ChannelRequest;
use App\Http\Resources\ChannelResource;

class ChannelController extends Controller
{
	/**
	 * Display a listing of the resource.
	 */
	public function index()
	{
		return ChannelResource::collection(Channel::all());
	}

	/**
	 * Store a newly created resource in storage.
	 */
	public function store(ChannelRequest $request)
	{
		// $channel = Channel::create($request) -> save();
		// return new ChannelResource($channel);

		$channel = Channel::save();
		return response()->json($channel, 201);

		// $request->validate([/*validation rules*/]);
		// Channel::create($request)->save();
	}

	/**
	 * Display the specified resource.
	 */
	public function show(Channel $channel)
	{
		return new ChannelResource($channel);
	}

	/**
	 * Update the specified resource in storage.
	 */
	public function update(ChannelRequest $request, Channel $channel)
	{
		$channel->update($request->validated());
		return new ChannelResource($channel);
	}

	/**
	 * Remove the specified resource from storage.
	 */
	public function destroy(Channel $channel)
	{
		$channel->delete();
		return response()->noContent();
	}
}
