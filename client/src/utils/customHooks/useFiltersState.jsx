import { useState } from "react"

const useFiltersState = () => {
  const initialState = {
    name: 'original',
    weight: 'original',
    temperaments: 'original',
    origin: 'original'
  }

  const [value, setValue] = useState(initialState)

  const resetFilter = () => {
    setValue(initialState);
  };

  return { value, setValue, resetFilter }
}

export default useFiltersState