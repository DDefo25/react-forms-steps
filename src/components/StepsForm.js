import AddStep from "./AddStep"
import ListingSteps from "./ListingSteps"
import {useState} from 'react'
import { nanoid } from "nanoid";
import PropTypes from 'prop-types'

export default function StepsForm({initialState}) {
    const [list, setList] = useState(initialState)

    const [form, setForm] = useState({
        id: '',
        date: '',
        range: ''
    })

    const handleAddStep = (step) => {
        const checkStepDate = list.find(el => el.date === step.date);

        if (form.id) {
            step.id = form.id
        } else if (checkStepDate) {
            step.id = checkStepDate.id;
            step.range += checkStepDate.range;
        } else {
            step.id = nanoid()
        }

        setList(prevList => {
            return [...prevList.filter(el => el.id !== step.id), step]
        })
    }

    const handleChangeStep = (ev, step) => {
        ev.preventDefault()
        setForm({
            id: step.id,
            date: step.date,
            range: step.range
        })
    }

    const handleDelete = (step) => {
        setList(prevList => {
            return prevList.filter(el => {
                if (step.id === el.id) return false
                else return true
            })
        })
    }

    return (
        <form style={{width: '50vw', position: 'absolute', left: '50%', translate: '-50%'}}>
            <AddStep onAddStep={handleAddStep} form={form} setForm={setForm} />
            <ListingSteps list={list} onChange={handleChangeStep} onRemove={handleDelete} />
        </form>
    )
}

StepsForm.defaultProps = {
    initialState: []
}

StepsForm.propTypes = {
    initialState: PropTypes.array
}