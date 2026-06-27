import apiRoutes from "../config/apiRoutes";
import APPHTTPService from "./APPHTTPService";

class AuthService {
    constructor(){
        this. httpService= new APPHTTPService()
    }
    async login(data){
        return this.httpService.post(apiRoutes.auth.login)
    }
    async forgetPassword(data){
        return this.httpService.post(apiRoutes.auth.forgetPassword)
    }
    async resetPassword(token,data){
        return this.httpService.post(`${apiRoutes.auth.resetPassword}/${token}`,data)
    }
    async verifyEmail(token){
        return this.httpService.get(`${apiRoutes.auth.verifyEmail}/${token}`)
    }
}