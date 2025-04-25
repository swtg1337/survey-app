import { tests } from '../../data/db.ts'
import Card from '../../components/card'

const MainPage = () => (
    <div className="max-w-7xl mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tests.map(el =>  (
                <Card
                    id={el.id}
                    title={el.title}
                    count={el.questions.length}
                    key={el.id}
                />
            ))}
        </div>
    </div>
)


export default MainPage