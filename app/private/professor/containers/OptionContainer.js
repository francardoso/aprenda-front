import React from 'react';
import { connect } from 'react-redux';

import { changeOptionTitle } from '../actions/lesson';

import Option from '../presentational/Option';

const mapStateToProps = state =>({
    
});

const mapDispatchToProps = dispatch =>({
    _changeOptionTitle: data => dispatch(changeOptionTitle(data)),
});

const OptionContainer = ({
    questionIndex,
    index,
    _changeOptionTitle,
}) =>{
    function setTitle(title){
        _changeOptionTitle({
            questionIndex,
            index,
            title
        });
    }

    return(
        <Option
            setTitle={setTitle}
        />
    )
}
export default connect(mapStateToProps,mapDispatchToProps)(OptionContainer);