
export const MASKAPAI = {
    GRD:{
        maskapai_id: "GRD",
        maskapai_nama: "Garuda Airline",
        maskapai_logo: "./images/garuda.jpg", 
    },
    SJW:{
        maskapai_id: "SJW",
        maskapai_nama: "Seriwijaya Air",
        maskapai_logo: "./images/sriwijaya.png", 
    },
    LIO:{
        maskapai_id: "LIO",
        maskapai_nama: "Lion Air",
        maskapai_logo: "./images/lion.png", 
    },
    BTK:{
        maskapai_id: "BTK",
        maskapai_nama: "Batik Air",
        maskapai_logo: "./images/batik.png",
    },
    CTL:{
        maskapai_id: "CTL",
        maskapai_nama: "Citilink",
        maskapai_logo: "./images/citilink.png",
    },
};

export const BANDARA = {
    SKH:{
        bandara_kode: "SKH",
        bandara_nama: "Soekarno Hatta",
    },
    SMB:{
        bandara_kode: "SMB",
        bandara_nama: "Sultan Mahmud Badaruddin II",
    },
    RDN:{
        bandara_kode: "RDN",
        bandara_nama: "Raden Intan",
    },
    NGR:{
        bandara_kode: "NGR",
        bandara_nama: "Ngurah Rai",
    },
    KLN:{
        bandara_kode: "KLN",
        bandara_nama: "Kualanamu",
    },
};

export const JADWAL = [
    {
        jadwal_id: "1",
        bandara_kode_keberangkatan: "SKH",
        bandara_kode_tujuan: "SMB",
        maskapai_id: "GRD"
    },
    {
        jadwal_id: "2",
        bandara_kode_keberangkatan: "SKH",
        bandara_kode_tujuan: "SMB",
        maskapai_id: "SJW"
    },
    {
        jadwal_id: "3",
        bandara_kode_keberangkatan: "SKH",
        bandara_kode_tujuan: "SMB",
        maskapai_id: "LIO"
    },
    {
        jadwal_id: "4",
        bandara_kode_keberangkatan: "SKH",
        bandara_kode_tujuan: "SMB",
        maskapai_id: "BTK"
    },
    {
        jadwal_id: "5",
        bandara_kode_keberangkatan: "RDN",
        bandara_kode_tujuan: "SKH",
        maskapai_id: "CTL"
    },
    {
        jadwal_id: "6",
        bandara_kode_keberangkatan: "RDN",
        bandara_kode_tujuan: "SKH",
        maskapai_id: "GRD"
    },
    {
        jadwal_id: "7",
        bandara_kode_keberangkatan: "RDN",
        bandara_kode_tujuan: "NGR",
        maskapai_id: "SJW"
    },
    {
        jadwal_id: "8",
        bandara_kode_keberangkatan: "KLN",
        bandara_kode_tujuan: "RDN",
        maskapai_id: "LIO"
    },
    {
        jadwal_id: "9",
        bandara_kode_keberangkatan: "SKH",
        bandara_kode_tujuan: "RDN",
        maskapai_id: "BTK"
    },
    {
        jadwal_id: "10",
        bandara_kode_keberangkatan: "RDN",
        bandara_kode_tujuan: "SMB",
        maskapai_id: "CTL"
    },
    {
        jadwal_id: "11",
        bandara_kode_keberangkatan: "SMB",
        bandara_kode_tujuan: "RDN",
        maskapai_id: "GRD"
    },
    {
        jadwal_id: "12",
        bandara_kode_keberangkatan: "SMB",
        bandara_kode_tujuan: "RDN",
        maskapai_id: "SJW"
    },
    {
        jadwal_id: "13",
        bandara_kode_keberangkatan: "SMB",
        bandara_kode_tujuan: "NGR",
        maskapai_id: "LIO"
    },
    {
        jadwal_id: "14",
        bandara_kode_keberangkatan: "SKH",
        bandara_kode_tujuan: "KLN",
        maskapai_id: "BTK"
    },
    {
        jadwal_id: "14",
        bandara_kode_keberangkatan: "SMB",
        bandara_kode_tujuan: "KLN",
        maskapai_id: "CTL"
    },
];