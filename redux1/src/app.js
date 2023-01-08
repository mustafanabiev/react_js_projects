import React from 'react';
import {Container,Button} from "@material-ui/core";
import {connect} from "react-redux";
import {dec, inc} from "./actions";




const  App = ({count,inc,dec}) => {
        return (
            <Container maxWidth={'lg'}>
                <h1>{count}</h1>
                <Button onClick={()=>{inc()}} variant="contained">+</Button>
                <Button onClick={()=>{dec()}} variant="contained">-</Button>
            </Container>
        );
}

const mapStateToProps = (state) => {
        return {count:state}

}
const mapDispatchToProps = (dispatch) => {
        return {
            inc:()=>{dispatch(inc())},
            dec:()=>{dispatch(dec())}
         }

}

export default connect(mapStateToProps,mapDispatchToProps)(App);