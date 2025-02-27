import React, { useState } from "react";
import { Card, CardContent, Typography, TextField, Button } from "@mui/material";
import useRecaptchaV3 from "../hooks/reCaptchaV3";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
    captcha:""
  });

  const executeRecaptcha = useRecaptchaV3("6LcZn90qAAAAAD6F6G9NuxNX-RGHyPfXxO8AtEkR");

  const [submitEnable, setSubmitEnable] = useState(true);

  const productionMailRoute = "https://mail-antiguohobby.onrender.com/mail";
  // const productionMailRoute = "https://www.antiguohobby.com.ar/mail";
  const devMailRoute = "http://localhost:8080/mail";
  const environment = "prod"; // "prod" || "dev"
  const mailRoute = environment === "prod" ? productionMailRoute : devMailRoute;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setSubmitEnable(false);

    try {
      const recaptchaToken = await executeRecaptcha("submit");

      if (!recaptchaToken) {
        alert("Error en reCAPTCHA, inténtalo de nuevo.");
        setSubmitEnable(true);
        return;
      }

      const response = await fetch(mailRoute, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, captcha:recaptchaToken }),
      });

      const data = await response.json();

      alert("Mensaje: " + data.mensaje);
      setFormData({ nombre: "", email: "", telefono: "", mensaje: "" });
    } catch (error) {
      alert("Error al enviar el mensaje.");
    } finally {
      setSubmitEnable(true);
    }
  };

  return (
    <Card
      sx={{
        width: { xs: "95%", md: "500px", lg: "600px" },
        mx: "auto",
        mt: 5,
        mb: 5,
        p: 2,
        boxShadow: 3,
      }}
    >
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Contacto
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Nombre completo"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Teléfono"
            name="telefono"
            type="tel"
            value={formData.telefono}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Mensaje"
            name="mensaje"
            multiline
            rows={4}
            value={formData.mensaje}
            onChange={handleChange}
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }} disabled={!submitEnable}>
            {submitEnable ? "Enviar" : "Enviando..."}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
