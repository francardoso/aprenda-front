import React from 'react';
import { connect } from 'react-redux';

import { changeOptionTitle, setOptionSelected } from '../actions/lesson';

import Option from '../presentational/Option';

const mapStateToProps = state =>({
    questions: state.lessonReducer.questions,
});

const mapDispatchToProps = dispatch =>({
    _changeOptionTitle: data => dispatch(changeOptionTitle(data)),
    _setOptionSelected: data => dispatch(setOptionSelected(data)),
});

const OptionContainer = ({
    questionIndex,
    index,
    _changeOptionTitle,
    _setOptionSelected,
    questions,
}) =>{
    const question = questions[questionIndex];
    const option = question.options[index];
    function setTitle(title){
        _changeOptionTitle({
            questionIndex,
            index,
            title
        });
    }
    function onOptionSelected(){
        if(question.type === 'single'){
            question.options.map((option, optionIndex) => {
                if(index === optionIndex){
                    _setOptionSelected({
                        questionIndex,
                        index: optionIndex,
                        selected: true,
                    });
                }else{
                    _setOptionSelected({
                        questionIndex,
                        index: optionIndex,
                        selected: false,
                    });
                }
            })
        }else{
            _setOptionSelected({
                questionIndex,
                index,
                selected: !option.selected,
            })
        }
    }

    return(
        <Option
            setTitle={setTitle}
            questionType={question.type}
            setOptionSelected={onOptionSelected}
            option={option}
        />
    )
}
export default connect(mapStateToProps,mapDispatchToProps)(OptionContainer);