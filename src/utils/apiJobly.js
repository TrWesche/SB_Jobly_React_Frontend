import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

class apiJobly {

    static async request(endpoint, paramsOrData = {}, verb = "get") {
        // for now, hardcode token for "testing"
        // paramsOrData._token = ( 
        // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc" +
        // "3RpbmciLCJpc19hZG1pbiI6ZmFsc2UsImlhdCI6MTU1MzcwMzE1M30." +
        // "COmFETEsTxN_VfIlgIKw0bYJLkvbRQNgO1XCSE8NZ0U");
        paramsOrData._token = localStorage.getItem("token");


        console.debug("API Call:", endpoint, paramsOrData, verb);
    
        try {
          return (await axios({
            method: verb,
            url: `${BASE_URL}/${endpoint}`,
            [verb === "get" ? "params" : "data"]: paramsOrData})).data;
            // axios sends query string data via the "params" key,
            // and request body data via the "data" key,
            // so the key we need depends on the HTTP verb
        }
    
        catch(err) {
          console.error("API Error:", err.response);
          let message = err.response.data.message;
          throw Array.isArray(message) ? message : [message];
        }
    }

    // ╔═══╗╔╗ ╔╗╔════╗╔╗ ╔╗
    // ║╔═╗║║║ ║║║╔╗╔╗║║║ ║║
    // ║║ ║║║║ ║║╚╝║║╚╝║╚═╝║
    // ║╚═╝║║║ ║║  ║║  ║╔═╗║
    // ║╔═╗║║╚═╝║ ╔╝╚╗ ║║ ║║
    // ╚╝ ╚╝╚═══╝ ╚══╝ ╚╝ ╚╝
                                  
    static async loginUser(userData) {
        const res = await this.request("login", userData, "post");
        return res.token;
    }
    

    // ╔╗ ╔╗╔═══╗╔═══╗╔═══╗
    // ║║ ║║║╔═╗║║╔══╝║╔═╗║
    // ║║ ║║║╚══╗║╚══╗║╚═╝║
    // ║║ ║║╚══╗║║╔══╝║╔╗╔╝
    // ║╚═╝║║╚═╝║║╚══╗║║║╚╗
    // ╚═══╝╚═══╝╚═══╝╚╝╚═╝

    static async createUser(payloadData) {
        const res = await this.request("users", payloadData, "post");
        return res.token;
    }

    static async getUsers() {
        const res = await this.request("users");
        return res.users;
    }

    static async getUserDetails(username) {
        const res = await this.request(`users/${username}`)
        return res.user;
    }

    static async updateUserDetails(username, payloadData) {
        const res = await this.request(`users/${username}`, payloadData, "patch")
        return res.user;
    }

    static async deleteUser(username, payloadData) {
        const res = await this.request(`users/${username}`, payloadData, "delete")
        return res.message;
    }


    // ╔═══╗╔═══╗╔═╗╔═╗╔═══╗╔═══╗╔═╗ ╔╗╔╗  ╔╗
    // ║╔═╗║║╔═╗║║║╚╝║║║╔═╗║║╔═╗║║║╚╗║║║╚╗╔╝║
    // ║║ ╚╝║║ ║║║╔╗╔╗║║╚═╝║║║ ║║║╔╗╚╝║╚╗╚╝╔╝
    // ║║ ╔╗║║ ║║║║║║║║║╔══╝║╚═╝║║║╚╗║║ ╚╗╔╝ 
    // ║╚═╝║║╚═╝║║║║║║║║║   ║╔═╗║║║ ║║║  ║║  
    // ╚═══╝╚═══╝╚╝╚╝╚╝╚╝   ╚╝ ╚╝╚╝ ╚═╝  ╚╝  
                                      
    static async createCompany(payloadData) {
        const res = await this.request("companies", payloadData, "post");
        return res.company;
    }

    static async getCompanies() {
        const res = await this.request("companies");
        return res.companies;
    }

    static async searchCompanies(searchParams) {
        const res = await this.request("companies", searchParams);
        return res.companies;
    }

    static async getCompanyDetails(companyId) {
        const res = await this.request(`companies/${companyId}`)
        return res.company;
    }

    static async updateCompanyDetails(companyId, payloadData) {
        const res = await this.request(`companies/${companyId}`, payloadData, "patch")
        return res.company;
    }

    static async deleteCompany(companyId, payloadData) {
        const res = await this.request(`companies/${companyId}`, payloadData, "delete")
        return res.message;
    }                       



    //   ╔╗╔═══╗╔══╗ 
    //   ║║║╔═╗║║╔╗║ 
    //   ║║║║ ║║║╚╝╚╗
    // ╔╗║║║║ ║║║╔═╗║
    // ║╚╝║║╚═╝║║╚═╝║
    // ╚══╝╚═══╝╚═══╝
                                      
    static async createJob(payloadData) {
        const res = await this.request("jobs", payloadData, "post");
        return res.job;
    }

    static async getJobs() {
        const res = await this.request("jobs");
        return res.jobs;
    }

    static async searchJobs(searchParams) {
        const res = await this.request("jobs", searchParams);
        return res.jobs;
    }

    static async getJobDetails(jobId) {
        const res = await this.request(`jobs/${jobId}`)
        return res.job;
    }

    static async updateJobDetails(jobId, payloadData) {
        const res = await this.request(`jobs/${jobId}`, payloadData, "patch")
        return res.job;
    }

    static async deleteJob(jobId, payloadData) {
        const res = await this.request(`jobs/${jobId}`, payloadData, "delete")
        return res.message;
    }        

    static async applyToJob(jobId, payloadData) {
        const res = await this.request(`jobs/${jobId}/apply`, payloadData, "post");
        return res.message;
    }

    static async retractApplication(jobId) {
        const res = await this.request(`jobs/${jobId}/retract`, {}, "delete");
        return res.message;
    }
}

export default apiJobly;