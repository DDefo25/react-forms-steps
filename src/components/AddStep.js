import moment from "moment";
import PropTypes from 'prop-types'

export default function AddStep({onAddStep, form, setForm}) {
    const handleChange = ({target}) => {
        const {name, value} = target;
        setForm(prevStep => ({...prevStep, [name]: value}))
    }

    const handleAddBook = (ev) => {
        ev.preventDefault();
        const step = {
            date: moment(form.date, 'D.MM.YYYY').format('D.MM.YYYY'),
            range: Number(form.range)
        }

        onAddStep(step)
        setForm({
            id: '',
            date: '',
            range: ''
        })
    }

    
    return (
        <form>
            <div className="row g-3 align-items-end">
                <div className="col">
                    <label className="form-label">Дата (ДД.ММ.ГГ)</label>
                    <input name='date' className="form-control" value={form.date} onChange={handleChange} required/>
                </div>
                <div className="col">
                    <label className="form-label">Пройдено км</label>
                    <input name='range' className="form-control" value={form.range} onChange={handleChange} required/>
                </div>
                <div className="col-3">
                    <button className='btn btn-primary text-end' onClick={handleAddBook}>ОК</button>
                </div>
            </div>

        </form>
    )
}

AddStep.propTypes = {
    onAddStep: PropTypes.func,
    form: PropTypes.object,
    setForm: PropTypes.func
}