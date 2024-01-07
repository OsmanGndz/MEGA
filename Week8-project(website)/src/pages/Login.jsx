import React, { useState } from "react";

function Login({ handleLogin }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleLoginClick = () => {
    // form verilerini kullanarak giriş işlemlerini gerçekleştir
    console.log("Giriş Yapılan Form Verileri:", formData);
    // handleLogin fonksiyonunu çağırabilirsiniz
    handleLogin(1, formData.firstName, formData.lastName);
  };

  return (
    <>
      <div className="container-me" style={{ width: '500px' }}>
        <div class="col">
          <div class="row mb-2">
            <label for="firstName" class="form-label">First Name</label>
            <input
              type="text"
              class="form-control"
              id="firstName"
              placeholder="First name"
              aria-label="First name"
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div class="row mb-2">
            <label for="lastName" class="form-label">Last Name</label>
            <input
              type="text"
              class="form-control"
              id="lastName"
              placeholder="Last name"
              aria-label="Last name"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </div>
          <div class="row mb-2">
            <button
              type="button"
              class="btn btn-primary"
              onClick={handleLoginClick}
            >
              Giriş Yap
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
