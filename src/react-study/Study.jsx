import UseRef01 from "./04-useRef/UseRef01"
import UseRef02 from "./04-useRef/UseRef02"
import Emotion01 from "./Emotion/Emotion01"



export default function Study() {
    const stateStudy={
        1:<UseRef01/>,
        2:<UseRef02/>,
        3:<Emotion01/>

    };

    return stateStudy[3];
  
}
