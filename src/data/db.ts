export type Question = {
    id: string
    text: string
    type: 'radio' | 'checkbox'
    options: {
        id: string
        text: string
    }[]
}

type Test = {
    id: string
    title: string
    questions: Question[]
}

export const tests: Test[] = [
    {
        id: 'test1',
        title: 'Предпочтения',
        questions: [
            {
                id: '1',
                text: 'Какой ваш любимый цвет?',
                type: 'radio',
                options: [
                    { id: 'red', text: 'Красный' },
                    { id: 'blue', text: 'Синий' },
                    { id: 'green', text: 'Зеленый' },
                ],
            },
            {
                id: '2',
                text: 'Какие фрукты вы любите?',
                type: 'checkbox',
                options: [
                    { id: 'apple', text: 'Яблоко' },
                    { id: 'banana', text: 'Банан' },
                    { id: 'orange', text: 'Апельсин' },
                ],
            },
            {
                id: '3',
                text: 'Какой ваш любимый супергерой?',
                type: 'radio',
                options: [
                    { id: 'superman', text: 'Супермен' },
                    { id: 'batman', text: 'Бэтмен' },
                    { id: 'iron', text: 'Железный Человек' },
                    { id: 'spider', text: 'Человек-паук' },
                ],
            },
            {
                id: '4',
                text: 'Какое время года вам нравится?',
                type: 'checkbox',
                options: [
                    { id: 'summer', text: 'Лето' },
                    { id: 'spring', text: 'Весна' },
                    { id: 'autumn', text: 'Осень' },
                    { id: 'winter', text: 'Зима' },
                ],
            },
            {
                id: '5',
                text: 'Чем вы чаще пользуетесь?',
                type: 'radio',
                options: [
                    { id: 'computer', text: 'Компьютер' },
                    { id: 'smartphone', text: 'Смартфон' },
                    { id: 'tablet', text: 'Планшет' },
                ],
            },
        ]
    },
    {
        id: 'test2',
        title: 'NBA',
        questions: [
            {
                id: '1',
                text: 'В какой конференции играет команда которую вы поддерживаете?',
                type: 'radio',
                options: [
                    { id: 'west', text: 'Восточная конференция' },
                    { id: 'east', text: 'Западная конференция' },
                    { id: 'both', text: 'Поддерживаю и в одной и в другой' },
                ],
            },
            {
                id: '2',
                text: 'Будете ли следить за матчами плей-офф в этом году?',
                type: 'radio',
                options: [
                    { id: 'yes', text: 'Да' },
                    { id: 'no', text: 'Нет' },
                    { id: 'maybe', text: 'Может быть' },
                ],
            },
            {
                id: '3',
                text: 'За кого бы вы проголосовали в гонке MVP?',
                type: 'radio',
                options: [
                    { id: 'nikola', text: 'Никола Йокич' },
                    { id: 'luka', text: 'Лука Дончич' },
                    { id: 'shai', text: 'Шей Гилджес-Александер' },
                ],
            },
            {
                id: '4',
                text: 'Какой ивент вам понравился в это сезоне?',
                type: 'checkbox',
                options: [
                    { id: 'inseason', text: 'Внутрисезонный турнир' },
                    { id: 'allstar', text: 'Матч Всех Звезд' },
                    { id: 'rising', text: 'Матч Восходящих Звезд' },
                    { id: 'dunk-contest', text: 'Данк контест' },
                ],
            },
            {
                id: '5',
                text: 'Что вам нравится в баскетболе?',
                type: 'checkbox',
                options: [
                    { id: 'team', text: 'Командная игра' },
                    { id: 'individual', text: 'Индивидуальное мастерство' },
                    { id: 'shooting', text: 'Дальние броски' },
                    { id: 'dunk', text: 'Данки' },
                    { id: 'atmosphere', text: 'Атмосфера на трибунах' },
                ],
            },
        ]
    }
]
