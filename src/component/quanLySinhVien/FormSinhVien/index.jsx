import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.css'
class FormSinhVien extends Component {

    constructor(props) {
        super(props);
        this.state = {
            MaSV: '',
            HoTen: '',
            Tuoi: 20,
            Email: '',
        }
    }
    
    
    //
    themSinhVien =()=>{
        if(this.state.MaSV.trim() === ''){
            alert('Nhập vào mã sv')
        }
        this.props.themSV(this.state)
        // this.setState({
        //     MaSV: '',
        //     HoTen: '',
        //     Tuoi: 0,
        //     Email: ''
        // })
    }
    //
    capNhatThongTinSV = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    //
    // componentWillReceiveProps() {
    //     //ham nay chay khi props thay doi trc khi render
    //     // this.setState(this.props.sinhVienSua, () => {
    //     //     this.setState(this.props.sinhVienSua)
    //     // })
    //     this.setState({}, () => {
    //         this.setState(this.props.sinhVienSua);
    //     })
    // }
    componentWillReceiveProps(mapStateToProps) {
            this.setState(mapStateToProps.sinhVienSua);
    }

    render() {
        return (
            <div>
                <h2>FORM SINH VIEN</h2>
                <form className=" mb-3 container">
                    <div className="form-inline">
                        <div className="form-group">
                            <label htmlFor="MaSV">MaSV</label>
                            <input name='MaSV' className="form-control ml-2 mr-2"
                                onChange={this.capNhatThongTinSV}
                                value={this.state.MaSV}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="HoTen">TenSV</label>
                            <input name='HoTen' className="form-control ml-2 mr-2"
                                onChange={this.capNhatThongTinSV}
                                value={this.state.HoTen}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Tuoi">Tuoi</label>
                            <input name='Tuoi' className="form-control ml-2 mr-2"
                                onChange={this.capNhatThongTinSV}
                                value={this.state.Tuoi}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Email">Email</label>
                            <input name='Email' className="form-control ml-2 mr-2"
                                onChange={this.capNhatThongTinSV}
                                value={this.state.Email}
                            />
                        </div>
                    </div>
                    <div className="form-group mt-3">
                        <button
                            type="button"
                            className="btn btn-success ml-1"
                            onClick={() =>this.themSinhVien() }
                        >ThemSV
                        </button>
                        <button
                            type="button"
                            className="btn btn-success ml-1"
                            onClick={()=>this.props.capNhatSV(this.state)}
                        >Cap Nhat
                        </button>
                    </div>
                </form>
            </div>

        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        themSV: (sinhVien) => {
            dispatch({
                type: 'ThemSV',
                sinhVien
            })
        },
        capNhatSV:(sinhVien)=>{
            dispatch({
                type:'capNhatSV',
                sinhVien
            })
        }
    }
}

const mapStateToProps = (state) => {
    return {
        sinhVienSua: state.storeQuanLySinhVienReducer.sinhVienCapNhat
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormSinhVien);