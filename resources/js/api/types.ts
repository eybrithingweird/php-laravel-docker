export interface RequestType {
	id: number;
	reqtype: string;
	definition: string;
	is_approvable_by_oic: boolean;
}

export interface RequestTypeAdd {
	reqtype: string;
	definition: string;
	is_approvable_by_oic: boolean;
}

export interface Channel {
	id: number;
	request_type_id: number;
	dst_offices_id: number[];
}

export interface DraftChannels {
	id: number;
	office_id: number;
	office: string;
	designation: string;
}

export interface Employee {
	id: string;
	first_name: string;
	last_name: string;
	middle_initial: string;
	prenominal_title: string;
	postnominal_title: string;
	office_id: number;
	designation: string;
}

export interface EmployeeDisplay {
	id: string;
	first_name: string;
	last_name: string;
	middle_initial: string;
	prenominal_title: string;
	postnominal_title: string;
	office_id: number;
	designation: string;
	display: string;
}

export interface EmployeeOIC {
	employee_id: string;
	oic_employee_id: string;
	oic_start_date: string;
	oic_end_date: string;
	added_by: string;
}

export interface EmployeeOICFull {
	id: string;
	first_name: string;
	last_name: string;
	middle_initial: string;
	prenominal_title: string;
	postnominal_title: string;
	office_id: number;
	designation: string;
	oic_of_employee_id: string;
}

export interface BufferEmployee {
	id: number;
	buffer_employee_id: string;
	has_full_permissions: boolean;
	added_by_employee_id: string;
	created_at?: Date;
	updated_at?: Date;
}

export interface Designation {
	id: number;
	designation: string;
}

export interface Office {
	id: number;
	address: string;
	initials: string;
}

export interface AllFields {
	id: number;
	field: string;
	field_type: string;
	field_options: string[];
}

export interface AddFields {
	field: string;
	field_type: string;
	field_value?: string;
	field_option?: string;
}

export interface RequestFields {
	id: number;
	request_type_id: number;
	all_field_id: number;
}

export interface LetterForm {
	subject: string;
	request_type_id: number;
	src_employee_id: string;
	letter_date: string;
	notes: string;
	supporting_docu: string;
	is_sent: boolean;
}

export interface LetterFormWithId {
	id: string;
	subject: string;
	request_type_id: number;
	src_employee_id: string;
	letter_date: string;
	notes: string;
	supporting_docu: string;
	is_sent: boolean;
}

export interface CommentLetter {
	letter_form_id: string;
	comment: string;
	src_employee_id: string;
	hidden_from_requester: boolean;
}

export interface CommentLetterAll {
	id: number;
	letter_form_id: string;
	comment: string;
	src_employee_id: string;
	hidden_from_requester: boolean;
	created_at: Date;
	updated_at: Date;
}

export interface FormStatus {
	letter_form_id: string;
	status: string; //NOTE: 'Draft', 'In Progress', 'Cancelled', 'Completed'
	current_employee_id: string | null;
	next_employee_id: string | null;
	dst_employee_id: any[];
}

export interface FormStatusWithId {
	id: number;
	letter_form_id: string;
	status: string; //NOTE: 'Draft', 'In Progress', 'Cancelled', 'Completed'
	current_employee_id: string;
	next_employee_id: string;
	dst_employee_id: any[];
}

export interface FormAddfield {
	letter_form_id: string;
	field_label: string;
	field_type: string;
	field_value: string;
	field_option: string;
}

export interface FormHistory {
	id: number;
	letter_form_id: string;
	src_employee_id: string;
	action_description: string;
	created_at: Date;
	updated_at: Date;
}