// api: https://dog.ceo/api/breeds/image/random
/*
 json from api:
    {
        "message": "https://images.dog.ceo/breeds/puggle/IMG_070809.jpg",
        "status": "success"
    }
*/

// handler function will be called when a GET request is made to localhost:3000/api/dog
export default async function handler(request, response) {
  // fetch data from dog ceo backend
  // convert JSON (string object) to javascript object
  // grab the message field from object
  // send message field back to front-end as JSON
  try {
    const responseFromDogCeo = await fetch(
      "https://dog.ceo/api/breeds/image/random"
    ); // fetch data from dog ceo backend

    const data = await responseFromDogCeo.json(); // convert JSON (string object) to javascript object

    const string = data.message; // grab the message field from object
    response.status(200).json({ dogPhotoLink: string });
    // string: https://images.dog.ceo/breeds/bouvier/n02106382_1131.jpg
  } catch (e) {
    // status of >= 400 means something went wrong
    response.status(500).json({ error: "Something went wrong" });
  }

  //   response.status(200).json({ dogPhoto: "url to dog photo" });
}
