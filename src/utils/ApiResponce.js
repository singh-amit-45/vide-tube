class ApiResponse {
    constructor(statuscode,data ,message="Success", errors=[]) {
        this.statusCode = statuscode;
        this.data = data;
        this.message = message; 
        this.success = statuscode < 400;
    }
}