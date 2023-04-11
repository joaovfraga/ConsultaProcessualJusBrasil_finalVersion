import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

import { Container, Content } from "./style";

import { SearchInput } from '../../components/SearchInput';
import { Button } from '../../components/Button';

export function Search(){

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

  return (
    <Container>
      <main>
        
        <h1>Buscar</h1>
        <p>Selecione um tribunal para listar os processos ou buscar pelo número unificado.</p>

        <Content>
          <SearchInput 
            placeholder="Número do processo" 
            icon={FiSearch} 
            value={searchCnj} 
            onChange={onChangeSearchCnj} 
          />
          <Button 
            title="Buscar" 
            onClick={openProcess} 
          />
        </Content>
      </main>
    </Container>
  );
}