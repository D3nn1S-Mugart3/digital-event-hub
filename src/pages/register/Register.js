import React, { useState } from 'react';
import './components/Register.css';

const Register = () => {
  const [gender, setGender] = useState('');

  const toggleCustomGender = (value) => {
    setGender(value);
  };

  return (
    <div className="modal">
      <div className="header">
        <h1>EventHub</h1>
      </div>
      <div className="container">
        <h2>Crea una cuenta</h2>
        <div className="subtext">Es rápido y fácil</div>
        <form>
          <div className="form-group">
            <label htmlFor="register-name">Nombre:</label>
            <input type="text" id="register-name" placeholder="Ingresa tu nombre" required />
          </div>
          <div className="form-group">
            <label htmlFor="register-email">Correo Electrónico:</label>
            <input type="email" id="register-email" placeholder="Correo electrónico" required />
          </div>
          <div className="form-row horizontal">
            <div className="form-group">
              <label htmlFor="register-password">Contraseña:</label>
              <input type="password" id="register-password" placeholder="Contraseña" required />
            </div>
            <div className="form-group">
              <label htmlFor="register-confirm-password">Confirmar Contraseña:</label>
              <input type="password" id="register-confirm-password" placeholder="Confirmar contraseña" required />
            </div>
          </div>
          <div className="form-row horizontal">
            <div className="form-group">
              <label htmlFor="register-gender">Sexo:</label>
              <select id="register-gender" required onChange={(e) => toggleCustomGender(e.target.value)}>
                <option value="" disabled selected>Selecciona tu sexo</option>
                <option value="male">Hombre</option>
                <option value="female">Mujer</option>
                <option value="custom">Personalizado</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="register-age">Edad:</label>
              <input type="number" id="register-age" placeholder="Edad" required />
            </div>
          </div>
          {gender === 'custom' && (
            <div id="custom-gender-container" className="active">
              <div className="form-group">
                <label htmlFor="custom-gender">Especificar Género:</label>
                <input type="text" id="custom-gender" placeholder="Especificar Género" />
              </div>
            </div>
          )}
          <div className="form-row horizontal">
            <div className="form-group">
              <label htmlFor="register-location">Localidad:</label>
              <input type="text" id="register-location" placeholder="Localidad" required />
            </div>
            <div className="form-group">
              <label htmlFor="register-city">Ciudad:</label>
              <input type="text" id="register-city" placeholder="Ciudad" required />
            </div>
          </div>
          <div className="form-group">
            <button type="submit">Registrarte</button>
          </div>
          <div className="link">
            <a href="login.html">¿Ya tienes cuenta? Inicia Sesión</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;