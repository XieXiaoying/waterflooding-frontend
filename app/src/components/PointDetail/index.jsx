import React, {Component} from 'react';
import { Popover } from 'react-bootstrap';
import { connect } from 'react-redux';
class PointDetail extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount() {
    }
    render() {
        // const show = this.props.show ? 'block' : 'none';
        return(
            <div style={{ height: 120 }}>
                    <Popover
                        id="popover-basic"
                        placement="right"
                        positionLeft={this.props.screenX+40}
                        positionTop={this.props.screenY-40}
                        title={this.props.id}
                    >
                        And here's some <strong>amazing</strong> content. It's very engaging. right?
                    </Popover>
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
export default connect(mapStateToProps)(PointDetail);