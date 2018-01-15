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
	applicationViewId: string,
	stage: Pixi.Container
	targetDimensions: {
		width: number,
		height: number
	}
	backgroundColor: number
	isBackgroundTransparent: boolean
	pixelResolution: number
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
`;

// Component class
class GameComponent extends React.Component<AllProps, State> {
	private renderer: PIXI.WebGLRenderer | PIXI.CanvasRenderer
	private gameView: HTMLCanvasElement

	constructor(props: AllProps) {
		super(props);
		this.state = {
			applicationViewId: "appView",
			stage: new Pixi.Container(),
			targetDimensions: {
				width: 1920,
				height: 1080
			},
			backgroundColor: 55555, // Bright green for now
			isBackgroundTransparent: false,
			pixelResolution: 1 // 2 for retina
		};
	}

	componentWillMount() {
		Pixi.utils.skipHello()
	}

	componentDidMount() {
		// Setup PIXI Canvas
		let gameView: HTMLCanvasElement = document.getElementById(this.state.applicationViewId) as HTMLCanvasElement;
		this.renderer = Pixi.autoDetectRenderer({
			view: gameView,
			width: this.state.targetDimensions.width,
			height: this.state.targetDimensions.height,
			backgroundColor: this.state.backgroundColor,
			transparent: this.state.isBackgroundTransparent,
			resolution: this.state.pixelResolution,
		});
		
		// Bind listeners for windows resizing
		window.addEventListener('resize', this.rendererResize);
		window.addEventListener('deviceOrientation', this.rendererResize);

		// DEBUG
		var background = new PIXI.Graphics();  
		background.beginFill(0x123456);  
		background.drawRect(0,0,1920,1080);  
		background.endFill();  
		this.state.stage.addChild(background);

		var square = new PIXI.Graphics();
		square.beginFill(0xFFFF00);
		square.lineStyle(5, 0xFF0000);
		square.drawRect(2.5, 2.5, 250, 250);
		this.state.stage.addChild(square);

		var basicText = new PIXI.Text('Basic text testing. The quick brown fox jumped over the lazy dog');
		basicText.x = 50;
		basicText.y = 100;
		this.state.stage.addChild(basicText);

		var square2 = new PIXI.Graphics();
		square2.beginFill(0xFFFF00);
		square2.lineStyle(5, 0xFFF00F);
		square2.position.x = (this.state.stage.width / 2) - (square2.width / 2);
		square2.position.y = (this.state.stage.height / 2) - (square2.height / 2);
		square2.drawRect(0, 0, 1, 1);
		this.state.stage.addChild(square2);

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
		// Get current state of window
		let curWidth: number = window.innerWidth;
		let curHeight: number = window.innerHeight;
		let curPixelRatio: number = window.devicePixelRatio;
		
		// Compute actual screen dimensions
		let screenWidth: number = curWidth * curPixelRatio;
		let screenHeight: number = curHeight * curPixelRatio;

		// Resize the renderer
		this.renderer.resize(screenWidth, screenHeight);

		// Compute scaling for "NoBorders" scale mode
		let renderRatio: number = Math.max(screenWidth / this.state.targetDimensions.width, screenHeight / this.state.targetDimensions.height);

		// Scale the root stage to fill the screen
		this.state.stage.scale.x = this.state.stage.scale.y = renderRatio;

		// Center the root stage on the screen
		this.state.stage.position.x = (screenWidth - this.state.stage.width) * 0.5;
		this.state.stage.position.y = (screenHeight - this.state.stage.height) * 0.5;

		// DEBUG
		console.log(curWidth, curHeight, curPixelRatio, screenWidth, screenHeight);
		console.log("Screen:", screenWidth, screenHeight, "Stage:", this.state.stage.width, this.state.stage.height, "Stage Pos:", this.state.stage.position.x, this.state.stage.position.y, "Stage Scale:", this.state.stage.scale.x, this.state.stage.scale.y);
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
			<GameView id={this.state.applicationViewId} />
		);
	}
}

// State-aware container
export const GameContainer = connect<MyStateProps, MyDispatchProps, MyOwnProps>(
	mapStateToProps,
	mapDispatchToProps
)(GameComponent);
