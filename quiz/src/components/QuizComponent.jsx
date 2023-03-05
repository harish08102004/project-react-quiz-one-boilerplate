import './QuizComponents.css'

let QuizComponent=()=>(
    <div id='content'>
    <div className="quiz">
        <div className='quizContainer'>
        <h2>Question</h2>
        <div className="counter">1 of 15</div>
        <div className="question">
            Which is the only mammal that can jump?
        </div>
        <div className="options">
            <div className="opt">Dog</div>
            <div className="opt">Elephant</div>
            <div className="opt">Goat</div>
            <div className="opt">Lion</div>
        </div>
        <div className="cta">
            <button className='prev'>Previous</button>
            <button className='next'>Next</button>
            <button className='quit'>Quit</button>
        </div>
        </div>
    </div>
    </div>
)

export default QuizComponent