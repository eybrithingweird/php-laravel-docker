import { useState } from 'react';

export interface UseModalProps {
	isOpen: string;
	openModal: (opt: string) => void;
	closeModal: () => void;
}

export const useModal = (): UseModalProps => {
	const [isOpen, setIsOpen] = useState('');

	const openModal = (modalType: string) => {
		console.log('open');
		setIsOpen(modalType);
	};

	const closeModal = () => {
		console.log('close');
		setIsOpen('');
	};

	return {
		isOpen,
		openModal,
		closeModal,
	};
};
