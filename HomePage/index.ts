import { AzureFunction, Context, HttpRequest } from "@azure/functions";

const homePageTrigger: AzureFunction = async function(
  context: Context,
  req: HttpRequest
): Promise<void> {
  context.log("HTTP trigger function processed a request.");
  const name = req.query.name || (req.body && req.body.name);

  context.res = {
    // status: 200, /* Defaults to 200 */
    status: 200,
    headers: {
      "content-type": "text/html",
    },
    body: renderHomePageBody(),
  };
};

function renderHomePageBody() {
  return `<center>
            <h3>This is home page</h3>
            <a href="/home">See image home</a>
            <br>
            <a href="/api/image">Image url</a>
        </center>`;
}

export default homePageTrigger;
