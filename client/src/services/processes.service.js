import http from "../http-common";

class ProcessesDataService {
  getAll() {
    return http.get("/processes");
  }

  get(id) {
    return http.get(`/processes/${id}`);
  }

  findByCNJ(cnj) {
    return http.get(`/processes/cnj/${cnj}`);
  }
}

export default new ProcessesDataService();