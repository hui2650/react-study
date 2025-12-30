interface Student {
  name: string;
  age: number;
  introduce(): void;
}

const taehui: Student = {
  name: "태희",
  age: 23,
  introduce: () => console.log("나는 태희"),
};

interface Product {
  id: number;
  name: string;
  price: number;
}

type DeliveryMethod = "택배" | "방문수령" | "새벽배송";

interface ProductDetail extends Product {
  description: string;
  delivery: DeliveryMethod;
  stock: number;
}

const myProduct: ProductDetail = {
  id: 1,
  name: "초대형거인 피규어",
  price: 5000,
  description: "한정판매",
  delivery: "새벽배송",
  stock: 50,
};
