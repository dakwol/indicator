import BaseModelAPI from "../BaseModelAPI";
import axiosClient from "../axiosClient";
import { API_FEED_MODEL } from "./const";

class FeedApiRequest extends BaseModelAPI {
    constructor() {
        super(API_FEED_MODEL.url);
    }

    async getEvents<T>(urlParams?: string) {
        return this.makeRequest<T>(axiosClient.get, {method: API_FEED_MODEL.methods.events.url});
    }
    async getEventsById<T>(id?: string) {
        return this.makeRequest<T>(axiosClient.get, {method: API_FEED_MODEL.methods.events.url + id});
    }
    async getExcursions<T>(urlParams?: string) {
        return this.makeRequest<T>(axiosClient.get, {method: API_FEED_MODEL.methods.excursions.url});
    }
    async getUsefulResours<T>(urlParams?: string) {
        return this.makeRequest<T>(axiosClient.get, {method: API_FEED_MODEL.methods.usefulResources.url});
    }
}

export default FeedApiRequest