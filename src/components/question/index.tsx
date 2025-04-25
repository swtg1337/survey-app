import { FC } from 'react'
import {type Question} from '../../data/db.ts'

type Props = {
    question: Question;
    onChange: (questionId: string, selectedOptionId: string | string[]) => void;
}

const Question: FC<Props> = ({question, onChange}) => {
    const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedOption = e.target.value

        if (question.type === 'checkbox') {
            const selectedOptions = Array.from(
                document.querySelectorAll(`input[name="${question.id}"]:checked`)
            ).map((el) => (el as HTMLInputElement).value)

            onChange(question.id, selectedOptions)
        } else {
            onChange(question.id, selectedOption)
        }
    }

    return (
        <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200">
            <p className="text-xl font-semibold text-gray-800 mb-4">{question.text}</p>
            <div className="divide-y divide-gray-200">
                {question.options.map((option) => (
                    <label key={option.id} className="flex items-center py-3 space-x-3">
                        <input
                            type={question.type}
                            name={question.id}
                            value={option.id}
                            onChange={handleOptionChange}
                            className="h-5 w-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <span className="text-base text-gray-700">{option.text}</span>
                    </label>
                ))}
            </div>
        </div>
    )
}

export default Question