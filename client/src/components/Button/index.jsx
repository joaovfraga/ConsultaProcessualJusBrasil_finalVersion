import { Container } from './style';

export function Button({ title, loading, ...rest }){

  return(
    <Container 
      type='submit'
      {...rest}
    >
      {loading ? 'Buscando...' : title}
    </Container>
  );
}