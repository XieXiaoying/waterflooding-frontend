import React, {Component} from 'react';
import {data} from './data.js';
import PointDetail from './../PointDetail';
import { connect } from 'react-redux';
import {setCurPoint, asyncLoadPicsOfPoi} from './../../actions/pipeActions';
class ImageList extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div>
                {
                    Object.keys(data.imageSrc).map((item)=>{
                        return(<img key = {item} className="hidden" ref={item} src={data.imageSrc[item].pic}/>);
                    })
                }
            </div> 
        );
    }
}
function calDistance(aimX, aimY, picX, picY){
    return Math.sqrt(Math.sqrt((aimX-picX)*(aimX-picX) + (aimY-picY)*(aimY-picY)));
}
class Pipes extends Component {
    constructor(props){
        super(props);
        this.state = {
            routeHeight: window.innerHeight * 0.9,
            routeWidth: window.innerWidth * 0.79,
            show: false,
            xBase: 48920,
            yBase: 34126,
            currentPoint: '',
            screenX: 0,
            screenY:0
        };
    }
    showDetail(name, x, y){
        this.props.dispatch(setCurPoint(name, x, y));
        this.props.dispatch(asyncLoadPicsOfPoi());
    }
    imgClick(evt){
        this.setState({
            screenX: evt.screenX,
            screenY: evt.screenY
        });
        let minVal = {
            value: 10000000,
            tag: '',
            x: 0,
            y: 0
        }
        Object.keys(data.imageSrc).map((item)=>{
            const x = evt.screenX - 0.21*window.innerWidth-20;
            const y = evt.screenY-20-window.innerHeight*0.1;
            const itemX = data.imageSrc[item].x / this.state.xBase * this.state.routeWidth-20;
            const itemY = data.imageSrc[item].y / this.state.yBase * this.state.routeHeight-20;
            const distance = calDistance(itemX, itemY, x, y);
            if(distance< minVal.value){
                minVal.value = distance;
                minVal.tag = item;
                minVal.x = itemX;
                minVal.y = itemY;
            }
        });
        this.showDetail(minVal.tag, minVal.x, minVal.y);
        if(minVal.value > 8) {
            this.setState({
                show: false
                
            });
        } else {
            this.setState({
                currentPoint: minVal.tag,
                show: true
            });
        }
    }
    componentDidMount() {
        this.drawPipeRoute();
    }
    componentDidUpdate() {
        this.drawPipeRoute();
    }
    drawPipeRoute() {
        const canvas = this.refs.canvas
        const ctx = canvas.getContext("2d")
        Object.keys(this.refs.img.refs).map((item)=>{
            this.refs.img.refs[item].onload = () => {
                ctx.drawImage(this.refs.img.refs[item], data.imageSrc[item].x / this.state.xBase * this.state.routeWidth-20, data.imageSrc[item].y / this.state.yBase * this.state.routeHeight-20);
                ctx.font = "12px Courier"
                ctx.fillText(item, data.imageSrc[item].x / this.state.xBase * this.state.routeWidth+30, data.imageSrc[item].y / this.state.yBase * this.state.routeHeight);
            }
        });
        for(let i=0; i < data.pipes.length; i++){
            this.drawLines(data.pipes[i], this.state.routeHeight, this.state.routeWidth);
        }
    }
    drawLines(pipes, routeHeight, routeWidth){
        const ctx = this.refs.canvas.getContext('2d');
        ctx.beginPath();
        ctx.strokeStyle = 'black';
        for(var i=0;i<pipes.length;i++){
            ctx.lineTo(pipes[i][0] / this.state.xBase * routeWidth, pipes[i][1] / this.state.yBase * routeHeight);
        }
        ctx.stroke();
    }
    render() {
        return(
            <div>
                <canvas ref="canvas" onClick={this.imgClick.bind(this)} height={this.state.routeHeight} width={this.state.routeWidth}></canvas>
                <ImageList ref="img"/>
                {this.state.show ? <PointDetail screenX = {this.state.screenX} screenY = {this.state.screenY} id={this.state.currentPoint}/> : null}
            </div>
            
        );
    }
}
function mapStateToProps(state) {
    return {
        status: state.status,
        pressurationPoint: state.pressurationPoint
    };
}
export default connect(mapStateToProps)(Pipes);
