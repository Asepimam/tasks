import { apiUrl } from "./helpers";

const urlUser = apiUrl + "user/details";
const urlLogout = apiUrl + "logout";

export const FetchUser = async () => {
  const response = fetch(urlUser, {
    method: "GET",
    credentials: "include", // Penting jika Anda menggunakan sesi
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Gagal mengambil data");
      }
      return response.json(); // Mengonversi respons ke JSON
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Terjadi kesalahan:", error);
    });
  return response;
};

export const fetchLogout = async () => {
  const response = fetch(urlLogout, {
    method: "GET",
    credentials: "include", // Penting jika Anda menggunakan sesi
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Gagal mengambil data");
      }
      return response.json(); // Mengonversi respons ke JSON
    })
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => {
      console.error("Terjadi kesalahan:", error);
    });

  return response;
};
