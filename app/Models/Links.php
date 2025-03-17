<?php

namespace App\Models;
use Illuminate\Support\Arr;

class Links {
	public static function allLinks(): array {
		return [
			'/',
			// 'incoming',
			// 'outgoing',
			'mysulat',
			'create',
			// 'formaddfields',
			// 'channelstatus',
			// 'form-status',
			'admin',
			'pdf-preview',
			// 'received',
			'letters'
		];
	}

	public static function find(string $link): string {
		// $linkCheck = Arr::first(static::allLinks(), fn($value) => $value === $link);
		// if you want only after the first /,
		// use the following code:
		$linkCheck = Arr::first(static::allLinks(), fn($value) => $value === $link) || Arr::first(static::allLinks(), fn($value) => $value === explode('/', $link)[0]);
		if (!$linkCheck) {
			abort(404);
		}
		
		return $linkCheck;
	}
}