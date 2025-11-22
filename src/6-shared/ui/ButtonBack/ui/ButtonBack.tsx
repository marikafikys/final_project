import { useNavigate } from 'react-router-dom';
import { ReactComponent as BackSvg } from './../../../assets/icons/back.svg';
import { Box, Button } from '@mui/material';

export const ButtonBack = () => {
	const navigate = useNavigate();
	return (
		<Box sx={{ display: 'flex', justifyContent: 'start', mt: 2 }}>
			<Button onClick={() => navigate(-1)} size='large'>
				<BackSvg /> Назад
			</Button>
		</Box>
	);
};
