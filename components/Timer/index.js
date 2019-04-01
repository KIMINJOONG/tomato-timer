import { connect } from "react-redux";
import Timer from "./presenter";

function mapStateProps(state){
    const { isPlaying, elapsedTime, timerDuration   } = state;
    return {
        isPlaying,
        elapsedTime,
        timerDuration
    }
}

export default connect(mapStateProps)(Timer);