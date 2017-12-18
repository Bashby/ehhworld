// Lib Imports
import * as React from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { connect } from 'react-redux';
import { ActionCreator } from 'typescript-fsa';

import { Link } from 'react-router-dom';
import { push } from 'react-router-redux'
import { Route, Switch, Redirect } from "react-router";

import * as Pixi from "pixi.js";

import styled from 'styled-components';

// Local Imports
import { IApplicationState } from '../../state/application';


// Interfaces
interface AllProps extends MyStateProps, MyDispatchProps, MyOwnProps {}

interface MyStateProps {

}

interface MyDispatchProps {

}

interface MyOwnProps {

}

interface State {
	// gameDiv: HTMLDivElement
	// renderer?: PIXI.WebGLRenderer | PIXI.CanvasRenderer
	stage: Pixi.Container
	targetDimensions: {
		width: number,
		height: number
	}
}

// State mappings
function mapStateToProps(state: IApplicationState): MyStateProps {
	return {
	}
}

function mapDispatchToProps(dispatch: Dispatch<IApplicationState>): MyDispatchProps {
	return {
	}
}

// Styled-components
const GameView = styled.canvas`
	/* width: 100vw;
	height: 100vh; */
	display: block;
`;

// Component class
class GameComponent extends React.Component<AllProps, State> {
	private renderer: PIXI.WebGLRenderer | PIXI.CanvasRenderer
	private gameView: HTMLCanvasElement

	constructor(props: AllProps) {
		super(props);
		this.state = {
			stage: new Pixi.Container(),
			targetDimensions: {
				width: 1280,
				height: 720
			},
		};
	}

	componentWillMount() {
		Pixi.utils.skipHello()
	}

	componentDidMount() {
		// Setup PIXI Canvas
		this.gameView = document.getElementById("gameView") as HTMLCanvasElement,
		this.renderer = Pixi.autoDetectRenderer({
			width: this.state.targetDimensions.width,
			height: this.state.targetDimensions.height,
			view: this.gameView
		}),
		
		// Apply initial sizing
		this.state.stage.width = this.state.targetDimensions.width;
		this.state.stage.height = this.state.targetDimensions.height;

		// Bind listeners for windows resizing
		window.addEventListener('resize', this.rendererResize);
		window.addEventListener('deviceOrientation', this.rendererResize);

		// Initial resize
		this.rendererResize();
		
		// Start the game
		this.animate();
	 }

	componentWillUnmount() {
		window.removeEventListener('resize', this.rendererResize);
		window.removeEventListener('deviceOrientation', this.rendererResize);
	}
	
	

	rendererResize = () => {
		let width: number = window.innerWidth;
		let height: number = window.innerHeight;
		
		let newSize = {
			width: width * window.devicePixelRatio,
			height: height * window.devicePixelRatio
		}
		// newSize.style.width = width + 'px';
		// newSize.style.height = height + 'px';

		this.renderer.resize(newSize.width, newSize.height)

		// if (height / targetHeight < width / targetWidth) {
		// 	scene.scale.x = scene.scale.y = height / targetHeight;
		// } else {
		// 	scene.scale.x = scene.scale.y = width / targetWidth;
		// }
	}

	/**
	* Animation loop for updating Pixi Canvas
	**/
	animate = () => {
		// render the stage container
		this.renderer.render(this.state.stage);
		let frame = requestAnimationFrame(this.animate);
	}
	
	render() {
		return (
			<GameView id="gameView"/>
		);
	}
}

// State-aware container
export const GameContainer = connect<MyStateProps, MyDispatchProps, MyOwnProps>(
	mapStateToProps,
	mapDispatchToProps
)(GameComponent);
