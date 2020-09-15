import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import axios from "axios";

const getRandomImage = () => {
  return axios.get("https://picsum.photos/200/300?random=1").then(res => {
    if (res.status === 200) {
      return `https://picsum.photos${res.request.path}`
    } else {
      throw new Error(`Cant find it, Reason: ${res.status}`);
    }
  });
};

// Backend API, returns a random image url.
const run: AzureFunction = async function(
  context: Context,
  req: HttpRequest
): Promise<any> {
  context.log(
    `Starting HTTP triggered function ${context.executionContext.functionName}`
  );

  // Default response status is 200
  return getRandomImage().then(res => {
    return {
      body: {
        url: res
      }
    };
  }).catch(err => {
      return {
          status: 500,
          body: {
              err
          }
      }
  })
};

export default run;
