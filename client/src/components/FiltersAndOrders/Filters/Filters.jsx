import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterbyOrigin, filterbyTemps } from '../../../redux/actions';

const Filters = () => {
  const temperaments = useSelector((state) => state.temperaments);

  const dispatch = useDispatch();

  const handleFilterByOrigin = (e) => {
    dispatch(filterbyOrigin(e.target.value));
  };

  const handleFilterByTemp = (e) => {
    dispatch(filterbyTemps(e.target.value));
  };

  // Ordenar los temperamentos en orden alfabético por el atributo "name"
  const sortedTemperaments = temperaments.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div>
      {/* Select de temperamentos */}
      {temperaments.length ? (
        <select onChange={handleFilterByTemp}>
          <option disabled selected value="original">
            ALL TEMPERAMENTS
          </option>
          {sortedTemperaments.map((temp) => (
            <option key={temp.id} value={temp.name}>
              {temp.name}
            </option>
          ))}
        </select>
      ) : null}

      {/* Select de origen */}
      <select onChange={handleFilterByOrigin}>
        <option disabled selected value="original">
          API | DB
        </option>
        <option value="API">API</option>
        <option value="DB">DB</option>
      </select>
    </div>
  );
};

export default Filters;