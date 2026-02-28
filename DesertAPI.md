# ☕🍰 Mini Café Dessert API

โจทย์นี้เป็นระบบ Backend ขนาดเล็ก สำหรับใช้สอนหรือฝึกเขียน REST API
เน้นพื้นฐาน **Authentication, Role, CRUD และ Owner Check**

---

## 🎯 Objective

* เข้าใจโครงสร้าง REST API
* ใช้ JWT Authentication
* แยกสิทธิ์ User / Admin
* ฝึก CRUD พื้นฐาน

---

## 🔐 Authentication

| Method | Endpoint         | Description | Role   |
| ------ | ---------------- | ----------- | ------ |
| POST   | `/auth/register` | สมัครสมาชิก | Public |
| POST   | `/auth/login`    | เข้าสู่ระบบ | Public |

---

## 👤 User

| Method | Endpoint    | Description       | Role |
| ------ | ----------- | ----------------- | ---- |
| GET    | `/users/me` | ดูข้อมูลตัวเอง    | User |
| PUT    | `/users/me` | แก้ไขข้อมูลตัวเอง | User |

---

## 🍰 Desserts (เมนูขนม)

| Method | Endpoint        | Description      | Role  |
| ------ | --------------- | ---------------- | ----- |
| GET    | `/desserts`     | ดูเมนูขนมทั้งหมด | User  |
| POST   | `/desserts`     | เพิ่มเมนูขนม     | Admin |
| DELETE | `/desserts/:id` | ลบเมนูขนม        | Admin |

**Dessert Model (ตัวอย่าง)**

```json
{
  "id": 1,
  "name": "Chocolate Cake",
  "price": 120,
  "category": "cake"
}
```

---

## ⭐ Reviews

| Method | Endpoint       | Description      | Role |
| ------ | -------------- | ---------------- | ---- |
| POST   | `/reviews`     | รีวิวขนม         | User |
| GET    | `/reviews/my`  | ดูรีวิวของตัวเอง | User |
| DELETE | `/reviews/:id` | ลบรีวิวของตัวเอง | User |

**Review Model (ตัวอย่าง)**

```json
{
  "id": 1,
  "rating": 5,
  "comment": "อร่อยมาก",
  "userId": 3,
  "dessertId": 1
}
```

---

## 🔒 Business Rules

* User ต้อง login ถึงจะรีวิวได้
* User ลบได้เฉพาะรีวิวของตัวเอง
* Admin เท่านั้นที่เพิ่ม / ลบเมนูขนมได้
* Dessert 1 เมนู มีรีวิวได้หลายรายการ

---

## 💡 Discussion Questions

* User รีวิวเมนูเดิมซ้ำได้หรือไม่?
* ถ้าไม่ login แล้วเรียก protected route จะเกิดอะไร?
* ถ้าลบ dessert ควรลบ review ที่เกี่ยวข้องหรือไม่?

---

## ✅ Stack (แนะนำ)

* Node.js + Express
* JWT
* Prisma / Sequelize
* MySQL / PostgreSQL

---

> ใช้โจทย์นี้เพื่อฝึกออกแบบ API และเขียน Backend พื้นฐาน
> สามารถขยายต่อเป็น Order หรือ Favorite ได้ในภายหลัง ☕🍩
