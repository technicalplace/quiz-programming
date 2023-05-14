import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Answer } from './components/answer/Answer';
import { Question } from './components/question/Question';
import { Result } from './components/result/Result';
import { Header } from './components/header/Header';
function App() {
    return (_jsxs(_Fragment, { children: [_jsx(Header, {}), _jsx(Answer, {}), _jsx(Question, {}), _jsx(Result, {})] }));
}
export default App;
