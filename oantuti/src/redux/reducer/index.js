const stateDefault = {
  mangDatCuoc: [
    {
      ma: "keo",
      hinhAnh: "/img/keo.png",
      datCuoc: false,
    },
    { ma: "bua", hinhAnh: "/img/bua.png", datCuoc: true },
    { ma: "bao", hinhAnh: "/img/bao.png", datCuoc: false },
  ],
  ketQua: "I'm iron man, I love you 3000 !!!",
  soBanThang: 0,
  soBanChoi: 0,
  computer: { ma: "bao", hinhAnh: "/img/bao.png" },
};

export const OanTuTiReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "KEO_BUA_BAO": {
      let mangDatCuocUpdate = [...state.mangDatCuoc];
      mangDatCuocUpdate.map((item, index) => {
        if (item.ma === action.maCuoc) {
          return { ...item, datCuoc: true };
        }
        return { ...item, datCuoc: false };
      });
      state.mangDatCuoc = mangDatCuocUpdate;
      return { ...state };
    }

    case "RANDOM": {
      let numNgauNhien = Math.floor(Math.random() * 3);
      let quanCuocNgauNhien = state.mangDatCuoc[numNgauNhien];
      state.computer = quanCuocNgauNhien;
      return { ...state };
    }
    case "END_GAME": {
      let player = state.mangDatCuoc.find((item) => {
        return item.datCuoc === true;
      });
      let computer = state.computer;
      switch (player.ma) {
        case "keo":
          if (computer.ma === "keo") {
            state.ketQua = "Hoà nhau !!!";
          } else if (computer.ma === "bua") {
            state.ketQua = "thua !!!";
          } else {
            state.soBanThang += 1;
            state.ketQua = "thắng!!!";
          }
          break;

        case "bua":
          if (computer.ma === "keo") {
            state.soBanThang += 1;
            state.ketQua = "thắng !!!";
          } else if (computer.ma === "bua") {
            state.ketQua = "Hoà nhau !!!";
          } else {
            state.ketQua = "thua!!!";
          }
          break;

        case "bao":
          if (computer.ma === "keo") {
            state.ketQua = "Thua !!!";
          } else if (computer.ma === "bua") {
            state.soBanThang += 1;
            state.ketQua = "Thắng !!!";
          } else {
            state.ketQua = "Hoà nhau!!!";
          }
          break;

        default:
          state.soBanThang += 1;
          state.ketQua = "Thắng !!!";
      }
      state.soBanChoi += 1;
      return { ...state };
    }
    default: return { ...state };
      
  }
};


