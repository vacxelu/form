import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'popper.js';
import 'bootstrap';
import DanhSachSinhVien from './component/quanLySinhVien/DanhSachSinhVien';
function App() {
  return (
    <div className="App">
      <DanhSachSinhVien></DanhSachSinhVien>
    </div>
  );
}

export default App;
