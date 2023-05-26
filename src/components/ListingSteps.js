import ListStep from './ListStep'
import PropTypes from 'prop-types'

export default function ListingSteps({list, onChange, onRemove}) {
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Дата (ДД.ММ.ГГ)</th>
                    <th scope="col">Пройдено км</th>
                    <th scope="col">Действия</th>
                </tr>
            </thead>
            <tbody>
                {list.map(step => <ListStep key={step.id} step={step} onChange={onChange} onRemove={onRemove} />)}
            </tbody>
        </table>
    )
}

ListingSteps.propTypes = {
    list: PropTypes.arrayOf(PropTypes.object),
    onChange: PropTypes.func,
    onRemove: PropTypes.func
}