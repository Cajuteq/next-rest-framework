import { OpenAPIV3_1 } from 'openapi-types';
import { ErrorHandler } from './error-handler';
import { Middleware } from './middleware';
import { Modify } from './utility-types';

type NextRestFrameworkOpenApiSpec = Partial<
  Modify<
    Omit<OpenAPIV3_1.Document, 'openapi'>,
    {
      info: Partial<OpenAPIV3_1.InfoObject>;
    }
  >
>;

export interface NextRestFrameworkConfig<GlobalMiddlewareResponse = unknown> {
  openApiSpec?: NextRestFrameworkOpenApiSpec; // Fully typed OpenAPI spec for your API.
  openApiJsonPath?: string; // Path that will be used for the OpenAPI spec - defaults tp `/api/openapi.json`.
  openApiYamlPath?: string; // Path that will be used for the OpenAPI spec - defaults tp `/api/openapi.json`.
  swaggerUiPath?: string; // Path that will be used for the API docs - defaults to `/api/docs`.
  exposeOpenApiSpec?: boolean; // Setting this to `false` will expose neither the API docs nor the OpenAPI specs.
  middleware?: Middleware<GlobalMiddlewareResponse>; // A middleware used for all of your APIs - useful for e.g. authentication. The return object will be passed to your request handlers.
  errorHandler?: ErrorHandler; // A function that will be called when an error occurs. By default, it will return a 500 status code and a default error unless your provide a custom response.
  suppressInfo?: boolean; // Setting this to `true` will suppress all informational logs from Next REST Framework.
  apiRoutesPath?: string; // Absolute path to the directory where your API routes are located - defaults to `pages/api`.
}
