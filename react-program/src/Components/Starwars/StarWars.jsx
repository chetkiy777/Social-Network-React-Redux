import React, {useEffect} from 'react'
import {connect, useDispatch, useSelector} from "react-redux";
import {setPeople} from "../../redux/starwarsReducer";


const StarWars = (props) => {

    const getUsers = () => {
        props.setPeople()
    }




    return (
        <div>
            <button onClick={getUsers}>get</button>
            {props.peoples.length !== null &&
                props.peoples.map(p => <div key={p.id}>{p.name}</div>)
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.starwars.isFetching,
        peoples: state.starwars.peoples
    }
}
export default connect(mapStateToProps, {setPeople})(StarWars)