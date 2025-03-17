<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Illuminate\Http\Request;
use App\Http\Resources\EmployeeResource;

class EmployeeController extends Controller
{
	/**
	 * Display a listing of the resource.
	 */
	public function index()
	{
		return EmployeeResource::collection(Employee::all());
	}

	/**
	 * Store a newly created resource in storage.
	 */
	public function store(Request $request)
	{
		$employee = Channel::create($request->validated());
		return new EmployeeResource($employee);
	}

	/**
	 * Display the specified resource.
	 */
	public function show(Employee $employee)
	{
		return new EmployeeResource($employee);
	}

	/**
	 * Update the specified resource in storage.
	 */
	public function update(Request $request, Employee $employee)
	{
		$employee->update($request->validated());
		return new EmployeeResource($employee);
	}

	/**
	 * Remove the specified resource from storage.
	 */
	public function destroy(Employee $employee)
	{
		$employee->delete();
		return response()->noContent();
	}
}
