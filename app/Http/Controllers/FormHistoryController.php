<?php

namespace App\Http\Controllers;

use App\Models\FormHistory;
use App\Http\Resources\FormHistoryResource;
use Illuminate\Http\Request;

class FormHistoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
		return FormHistoryResource::collection(FormHistory::all());
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request)
    {
		// error_log($request->route);
		// error_log('test');
        return new FormHistoryResource(FormHistory::where('letter_form_id', '=', $request->route('id'))->orderBy('created_at', 'DESC')->get());
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(FormHistory $formHistory)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, FormHistory $formHistory)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(FormHistory $formHistory)
    {
        //
    }
}
