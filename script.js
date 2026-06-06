const API_URL =
"https://script.google.com/macros/s/AKfycbyVqjC_BsVD73Q8Yh_DPTvXbbm_qeipIAm4loyk9rE4VMw5e9yVC3Q7hM1bJdxZadmo/exec";

async function login(){

  const username =
  document.getElementById(
    "username"
  ).value;

  const password =
  document.getElementById(
    "password"
  ).value;

  try{

    const response =
    await fetch(
      API_URL,
      {
        method:"POST",
        headers:{
          "Content-Type":
          "application/json"
        },
        body:JSON.stringify({
          action:"login",
          username:username,
          password:password
        })
      }
    );

    const result =
    await response.json();

    if(result.status){

      alert(
        "Login Berhasil\n\n" +
        result.nama
      );

    }else{

      alert(
        "Username atau Password salah"
      );

    }

  }catch(error){

    console.log(error);

    alert(
      "ERROR:\n\n" +
      error.message
    );

  }

}
