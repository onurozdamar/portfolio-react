import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import img from "../../img/logo.png";

function MyServices() {
  return (
    <section
      className="text-center flex flex-col justify-center items-center"
      id="services"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundColor: "var(--clr-dark)",
        backgroundBlendMode: "multiply",
      }}
    >
      <h2 className="text-green-300">Ne Yapıyorum</h2>
      <div className="flex flex-col md:flex-row">
        <Card className="m-10">
          <CardHeader title="Front-End" />
          <CardContent>
            <Typography>React ile web uygulamaları geliştiriyorum.</Typography>
          </CardContent>
        </Card>
        <Card className="m-10">
          <CardHeader title="Mobil Uygulama Geliştirme" />
          <CardContent>
            <Typography>
              React Native ile mobil uygulamalar geliştiriyorum.
            </Typography>
          </CardContent>
        </Card>
      </div>
      <Button
        href="#work"
        variant="contained"
        style={{ backgroundColor: "rgb(110, 231, 183)", color: "black" }}
      >
        Projelerim
      </Button>
    </section>
  );
}

export default MyServices;
