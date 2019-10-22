import React from 'react';
import { connect } from 'react-redux';

import { addOption } from '../actions/lesson';

import OptionContainer from './OptionContainer';

import Button from '../../commons/presentational/Button';

const mapStateToProps = state =>({
    questions: state.lessonReducer.questions
});

const mapDispatchToProps = dispatch =>({
    _addOption: questionIndex => dispatch(addOption(questionIndex))
});

const OptionsContainer = ({
    questionIndex,
    _addOption,
    questions
}) =>{
    const options = questions[questionIndex].options;
    return (
        <>
            {
                options.map((option, index)=>{
                    return <OptionContainer
                            key={index}
                            questionIndex={questionIndex}
                            index={index}
                        />
                })
            }
            <Button 
                onClick={()=>_addOption(questionIndex)}
                customClass="addOptionBtn fas fa-plus-circle"
            />
        </>
    )
};
export default connect(mapStateToProps,mapDispatchToProps)(OptionsContainer);