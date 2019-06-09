const stateDefault = {
    DSSV: [
        {
            MaSV: 1,
            HoTen: "Nguyen Van A",
            Tuoi: 18,
            Email: 'Nguyenvana@gmail.com'
        }
    ],
    sinhVienCapNhat: [
        {
            MaSV: 1,
            HoTen: "Nguyen Van A",
            Tuoi: 18,
            Email: 'Nguyenvana@gmail.com'
        }
    ]
}

const storeQuanLySinhVienReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'ThemSV': {
            let DSSV = [...state.DSSV, action.sinhVien];
            state.DSSV = DSSV;
            return { ...state }
        }
        case 'xoaSV': {
            let mangUpdate = [...state.DSSV];
            let index = mangUpdate.findIndex(sv => sv.MaSV === action.MaSV);
            if (index !== -1) {
                mangUpdate.splice(index, 1);
            }
            state.DSSV = mangUpdate;
            return { ...state }
        }
        case 'suaSV': {
            state.sinhVienCapNhat = action.sinhVien
            return { ...state }
        }
        case 'capNhatSV': {
            let sinhVienCapNhat = [...state.DSSV];
            let index = sinhVienCapNhat.findIndex(sv => sv.MaSV === action.sinhVien.MaSV);
            sinhVienCapNhat[index] = action.sinhVien;
            state.DSSV = sinhVienCapNhat;
            return { ...state }
        }
    }
    return { ...state }
}

export default storeQuanLySinhVienReducer