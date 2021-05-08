import Menu from '../components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';


import { Portifolio } from "../components/Styles"
import { Img } from "../components/Styles"
import { Texto } from "../components/Styles"
import { Container } from "../components/Styles"
import { Noticias } from "../components/Styles"
import { B } from "../components/Styles"
import { Azul } from "../components/Styles"
import { H3 } from "../components/Styles"
import { Not } from "../components/Styles"
import { Imagem } from "../components/Styles"


function HomePage() {
  return (
    <div>
      <Menu />
      <Portifolio>
        <Container>
          <Img>
            <Imagem
              src="/cachorro.png"
              alt="Picture of the author"
              />
          </Img>
          <Texto>
            <div>
              <h1>Belmires Frances de Almeida</h1>
            </div>
            <div>
              Brasileiro, 23 anos, casado. Desenvolvendo atualmeunte trabalhando na empresa PRODEMGE, na equipe GSC(Gerencia de Seguranca Civil).
            </div>
          </Texto>
        </Container>
      </Portifolio>

      <Noticias>
        <h2>Últimas do blog</h2>
        <Not>
          <Azul>5 dics para sua carreira profissional</Azul>
        Confira algumas dicar que podem ajudar a alancar sua carreira como desenvolvedor front-end
      </Not>
        <Not>
          <H3>5 dics para sua carreira profissional</H3>
        Confira algumas dicar que podem ajudar a alancar sua carreira como desenvolvedor front-end
      </Not>
        <Not>
          <H3>5 dics para sua carreira profissional</H3>
        Confira algumas dicar que podem ajudar a alancar sua carreira como desenvolvedor front-end
      </Not>
        <br />
        <B>Ver tudo</B>
      </Noticias>
    </div>

  );
}

export default HomePage