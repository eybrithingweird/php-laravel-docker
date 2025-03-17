<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\Employee;

class EmployeeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $employees = [
			//Office of the Chancellor Cluster:
			[
				'first_name' => 'Alizedney',
				'last_name' => 'Ditucalan',
				'middle_initial' => 'M',
				'prenominal_title' => 'Prof.',
				'postnominal_title' => 'JD, LLM',
				'id' => '0001',
				'designation' => 'Chancellor',
				'office_id' => 1
			],
			[
				//Office of the Campus Secretary
				'first_name' => 'Rex',
				'last_name' => 'Ortega',
				'middle_initial' => 'G',
				'prenominal_title' => '',
				'postnominal_title' => '',
				'id' => '0002',
				'designation' => 'Campus Secretary',
				'office_id' => 2
			],
			[
				//Security and Investigation Division
				'first_name' => 'Hassanor',
				'last_name' => 'Bansao',
				'middle_initial' => 'S',
				'prenominal_title' => '',
				'postnominal_title' => '',
				'id' => '2020-0002',
				'designation' => '',
				'office_id' => 3
			],
			[
				//Office for Legal Services
				'first_name' => 'Jan Igor',
				'last_name' => 'Galinato',
				'middle_initial' => 'T',
				'prenominal_title' => 'Atty.',
				'postnominal_title' => '',
				'id' => '2020-0001',
				'designation' => '',
				'office_id' => 4
			],
			[
				//Center for Information and Communications Technology
				'first_name' => 'Dante',
				'last_name' => 'Dinawanao',
				'middle_initial' => 'D',
				'prenominal_title' => '',
				'postnominal_title' => '',
				'id' => '2017-0001',
				'designation' => 'Director',
				'office_id' => 5
			],
			[
				//Office of the Budget Management
				'first_name' => 'Akima',
				'last_name' => 'Bangcola',
				'middle_initial' => 'M',
				'prenominal_title' => '',
				'postnominal_title' => '',
				'id' => '2017-0002',
				'designation' => '',
				'office_id' => 6
			],
			[
				//Internal Audit Services Unit
				'first_name' => 'Lairah',
				'last_name' => 'Manan',
				'middle_initial' => 'O',
				'prenominal_title' => '',
				'postnominal_title' => 'CPA',
				'id' => '2017-0003',
				'designation' => '',
				'office_id' => 7
			],
			[
				//Office of Communications
				'first_name' => 'Michelle Jeanne',
				'last_name' => 'Caracut',
				'middle_initial' => 'C',
				'prenominal_title' => '',
				'postnominal_title' => '',
				'id' => '2017-0004',
				'designation' => '',
				'office_id' => 8
			],

			//Colleges Cluster:
			//COE
			[
				'first_name' => 'Maria Sheila',
				'last_name' => 'Ramos',
				'middle_initial' => 'K',
				'prenominal_title' => 'Prof.',
				'postnominal_title' => 'Ph.D.',
				'id' => '2016-0001',
				'designation' => 'Dean',
				'office_id' => 12
			],
			[
				'first_name' => 'Jonathan',
				'last_name' => 'Tiongson',
				'middle_initial' => 'M',
				'prenominal_title' => 'Assoc. Prof.',
				'postnominal_title' => '',
				'id' => '2016-0002',
				'designation' => '',
				'office_id' => 12
			],
			[
				//Chemical Engineering and Technology
				'first_name' => 'Maria Christina',
				'last_name' => 'Vegafria',
				'middle_initial' => 'M',
				'prenominal_title' => 'Assoc. Prof.',
				'postnominal_title' => '',
				'id' => '2019-007',
				'designation' => 'Chairperson',
				'office_id' => 13
			],
			[
				//Civil Engineering
				'first_name' => 'Elizabeth Edan',
				'last_name' => 'Albiento',
				'middle_initial' => 'M',
				'prenominal_title' => 'Assoc. Prof.',
				'postnominal_title' => '',
				'id' => '2019-008',
				'designation' => 'Chairperson',
				'office_id' => 14
			],
			[
				//Electrical and Electronics Engineering and Technology
				'first_name' => 'Marven',
				'last_name' => 'Jabian',
				'middle_initial' => 'E',
				'prenominal_title' => 'Assoc. Prof.',
				'postnominal_title' => '',
				'id' => '2015-008',
				'designation' => 'Chairperson',
				'office_id' => 15
			],
			[
				//Materials and Resource Engineering and Technology
				'first_name' => 'Leaniel',
				'last_name' => 'Silva',
				'middle_initial' => 'C',
				'prenominal_title' => 'Assoc. Prof.',
				'postnominal_title' => '',
				'id' => '2019-009',
				'designation' => 'Chairperson',
				'office_id' => 96
			],
			[
				//Mechanical Engineering and Technology
				'first_name' => 'Noel',
				'last_name' => 'Hernandez',
				'middle_initial' => 'M',
				'prenominal_title' => 'Assoc. Prof.',
				'postnominal_title' => '',
				'id' => '2019-010',
				'designation' => 'Chairperson',
				'office_id' => 16
			],
			//CSM
			[
				'first_name' => 'Jan Mickelle',
				'last_name' => 'Maratas',
				'middle_initial' => 'V',
				'prenominal_title' => 'Prof.',
				'postnominal_title' => 'Ph.D.',
				'id' => '2019-011',
				'designation' => 'Dean',
				'office_id' => 17
			],
			[
				//Biological Sciences
				'first_name' => 'Olive',
				'last_name' => 'Amparado',
				'middle_initial' => 'A',
				'prenominal_title' => 'Prof.',
				'postnominal_title' => '',
				'id' => '2019-012',
				'designation' => 'Chairperson',
				'office_id' => 18
			],
			[
				//Chemistry
				'first_name' => 'Ellen',
				'last_name' => 'Inutan',
				'middle_initial' => 'D',
				'prenominal_title' => 'Prof.',
				'postnominal_title' => '',
				'id' => '2019-013',
				'designation' => 'Chairperson',
				'office_id' => 19
			],
			[
				//Mathematics and Statistics
				'first_name' => 'Randy',
				'last_name' => 'Caga-anan',
				'middle_initial' => 'L',
				'prenominal_title' => 'Assoc. Prof.',
				'postnominal_title' => '',
				'id' => '2019-014',
				'designation' => 'Chairperson',
				'office_id' => 20
			],
			// [
			// 	//Physics
			// 	//TODO: PLEASE DOUBLE CHECK THIS
			// 	'first_name' => 'Jan Mickelle',
			// 	'last_name' => 'Maratas',
			// 	'middle_initial' => 'V',
			// 	'prenominal_title' => 'Prof.',
			// 	'postnominal_title' => 'Ph.D.',
			// 	'id' => '2019-015',
			// 	'designation' => 'Chairperson',
			// 	'office_id' => 21
			// ],
			//CED
			[
				'first_name' => 'Monera',
				'last_name' => 'Salic-Hairulla',
				'middle_initial' => 'A',
				'prenominal_title' => 'Dr.',
				'postnominal_title' => '',
				'id' => '2019-016',
				'designation' => 'Dean',
				'office_id' => 22
			],
			[
				'first_name' => 'Angelina',
				'last_name' => 'Dinoro',
				'middle_initial' => 'P',
				'prenominal_title' => 'Dr.',
				'postnominal_title' => '',
				'id' => '2019-017',
				'designation' => '',
				'office_id' => 22
			],
			[
				//DTTE
				'first_name' => 'Roque',
				'last_name' => 'Requino',
				'middle_initial' => 'B',
				'prenominal_title' => 'Dr.',
				'postnominal_title' => '',
				'id' => '2019-018',
				'designation' => 'Chairperson',
				'office_id' => 26
			],
			[
				//DPRE
				'first_name' => 'Ciedelle',
				'last_name' => 'Grageda',
				'middle_initial' => 'N',
				'prenominal_title' => 'Dr.',
				'postnominal_title' => '',
				'id' => '2019-019',
				'designation' => 'Chairperson',
				'office_id' => 24
			],
			[
				//DPE
				'first_name' => 'Junah',
				'last_name' => 'Nagba',
				'middle_initial' => 'L',
				'prenominal_title' => 'Dr.',
				'postnominal_title' => '',
				'id' => '2019-020',
				'designation' => 'Chairperson',
				'office_id' => 25
			],
			[
				//DSME
				'first_name' => 'Douglas',
				'last_name' => 'Salazar',
				'middle_initial' => 'A',
				'prenominal_title' => 'Dr.',
				'postnominal_title' => '',
				'id' => '2019-021',
				'designation' => 'Chairperson',
				'office_id' => 23
			],
			//CEBA
			[
				'first_name' => 'Maria Rizalia',
				'last_name' => 'Teves',
				'middle_initial' => 'Y',
				'prenominal_title' => 'Prof.',
				'postnominal_title' => 'Ph.D.',
				'id' => '2019-022',
				'designation' => 'Dean',
				'office_id' => 27
			],
			[
				'first_name' => 'Michael Lloyd',
				'last_name' => 'Bation',
				'middle_initial' => 'A',
				'prenominal_title' => 'Asst. Prof.',
				'postnominal_title' => '',
				'id' => '2019-023',
				'designation' => '',
				'office_id' => 27
			],
			[
				//Accountancy
				'first_name' => 'Berlyn',
				'last_name' => 'Teano',
				'middle_initial' => 'M',
				'prenominal_title' => 'Asst. Prof.',
				'postnominal_title' => '',
				'id' => '2019-024',
				'designation' => 'Chairperson',
				'office_id' => 28
			],
			[
				//Economics
				'first_name' => 'Martha Joy',
				'last_name' => 'Abing',
				'middle_initial' => 'J',
				'prenominal_title' => 'Asst. Prof.',
				'postnominal_title' => '',
				'id' => '2019-025',
				'designation' => 'Chairperson',
				'office_id' => 29
			],
			[
				//Marketing
				'first_name' => 'Safa',
				'last_name' => 'Manala-O',
				'middle_initial' => 'D',
				'prenominal_title' => 'Assoc. Prof.',
				'postnominal_title' => '',
				'id' => '2019-026',
				'designation' => 'Chairperson',
				'office_id' => 30
			],
			[
				//Hospitality & Tourism Management
				'first_name' => 'Felipe',
				'last_name' => 'Lula',
				'middle_initial' => 'V',
				'prenominal_title' => 'Asst. Prof.',
				'postnominal_title' => '',
				'id' => '2019-027',
				'designation' => 'Chairperson',
				'office_id' => 31
			],
			//CHS
			[
				'first_name' => 'Abdullah Junior',
				'last_name' => 'Mangarun',
				'middle_initial' => 'S',
				'prenominal_title' => 'Assoc. Prof.',
				'postnominal_title' => 'DScN, MAN, RN',
				'id' => '2019-028',
				'designation' => 'Dean',
				'office_id' => 32
			],
			[
				'first_name' => 'Art Brian',
				'last_name' => 'Escabarte',
				'middle_initial' => 'S',
				'prenominal_title' => 'Asst. Prof.',
				'postnominal_title' => 'MAN, RN',
				'id' => '2019-029',
				'designation' => '',
				'office_id' => 32
			],
			[
				//Clinical Coordinator
				'first_name' => 'Rambe',
				'last_name' => 'Ramel Jr.',
				'middle_initial' => 'C',
				'prenominal_title' => 'Assoc. Prof.',
				'postnominal_title' => 'MAN, RN',
				'id' => '2019-030',
				'designation' => '',
				'office_id' => 32
			],
			// [
			// 	//Research Coordinator
			// 	'first_name' => 'Rambe',
			// 	'last_name' => 'Ramel Jr.',
			// 	'middle_initial' => 'C',
			// 	'prenominal_title' => 'Assoc. Prof.',
			// 	'postnominal_title' => 'MAN, RN',
			// 	'id' => '2019-031',
			// 	'designation' => '',
			// 	'office_id' => 32
			// ],
			[
				//Extension Coordinator
				'first_name' => 'Jiddo Andrei',
				'last_name' => 'Maranda',
				'middle_initial' => 'G',
				'prenominal_title' => 'Assoc. Prof.',
				'postnominal_title' => 'MN, RN',
				'id' => '2019-032',
				'designation' => '',
				'office_id' => 32
			],
			[
				//Curriculum Coordinator
				'first_name' => 'Reya',
				'last_name' => 'Sendo',
				'middle_initial' => 'T',
				'prenominal_title' => 'Asst. Prof.',
				'postnominal_title' => 'MAN, RN',
				'id' => '2019-033',
				'designation' => '',
				'office_id' => 32
			],
			[
				//Internationalization Coordinator
				'first_name' => 'Neil',
				'last_name' => 'Martin',
				'middle_initial' => 'T',
				'prenominal_title' => 'Asst. Prof.',
				'postnominal_title' => 'Ph.D., MAN, RN',
				'id' => '2019-034',
				'designation' => '',
				'office_id' => 32
			],
			//CASS
			[
				'first_name' => 'Marie Joy',
				'last_name' => 'Banawa',
				'middle_initial' => 'D',
				'prenominal_title' => '',
				'postnominal_title' => 'Ph.D.',
				'id' => '2019-035',
				'designation' => 'Dean',
				'office_id' => 33
			],
			// [
			// 	'first_name' => 'Sittie Noffaisah',
			// 	'last_name' => 'Pasandalan',
			// 	'middle_initial' => 'B',
			// 	'prenominal_title' => '',
			// 	'postnominal_title' => 'MA',
			// 	'id' => '2019-036',
			// 	'designation' => '',
			// 	'office_id' => 33
			// ],
			[
				//English
				'first_name' => 'Irish Mae',
				'last_name' => 'Dalona',
				'middle_initial' => 'F',
				'prenominal_title' => '',
				'postnominal_title' => 'Ph.D.',
				'id' => '2019-037',
				'designation' => 'Chairperson',
				'office_id' => 34
			],
			[
				//Filipino
				'first_name' => 'Danilyn',
				'last_name' => 'Abingosa',
				'middle_initial' => 'T',
				'prenominal_title' => '',
				'postnominal_title' => 'Ph.D.',
				'id' => '2019-038',
				'designation' => 'Chairperson',
				'office_id' => 35
			],
			[
				//History
				'first_name' => 'Jamelyn',
				'last_name' => 'Palattao',
				'middle_initial' => 'B',
				'prenominal_title' => '',
				'postnominal_title' => 'Ph.D.',
				'id' => '2019-039',
				'designation' => 'Chairperson',
				'office_id' => 36
			],
			[
				//Philosophy & Humanities
				'first_name' => 'Fernando',
				'last_name' => 'Garingo',
				'middle_initial' => 'V',
				'prenominal_title' => '',
				'postnominal_title' => 'MA',
				'id' => '2019-040',
				'designation' => 'Chairperson',
				'office_id' => 37
			],
			[
				//Political Science
				'first_name' => 'Hazel',
				'last_name' => 'Jovita-Olvez',
				'middle_initial' => 'D',
				'prenominal_title' => '',
				'postnominal_title' => 'Ph.D.',
				'id' => '2019-041',
				'designation' => 'Chairperson',
				'office_id' => 38
			],
			[
				//Psychology
				'first_name' => 'Jennifer Gay',
				'last_name' => 'Carpio',
				'middle_initial' => 'E',
				'prenominal_title' => '',
				'postnominal_title' => 'Ph.D.',
				'id' => '2019-042',
				'designation' => 'Chairperson',
				'office_id' => 39
			],
			[
				//Sociology
				'first_name' => 'Amabelle',
				'last_name' => 'Embornas',
				'middle_initial' => 'A',
				'prenominal_title' => '',
				'postnominal_title' => 'Ph.D.',
				'id' => '2019-043',
				'designation' => 'Chairperson',
				'office_id' => 40
			],
			//CCS
			[
				'first_name' => 'Rabby',
				'last_name' => 'Lavilles',
				'middle_initial' => 'Q',
				'prenominal_title' => '',
				'postnominal_title' => 'DIT',
				'id' => '2019-044',
				'designation' => 'Dean',
				'office_id' => 41
			],
			[
				'first_name' => 'Joel',
				'last_name' => 'Miano',
				'middle_initial' => 'I',
				'prenominal_title' => 'Asst. Prof.',
				'postnominal_title' => '',
				'id' => '2019-045',
				'designation' => '',
				'office_id' => 41
			],
			[
				//Computer Science
				'first_name' => 'Malikey',
				'last_name' => 'Maulana',
				'middle_initial' => 'M',
				'prenominal_title' => 'Asst. Prof.',
				'postnominal_title' => '',
				'id' => '2019-046',
				'designation' => 'Chairperson',
				'office_id' => 42
			],
			[
				//Information Technology
				'first_name' => 'Eddie Bouy',
				'last_name' => 'Palad',
				'middle_initial' => 'B',
				'prenominal_title' => 'Asst. Prof.',
				'postnominal_title' => '',
				'id' => '2019-047',
				'designation' => 'Chairperson',
				'office_id' => 43
			],
			[
				//Computer Applications
				'first_name' => 'Leah',
				'last_name' => 'Alindayo',
				'middle_initial' => 'A',
				'prenominal_title' => 'Asst. Prof.',
				'postnominal_title' => '',
				'id' => '2019-048',
				'designation' => 'Chairperson',
				'office_id' => 44
			],

			//Office of the Vice Chancellor for Academic Affairs Cluster:
			[
				'first_name' => 'Pamela',
				'last_name' => 'Resurreccion',
				'middle_initial' => 'F',
				'prenominal_title' => '',
				'postnominal_title' => 'Ph.D.',
				'id' => '2019-049',
				'designation' => 'Vice Chancellor',
				'office_id' => 46
			],
			//CAELL
			[
				//ODGP
				'first_name' => 'Jun Karren',
				'last_name' => 'Caparoso',
				'middle_initial' => 'V',
				'prenominal_title' => 'Asst. Prof.',
				'postnominal_title' => '',
				'id' => '2019-050',
				'designation' => '',
				'office_id' => 47
			],
			[
				//CASS
				'first_name' => 'Maria Pia',
				'last_name' => 'Sison',
				'middle_initial' => 'M',
				'prenominal_title' => '',
				'postnominal_title' => 'DiSDS',
				'id' => '2019-051',
				'designation' => '',
				'office_id' => 47
			],
			[
				//English Programs
				'first_name' => 'Merceditha',
				'last_name' => 'Alicando',
				'middle_initial' => 'C',
				'prenominal_title' => '',
				'postnominal_title' => 'Ph.D.',
				'id' => '2019-052',
				'designation' => '',
				'office_id' => 47
			],
			[
				//Filipino Programs
				'first_name' => 'Melba',
				'last_name' => 'Ijan',
				'middle_initial' => 'B',
				'prenominal_title' => '',
				'postnominal_title' => 'MA',
				'id' => '2019-053',
				'designation' => '',
				'office_id' => 47
			],
			// [
			// 	//History Programs
			// 	'first_name' => 'Phyllis Marie',
			// 	'last_name' => 'Teanco',
			// 	'middle_initial' => 'S',
			// 	'prenominal_title' => '',
			// 	'postnominal_title' => 'MA',
			// 	'id' => '2019-054',
			// 	'designation' => '',
			// 	'office_id' => null
			// ],
			// [
			// 	//Political Science Programs
			// 	'first_name' => 'Hazel',
			// 	'last_name' => 'Jovita-Olvez',
			// 	'middle_initial' => 'D',
			// 	'prenominal_title' => '',
			// 	'postnominal_title' => 'MPA',
			// 	'id' => '2019-055',
			// 	'designation' => '',
			// 	'office_id' => null
			// ],
			[
				//Sociology Programs
				'first_name' => 'Renebel',
				'last_name' => 'Labadisos',
				'middle_initial' => 'O',
				'prenominal_title' => '',
				'postnominal_title' => 'MA',
				'id' => '2019-056',
				'designation' => '',
				'office_id' => 47
			],
			[
				//CEBA
				'first_name' => 'Sheevun Di',
				'last_name' => 'Guliman',
				'middle_initial' => 'O',
				'prenominal_title' => '',
				'postnominal_title' => 'Ph.D.',
				'id' => '2019-057',
				'designation' => '',
				'office_id' => 47
			],
			[
				//CCS
				'first_name' => 'Erik Louwe',
				'last_name' => 'Sala',
				'middle_initial' => 'R',
				'prenominal_title' => 'Asst. Prof.',
				'postnominal_title' => 'MSIT',
				'id' => '2019-058',
				'designation' => '',
				'office_id' => 47
			],
			[
				//CED
				'first_name' => 'Rebecca',
				'last_name' => 'Alcuizar',
				'middle_initial' => 'M',
				'prenominal_title' => '',
				'postnominal_title' => 'Ph.D.',
				'id' => '2019-059',
				'designation' => '',
				'office_id' => 47
			],
			[
				//COET
				'first_name' => 'Roberto',
				'last_name' => 'Malaluan',
				'middle_initial' => 'M',
				'prenominal_title' => '',
				'postnominal_title' => 'Ph.D.',
				'id' => '2019-060',
				'designation' => '',
				'office_id' => 47
			],
			//CSM
			[
				//Biological Sciences Programs
				'first_name' => 'Mylah',
				'last_name' => 'Tabelin',
				'middle_initial' => 'V',
				'prenominal_title' => '',
				'postnominal_title' => 'Ph.D.',
				'id' => '2019-061',
				'designation' => '',
				'office_id' => 47
			],
			[
				//Environmental Sciences Programs
				'first_name' => 'Peter',
				'last_name' => 'Suson',
				'middle_initial' => 'D',
				'prenominal_title' => '',
				'postnominal_title' => 'Ph.D.',
				'id' => '2019-062',
				'designation' => '',
				'office_id' => 47
			],
			[
				//Marine Science Programs
				'first_name' => 'Maria Luisa',
				'last_name' => 'Orbita',
				'middle_initial' => 'S',
				'prenominal_title' => '',
				'postnominal_title' => 'Ph.D.',
				'id' => '2019-063',
				'designation' => '',
				'office_id' => 47
			],
			[
				//Chemistry Programs
				'first_name' => 'Marvin Jose',
				'last_name' => 'Fernandez',
				'middle_initial' => 'F',
				'prenominal_title' => '',
				'postnominal_title' => 'Ph.D.',
				'id' => '2019-064',
				'designation' => '',
				'office_id' => 47
			],
			[
				//Mathematics Programs
				'first_name' => 'Sheila',
				'last_name' => 'Menchavez',
				'middle_initial' => 'M',
				'prenominal_title' => '',
				'postnominal_title' => 'Ph.D.',
				'id' => '2019-065',
				'designation' => '',
				'office_id' => 47
			],
			[
				//Statistics Programs
				'first_name' => 'Bernadette',
				'last_name' => 'Tubo',
				'middle_initial' => 'F',
				'prenominal_title' => '',
				'postnominal_title' => 'Ph.D.',
				'id' => '2019-066',
				'designation' => '',
				'office_id' => 17
			],
			[
				//Physics Programs
				'first_name' => 'Catherine Therese',
				'last_name' => 'Quiñones',
				'middle_initial' => 'J',
				'prenominal_title' => '',
				'postnominal_title' => 'Ph.D.',
				'id' => '2019-067',
				'designation' => '',
				'office_id' => 47
			],
			// //CAP
			// [
			// 	'first_name' => 'Ivie',
			// 	'last_name' => 'Esteban',
			// 	'middle_initial' => 'C',
			// 	'prenominal_title' => '',
			// 	'postnominal_title' => 'Ph.D.',
			// 	'id' => '2019-068',
			// 	'designation' => '',
			// 	'office_id' => null
			// ],
			// //SDS Programs
			// [
			// 	'first_name' => 'Sulpecia',
			// 	'last_name' => 'Ponce',
			// 	'middle_initial' => 'L',
			// 	'prenominal_title' => '',
			// 	'postnominal_title' => 'Ph.D.',
			// 	'id' => '2019-069',
			// 	'designation' => '',
			// 	'office_id' => null
			// ],
			//Registrar or OUR
			[
				'first_name' => 'Sittie Noffaisah',
				'last_name' => 'Pasandalan',
				'middle_initial' => 'B',
				'prenominal_title' => 'Assoc. Prof.',
				'postnominal_title' => 'MA',
				'id' => '2019-070',
				'designation' => 'Registrar',
				'office_id' => 48
			],
			//CPI
			[
				'first_name' => 'Cenie',
				'last_name' => 'Malabanan',
				'middle_initial' => 'V',
				'prenominal_title' => '',
				'postnominal_title' => 'Ph.D.',
				'id' => '2019-071',
				'designation' => '',
				'office_id' => 49
			],
			//TODO: The Institute Librarian?
			[
				//OASG
				'first_name' => 'Jocelyn',
				'last_name' => 'Villela',
				'middle_initial' => 'P',
				'prenominal_title' => '',
				'postnominal_title' => '',
				'id' => '2019-072',
				'designation' => 'Head',
				'office_id' => 51
			],

			//Office of the Vice Chancellor for Research and Enterprise Cluster:
			[
				'first_name' => 'Ephrime',
				'last_name' => 'Metillo',
				'middle_initial' => '',
				'prenominal_title' => 'Dr.',
				'postnominal_title' => '',
				'id' => '2019-073',
				'designation' => 'Vice Chancellor',
				'office_id' => 54
			],
			//RMO
			[
				'first_name' => 'Arnold',
				'last_name' => 'Alguno',
				'middle_initial' => 'C',
				'prenominal_title' => '',
				'postnominal_title' => 'DSc',
				'id' => '2019-074',
				'designation' => '',
				'office_id' => 55
			],
			//KTTO - ITSO
			[
				'first_name' => 'Vannie Joy',
				'last_name' => 'Resabal',
				'middle_initial' => 'C',
				'prenominal_title' => 'Dr.',
				'postnominal_title' => '',
				'id' => '2019-075',
				'designation' => '',
				'office_id' => 57
			],
			//PRISM
			[
				'first_name' => 'Mylene',
				'last_name' => 'Uy',
				'middle_initial' => 'M',
				'prenominal_title' => 'Dr.',
				'postnominal_title' => '',
				'id' => '2019-076',
				'designation' => '',
				'office_id' => 58
			],
			//FAB LAB
			[
				'first_name' => 'Arnel',
				'last_name' => 'Zamayla',
				'middle_initial' => 'D',
				'prenominal_title' => '',
				'postnominal_title' => 'Ph.D.',
				'id' => '2019-077',
				'designation' => '',
				'office_id' => 59
			],
			//iDEYA: CIT
			[
				'first_name' => 'Constantino',
				'last_name' => 'Brasileño Jr.',
				'middle_initial' => 'A',
				'prenominal_title' => '',
				'postnominal_title' => '',
				'id' => '2019-078',
				'designation' => '',
				'office_id' => 60
			],
			//MCR
			[
				'first_name' => 'Peter',
				'last_name' => 'Suson',
				'middle_initial' => 'D',
				'prenominal_title' => 'Prof.',
				'postnominal_title' => 'DiSDS',
				'id' => '2019-79',
				'designation' => '',
				'office_id' => 61
			],

			//Office of the Vice Chancellor for Administration and Finance Cluster:
			[
				'first_name' => 'Yaslani',
				'last_name' => 'Bantuas',
				'middle_initial' => '',
				'prenominal_title' => 'Atty.',
				'postnominal_title' => '',
				'id' => '2019-080',
				'designation' => 'Vice Chancellor',
				'office_id' => 64
			],
			//Cashier
			[
				'first_name' => 'Sahrima',
				'last_name' => 'Cabugatan',
				'middle_initial' => 'M',
				'prenominal_title' => '',
				'postnominal_title' => '',
				'id' => '2019-081',
				'designation' => '',
				'office_id' => 65
			],
			//HRMD
			[
				'first_name' => 'Emelyn',
				'last_name' => 'Mordeno',
				'middle_initial' => 'R',
				'prenominal_title' => '',
				'postnominal_title' => '',
				'id' => '2019-082',
				'designation' => '',
				'office_id' => 67
			],

			//Office of the Vice Chancellor for Strategic Initiatives Cluster:
			[
				'first_name' => 'Mark Anthony',
				'last_name' => 'Torres',
				'middle_initial' => 'J',
				'prenominal_title' => '',
				'postnominal_title' => 'Ph.D.',
				'id' => '2019-083',
				'designation' => 'Vice Chancellor',
				'office_id' => 71
			],
			//OQAMS
			[
				'first_name' => 'Farrah Marie',
				'last_name' => 'Separa-Erazo',
				'middle_initial' => 'P',
				'prenominal_title' => '',
				'postnominal_title' => 'MBM',
				'id' => '2019-084',
				'designation' => '',
				'office_id' => 72
			],
			//OIPDS
			[
				'first_name' => 'Mohammed Asrin',
				'last_name' => 'Tabao',
				'middle_initial' => 'A',
				'prenominal_title' => '',
				'postnominal_title' => 'MBM',
				'id' => '2019-085',
				'designation' => '',
				'office_id' => 73
			],
			//OME
			[
				'first_name' => 'Melgie',
				'last_name' => 'Alas',
				'middle_initial' => 'A',
				'prenominal_title' => '',
				'postnominal_title' => '',
				'id' => '2019-086',
				'designation' => '',
				'office_id' => 74
			],

			//Office of the Vice Chancellor for Student Services Cluster:
			[
				'first_name' => 'Rohane',
				'last_name' => 'Derogongan',
				'middle_initial' => 'M',
				'prenominal_title' => '',
				'postnominal_title' => '',
				'id' => '2019-087',
				'designation' => 'Vice Chancellor',
				'office_id' => 76
			],
			//OSDS
			[
				'first_name' => 'Phyllis Marie',
				'last_name' => 'Teanco',
				'middle_initial' => '',
				'prenominal_title' => '',
				'postnominal_title' => '',
				'id' => '2019-088',
				'designation' => '',
				'office_id' => 77
			],
			//Clinic
			[
				'first_name' => 'Muhammad',
				'last_name' => 'Puting',
				'middle_initial' => 'M',
				'prenominal_title' => '',
				'postnominal_title' => 'M.D.',
				'id' => '2019-089',
				'designation' => '',
				'office_id' => 78
			],
			//OGC
			[
				'first_name' => 'Reynald',
				'last_name' => 'Kyamko',
				'middle_initial' => 'P',
				'prenominal_title' => '',
				'postnominal_title' => '',
				'id' => '2019-090',
				'designation' => '',
				'office_id' => 79
			],
			//OSD
			[
				'first_name' => 'Leo',
				'last_name' => 'Santillana',
				'middle_initial' => '',
				'prenominal_title' => 'Asst. Prof.',
				'postnominal_title' => '',
				'id' => '2019-091',
				'designation' => '',
				'office_id' => 80
			],

			//Office of the Vice Chancellor for Public Affairs Cluster:
			[
				'first_name' => 'Nancy',
				'last_name' => 'Echavez',
				'middle_initial' => 'Q.',
				'prenominal_title' => 'Prof.',
				'postnominal_title' => 'Ph.D.',
				'id' => '2019-092',
				'designation' => 'Vice Chancellor',
				'office_id' => 85
			],
			//WE CARE
			[
				'first_name' => 'Rosario',
				'last_name' => 'Reserva',
				'middle_initial' => 'L',
				'prenominal_title' => '',
				'postnominal_title' => 'Ph.D.',
				'id' => '2019-093',
				'designation' => '',
				'office_id' => 86
			],
			//AEFC
			[
				'first_name' => 'Juvanni',
				'last_name' => 'Caballero',
				'middle_initial' => 'A',
				'prenominal_title' => '',
				'postnominal_title' => 'Ph.D.',
				'id' => '2019-094',
				'designation' => '',
				'office_id' => 87
			],
			//IPDM
			// [
			// 	'first_name' => 'Mark Anthony',
			// 	'last_name' => 'Torres',
			// 	'middle_initial' => 'J',
			// 	'prenominal_title' => '',
			// 	'postnominal_title' => '',
			// 	'id' => '2019-095',
			// 	'designation' => '',
			// 	'office_id' => null
			// ],
			//GAD
			[
				'first_name' => 'Yasmira',
				'last_name' => 'Moner',
				'middle_initial' => 'P',
				'prenominal_title' => 'Asst. Prof.',
				'postnominal_title' => '',
				'id' => '2019-096',
				'designation' => '',
				'office_id' => 89
			],
			//TODO: IPIL Director???

			//Office of the Vice Chancellor for International Affairs:
			[
				'first_name' => 'Joey Genevieve',
				'last_name' => 'Martinez',
				'middle_initial' => 'T.',
				'prenominal_title' => '',
				'postnominal_title' => '',
				'id' => '2019-097',
				'designation' => '',
				'office_id' => 91
			],

			[
				'first_name' => 'Abe',
				'last_name' => 'Apao',
				'middle_initial' => 'T.',
				'prenominal_title' => '',
				'postnominal_title' => '',
				'id' => '2024-308',
				'designation' => '',
				'office_id' => 5
			],
		];

		foreach($employees as $employee) {
			Employee::create($employee);
		}
    }
}
