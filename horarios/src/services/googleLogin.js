import axios from "axios";
export const HOST = process.env.REACT_APP_HOST;

const googleLogin = async (accesstoken) => {
  console.log("Token obtenido: ", accesstoken);
  let res = await fetch(HOST + "/dj-rest-auth/google/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      access_token: accesstoken,
    }),
  });
  console.log("Respuesta de google Login: ", res, res.body);
  //return await res.status;
  let key = await res.json();
  console.log("Obtengo la key: ", key);
  return res.ok ? key : { key: null };
};

export default googleLogin;
