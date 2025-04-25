import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage'
import SurveyPage from './pages/SurveyPage'

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/survey/:id" element={<SurveyPage />} />
        </Routes>
    </BrowserRouter>
)

export default Router
