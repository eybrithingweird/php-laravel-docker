<x-layout>
	<x-slot:title>
		<title>iSulat | {{ $title }}</title>
	</x-slot:title>

	<x-slot:content>
		<div id="navbar">
			{{-- React Component named Navbar.jsx here --}}
		</div>

		<div id="container" token={{ $token }} errors={{ $errors }}>
			{{-- React Component named Container.jsx here --}}
		</div>
	</x-slot:content>
</x-layout>