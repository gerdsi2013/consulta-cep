import {
  Container,
  CardImage,
  CardForm,
  Cep,
  Button,
  Footer,
  ContainerMain,
  MessageErro,
} from "./styles";
import Illustration from "../../../src/assets/Illustration.svg";
import Github from "../../../src/assets/github.svg";
import LinkedIn from "../../../src/assets/linkedin.svg";
import Instagram from "../../../src/assets/instagram.svg";
import { useState } from "react";
import { api } from "../../services/api";

export function Home() {
  type Information = {
    logradouro: string;
    complemento: string;
    bairro: string;
    localidade: string;
    uf: string;
  };

  const [zipCode, setZipCode] = useState<string>("");
  const [adress, setAdress] = useState<Information>();
  const [erro, setErro] = useState(false);
  const validatedZipCode = zipCode?.length === 8;

  async function handleSearch() {
    if (validatedZipCode) {
      try {
        const response = await api.get(`${zipCode}/json/`);
        const { data } = response;
        setAdress(data);
        setErro(false);
      } catch (error) {}
    } else {
      setErro(true);
    }
  }

  function handleOnChangeSearch(e: string) {
    setZipCode(e);
  }

  return (
    <ContainerMain>
      <Container>
        <CardImage>
          <h1>SEARCH ADDRESS</h1>
          <img
            src={Illustration}
            alt="uma pessoa com um celular, a procura de endereço"
          ></img>

          <h2>Encontre o endereço ao digitar o cep</h2>
        </CardImage>

        <CardForm>
          <div>
            <label htmlFor="street">Rua</label>
            <input
              type="text"
              id="street"
              readOnly
              value={adress?.logradouro}
            ></input>
          </div>

          <div>
            <label htmlFor="complement">Complemento</label>
            <input
              type="text"
              id="complement"
              readOnly
              value={adress?.complemento}
            ></input>
          </div>

          <div>
            <label htmlFor="uf">Estado</label>
            <input type="text" id="uf" readOnly value={adress?.uf}></input>
          </div>

          <div>
            <label htmlFor="city">Cidade</label>
            <input
              type="text"
              id="city"
              readOnly
              value={adress?.localidade}
            ></input>
          </div>

          <div>
            <label htmlFor="district">Bairro</label>
            <input
              readOnly
              type="text"
              id="district"
              value={adress?.bairro}
              required={true}
            ></input>
          </div>

          <Cep>
            {erro ? (
              <MessageErro>
                <p>cep invalido.</p>
              </MessageErro>
            ) : (
              false
            )}
            <label htmlFor="zipcode">CEP</label>
            <div>
              <input
                type="number"
                placeholder="Digite o cep"
                value={zipCode}
                onChange={(e) => handleOnChangeSearch(e.target.value)}
              ></input>

              <Button type="button" onClick={handleSearch}>
                buscar
              </Button>
            </div>
          </Cep>
        </CardForm>
      </Container>

      <Footer>
        <div>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/gerdivaldossilva/"
                target="_blank"
              >
                <img src={LinkedIn} alt="link de acesso ao linkedin" />
              </a>
            </li>
            <li>
              <a href="https://github.com/gerdsi2013" target="_blank">
                <img src={Github} alt="link de acesso ao github"></img>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/gerdssilva/" target="_blank">
                <img src={Instagram} alt="link de acesso ao instagram"></img>
              </a>
            </li>
          </ul>
        </div>

        <p>2022 | Gerdivaldo dos santos silva.</p>
      </Footer>
    </ContainerMain>
  );
}
