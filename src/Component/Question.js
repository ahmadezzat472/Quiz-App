import React, { useState } from 'react';
import './Question.css';

function Question() {
    const questions = [
        {question: 'بتفكر في الأكل طول الوقت', answer: 'Yes'},
        {question: 'باكل من غير ما حد يعرف', answer: 'often'},
        {question: 'باكل حتى وانا مش جعان', answer: 'often'},
        {question: 'باكل بسرعة جدا وانا مش عارف حتى انا اكلت قد ايه', answer: 'often'},
        {question: 'باخد بالي اوي من اكلي وانا في أي موقف فيه ناس كتير', answer: 'often'},
        {question: 'على طول بجرب أنظمة رياضية أو غذائية جديدة', answer: 'Yes'},
        {question: 'بحس بالذنب لما باكل', answer: 'often'},
        {question: 'أنا بقلق جدا على وزني', answer: 'Yes'},
        {question: 'استخدمت أدوية (مسهلات)، تمنع زيادة الوزن', answer: 'Yes'},
        {question: 'بلجأ للاستفراغ بعد الأكل عشان امنع زيادة وزني', answer: 'Yes'},
        {question: 'بحاول اتجنب ماكلش وجبة من وجبات اليوم او ماكلش لمدة يوم كامل', answer: 'often'},
        {question: 'بكذب لما حد يسألني عن كمية الأكل اللي باكلها', answer: 'often'},
        {question: 'بعض الناس عبروا عن استغرابهم وقلقهم من عادات الأكل اللي بتبعها', answer: 'Yes'},
        {question: 'عندي صعوبة في التركيز من كتر ما بفكر في الأكل طول الوقت', answer: 'often'},
        {question: 'أنا بخبي الأكل', answer: 'Yes'},
        {question: 'بتعصب لما حد يوقفني عشان حاجه وانا باكل', answer: 'often'},
        {question: 'انا بتخن أو بخس اكتر من مرة', answer: 'Yes'},
        {question: 'بنعزل عن صحابي، وبتجنب التجمعات', answer: 'Yes'},
        {question: 'بتجنب اي تلامس ( في حالة انك متزوج) أو ان اي حد يلمسني', answer: 'Yes'},
        {question: 'بلبس لبس واسع اوي عشان اخبي نقصان وزني، أو بلبس حاجات ضيقة عشان تبين نقصان وزني', answer: 'Yes'},
        {question: 'أنا مش بحب نفسي او شكلي', answer: 'Yes'},
        {question: 'أنا شايف اني تخين رغم ان الكل شايف ان انا رفيع', answer: 'Yes'},
        {question: 'بحس ان عمري ما هاكل بشكل طبيعي عادي', answer: 'Yes'},
        {question: 'محاولات تخلصي من الاكل أو استفراغه بعد اكله زادت', answer: 'Yes'},
        {question: 'مش عارف أوقف استفراغ الأكل أو التخلص منه بعد ما باكل رغم اني عايز أوقف ده', answer: 'Yes'},
    ];

    let [currentQuestion, setCurrentQuestion] = useState(0);
    let [score, setScore] = useState(0);
    let [percentage, setPercentage] = useState(0);

    const checkAnswer = (point) => {
        setScore(score + point);
        setCurrentQuestion(currentQuestion + 1);
        setPercentage( percentage + 4 );
    };

    if (currentQuestion < questions.length) {
        return (
            <div className='content'>
                <div className='line'>
                    <div className='line-per' style={ {width: `${percentage}%`} }></div>
                </div>
                <div className='num-q'>
                    {currentQuestion} / 25
                </div>
                <div className="question-container">
                    <h2 className="question">{questions[currentQuestion].question}</h2>
                    {questions[currentQuestion].answer === "Yes" ? (
                    <div className="group-btn">
                        <button onClick={() => checkAnswer(2)}>نعم</button>
                        <button onClick={() => checkAnswer(0)}>لا</button>
                    </div>
                    ) : (
                    <div className="group-btn">
                        <button onClick={() => checkAnswer(2)}>دايما</button>
                        <button onClick={() => checkAnswer(1)}>احيانا</button>
                        <button onClick={() => checkAnswer(0)}>ابدا</button>
                    </div>
                    )}
                </div>
            </div>
        );
    }
    else {
        let rate = score/50*100;
        return (
            <div className='content'>
                <div className='line'>
                    <div className='line-per' style={ {width: `${percentage}%`} }></div>
                </div>
                <div className='num-q'>
                    {currentQuestion} / 25
                </div>
                { rate >= 80 ? <h1 className='question answer color-red'>انت مصاب بمرض اضطرابات الطعام</h1> : (rate >= 50 ? <h1 className='question answer color-yellow'>قابلية انك تصاب بمرض اضطرابات الطعام </h1> : <h1 className='question answer color-green'> انت غير مصاب بمرض اضطرابات الطعام </h1>)}
            </div>
        );
    }
}

export default Question;