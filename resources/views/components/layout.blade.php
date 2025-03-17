{{-- <x-layout> --}}
<!DOCTYPE html>
	<html>
		<head>
			<meta charset="UTF-8">
			{{ $title }}
			<link rel="icon" type="image/png" href="https://myiit.msuiit.edu.ph/my/v2/assets/img/favicon.ico">
			<meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
			<link rel="stylesheet" href="https://myiit.msuiit.edu.ph/my/v2/assets/bootstrap/css/bootstrap.min.css">
			{{-- <link rel="stylesheet" href="https://myiit.msuiit.edu.ph/my/v2/assets/plugins/font-awesome-4.7.0/css/font-awesome.min.css"> --}}
			<link rel="stylesheet" href="https://myiit.msuiit.edu.ph/my/v2/assets/css/AdminLTE.min.css?04262016b" type="text/css" media="screen">
			<link rel="stylesheet" href="https://myiit.msuiit.edu.ph/my/v2/assets/css/skins/skin-iitred.min.css" type="text/css" media="screen">
			<link rel="stylesheet" href="https://myiit.msuiit.edu.ph/my/v2/assets/css/animate.min.css" media="screen">
			<link rel="stylesheet" href="https://myiit.msuiit.edu.ph/my/v2/assets/css/print.min.css?05152019" type="text/css" media="print">
			<link rel="apple-touch-icon" href="https://myiit.msuiit.edu.ph/my/v2/assets/img/apple-touch-icon.png">
			<link rel="apple-touch-icon-precomposed" href="https://myiit.msuiit.edu.ph/my/v2/assets/img/apple-touch-icon-precomposed.png">
			<style type="text/css">
				.subtreeview-menu>li>a {
					color: #e8e8e8 !important;
				}

				.subtreeview-menu>li.active>a {
					color: #f7d853 !important;
				}
			</style>
			
			@viteReactRefresh
			@vite(['resources/css/app.css', 'resources/js/app.js'])
			{{-- <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"> --}}
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css">
			<link rel="preconnect" href="https://fonts.googleapis.com">
			<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
			<link href="https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap" rel="stylesheet">

			{{-- <script defer src="{{ asset('resources/fontawesome/js/fontawesome.js') }}"></script>
			<script defer src="{{ asset('resources/fontawesome/js/brands.js') }}"></script>
			<script defer src="{{ asset('resources/fontawesome/js/solid.js') }}"></script> --}}

			<!-- <script src="https://myiit.msuiit.edu.ph/my/v2/assets/js/app.min.js?01242020"></script> -->
			<!-- <script src="https://myiit.msuiit.edu.ph/my/v2/assets/js/canvas-to-blob.min.js"></script> -->
			<!-- <script src="https://myiit.msuiit.edu.ph/my/v2/assets/js/common.min.js"></script> -->
			<!-- <script src="https://myiit.msuiit.edu.ph/my/v2/assets/js/resize.js"></script> -->
		</head>

		<body class="font-normal font-iit bg-iit-bg">
			<div class="wrapper min-h-lvh">
				{{ $content }} 
				{{-- This is where dashboard.blade.php comes in --}}
				
				<footer class="main-footer hidden-print">			
					<p class="pull-right visible-lg mb-0">
						<a href="/my/v2/#feedbackModal" title="Feedback" data-toggle="modal" data-target="#feedbackModal" class="hover:text-iit-red">
							<i class="fa fa-paper-plane"></i> 
							Give Feedback
						</a>
					</p>
		
					<p>
						Copyright © 2015 
						<a href="http://www.msuiit.edu.ph" class="hover:text-iit-red">MSU-Iligan Institute of Technology</a>.
						<small>
							<?php
								$total_time = round(microtime(true) - $_SERVER["REQUEST_TIME_FLOAT"], 3) * 1000;
								echo 'PHP exec. time: ' . $total_time . ' ms';
							?>
						</small>
					</p>
				</footer>
			</div>
		</body>
	</html>
{{-- </x-layout> --}}