class TodoModel {
    constructor(id, task, status) {
        this.id = id;
        this.task = task;
        this.status = status;
    }
}

const createModel = (id, task, status = "pending") => new TodoModel(id, task, status);

export default createModel;
