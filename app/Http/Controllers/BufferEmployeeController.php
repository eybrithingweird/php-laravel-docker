<?php

namespace App\Http\Controllers;

use App\Models\BufferEmployee;
use App\Http\Resources\BufferEmployeeResource;
use Illuminate\Http\Request;

class BufferEmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return BufferEmployeeResource::collection(BufferEmployee::all());
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
    public function show(BufferEmployee $bufferEmployee)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(BufferEmployee $bufferEmployee)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, BufferEmployee $bufferEmployee)
    {
		$data = $request->validate([
			'buffer_employee_id' => 'required|string',
			'has_full_permissions' => 'required|boolean',
		]);

		return BufferEmployee::findOrFail($request->route('id'))->update($data);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, BufferEmployee $bufferEmployee)
    {
        $buffer_employee = BufferEmployee::findOrFail($request->route('id'));
		$buffer_enployee->delete();
		return response()->noContent();
    }
}
