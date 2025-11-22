import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import s from './ConfirmDialog.module.css';
import { ConfirmDialogProps } from './types';

export const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
	title = 'Вы уверены?',
	message = 'Это действие нельзя отменить.',
	onConfirm,
	onCancel,
}) => {
	const cancelButtonRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') onCancel();
		};

		window.addEventListener('keydown', handleKeyDown);

		if (cancelButtonRef.current) {
			cancelButtonRef.current.focus();
		}

		return () => window.removeEventListener('keydown', handleKeyDown);
	}, [onCancel]);

	return createPortal(
		<div className={s.overlay} onClick={onCancel}>
			<div className={s.modal} onClick={(e) => e.stopPropagation()}>
				<h3 className={s.title}>{title}</h3>
				<p className={s.message}>{message}</p>
				<div className={s.actions}>
					<button
						className={s.btn}
						onClick={onCancel}
						ref={cancelButtonRef}
						autoFocus>
						Отмена
					</button>
					<button className={`${s.btn} ${s['btnprimary']}`} onClick={onConfirm}>
						Подтвердить
					</button>
				</div>
			</div>
		</div>,
		document.getElementById('modal-root')!
	);
};
