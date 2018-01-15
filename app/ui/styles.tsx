import styled from 'styled-components';

export const GUIBaseView = styled.div`
	display: block;
	position: absolute;
	z-index: 4;
	background-color: wheat;
`;

export const GUIOverlayView = GUIBaseView.extend`
	width: 80vw;
	height: 80vh;
	top: 10vh;
	left: 10vw;
	z-index: 5;
`;
