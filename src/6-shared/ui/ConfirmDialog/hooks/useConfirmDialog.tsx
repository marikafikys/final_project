import { JSX, useState } from 'react';
import { ConfirmDialogOptions, ConfirmDialogProps } from '../model/types';
import { ConfirmDialog } from '..';

export interface UseConfirmDialogResult {
	confirm: (options?: ConfirmDialogOptions) => Promise<boolean>;
	element: JSX.Element | null;
}

export const useConfirmDialog = (): UseConfirmDialogResult => {
	const [dialogProps, setDialogProps] = useState<
		(ConfirmDialogProps & { resolve: (value: boolean) => void }) | null
	>(null);

	const confirm = (options: ConfirmDialogOptions = {}): Promise<boolean> => {
		return new Promise((resolve) => {
			setDialogProps({
				title: options.title,
				message: options.message,
				onConfirm: () => resolve(true),
				onCancel: () => resolve(false),
				resolve,
			});
		});
	};

	const handleConfirm = () => {
		dialogProps?.onConfirm();
		setDialogProps(null);
	};

	const handleCancel = () => {
		dialogProps?.onCancel();
		setDialogProps(null);
	};

	const element = dialogProps ? (
		<ConfirmDialog
			title={dialogProps.title}
			message={dialogProps.message}
			onConfirm={handleConfirm}
			onCancel={handleCancel}
		/>
	) : null;

	return { confirm, element };
};
