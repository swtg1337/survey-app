import { tests } from '../../data/db.ts'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import Question from '../../components/question'

const SurveyPage = () => {
    const [questionIndex, setQuestionIndex] = useState<number>(0)
    const [answers, setAnswers] = useState<Record<string, string | string[]>>({})
    const [error, setError] = useState<boolean>(false)

    const { id } = useParams()
    const navigate = useNavigate()

    const test = tests.find(el => el.id === id)

    if (!test) return <div>Тест не найден</div>

    const currentQuestion = test.questions[questionIndex]

    const handleClick = () => {
        const currentAnswer = answers[currentQuestion.id]

        if (!currentAnswer || currentAnswer.length === 0) {
            setError(true)
            return
        }

        setError(false)
        setQuestionIndex(prev => prev + 1)
    }

    if (questionIndex >= test.questions.length) {
        console.log(answers)
        return (
            <div className="flex flex-col items-center justify-center h-[60vh] text-center">
                <h2 className="text-3xl font-bold mb-4">Опрос завершён</h2>
                <p className="mb-6 text-gray-600">Спасибо за участие!</p>
                <button
                    onClick={() => navigate('/')}
                    className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
                >
                    Вернуться на главную
                </button>
            </div>
        )
    }

    const handleAnswerChange = (questionId: string, selected: string[] | string) => {
        setAnswers((prev) => ({
            ...prev,
            [questionId]: selected
        }))
    }

    const progress = ((questionIndex) / test.questions.length) * 100

    return (
        <div className="max-w-xl mx-auto p-6">
            <Question question={currentQuestion} onChange={handleAnswerChange} />
            {error && <p className="text-red-500 text-sm mt-2 text-center">Ответ не выбран</p>}
            <div className="mt-6 w-full bg-gray-200 rounded-full h-2.5 mb-6">
                <div
                    className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
            <button
                onClick={handleClick}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 mx-auto block"
            >
                Далее
            </button>
        </div>
    )
}

export default SurveyPage