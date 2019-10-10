import React from 'react';

import Container from './styles';

const FeedbackQuestion = ({
    isCorrect,
    closeModal,
}) =>{
    return (
        <Container>
            <i 
                className="fas fa-times closeModal"
                onClick={closeModal}></i>
            <div>
                {
                    isCorrect ?
                    <>
                        <i className="far fa-grin-beam correct"></i>
                        <h1>Parabéns você acertou!</h1>
                    </>
                    :
                    <>
                        <i className="far fa-frown-open incorrect"></i>
                        <h1>Você errou a resposta...</h1>
                    </>
                }
            </div>
        </Container>   
    )
};

export default FeedbackQuestion;