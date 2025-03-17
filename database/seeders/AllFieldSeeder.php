<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\AllField;

class AllFieldSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
		// field_types: text, file, radio, checkbox
        $allfields = [
			[
				'field' => 'Official List of Awardees',
				'field_type' => 'text',
				'field_options' => []
			], //1
			[
				'field' => 'Official List of Awardees',
				'field_type' => 'file',
				'field_options' => []
			], //2
			[
				'field' => 'Matter(s) to be amended/supplemented',
				'field_type' => 'text',
				'field_options' => []
			], //3
			[
				'field' => 'Other details of request (e.g. Funding for per diem/daily allowance, travel expenses, registration fee)',
				'field_type' => 'text',
				'field_options' => []
			], //4
			[
				'field' => 'Special Order/Memorandum Order to be amended/supplemented',
				'field_type' => 'file',
				'field_options' => []
			], //5
			[
				'field' => 'Name of Faculty/Staff Member',
				'field_type' => 'text',
				'field_options' => []
			], //6
			[
				'field' => 'College/School/Office',
				'field_type' => 'text',
				'field_options' => []
			], //7
			[
				'field' => 'Photocopy of TOR',
				'field_type' => 'file',
				'field_options' => []
			], //8
			[
				'field' => 'Accomplishments',
				'field_type' => 'file',
				'field_options' => []
			], //9
			[
				'field' => 'Additional Notes',
				'field_type' => 'text',
				'field_options' => []
			], //10
			[
				'field' => 'Certified True Copy of TER for four (4) semesters',
				'field_type' => 'file',
				'field_options' => []
			], //11
			[
				'field' => 'Service Record',
				'field_type' => 'file',
				'field_options' => []
			], //12
			[
				'field' => 'Proposal of Project/Work that the Professor will be doing during his/her sabbatical leave',
				'field_type' => 'file',
				'field_options' => []
			], //13
			[
				'field' => 'Other details',
				'field_type' => 'text',
				'field_options' => []
			], //14 -> NOTE: Unused, placed 'other details' with Additional Notes on pre-existing fields for all types
			// NOTE: Please do not delete 14 to avoid domino effect of editing other field IDs
			[
				'field' => 'Name of Faculty Member',
				'field_type' => 'text',
				'field_options' => []
			], //15
			[
				'field' => 'Department/College/School',
				'field_type' => 'text',
				'field_options' => []
			], //16
			[
				'field' => 'Term/School Year',
				'field_type' => 'text',
				'field_options' => []
			], //17
			[
				'field' => 'OVCAA Form 2N',
				'field_type' => 'file',
				'field_options' => []
			], //18
			[
				'field' => 'Notice of Teaching Load',
				'field_type' => 'file',
				'field_options' => []
			], //19
			[
				'field' => 'Name of Staff Member',
				'field_type' => 'text',
				'field_options' => []
			], //20
			[
				'field' => 'Position',
				'field_type' => 'text',
				'field_options' => []
			], //21
			[
				'field' => 'Office/Department',
				'field_type' => 'text',
				'field_options' => []
			], //22
			[
				'field' => 'Department/College/School where he/she will be teaching',
				'field_type' => 'text',
				'field_options' => []
			], //23
			[
				'field' => 'Invitation from the organizers of the event, seminar, workshop or similar in nature',
				'field_type' => 'file',
				'field_options' => []
			], //24
			[
				'field' => 'Activity Announcement',
				'field_type' => 'file',
				'field_options' => []
			], //25
			[
				'field' => 'List of Participants',
				'field_type' => 'file',
				'field_options' => []
			], //26
			[
				'field' => 'Program of Activities',
				'field_type' => 'file',
				'field_options' => []
			], //27
			[
				'field' => 'Itinerary',
				'field_type' => 'file',
				'field_options' => []
			], //28
			[
				'field' => 'Activity Proposal',
				'field_type' => 'file',
				'field_options' => []
			], //29
			[
				'field' => 'Line Item Budget',
				'field_type' => 'file',
				'field_options' => []
			], //30
			[
				'field' => 'Fund Source',
				'field_type' => 'text',
				'field_options' => []
			], //31
			[
				'field' => 'Committee Details',
				'field_type' => 'file',
				'field_options' => []
			], //32
			[
				'field' => 'Name of Activity',
				'field_type' => 'text',
				'field_options' => []
			], //33
			[
				'field' => 'Venue',
				'field_type' => 'text',
				'field_options' => []
			], //34
			[
				'field' => 'Work and Financial Plan',
				'field_type' => 'file',
				'field_options' => []
			], //35
			[
				'field' => 'Date of Conduct of Activity',
				'field_type' => 'text',
				'field_options' => []
			], //36
			[
				'field' => 'Persons Involved/Organizers',
				'field_type' => 'text',
				'field_options' => []
			], //37
			[
				'field' => 'Assistance Requested',
				'field_type' => 'text',
				'field_options' => []
			], //38
			[
				'field' => 'Syllabus',
				'field_type' => 'file',
				'field_options' => []
			], //39
			[
				'field' => 'Abstract of Paper',
				'field_type' => 'file',
				'field_options' => []
			], //40
			[
				'field' => 'Date of Event',
				'field_type' => 'text',
				'field_options' => []
			], //41
			[
				'field' => 'CMO 63 Checklist',
				'field_type' => 'file',
				'field_options' => []
			], //42
			[
				'field' => 'Letter of Invitation',
				'field_type' => 'file',
				'field_options' => []
			], //43
			[
				'field' => 'Charge To',
				'field_type' => 'text',
				'field_options' => []
			], //44
			[
				'field' => 'Approved Research Program',
				'field_type' => 'file',
				'field_options' => []
			], //45
			[
				'field' => 'Notarized Memoradun of Agreement between Funding Agency and the Institute',
				'field_type' => 'file',
				'field_options' => []
			], //46
			[
				'field' => 'Research Proposal',
				'field_type' => 'file',
				'field_options' => []
			], //47
			[
				'field' => 'Line Item Budget Approved by the Funding Agency',
				'field_type' => 'file',
				'field_options' => []
			], //48
			[
				'field' => 'Reason for Request',
				'field_type' => 'text',
				'field_options' => []
			], //49
			[
				'field' => 'Designation',
				'field_type' => 'text',
				'field_options' => []
			], //50
			[
				'field' => 'Tasks and Responsibilities',
				'field_type' => 'file',
				'field_options' => []
			], //51
			[
				'field' => 'Office Assignment',
				'field_type' => 'text',
				'field_options' => []
			], //52
			[
				'field' => 'Duration',
				'field_type' => 'text',
				'field_options' => []
			], //53
			[
				'field' => 'Special Order #',
				'field_type' => 'text',
				'field_options' => []
			], //54
			[
				'field' => 'Extension Period',
				'field_type' => 'text',
				'field_options' => []
			], //55
			[
				'field' => 'Research Assistants (with respective monthly salary, if available)',
				'field_type' => 'text',
				'field_options' => []
			], //56
			[
				'field' => 'Project Leader Monthly Honorarium',
				'field_type' => 'text',
				'field_options' => []
			], //57
			[
				'field' => 'Name of Applicant',
				'field_type' => 'text',
				'field_options' => []
			], //58
			[
				'field' => 'Job Description',
				'field_type' => 'text',
				'field_options' => []
			], //59
			[
				'field' => 'Duration of Employment',
				'field_type' => 'text',
				'field_options' => []
			], //60
			[
				'field' => 'Approved OVCAA Form 3',
				'field_type' => 'text',
				'field_options' => []
			], //61
			[
				'field' => 'Curriculum Vitae',
				'field_type' => 'file',
				'field_options' => []
			], //62
			[
				'field' => 'Certificate of Registration',
				'field_type' => 'file',
				'field_options' => []
			], //63
			[
				'field' => 'Project Member Details',
				'field_type' => 'file',
				'field_options' => []
			], //64
			[
				'field' => 'What',
				'field_type' => 'text',
				'field_options' => []
			], //65
			[
				'field' => 'When',
				'field_type' => 'text',
				'field_options' => []
			], //66
			[
				'field' => 'Where',
				'field_type' => 'text',
				'field_options' => []
			], //67
			[
				'field' => 'Who',
				'field_type' => 'text',
				'field_options' => []
			], //68
			[
				'field' => 'Name of Student',
				'field_type' => 'text',
				'field_options' => []
			], //69
			[
				'field' => 'College/School',
				'field_type' => 'text',
				'field_options' => []
			], //70
			[
				'field' => 'PRC Certificate',
				'field_type' => 'file',
				'field_options' => []
			], //71
			[
				'field' => 'Conference Name',
				'field_type' => 'text',
				'field_options' => []
			], //72
			[
				'field' => 'Conference Date',
				'field_type' => 'text',
				'field_options' => []
			], //73
			[
				'field' => 'Conference Venue',
				'field_type' => 'text',
				'field_options' => []
			], //74
			[
				'field' => 'Conference Program',
				'field_type' => 'file',
				'field_options' => []
			], //75
			[
				'field' => 'Notice of Acceptance',
				'field_type' => 'file',
				'field_options' => []
			], //76
			[
				'field' => 'Certification/Authorization from co-authors',
				'field_type' => 'file',
				'field_options' => []
			], //77
			[
				'field' => 'Certification from KTTO [RDA_003 S.2018]',
				'field_type' => 'file',
				'field_options' => []
			], //78
			[
				'field' => 'Title of Research Paper to be presented',
				'field_type' => 'text',
				'field_options' => []
			], //79
			[
				'field' => 'Type of Funding',
				'field_type' => 'radio',
				'field_options' => ['Internally Funded', 'Externally Funded', 'Patriotic Research']
			], //80
			[
				'field' => 'Keyword/s',
				'field_type' => 'text',
				'field_options' => []
			], //81
			[
				'field' => 'Type of Research',
				'field_type' => 'radio',
				'field_options' => ['Study', 'Project', 'Article']
			], //82
			[
				'field' => 'Name of Researcher(s) / Author(s) [Lastname , Firstname, Middlename]',
				'field_type' => 'text',
				'field_options' => []
			], //83
			[
				'field' => 'Presenter (Please specify if Faculty, Graduate or Undergraduate)',
				'field_type' => 'text',
				'field_options' => []
			], //84
			[
				'field' => 'Objective(s)',
				'field_type' => 'text',
				'field_options' => []
			], //85
			[
				'field' => 'Beneficiaries',
				'field_type' => 'text',
				'field_options' => []
			], //86
			[
				'field' => 'Duration (in months)',
				'field_type' => 'text',
				'field_options' => []
			], //87
			[
				'field' => 'Date Started (Month and Year)',
				'field_type' => 'text',
				'field_options' => []
			], //88
			[
				'field' => 'Date Completed (Month and Year)',
				'field_type' => 'text',
				'field_options' => []
			], //89
			[
				'field' => 'Approved Cost',
				'field_type' => 'text',
				'field_options' => []
			], //90
			[
				'field' => 'Fund Source',
				'field_type' => 'text',
				'field_options' => []
			], //91
			[
				'field' => 'Type of Presentation',
				'field_type' => 'radio',
				'field_options' => ['Oral', 'Poster']
			], //92
			[
				'field' => 'Type of Conference',
				'field_type' => 'radio',
				'field_options' => ['International', 'National', 'Local']
			], //93
			[
				'field' => 'Expenses not to exceed',
				'field_type' => 'text',
				'field_options' => []
			], //94
			[
				'field' => 'Travel Destination',
				'field_type' => 'text',
				'field_options' => []
			], //95
			[
				'field' => 'Travel Period',
				'field_type' => 'text',
				'field_options' => []
			], //96
			[
				'field' => 'Purpose of Travel',
				'field_type' => 'text',
				'field_options' => []
			], //97
			[
				'field' => 'Approved Leave Form',
				'field_type' => 'file',
				'field_options' => []
			], //98
			[
				'field' => 'Title of Article',
				'field_type' => 'text',
				'field_options' => []
			], //99
			[
				'field' => 'Title of the Research Project',
				'field_type' => 'text',
				'field_options' => []
			], //100
			[
				'field' => 'Date of Publication',
				'field_type' => 'text',
				'field_options' => []
			], //101
			[
				'field' => 'Editor/s',
				'field_type' => 'text',
				'field_options' => []
			], //102
			[
				'field' => 'Publisher',
				'field_type' => 'text',
				'field_options' => []
			], //103
			[
				'field' => 'Volume No. and Issue No.',
				'field_type' => 'text',
				'field_options' => []
			], //104
			[
				'field' => 'Page Number(s) and Number of Page(s)',
				'field_type' => 'text',
				'field_options' => []
			], //105
			[
				'field' => 'Type of Publication',
				'field_type' => 'radio',
				'field_options' => ['International', 'National', 'Local']
			], //106
			[
				'field' => 'ISSBN/ISBN No.',
				'field_type' => 'text',
				'field_options' => []
			], //107
			[
				'field' => 'Indicate the indexing of the journal where the Research Journal was recognized',
				'field_type' => 'text',
				'field_options' => []
			], //108
			[
				'field' => 'Copy of published article (in PDF format)',
				'field_type' => 'file',
				'field_options' => []
			], //109
			[
				'field' => 'Copy of Accomplished Work/Project',
				'field_type' => 'text',
				'field_options' => []
			], //110
			[
				'field' => 'RDA Category',
				'field_type' => 'radio',
				'field_options' => ['Category A', 'Category B']
			], //111
			[
				'field' => 'Type of Presentation',
				'field_type' => 'radio',
				'field_options' => ['Invited Talk', 'Accepted Talk (Oral only)', 'Accepted Talk (Poster only)']
			], //112
			[
				'field' => 'Conference will be held in / Amount of Award',
				'field_type' => 'text',
				'field_options' => []
			], //113
			[
				'field' => 'Special Order of Approved Project',
				'field_type' => 'text',
				'field_options' => []
			], //114
			[
				'field' => 'Copy of Full Paper',
				'field_type' => 'file',
				'field_options' => []
			], //115
			[
				'field' => 'Certification of Inform Consent [RDA_002 S.2018]',
				'field_type' => 'file',
				'field_options' => []
			], //116
			[
				'field' => 'Conference Organizers [History, Track Record, Board Members, Publication]',
				'field_type' => 'file',
				'field_options' => []
			], //117
			[
				'field' => 'Travel Order #',
				'field_type' => 'text',
				'field_options' => []
			], //118
			[
				'field' => 'Notice of Admission',
				'field_type' => 'file',
				'field_options' => []
			], //119
			[
				'field' => 'Report of Grades',
				'field_type' => 'file',
				'field_options' => []
			], //120
			[
				'field' => 'Progress Report with Gantt Chart',
				'field_type' => 'file',
				'field_options' => []
			], //121
			[
				'field' => 'Program of Study',
				'field_type' => 'file',
				'field_options' => []
			], //122
			[
				'field' => 'Other (Add a new Request Field)',
				'field_type' => '',
				'field_options' => []
			], //123
		];

		foreach($allfields as $allfield) {
			AllField::create($allfield);
		}
    }
}
