import NotFoundGif from '../../images/notFound.gif';
import { ButtonPoke, ContainerPai, NotFoundStyles } from './NotFound.styles';
import {useNavigate} from 'react-router-dom';
function NotFound() {
  const navigate = useNavigate();
  return (
    <ContainerPai>
      <h1>Pagina não encontrada...</h1>
      <ButtonPoke onClick={() => navigate('/')}>Home</ButtonPoke>
    <NotFoundStyles src={NotFoundGif}>
    </NotFoundStyles>
    </ContainerPai>
  )
}
export default NotFound