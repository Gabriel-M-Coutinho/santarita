import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

function InstaFotos() {
  return (
    <div className="FontFamily" id="Social">
      <Container fluid className="GapVert Centro FocusInDaley">
        <div className="NoGap">
          <Image
            className="IMGSocial"
            src="/img/pesqueiro01.png"
            alt="pesqueiro01"
          />
        </div>
        <div className="NoGap">
          <Image
            className="IMGSocial"
            src="/img/pesqueiro02.png"
            alt="pesqueiro02"
          />
        </div>
        <div className="NoGap">
          <Image
            className="IMGSocial"
            src="/img/pesqueiro03.png"
            alt="pesqueiro03"
          />
        </div>
        <div className="NoGap">
          <Image
            className="IMGSocial"
            src="/img/pesqueiro04.png"
            alt="pesqueiro04"
          />
        </div>
      </Container>
    </div>
  );
}

export default InstaFotos;
