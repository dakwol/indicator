import BaseModelAPI from "../BaseModelAPI";
import axiosClient from "../axiosClient";
import { API_JOB_MODEL } from "./const";

class JobApiRequest extends BaseModelAPI {
    constructor() {
        super(API_JOB_MODEL.url);
    }

    async moveToArchive<T>(id:string, body?: any) {
        return this.makeRequest<T>(axiosClient.post, {id: id  + "/", method: API_JOB_MODEL.methods.moveToArchive.url, body});
    }
    async moveApplicantFound<T>(id:string, body?: any) {
        return this.makeRequest<T>(axiosClient.post, {id: id  + "/", method: API_JOB_MODEL.methods.moveApplicantFound.url, body});
    }
}

export default JobApiRequest