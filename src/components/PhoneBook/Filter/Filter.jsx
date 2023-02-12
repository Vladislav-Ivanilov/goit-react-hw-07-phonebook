import { setContactFilter } from 'components/Redux/filterSlice';
import { useDispatch } from 'react-redux';
import { WrapFilter, FilterLabel, FilterInput } from '../PhoneBook.styled';

export default function Filter() {
  const dispatch = useDispatch();

  return (
    <WrapFilter>
      <FilterLabel htmlFor="filter">Find contacts by name</FilterLabel>
      <FilterInput
        type="text"
        name="filter"
        id="filter"
        onInput={e => dispatch(setContactFilter(e.target.value))}
      />
    </WrapFilter>
  );
}
