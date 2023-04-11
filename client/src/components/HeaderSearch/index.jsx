import React, { useState } from "react";
import { FiSearch } from 'react-icons/fi';
import { Container } from './style';
import { Link, useNavigate } from 'react-router-dom';

import { SearchInput } from '../SearchInput';
import { Button } from '../Button';

export function HeaderSearch() {

  const [searchCnj, setSearchCnj] = useState("");
  
  const onChangeSearchCnj = e => {
    const searchCnj = e.target.value;
    console.log(searchCnj);
    setSearchCnj(searchCnj);
  };

  const navigate = useNavigate();
  const openProcess = () => {
    navigate("/show/" + searchCnj)
  }

  return(
    <Container>
      <Link to="/">Home</Link>
      <div>
        <SearchInput 
          placeholder="Número do processo" 
          icon={FiSearch}
          value={searchCnj} 
          onChange={onChangeSearchCnj} 
        />
        <Button title="Buscar" onClick={openProcess} />
      </div>
     
    </Container>
  );
}