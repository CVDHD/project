import httpHandler from '../http_handler'

class AdminService {
//lay tat ca danh sach dang ky hoc
    async getRegister(onSuccess, onFailure, data) {
        try {
            onSuccess(await httpHandler.get('show',data ))
        } catch (err) {
            onFailure(err)
        }
    }
//them danh sach dang ky hoc
    async addRegister(subject, onSuccess, onFailure) {
        try {
            onSuccess(await httpHandler.post('enroll', subject))
        } catch (err) {
            onFailure(err)
        }
    }
//xoa dang ky hoc
    async deleteRegister(code_subject, onSuccess, onFailure) {
        try {
            onSuccess(await httpHandler.post('delete', code_subject))
        } catch (err) {
            onFailure(err)
        }
    }
//sua dang ky hoc 
    async editRegister(payload, onSuccess, onFailure) {
        try {
            onSuccess(await httpHandler.put(`class/${payload.class_id}`, payload))
        } catch (err) {
            onFailure(err)
        }
    }
//lay dang ky hoc theo trang
    async getListPageRegister(page, onSuccess, onFailure) {
        try {
            onSuccess(await httpHandler.get(`class/${page}`))
        } catch (err) {
            onFailure(err)
        }
    }
//lay file pdf theo lop
    async getPdfFileByClass(payload, onSuccess, onFailure) {
        try {
            onSuccess(await httpHandler.post(`pdf/${payload.class_id}`))
        } catch (err) {
            onFailure(err)
        }
    }
//lay file pdf theo lop
    async getAllPdfFile(onSuccess, onFailure) {
        try {
            onSuccess(await httpHandler.post(`pdf`))
        } catch (err) {
            onFailure(err)
        }
    }
//them student vao lop hoc dang ky
    async addStudent(payload, onSuccess, onFailure) {
        try {
            onSuccess(await httpHandler.post(`class/${payload.class_id}`, payload.data))
        } catch (err) {
            onFailure(err)
        }
    }
//xoa sing vien trong lop
    async removeStudent(payload, onSuccess, onFailure) {
        try {
            onSuccess(await httpHandler.delete(`class/${payload.class_id}`, payload.data))
        } catch (err) {
            onFailure(err)
        }
    }

//lay tat ca ket qua dang ky hoc
    async getAllResultRegister(onSuccess, onFailure, data) {
        try {
            onSuccess(await httpHandler.get('admin/resullt',data ))
        } catch (err) {
            onFailure(err)
        }
    }

   //lay danh sach giang vien
    async getListTeacher(onSuccess, onFailure) {
        try {
            onSuccess(await httpHandler.get('teachers',))
        } catch (err) {
            onFailure(err)
        }
    }

     //lay danh sach mon hoc
    async getListSubject(onSuccess, onFailure) {
        try {
            onSuccess(await httpHandler.get('subjects',))
        } catch (err) {
            onFailure(err)
        }
    }
     //lay danh sach phong hoc
    async getListRoom(onSuccess, onFailure) {
        try {
            onSuccess(await httpHandler.get('rooms',))
        } catch (err) {
            onFailure(err)
        }
    }

}

const singletonInstance = new AdminService()
Object.freeze(singletonInstance)
export default singletonInstance