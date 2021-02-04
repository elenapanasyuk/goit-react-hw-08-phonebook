import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/phonebook/phonebook-selectors';
import { changeFilter } from '../../redux/phonebook/phonebook-actions';
import s from './Filter.module.css';

function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <label className={s.label}>
      Find contact by name
      <input
        type="text"
        value={value}
        onChange={event => dispatch(changeFilter(event.target.value))}
        placeholder="Enter name for search"
        className={s.input}
      />
    </label>
  );
}

export default Filter;
