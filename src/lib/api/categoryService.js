import APPHTTPService from "./APPHTTPService";
import apiRoutes from "../config/apiRoutes";

class CategoryService {
    constructor() {
        this.httpService = new APPHTTPService();
    }
    async getAllCategories(params) {
        return this.httpService.get(apiRoutes.category.all, params);
    }
    async createCategory(data) {
        return this.httpService.post(apiRoutes.category.create, data);
    }
    async updateCategory(id, data) {
        return this.httpService.put(`${apiRoutes.category.update}/${id}`, data);
    }
    async deleteCategory(id) {
        return this.httpService.delete(`${apiRoutes.category.delete}/${id}`);
    }
    async toggleCatgegory(id) {
        return this.httpService.patch(`${apiRoutes.category.toggle}/${id}`);
    }
}

export default CategoryService;
