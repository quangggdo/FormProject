import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; 

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    rePassword: "",
  });

  const [errors, setErrors] = useState({});
  const [issubmit, setIssubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validate = () => {
    let vali = true;
    const errs = {};

    if (!form.name) {
      errs.name = "Vui lòng nhập tên";
      vali = false;
    } else if (form.name.length < 6) {
      errs.name = "Tên phải từ 6 kí tự trở lên";
      vali = false;
    } else if (form.name.length > 20) {
      errs.name = "Tên không được vượt quá 20 kí tự";
      vali = false;
    }

    if (!form.email) {
      errs.email = "Vui lòng nhập email";
      vali = false;
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(form.email)) {
      errs.email = "Vui lòng nhập đúng định dạng email";
      vali = false;
    }

    if (!form.password) {
      errs.password = "Vui lòng nhập mật khẩu";
      vali = false;
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d\w_]{10,}$/.test(form.password)) {
      errs.password = "Mật khẩu phải có ít nhất 10 ký tự, 1 chữ hoa, 1 số";
      vali = false;
    }

    if (form.rePassword !== form.password) {
      errs.rePassword = "Mật khẩu không trùng khớp";
      vali = false;
    }

    setErrors(errs);
    return vali;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIssubmit(true);
      setForm({
        name: "",
        email: "",
        password: "",
        rePassword: "",
      });
      console.table(form);
    } else {
      setIssubmit(false);
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4 rounded-4 border-0">
        <h2 className="text-center mb-4 fw-bold text-primary">Đăng Ký</h2>
        <form onSubmit={handleSubmit}>
          
          <div className="mb-3 position-relative">
            <label className="form-label">
              <i className="fas fa-user me-2"></i> Họ và Tên
            </label>
            <input
              name="name"
              type="text"
              className={`form-control rounded-3 ${errors.name ? "is-invalid" : ""}`}
              placeholder="Nhập họ và tên"
              value={form.name}
              onChange={handleChange}
            />
            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
          </div>

          
          <div className="mb-3 position-relative">
            <label className="form-label">
              <i className="fas fa-envelope me-2"></i> Email
            </label>
            <input
              name="email"
              type="email"
              className={`form-control rounded-3 ${errors.email ? "is-invalid" : ""}`}
              placeholder="Nhập email"
              value={form.email}
              onChange={handleChange}
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>

          
          <div className="mb-3 position-relative">
            <label className="form-label">
              <i className="fas fa-lock me-2"></i> Mật khẩu
            </label>
            <input
              name="password"
              type="password"
              className={`form-control rounded-3 ${errors.password ? "is-invalid" : ""}`}
              placeholder="Nhập mật khẩu"
              value={form.password}
              onChange={handleChange}
            />
            {errors.password && <div className="invalid-feedback">{errors.password}</div>}
          </div>

          
          <div className="mb-3 position-relative">
            <label className="form-label">
              <i className="fas fa-key me-2"></i> Nhập lại mật khẩu
            </label>
            <input
              name="rePassword"
              type="password"
              className={`form-control rounded-3 ${errors.rePassword ? "is-invalid" : ""}`}
              placeholder="Nhập lại mật khẩu"
              value={form.rePassword}
              onChange={handleChange}
            />
            {errors.rePassword && <div className="invalid-feedback">{errors.rePassword}</div>}
          </div>

          
          <button type="submit" className="btn btn-primary w-100 py-2 rounded-3 fw-bold">
            Đăng ký <i className="fas fa-arrow-right ms-2"></i>
          </button>
        </form>

        {issubmit && <div className="alert alert-success mt-3 text-center">🎉 Đăng ký thành công!</div>}
      </div>
    </div>
  );
}

export default App;
