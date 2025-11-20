import { useNavigate } from 'react-router-dom';
import { ReactComponent as BackSvg } from './../../../assets/icons/back.svg';
import { Button } from '@mui/material';

export const ButtonBack = () => {
	const navigate = useNavigate();
	return (
		<Button onClick={() => navigate(-1)}>
			<BackSvg /> Назад
		</Button>
	);
};
