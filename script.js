const API_URL =
"https://script.googleusercontent.com/macros/echo?user_content_key=AUkAhnQqjrvRhKz3tDMvE6Wwwn0UIEpwLGcwXiQJRNOPTklNzh3xx_6j2BrmfitcQIDQfP5uacEb8JB49AbztTymAboDv5hqCQJnXaZNz6cIjMCc6YiWshRCLVgu4hj-md6nZn4thovVCy1gL8nYIm3fyZiTo9ek3EngJio-3dTwjB3gD5_Vw9Kw7gfLgwgT6-ixzWlp3y_NKRpZo7wJXrfsU6oVsskBAurafVQfSicBmW0r6gcJHrS9yxpLIgbdUbrYI2EIGEsb4HfiPcf16UwTlNQdPYxsrQ&lib=MRa17yZ29jtBZAB8rb9I7GyqbMsTEyGLk";

async function login(){

  try{

    const response =
    await fetch(API_URL);

    const result =
    await response.json();

    alert(
      JSON.stringify(result)
    );

  }catch(error){

    alert(
      "ERROR : " +
      error.message
    );

  }

}
