import axios from "axios";



const googleLogin = async (accesstoken) => {
    let res = await axios.post(
        "https://asistente-eit.udp.cl/dj-rest-auth/google/",
        {
            access_token: accesstoken,
        }
    );
    console.log(res);
    return await res.status;
};

export default googleLogin;