export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const PHOTO_URL =
  "https://scontent.fccu23-1.fna.fbcdn.net/v/t39.30808-1/345844970_1645385249218727_6510530699562498707_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5740b7&_nc_ohc=ZexzAnc0LlsAX9mMXe3&_nc_ht=scontent.fccu23-1.fna&oh=00_AfBk0boBV-D2Mvfshp0TXu9iZEorK_cjto_Qy58fv8nsRw&oe=65DCB504";

export const BACKGROUND =
  "https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer "+process.env.REACT_APP_TMDB,
  },
};

export const CDN_IMG_URL = "https://image.tmdb.org/t/p/w500";

export const languages = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;