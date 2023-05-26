import PropTypes from 'prop-types'

export default function ListStep({step, onChange, onRemove}) {

    return (
        <tr>
            <td>{step.date}</td>
            <td>{step.range}</td>
            <td>
                <span className="material-icons" onClick={ev => onChange(ev, step)}>edit</span>
                <span className="material-icons" onClick={() => onRemove(step)}>delete</span>
            </td>
        </tr>
    )
}

ListStep.propTypes = {
    step: PropTypes.object,
    onChange: PropTypes.func,
    onRemove: PropTypes.func
}