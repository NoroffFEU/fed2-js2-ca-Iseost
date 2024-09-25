import "./css/style.css";

import router from "./js/router";

import "../auth/register";
import "../auth/login";

await router(window.location.pathname);
