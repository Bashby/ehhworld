// Lib Imports
import { isEqual } from "lodash";
import * as Pixi from "pixi.js";
import React, { Component } from "react";
import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import styled from "styled-components";

// Local Imports
import { ThunkDispatch } from "redux-thunk";
import { Game } from "../../game/game";
import { IApplicationState } from "../../state/application";
import { IInputState } from "../../state/reducers/input";

// Interfaces
interface IAllProps extends IMyStateProps, IMyDispatchProps, IMyOwnProps {}

interface IMyStateProps {
    inputState: IInputState;
}

interface IMyDispatchProps {
}

interface IMyOwnProps {
}

interface IState {
    applicationViewId: string;
    fpsViewId: string;
    stage: Pixi.Container;
    game: Game;
    inputDirty: boolean;
    targetDimensions: {
        width: number,
        height: number,
    };
    backgroundColor: number;
    isBackgroundTransparent: boolean;
    pixelResolution: number;
    useRoundPixels: boolean;
}

// State mappings
function mapStateToProps(state: IApplicationState): IMyStateProps {
    return {
        inputState: state.inputState,
    };
}

function mapDispatchToProps(dispatch: ThunkDispatch<IApplicationState, any, AnyAction>): IMyDispatchProps {
    return {
    };
}

// Styles
const GameView = styled.canvas`
`;
const FPSMeterView = styled.div`
    position: absolute;
    top: 1vh;
    left: 1vw;
    z-index: 10;
`;

// Component
class GameComponent extends Component<IAllProps, IState> {
    public readonly state: IState;
    private renderer: PIXI.WebGLRenderer | PIXI.CanvasRenderer;
    private gameView: HTMLCanvasElement;

    constructor(props: IAllProps) {
        super(props);
        const stage: Pixi.Container = new Pixi.Container();
        this.state = {
            applicationViewId: "appView",
            fpsViewId: "fpsMeter",
            stage,
            game: new Game(stage),
            inputDirty: false,
            targetDimensions: {
                width: 1920,
                height: 1080,
            },
            backgroundColor: 55555, // Bright green for now
            isBackgroundTransparent: false,
            pixelResolution: 1, // 2 for retina
            useRoundPixels: true,
        };
    }

    public componentWillMount() {
        Pixi.utils.skipHello(); // Don't hate me! :(
    }

    public componentDidMount() {
        // Setup PIXI Canvas
        const gameView: HTMLCanvasElement = document.getElementById(this.state.applicationViewId) as HTMLCanvasElement;
        const fpsMeterView: HTMLDivElement = document.getElementById(this.state.fpsViewId) as HTMLDivElement;
        this.renderer = Pixi.autoDetectRenderer({
            view: gameView,
            width: this.state.targetDimensions.width,
            height: this.state.targetDimensions.height,
            backgroundColor: this.state.backgroundColor,
            transparent: this.state.isBackgroundTransparent,
            resolution: this.state.pixelResolution,
            roundPixels: this.state.useRoundPixels,
        });

        // Create our game instance
        this.state.game.setRenderer(this.renderer);
        this.state.game.setFpsMeterView(fpsMeterView);

        // Bind listeners for windows resizing
        window.addEventListener("resize", this.rendererResize);
        window.addEventListener("deviceOrientation", this.rendererResize);

        // Initial resize
        this.rendererResize();

        // Start the game
        this.state.game.start();
     }

    public componentWillUnmount() {
        window.removeEventListener("resize", this.rendererResize);
        window.removeEventListener("deviceOrientation", this.rendererResize);
    }

    public componentWillUpdate(nextProps) {
        this.handleIncomingInput(nextProps.inputState);
    }

    public handleIncomingInput(newInput): void {
        if (!isEqual(newInput, this.props.inputState)) {
            // Update game state
            this.state.game.input.setInputState(newInput);
        }
    }

    public rendererResize = () => {
        // Get current state of window
        const curWidth: number = window.innerWidth;
        const curHeight: number = window.innerHeight;
        const curPixelRatio: number = window.devicePixelRatio;

        // Compute actual screen dimensions
        const screenWidth: number = curWidth * curPixelRatio;
        const screenHeight: number = curHeight * curPixelRatio;

        // Resize the renderer
        this.renderer.resize(screenWidth, screenHeight);

        // Compute scaling for "NoBorders" scale mode
        const renderRatio: number = Math.max(
            screenWidth / this.state.targetDimensions.width,
            screenHeight / this.state.targetDimensions.height,
        );

        // Scale the root stage to fill the screen
        this.state.stage.scale.x = this.state.stage.scale.y = renderRatio;

        // Center the root stage on the screen
        this.state.stage.position.x = (screenWidth - this.state.stage.width) * 0.5;
        this.state.stage.position.y = (screenHeight - this.state.stage.height) * 0.5;

        // DEBUG
        // console.log(curWidth, curHeight, curPixelRatio, screenWidth, screenHeight);
        // console.log(
        //     "Screen:", screenWidth, screenHeight,
        //     "Stage:", this.state.stage.width, this.state.stage.height,
        //     "Stage Pos:", this.state.stage.position.x, this.state.stage.position.y,
        //     "Stage Scale:", this.state.stage.scale.x, this.state.stage.scale.y
        // );
    }

    public render() {
        return (
            <div>
                <FPSMeterView id={this.state.fpsViewId} />
                <GameView id={this.state.applicationViewId} />
            </div>
        );
    }
}

// Container
export const GameContainer = connect<IMyStateProps, IMyDispatchProps, IMyOwnProps>(
    mapStateToProps,
    mapDispatchToProps,
)(GameComponent);
