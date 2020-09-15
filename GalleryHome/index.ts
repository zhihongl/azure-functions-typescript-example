import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import Axios from "axios";

const getBackendImage = () => {
  return Axios.get(process.env.BACKEND_ENDPOINT).then((res) => res.data.url);
};

// A home page gallery function, that will send the request to the other backend function to fetch the random image details.
const run: AzureFunction = async function(
  context: Context,
  req: HttpRequest
): Promise<any> {
  const url = await getBackendImage();
  // Extremely simple content
  return {
    headers: {
      "content-type": "text/html",
    },
    body: renderBody(url, "From picsum.photos"),
  };
};

function renderBody(url: string, attribution: string) {
  return `<center>
                <img height="80%" src="${url}"/>
                <h3>${attribution}</h3>
            </center>`;
}

export default run;
