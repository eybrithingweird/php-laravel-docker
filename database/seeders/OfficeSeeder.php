<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\Office;

class OfficeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $offices = [
			//Office of the Chancellor Cluster
			['address' => 'Office of the Chancellor', 'initials' => ''], //1
			['address' => 'Office of the Campus Secretary', 'initials' => ''], //2
			['address' => 'Security and Investigation Division', 'initials' => '', 'initials' => 'SID'], //3
			['address' => 'Office for Legal Services', 'initials' => ''], //4
			['address' => 'Center for Information and Communication Technology', 'initials' => 'CICT'], //5
			['address' => 'Office of the Budget Management', 'initials' => 'OBM'], //6
			['address' => 'Internal Audit Services Unit', 'initials' => 'IASU'], //7
			['address' => 'Office of Communications', 'initials' => ''], //8
			['address' => 'Research Integrity and Compliance Office', 'initials' => 'RICO'], //9

			//Colleges Cluster
			['address' => 'Any College', 'initials' => ''], //10
			['address' => 'Any Department', 'initials' => ''], //11

			['address' => 'College of Engineering', 'initials' => 'COE'], //12
			['address' => 'Department of Chemical Engineering and Technology', 'initials' => 'DChET'], //13
			['address' => 'Department of Civil Engineering', 'initials' => 'DCE'], //14
			['address' => 'Department of Electrical and Electronics Engineering and Technology', 'initials' => 'DECE'], //15
			//NOTE: MRET DEPARTMENT at 96
			['address' => 'Department of Mechanical Engineering and Technology', 'initials' => 'DMET'], //16

			['address' => 'College of Science and Mathematics', 'initials' => 'CSM'], //17
			['address' => 'Biological Sciences Department', 'initials' => ''], //18
			['address' => 'Chemistry Department', 'initials' => ''], //19
			['address' => 'Mathematics & Statistics Department', 'initials' => ''], //20
			['address' => 'Physics Department', 'initials' => ''], //21

			['address' => 'College of Education', 'initials' => 'CED'], //22
			['address' => 'Department of Science and Mathematics Education', 'initials' => 'DSME'], //23
			['address' => 'Department of Professional Education', 'initials' => 'DPRE'], //24
			['address' => 'Department of Physical Education', 'initials' => 'DPE'], //25
			['address' => 'Department of Technology Teacher Education', 'initials' => 'DTTE'], //26

			['address' => 'College of Economics, Business and Accountancy', 'initials' => 'CEBA'], //27
			['address' => 'Department of Accountancy', 'initials' => ''], //28
			['address' => 'Department of Economics', 'initials' => ''], //29
			['address' => 'Department of Marketing', 'initials' => ''], //30
			['address' => 'Department of Hospitality and Tourism Management', 'initials' => ''], //31

			['address' => 'College of Health Sciences', 'initials' => 'CHS'], //32

			['address' => 'College of Arts and Social Sciences', 'initials' => 'CASS'], //33
			['address' => 'English Department', 'initials' => ''], //34
			['address' => 'Filipino Department', 'initials' => ''], //35
			['address' => 'History Department', 'initials' => ''], //36
			['address' => 'Philosophy and Humanities Department', 'initials' => ''], //37
			['address' => 'Political Science Department', 'initials' => ''], //38
			['address' => 'Psychology Department', 'initials' => ''], //39
			['address' => 'Sociology Department', 'initials' => ''], //40

			['address' => 'College of Computer Studies', 'initials' => 'CCS'], //41
			['address' => 'Department of Computer Science', 'initials' => ''], //42
			['address' => 'Department of Information Technology', 'initials' => ''], //43
			['address' => 'Department of Computer Applications', 'initials' => ''], //44

			['address' => 'School of Interdisciplinary Studies', 'initials' => 'SIS'], //45

			//Office of the Vice Chancellor for Academic Affairs Cluster
			['address' => 'Office of the Vice Chancellor for Academic Affairs', 'initials' => 'OVCAA'], //46
			['address' => 'Center for Advanced Education and Lifelong Learning', 'initials' => 'CAELL'], //47
			['address' => 'Office of the University Registrar', 'initials' => 'OUR'], //48
			['address' => 'Center for Pedagogical Innovations', 'initials' => 'CPI'], //49
			['address' => 'University Library', 'initials' => ''], //50
			['address' => 'Office of Admissions, Scholarships and Grants', 'initials' => 'OASG'], //51
			['address' => 'Office of the National Services Training Program', 'initials' => ''], //52
			['address' => 'Center for General Education of MSU-IIT', 'initials' => 'CGEM'], //53

			//Office of the Vice Chancellor for Research and Enterprise Cluster
			['address' => 'Office of the Vice Chancellor for Research and Enterprise', 'initials' => 'OVCRE'], //54
			['address' => 'Research Management Office', 'initials' => 'RMO'], //55
			['address' => 'Research Dissemination Office', 'initials' => 'RDO'], //56
			['address' => 'Knowledge and Technology Transfer Office', 'initials' => 'KTTO'], //57
			['address' => 'Premier Research Institute of Science and Mathematics', 'initials' => 'PRISM'], //58
			['address' => 'MSU-IIT FabLab Mindanao', 'initials' => 'FAB LAB'], //59
			['address' => 'iDEYA: Center for Innovation and Technopreneurship', 'initials' => 'iDEYA: CIT'], //60
			['address' => 'MSU-IIT Center for Resiliency', 'initials' => 'MCR'], //61
			['address' => 'Research Institute of Business, Education, Health and Social Sciences', 'initials' => 'RIBEHSS'], //62
			['address' => 'Research Institute of Engineering and Innovative Technology', 'initials' => 'RIEIT'], //63

			//Office of the Vice Chancellor for Administration and Finance Cluster
			['address' => 'Office of the Vice Chancellor for Administration and Finance', 'initials' => 'OVCAF'], //64
			['address' => 'Cashiering Division', 'initials' => 'Cashier'], //65
			['address' => 'Supply and Property Management Division', 'initials' => 'SPMD'], //66
			['address' => 'Human Resource Management Division', 'initials' => 'HRMD'], //67
			['address' => 'Accounting Division', 'initials' => ''], //68
			['address' => 'Infrastructure Services Division', 'initials' => 'ISD'], //69
			['address' => 'Procurement Management Division', 'initials' => 'PMD'], //70

			//Office of the Vice Chancellor for Strategic Initiatives Cluster
			['address' => 'Office of the Vice Chancellor for Strategic Initiatives', 'initials' => 'OVCSI'], //71
			['address' => 'Office of the Quality Assurance Management Services', 'initials' => 'OQAMS'], //72
			['address' => 'Office of the Institutional Planning and Development Services', 'initials' => 'OIPDS'], //73
			['address' => 'Office of Monitoring and Evaluation', 'initials' => 'OME'], //74
			['address' => 'Office of Business Affairs', 'initials' => 'OBA'], //75

			//Office of the Vice Chancellor for Student Services Cluster
			['address' => 'Office of the Vice Chancellor for Student Services', 'initials' => 'OVCSS'], //76
			['address' => 'Office of Student Development Services', 'initials' => 'OSDS'], //77
			['address' => 'Office of Medical, Dental, and Health Services', 'initials' => 'Clinic'], //78
			['address' => 'Office of Guidance and Counseling', 'initials' => 'OGC'], //79
			['address' => 'Office of Sports Development', 'initials' => 'OSD'], //80
			['address' => 'Office of Student Residences and Food Services', 'initials' => 'OSRFS'], //81
			['address' => 'Center for Culture and Arts', 'initials' => 'CCA'], //82
			['address' => 'Career Center', 'initials' => ''], //83
			['address' => 'Center for Learning and Academic Support Services', 'initials' => 'CLASS'], //84

			//Office of the Vice Chancellor for Public Affairs Cluster
			['address' => 'Office of the Vice Chancellor for Public Affairs', 'initials' => 'OVCPA'], //85
			['address' => 'WE CARE Office', 'initials' => 'WE CARE'], //86
			['address' => 'Alumni and Endowment Fund Center', 'initials' => 'AEFC'], //87
			['address' => 'Institute for Peace and Development in Mindanao', 'initials' => 'IPDM'], //88
			['address' => 'Gender and Development Center', 'initials' => 'GAD'], //89
			['address' => 'Institute for Policy Innovation and Leadership', 'initials' => 'IPIL'], //90

			//Office of the Vice Chancellor for International Affairs Cluster
			['address' => 'Office of the Vice Chancellor for International Affairs', 'initials' => 'OVCIA'], //91

			//Overall VC Offices
			['address' => 'Any Vice Chancellor', 'initials' => ''], //92

			['address' => 'All Departments', 'initials' => ''], //93
			['address' => 'All Colleges', 'initials' => ''], //94
			['address' => 'All Vice Chancellors', 'initials' => ''], //95

			//UNINTENTIONALLY SKIPPED DEPARTMENT UNDER COE
			['address' => 'Department of Materials and Resources Engineering and Technology', 'initials' => 'DMRET'], //96
		];

		foreach($offices as $office) {
			Office::create($office);
		}
    }
}
