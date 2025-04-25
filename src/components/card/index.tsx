import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

type Props = {
    id: string;
    title: string;
    count: number;
}

const Card: FC<Props> = ({id, title, count}) => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/survey/${id}`)
    }

    const getQuestionLabel = (count: number) => {
        const lastDigit = count % 10
        const lastTwoDigits = count % 100

        if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
            return 'вопросов'
        }

        if (lastDigit === 1) {
            return 'вопрос'
        }

        if (lastDigit >= 2 && lastDigit <= 4) {
            return 'вопроса'
        }

        return 'вопросов'
    }

    return (
        <div
            onClick={handleClick}
            className="cursor-pointer border border-gray-300 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200 bg-white hover:bg-gray-50 transform hover:scale-105 transition-transform duration-300"
        >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
            <h4 className="text-sm text-gray-500">{count} {getQuestionLabel(count)}</h4>
        </div>
    )
}

export default Card