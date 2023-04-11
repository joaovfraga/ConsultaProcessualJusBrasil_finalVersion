import React, { useState, useEffect } from "react";
import { Container, Content } from "./style";
import { HeaderSearch } from "../../components/HeaderSearch";
import { useParams } from "react-router-dom";
import ProcessesDataService from "../../services/processes.service";

export function ShowSearch() {

  const { cnj } = useParams();

  const initialProcessState = {
    id: null,
    cnj: "",
    forum: "",
    distributedAt: null,
    createdAt: null,
    updatedAt: null,
    histories: [],
    related_parts: []
  };

  const [currentProcess, setCurrentProcess] = useState(initialProcessState);

  const getProcess = cnj => {
    ProcessesDataService.findByCNJ(cnj)
      .then(response => {
        setCurrentProcess(response.data.process);
        console.log(response.data.process);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (cnj)
      getProcess(cnj);
  }, [cnj]);

  return(
    <Container>
      <HeaderSearch />
      <Content>
      {currentProcess.id ? (
        <code> {JSON.stringify(currentProcess)} </code>
      ) : (
        <div>Nenhum processo encontrato.</div>
      )} 
      </Content>
    </Container>
  );
}