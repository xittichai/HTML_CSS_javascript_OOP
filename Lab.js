class UserTemplate {

    constructor(name, password, age) {
        this.name = name
        this.password = password
        this.age = age
        this.connected = false

        //เพิ่ม property- เก็บข้อมูลวันที่สร้าง user ในระบบ
        let d = new Date()
        this.CreatedDate = d.getTime()
    }

    login() {
        this.connected = true
        console.log('your login status :', this.connected)
    }

    //เพิ่ม method logout - ต้องเปลี่ยนตัวแปร connected - ถ้า login ให้ conneted = true - ถ้า logout ให้ conneted = false
    logout() {
        if (this.connected == false) {
            this.connected = true
        } else {
            this.connected = false
        }
    }
    //เพิ่ม method checkStatus - เพื่อบอกว่ายัง login อยู่หรือไม่?
                  //เพิ่ม method checkStatus - เพื่อบอกว่ายัง login อยู่หรือไม่?
    checkStatus() {
        console.log('your login status :', this.connected)
    }
}

let Sittichai = new UserTemplate("Sittichai", "1234", 46)

Sittichai.checkStatus()
Sittichai.logout()
Sittichai.checkStatus()