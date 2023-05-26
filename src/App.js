import './App.css';
import StepsForm from './components/StepsForm';
import moment from 'moment';

function App() {
  const initialState = [
    {
        id: 1,
        date: moment('20.07.2019', 'D.MM.YYYY').format('D.MM.YYYY'),
        range: 5.7
    },
    {
        id: 2,
        date: moment('19.07.2019', 'D.MM.YYYY').format('D.MM.YYYY'),
        range: 14.2
    }
  ]
  return (
    <StepsForm initialState={initialState}/>
  );
}

export default App;
