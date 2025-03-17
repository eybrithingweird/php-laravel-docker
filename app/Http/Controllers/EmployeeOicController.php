<?php

namespace App\Http\Controllers;

use App\Models\EmployeeOic;
use Illuminate\Http\Request;
use App\Http\Resources\EmployeeOicResource;

class EmployeeOicController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
		return EmployeeOicResource::collection(EmployeeOic::all());
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
    public function show(EmployeeOic $employeeOic)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(EmployeeOic $employeeOic)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, EmployeeOic $employeeOic)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(EmployeeOic $employeeOic)
    {
        //
    }
}
