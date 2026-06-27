import APPHTTPService from "./APPHTTPService";
import apiRoutes from "../config/apiRoutes";

class ProductService {
    constructor() {
        this.httpService = new APPHTTPService();
    }
    async getAllProduct(params) {
        return this.httpService.get(apiRoutes.product.all, params);
    }
    async createProduct(data) {
        return this.httpService.post(apiRoutes.product.create, data);
    }
    async updateProduct(id, data) {
        return this.httpService.put(`${apiRoutes.product.update}/${id}`, data);
    }
    async deleteProduct(id) {
        return this.httpService.delete(`${apiRoutes.product.delete}/${id}`);
    }
    async toggleProduct(id) {
        return this.httpService.patch(`${apiRoutes.product.toggle}/${id}`);
    }
}

export default ProductService;
