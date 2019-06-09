import React, { Component } from 'react';
import FormSinhVien from '../FormSinhVien';
import { connect } from 'react-redux';

class DanhSachSinhVien extends Component {
    renderSinhVien = () => {
        return this.props.DSSV.map((sinhVien, index) => {
            return (
                <tr key={index}>
                    <td>{sinhVien.MaSV}</td>
                    <td>{sinhVien.HoTen}</td>
                    <td>{sinhVien.Tuoi}</td>
                    <td>{sinhVien.Email}</td>
                    <th>
                        <button
                            className="btn btn-danger mr-1"
                            onClick={() => { this.props.suaSV(sinhVien) }}
                        >Sua
                        </button>
                        <button
                            className="btn btn-danger"
                            onClick={() => { this.props.xoaSV(sinhVien.MaSV) }}
                        >Xoa
                        </button>
                    </th>
                </tr>
            )
        })
    }
    render() {
        return (
            <div className="container">
                <h1>DANH SACH SINH VIEN</h1>
                <FormSinhVien></FormSinhVien>
                <table className="table">
                    <thead>
                        <tr>
                            <td>MaSV</td>
                            <td>HoTen</td>
                            <td>Tuoi</td>
                            <td>Email</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.renderSinhVien()
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        DSSV: state.storeQuanLySinhVienReducer.DSSV
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        xoaSV: (MaSV) => {
            dispatch({
                type: 'xoaSV',
                MaSV
            })
        },
        suaSV: (sinhVien) => {
            dispatch({
                type: 'suaSV',
                sinhVien
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DanhSachSinhVien);
