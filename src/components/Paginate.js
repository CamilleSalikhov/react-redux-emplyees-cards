import React from 'react';
import {connect} from 'react-redux';
import {changeCurrentPage} from "../reduxRelated/actions";
import uuid from 'uuid'

class Paginate extends React.Component {


    render() {
        let buttonNumer = [];
        for(let i = 1; i<= Math.ceil(this.props.users.length / 5); i++) {
            buttonNumer.push(i)
        }
        return(
            <nav>
                <ul className='pagination'>
                {buttonNumer.map(number =>
                <li key={uuid.v4()} className='page-item'>
                    <button onClick={() => this.props.changePage(number)} className='page-link'>{number}</button>
                </li>
                )}
                </ul>
            </nav>
        )
    }
}

const mapStateToProps = (state) => (
    {
        users:state.main.users,
        currentPage:state.main.currentPage
    }
)

const mapDispatchToProps = {
    changePage :changeCurrentPage
}

export default connect(mapStateToProps, mapDispatchToProps)(Paginate)