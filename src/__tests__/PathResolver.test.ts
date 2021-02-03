import { PathResolver } from "../PathResolver";
import openAPI from "./mock-data/openAPI.json";

describe("PathResolver", () => {
  it("should get resolved paths by openAPI schema", () => {
    expect(PathResolver.of((openAPI as any).paths).resolve().resolvedPaths).toEqual(expectedPathResolvedData);
  });

  it("should get correct action creator by resolved paths", () => {
    expect(
      PathResolver.of((openAPI as any).paths)
        .resolve()
        .toRequest(),
    ).toEqual(expectedRequest);
  });
});

const expectedPathResolvedData = [
  {
    TReq: {
      uploadAttachmentUsingPOSTRequest: {
        attachment: "string",
      },
    },
    TResp: "IAttachmentBo",
    bodyParams: [],
    formDataParams: [],
    method: "post",
    operationId: "uploadAttachmentUsingPOST",
    pathParams: [],
    queryParams: [],
    requestBody: "uploadAttachmentUsingPOSTRequest",
    url: "/",
  },
  {
    TReq: {
      id: "string",
    },
    TResp: "IResource",
    bodyParams: [],
    formDataParams: [],
    method: "get",
    operationId: "downloadUsingGET",
    pathParams: ["id"],
    queryParams: [],
    url: "/${id}",
  },
  {
    TReq: {
      id: "string",
    },
    TResp: "",
    bodyParams: [],
    formDataParams: [],
    method: "delete",
    operationId: "deleteAttachmentUsingDELETE",
    pathParams: ["id"],
    queryParams: [],
    url: "/${id}",
  },
  {
    TReq: {
      id: "string",
    },
    TResp: "IBookDetailVo",
    bodyParams: [],
    formDataParams: [],
    method: "get",
    operationId: "findBookByIdUsingGET",
    pathParams: ["id"],
    queryParams: [],
    url: "/book/${id}",
  },
  {
    TReq: {
      id: "string",
      updateBookByIdUsingPUTRequest: "IUpdateBookRequest",
    },
    TResp: "",
    bodyParams: [],
    formDataParams: [],
    method: "put",
    operationId: "updateBookByIdUsingPUT",
    pathParams: ["id"],
    queryParams: [],
    requestBody: "updateBookByIdUsingPUTRequest",
    url: "/book/${id}",
  },
  {
    TReq: {
      "roleId?": "string",
      scheduleDate: "number",
    },
    TResp: "IScheduleVo[]",
    bodyParams: [],
    formDataParams: [],
    method: "get",
    operationId: "getScheduleDetailsByDateUsingGET",
    pathParams: [],
    queryParams: ["scheduleDate", "roleId"],
    url: "/schedules",
  },
  {
    TReq: {
      documentId: "string",
      "from?": "keyof typeof FromFrom#EnumTypeSuffix",
    },
    TResp: "IDocumentVo",
    bodyParams: [],
    formDataParams: [],
    method: "get",
    operationId: "getDocumentByIdUsingGET",
    pathParams: ["documentId"],
    queryParams: ["from"],
    url: "/documents/${documentId}/doc",
  },
];

const expectedRequest = [
  "export const deleteAttachmentUsingDeleteRequest = ({id}:{\n        'id': string;\n      }, axiosConfig?: AxiosRequestConfig) => \n        client.request<undefined, AxiosResponse<undefined>>({\n        url: `/${id}`,\n        method: \"delete\",\n        ...axiosConfig});",
  "export const useDownloadUsingGetRequest = ({id}:{\n        'id': string;\n      }, SWRConfig?: ISWRConfig<IResource, IResponseError>, axiosConfig?: AxiosRequestConfig) => \n        useRequest<IResource, IResponseError>({\n        url: `/${id}`,\n        method: \"get\",\n        ...axiosConfig}, SWRConfig);",
  "export const useFindBookByIdUsingGetRequest = ({id}:{\n        'id': string;\n      }, SWRConfig?: ISWRConfig<IBookDetailVo, IResponseError>, axiosConfig?: AxiosRequestConfig) => \n        useRequest<IBookDetailVo, IResponseError>({\n        url: `/book/${id}`,\n        method: \"get\",\n        ...axiosConfig}, SWRConfig);",
  "export const useGetDocumentByIdUsingGetRequest = ({documentId,from}:{\n        'documentId': string;\n'from'?: keyof typeof FromFrom;\n      }, SWRConfig?: ISWRConfig<IDocumentVo, IResponseError>, axiosConfig?: AxiosRequestConfig) => \n        useRequest<IDocumentVo, IResponseError>({\n        url: `/documents/${documentId}/doc`,\n        method: \"get\",\n        params: {\n    from\n    },...axiosConfig}, SWRConfig);",
  "export const useGetScheduleDetailsByDateUsingGetRequest = ({scheduleDate,roleId}:{\n        'roleId'?: string;\n'scheduleDate': number;\n      }, SWRConfig?: ISWRConfig<IScheduleVo[], IResponseError>, axiosConfig?: AxiosRequestConfig) => \n        useRequest<IScheduleVo[], IResponseError>({\n        url: `/schedules`,\n        method: \"get\",\n        params: {\n    scheduleDate,\nroleId\n    },...axiosConfig}, SWRConfig);",
  "export const updateBookByIdUsingPutRequest = ({id,updateBookByIdUsingPutRequest}:{\n        'id': string;\n'updateBookByIdUsingPutRequest': IUpdateBookRequest;\n      }, axiosConfig?: AxiosRequestConfig) => \n        client.request<undefined, AxiosResponse<undefined>>({\n        url: `/book/${id}`,\n        method: \"put\",\n        data: updateBookByIdUsingPutRequest,headers: {'Content-Type': \"multipart/form-data\"},...axiosConfig});",
  "export const uploadAttachmentUsingPostRequest = ({uploadAttachmentUsingPostRequest}:{\n        'uploadAttachmentUsingPostRequest': {attachment:string};\n      }, axiosConfig?: AxiosRequestConfig) => \n        client.request<IAttachmentBo, AxiosResponse<IAttachmentBo>>({\n        url: `/`,\n        method: \"post\",\n        data: uploadAttachmentUsingPostRequest,headers: {'Content-Type': \"multipart/form-data\"},...axiosConfig});",
  'export enum FromFrom {"AAA"="AAA","BBB"="BBB"}',
];
