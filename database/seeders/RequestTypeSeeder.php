<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\RequestType;

class RequestTypeSeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 */
	public function run(): void
	{
		$request_types = [
			[
				'reqtype' => 'Academic Incentives',
				'definition' => 'Requests for the release of incentives given by reason of academic excellence (e.g. Gawad Chancellor).',
				'is_approvable_by_oic' => true
			], //1
			[
				'reqtype' => 'Amendment / Supplement',
				'definition' => 'Request for modifications of previously issued orders.',
				'is_approvable_by_oic' => true
			], //2
			[
				'reqtype' => 'Application for Evaluation (Faculty Promotion)',
				'definition' => 'Letter of intent for the requester to be evaluated for re-ranking and promotion.',
				'is_approvable_by_oic' => true
			], //3
			[
				'reqtype' => 'Application for Sabbatical Leave',
				'definition' => 'This request is for the grant of a period not exceeding one year wherein faculty members shall not be given teaching duties so they may pursue research or other work.
				Only faculty members with the rank of Associate Professor and above who served the University for a minimum of six years (continuous teaching) can apply.
				Upon the approval by the Board of Regents of the sabbatical leave, the sabbatical leave grantee shall execute a contract with the college/school to the effect that the grantee shall render one (1) year of service after the sabbatical leave and to submit at least five (5) copies of the research report or sabbatical leave undertaking report. 
				Violation thereof shall constitute a ground for withholding payment of salary after return to service.',
				'is_approvable_by_oic' => true
			], //4
			[
				'reqtype' => 'Application of Definite Leave (Staff)',
				'definition' => '',
				'is_approvable_by_oic' => true
			], //5
			[
				'reqtype' => 'Assignment of Excess Load (Faculty)',
				'definition' => 'Request to the assignment of teaching overload exceeding the allowable 6 units but not beyond 9 units (with pay).',
				'is_approvable_by_oic' => true
			], //6
			[
				'reqtype' => 'Assignment of Teaching Load to Staff Members',
				'definition' => 'This refers to the handling of teaching load to staff members of the University.',
				'is_approvable_by_oic' => true
			], //7
			[
				'reqtype' => 'Attendance to MWFFCSST > International [Faculty]',
				'definition' => 'Request to participate or attend international activities (meeting, workshop, forum, festival, conference, seminar, symposium, training).',
				'is_approvable_by_oic' => true
			], //8
			[
				'reqtype' => 'Attendance to MWFFCSST > International [Staff]',
				'definition' => 'Request to participate or attend international activities (meeting, workshop, forum, festival, conference, seminar, symposium, training).',
				'is_approvable_by_oic' => true
			], //9
			[
				'reqtype' => 'Attendance to MWFFCSST > International [Student]',
				'definition' => 'Request to participate or attend international activities (meeting, workshop, forum, festival, conference, seminar, symposium, training).',
				'is_approvable_by_oic' => true
			], //10
			[
				'reqtype' => 'Attendance to MWFFCSST > Local [Faculty]',
				'definition' => 'Request to participate or attend local activities (meeting, workshop, forum, festival, conference, seminar, symposium, training).',
				'is_approvable_by_oic' => true
			], //11
			[
				'reqtype' => 'Attendance to MWFFCSST > Local [Staff]',
				'definition' => 'Request to participate or attend local activities (meeting, workshop, forum, festival, conference, seminar, symposium, training).',
				'is_approvable_by_oic' => true
			], //12
			[
				'reqtype' => 'Attendance to MWFFCSST > Local [Student]',
				'definition' => 'Request to participate or attend local activities (meeting, workshop, forum, festival, conference, seminar, symposium, training).',
				'is_approvable_by_oic' => true
			], //13
			[
				'reqtype' => 'Conduct of Activity > Academic-related MWFFCSST',
				'definition' => 'Request to conduct on or off-campus activities such as meeting, workshop, forum, festival, conference, seminar, symposium, training.',
				'is_approvable_by_oic' => true
			], //14
			[
				'reqtype' => 'Conduct of Activity > Accreditation/Assessment/Evaluation Activity - External [AACCUP, CHED, Washington Accord, etc.]',
				'definition' => 'Request to conduct mock (or actual) accreditation, office/college performance assessments.',
				'is_approvable_by_oic' => true
			], //15
			[
				'reqtype' => 'Conduct of Activity > Accreditation/Assessment/Evaluation Activity - External [ISO, CSC]',
				'definition' => 'Request to conduct mock (or actual) accreditation, office/college performance assessments.', //TODO: Please double check description
				'is_approvable_by_oic' => true
			], //16
			[
				'reqtype' => 'Conduct of Activity > Administrative-related Activities (Inventory, etc.)',
				'definition' => 'Request to conduct on or off-campus administrative-related activities.',
				'is_approvable_by_oic' => true
			], //17
			[
				'reqtype' => 'Conduct of Activity > Administrative-related MWFFCSST',
				'definition' => 'Request to conduct, hold, or host a meeting, workshop, forum, festival, conference, seminar, symposium, or training.',
				'is_approvable_by_oic' => true
			], //18
			[
				'reqtype' => 'Conduct of Activity > Assessment/Evaluation Activity - Internal [Cluster, Midyear, Year-end, etc.]',
				'definition' => 'Request to hold an assessment or evaluation activity (e.g. Midyear / Year-end Assessment).',
				'is_approvable_by_oic' => true
			], //19
			[
				'reqtype' => 'Conduct of Activity > Benchmarking/Teambuilding/Strategic Planning/Action Planning (Staff)',
				'definition' => 'Request to conduct benchmarking, teambuilding, strategic/action planning activities. If also involving some faculty members, the VCAA should be tagged.',
				'is_approvable_by_oic' => true	
			], //20
			[
				'reqtype' => 'Conduct of Activity > Benchmarking/Teambuilding/Strategic Planning/Action Planning (Student)',
				'definition' => 'Request to conduct benchmarking, team building, strategic/action planning activities.',
				'is_approvable_by_oic' => true
			], //21
			[
				'reqtype' => 'Conduct of Activity > Course Requirement: Colloquium',
				'definition' => 'Request to conduct of research colloquium.',
				'is_approvable_by_oic' => true
			], //22
			[
				'reqtype' => 'Conduct of Activity > Course Requirement: Lecture Series',
				'definition' => 'Request to conduct of lecture series as part of the course syllabus.',
				'is_approvable_by_oic' => true
			], //23
			[
				'reqtype' => 'Conduct of Activity > Course Requirement: Off-campus Activity',
				'definition' => 'Request to participate in field trips, sampling, contests, student conferences/seminars.',
				'is_approvable_by_oic' => true
			], //24
			[
				'reqtype' => 'Conduct of Activity > Extension-related Activity',
				'definition' => 'Request to conduct extension-related activities.',
				'is_approvable_by_oic' => true
			], //25
			[
				'reqtype' => 'Conduct of Activity > Launching (Non-Academe)',
				'definition' => 'Request to hold an activity to launch a project/program/book, etc. (non-academic).',
				'is_approvable_by_oic' => true
			], //26
			[
				'reqtype' => 'Conduct of Activity > Launching (Academe)',
				'definition' => 'Request to hold an activity to launch a project/program/book, etc. (academic-related).',
				'is_approvable_by_oic' => true
			], //27
			[
				'reqtype' => 'Conduct of Activity > Non-Course Requirement: GAAP',
				'definition' => 'Request to organize a GAAP. Requester must be the student organization.',
				'is_approvable_by_oic' => true
			], //28
			[
				'reqtype' => 'Conduct of Activity > Non-Course Requirement: Orientation',
				'definition' => 'Request to organize an orientation. Requester must be the student organization.',
				'is_approvable_by_oic' => true
			], //29
			[
				'reqtype' => 'Conduct of Activity > Research-Related Activities',
				'definition' => 'Request to conduct research-related activities.',
				'is_approvable_by_oic' => true
			], //30
			[
				'reqtype' => 'Conduct of Activity > Visiting Professor',
				'definition' => 'Request to host visiting professor on campus or online.',
				'is_approvable_by_oic' => true
			], //31
			[
				'reqtype' => 'Conduct of Extension Program/Project - Internally Funded',
				'definition' => 'Request to conduct and implement an extension program / project (internally funded).',
				'is_approvable_by_oic' => true
			], //32
			[
				'reqtype' => 'Conduct of Research Program/Project - Externally Funded',
				'definition' => 'Request to conduct and implement a research program / project (externally funded).',
				'is_approvable_by_oic' => true
			], //33
			[
				'reqtype' => 'Conduct of Research Program/Project - Internally Funded',
				'definition' => 'Request to conduct and implement a research program / project (internally funded).',
				'is_approvable_by_oic' => true
			], //34
			[
				'reqtype' => 'Creation of Special Committee/Group/Team [Faculty]',
				'definition' => 'Request to create Special / Ad Hoc Committees / TWG for faculty.',
				'is_approvable_by_oic' => true
			], //35
			[
				'reqtype' => 'Creation of Special Committee/Group/Team [Staff]',
				'definition' => 'Request to create Special / Ad Hoc Committees / TWG for staff.',
				'is_approvable_by_oic' => true
			], //36
			[
				'reqtype' => 'Creation of Special Committee/Group/Team [Student]',
				'definition' => 'Request to create special committee/group/team for student.',
				'is_approvable_by_oic' => true
			], //37
			[
				'reqtype' => 'Designation of Faculty',
				'definition' => 'Request to name a faculty member as the holder of a certain position (head of office, special assistant, etc). 
				This request involves the imposition of additional duties on the faculty member and the grant of administrative load. It is temporary by nature.',
				'is_approvable_by_oic' => true
			], //38
			[
				'reqtype' => 'Designation of Staff/Project Staff',
				'definition' => 'Request to name a staff member as the holder of a certain position (head of office, special assistant, etc). 
				This request involves the imposition of additional duties on the staff member. It is temporary by nature.',
				'is_approvable_by_oic' => true
			], //39
			[
				'reqtype' => 'Designation of Student',
				'definition' => 'Request to name a student as the holder of a certain position (head of office, special assistant, etc). 
				This request involves the imposition of additional duties on the student. It is temporary by nature.',
				'is_approvable_by_oic' => true
			], //40
			[
				'reqtype' => 'Extension of the Conduct and Implementation of a Research Project',
				'definition' => 'Request to extend the period of conduct or implementation of a research project so it may be completed.',
				'is_approvable_by_oic' => true
			], //41
			[
				'reqtype' => 'Hiring/Renewal of Lecturers/Faculty Members',
				'definition' => 'Request to hire/renew contracts of lecturers/faculty members.',
				'is_approvable_by_oic' => true
			], //42
			[
				'reqtype' => 'Hiring/Renewal of Research Project Team Member',
				'definition' => 'Request to hire/renew contracts of research project team members.',
				'is_approvable_by_oic' => true
			], //43
			[
				'reqtype' => 'Hiring/Renewal of Staff Members',
				'definition' => 'Request to hire/renew contracts of staff members.',
				'is_approvable_by_oic' => true
			], //44
			[
				'reqtype' => 'Incentive - Topnotcher',
				'definition' => 'Request to claim financial incentives to PRC Board Topnotchers.',
				'is_approvable_by_oic' => true
			], //45
			[
				'reqtype' => 'Other (Please specify request in the subject line)',
				'definition' => 'Request for other purposes not listed.',
				'is_approvable_by_oic' => true
			], //46
			[
				'reqtype' => 'Paper Presentation > International without RDA',
				'definition' => 'This request is for the presentation of a research paper at an international conference to be held inside or outside the Philippines. 
				Within one month after the conference, the grantee must email a Report of Undertaking to OVCRE-DR (ovcre.re@g.msuiit.edu.ph), cc: College Dean (e.g. cass.dean@g.msuiit.edu.ph, Office of International Affairs (ovcpd.oia@g.msuiit.edu.ph).',
				'is_approvable_by_oic' => true
			], //47
			[
				'reqtype' => 'Paper Presentation > International with RDA',
				'definition' => 'This request is for the presentation of a research paper at an international conference to be held inside or outside the Philippines. 
				Within one month after the conference, the grantee must email a Report of Undertaking to OVCRE-DR (ovcre.re@g.msuiit.edu.ph), cc: College Dean (e.g. cass.dean@g.msuiit.edu.ph, Office of International Affairs (ovcpd.oia@g.msuiit.edu.ph).',
				'is_approvable_by_oic' => true
			], //48
			[
				'reqtype' => 'Paper Presentation > Local',
				'definition' => 'Request for the presentation of a research paper at a conference to be held within the Philippines.',
				'is_approvable_by_oic' => true
			], //49
			[
				'reqtype' => 'Personal Travel > International [Faculty]',
				'definition' => 'Request for permission for personal travel of a faculty member outside the Philippines.',
				'is_approvable_by_oic' => true
			], //50
			[
				'reqtype' => 'Personal Travel > International [Staff]',
				'definition' => 'Request for permission for personal travel of a staff member outside the Philippines.',
				'is_approvable_by_oic' => true
			], //51
			[
				'reqtype' => 'Personal Travel > Local [Faculty]',
				'definition' => 'Request for permission for personal travel of a faculty member inside the Philippines.',
				'is_approvable_by_oic' => true
			], //52
			[
				'reqtype' => 'Personal Travel > Local [Staff]',
				'definition' => 'Request for permission for personal travel of a staff member inside the Philippines.',
				'is_approvable_by_oic' => true
			], //53
			[
				'reqtype' => 'Publication Award',
				'definition' => 'Request for the publication award of any research project to any article.',
				'is_approvable_by_oic' => true
			], //54
			[
				'reqtype' => 'Reinstatement from Sabbatical Leave',
				'definition' => 'Request for reinstatement of a faculty member from sabbatical leave. 
				Upon the approval by the Board of Regents of the sabbatical leave, the sabbatical leave grantee shall execute a contract with the college/school to the effect that the grantee shall render one (1) year of service after the sabbatical leave and to submit at least five (5) copies of the research report or sabbatical leave undertaking report. 
				Violation thereof shall constitute a ground for withholding payment of salary after return to service.',
				'is_approvable_by_oic' => true
			], //55
			[
				'reqtype' => 'Request for Funding [Faculty]',
				'definition' => 'Request for funding from a faculty member for any purpose.',
				'is_approvable_by_oic' => true
			], //56
			[
				'reqtype' => 'Request for Funding [Staff]',
				'definition' => 'Request for funding from a staff member for any purpose.',
				'is_approvable_by_oic' => true
			], //57
			[
				'reqtype' => 'Request for Funding [Student]',
				'definition' => 'Request for funding from a student for any purpose.',
				'is_approvable_by_oic' => true
			], //58
			[
				'reqtype' => 'Request to Draw Cash Advance [Faculty]',
				'definition' => 'Request for cash advance for faculty member for any purpose.',
				'is_approvable_by_oic' => true
			], //59
			[
				'reqtype' => 'Request to Draw Cash Advance [Staff]',
				'definition' => 'Request for cash advance for staff member for any purpose.',
				'is_approvable_by_oic' => true
			], //60
			[
				'reqtype' => 'Research Dissemination Award [Category A or Category B]',
				'definition' => 'This request is for the presentation of research or poster papers in international conferences held within or outside the Philippines. 
				
𝗧𝗵𝗲 𝗥𝗗𝗔 𝗖𝗮𝘁𝗲𝗴𝗼𝗿𝘆 𝗔 consists of registration fee, travel expenses, and incentive: P150,000 (North and South America, Europe, Russia, Africa, Middle East, Australia); P75,000 (East Asia, Pacific Islands); P35,000 (Philippines).
				Within one month after the conference, the grantee must submit the following: Brief write-up of the conference and about the participation of the grantees; Photos of the conference; Photocopy of the conference program and conference book.
				All the required documents must be submitted through email to ovcre.dr@g.msuiit.edu.ph. (BOR Res. No. 126, Series of 2017)
				
𝗧𝗵𝗲 𝗥𝗗𝗔 𝗖𝗮𝘁𝗲𝗴𝗼𝗿𝘆 𝗕 consists only of registration fee support that is not to exceed US$450.',
				'is_approvable_by_oic' => true
			], //61 -> NOTE: Bold text and unusual tabbing intended to produce desired output (no tab displayed on textarea)
			[
				'reqtype' => 'Study Grant [Scholarship] > Application (Faculty)',
				'definition' => 'Request for intent to avail of scholarship grant (faculty).',
				'is_approvable_by_oic' => true
			], //62
			[
				'reqtype' => 'Study Grant [Scholarship] > Application (Staff)',
				'definition' => 'Request for intent to avail of scholarship grant (staff).',
				'is_approvable_by_oic' => true
			], //63
			[
				'reqtype' => 'Study Grant [Scholarship] > Extension (Faculty)',
				'definition' => 'Request for extension of study grant (faculty).',
				'is_approvable_by_oic' => true
			], //64
			[
				'reqtype' => 'Study Grant [Scholarship] > Extension (Staff)',
				'definition' => 'Request for extension of study grant (staff).',
				'is_approvable_by_oic' => true
			], //65
			[
				'reqtype' => 'Study Grant [Scholarship] > Renewal (Faculty)',
				'definition' => 'Request for renewal of study grant (faculty).',
				'is_approvable_by_oic' => true
			], //66
			[
				'reqtype' => 'Study Grant [Scholarship] > Renewal (Staff)',
				'definition' => 'Request for renewal of study grant (staff).',
				'is_approvable_by_oic' => true
			], //67
			[
				'reqtype' => 'Suspension of Classes',
				'definition' => 'Request to suspend classes due to certain college/university activities or situations where public safety is a concern (Foundation Day, Palakasan, virus outbreak, weather disturbances)',
				'is_approvable_by_oic' => true
			] //68
		];

		foreach($request_types as $request_type) {
			RequestType::create($request_type);
		}
	}
}
